import { createContext, ReactNode, useState } from 'react';
import { destroyCookie, setCookie, parseCookies } from 'nookies';
import Router from 'next/router'
import { api } from '../services/apiCliente';

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
    signUp: (credentials: SignUpProps) => Promise<void>;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
}

type SignInProps = {
    email: string;
    password: string;
}

type SignUpProps = {
    name: string;
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

//function for log out the user
export function signOut() {
    try {
        destroyCookie(undefined, '@pizzafast.token')
        Router.push('/')
    } catch {
        console.log('Log out error')
    }
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user; //when the user is login is true, when not is false ( !! change de variable for boolen)

    //recived the e-mail and password of inputs ###################################
    async function signIn({ email, password }: SignInProps) {
        // alert('Clicou no Login')
        // console.log("Login: ", email)
        // console.log("senha", password)
        try {
            const response = await api.post('/session', {
                email,
                password

            })
            // console.log(response.data);
            const { id, name, token } = response.data;

            setCookie(undefined, '@pizzafast.token', token, {
                //time expire the cokie
                masAge: 60 * 60 * 24 * 30, // 1 month
                path: "/" //what path cokie get access

            })
            setUser({
                id,
                name,
                email
            })

            //sendo the token for next requests
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            //redirect the user to /dashbord
            Router.push('/dashboard')

        } catch (err) {
            console.log('Error of access ', err)
        }
    }// end signUp  #######################################

    async function signUp({ name, email, password }: SignUpProps) {
        // console.log(name) // just test
        try {

            //look in the Imsonia
            const response = await api.post('/users', {
                name,
                email,
                password
            })

            console.log("Cadastro com Sucesso")

            //after the account create, send the login page
            Router.push('/');


        } catch (err) {
            console.log("Erro: ", err)
        }

    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}