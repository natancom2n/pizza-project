import '../../styles/globals.scss';
import { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} /> {/* automatic close in 3000 miliseconds */}
    </AuthProvider>
  )
}

export default MyApp
