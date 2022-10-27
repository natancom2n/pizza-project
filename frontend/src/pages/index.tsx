import { useContext, FormEvent, useState } from 'react';

import styles from '../../styles/home.module.scss';
import Image from 'next/image';
import Head from 'next/head';

import logoImg from '../../public/logo.svg';

import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

import { AuthContext } from '../contexts/AuthContext';

import Link from 'next/link';

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);



  //login
  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    let data = {
      // email: "teste@teste.com", //just test
      // password: "123123"//only test

      email, password

    }
    await signIn(data)
  }

  return (
    <>
      <Head>
        <title>Sujeito Pizza - Make your login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="logo pizza fast" />
        <div className={styles.login}>
          <form onSubmit={handleLogin}>

            <Input
              placeholder='Type your e-mail'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)} //pass exactly what type in the input
            />
            <Input
              placeholder='Type your password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} //pass exactly what type in the input
            />
            <Button
              type="submit"
              loading={false}
            >Acessar
            </Button>
          </form>
          <Link href="/signup">
            <a className={styles.text}>Don't have account? Create a new accont.</a>
          </Link>
        </div>
      </div>
    </>
  )
}
