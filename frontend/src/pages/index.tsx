import styles from '../../styles/home.module.scss';
import Image from 'next/image';
import Head from 'next/head';

import logoImg from '../../public/logo.svg';

import { Input } from '../components/ui/input'


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
          </form>
        </div>
      </div>
    </>
  )
}
