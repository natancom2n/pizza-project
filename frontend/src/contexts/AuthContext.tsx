import { createContext, ReactNode, useState } from 'react';

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
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
type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user; //when the user is login is true, when not is false ( !! change de variable for boolen)

    async function signIn({ email, password }: SignInProps) {
        // alert('Clicou no Login')
        console.log("Login: ", email)
        console.log("senha", password)


    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}