import styles from '../../styles/home.module.scss';
import Image from 'next/image';
import Head from 'next/head';

import logoImg from '../../public/logo.svg';

import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sujeito Pizza - Make your login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="logo pizza fast" />
        <div className={styles.login}>
          <form>

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
            >Acessar
            </Button>
          </form>
          <a className={styles.text}>Don't have account? Create a new accont.</a>
        </div>
      </div>
    </>
  )
}
