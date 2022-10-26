import styles from '../../../styles/home.module.scss';
import Image from 'next/image';
import Head from 'next/head';

import logoImg from '../../../public/logo.svg';

import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

import Link from 'next/link';

export default function SignUp() {
    return (
        <>
            <Head>
                <title>Create account now</title>
            </Head>
            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="logo pizza fast" />
                <div className={styles.login}>
                    <h1>Create your account</h1>
                    <form>

                        <Input
                            placeholder='Type your name'
                            type='text'
                        />
                        <Input
                            placeholder='Type your e-mail'
                            type='text'
                        />
                        <Input
                            placeholder='Type your password'
                            type='password'
                        />
                        <Button
                            type="submit"
                            loading={false}
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
