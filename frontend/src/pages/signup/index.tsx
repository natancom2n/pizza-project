import { FormEvent, useState, useContext } from 'react';

import styles from '../../../styles/home.module.scss';
import Image from 'next/image';
import Head from 'next/head';

import logoImg from '../../../public/logo.svg';

import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

import Link from 'next/link';

export default function SignUp() {
    const { signUp } = useContext(AuthContext);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleSignUp(event: FormEvent) {
        event.preventDefault();

        if (name === '' || email === '' || password === '') {

            toast.error("Preencha todos os campos")
            // alert("Preencha todos os campos")
            return;
        }

        setLoading(true);

        let data = {
            name,
            email,
            password
        }
        await signUp(data);

        setLoading(false);

    }
    return (
        <>
            <Head>
                <title>Create account now</title>
            </Head>
            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="logo pizza fast" />
                <div className={styles.login}>
                    <h1>Create your account</h1>
                    <form onSubmit={handleSignUp}>

                        <Input
                            placeholder='Type your name'
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            placeholder='Type your e-mail'
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            placeholder='Type your password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            loading={loading}
                        >Sing Up
                        </Button>
                    </form>
                    <Link href="/">
                        <a className={styles.text}>Login whit your account</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
