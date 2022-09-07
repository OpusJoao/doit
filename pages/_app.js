import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { React } from 'react'
import { TodoProvider } from '../lib/TodoContext';

function MyApp({ Component, pageProps }) {
  return <>
    <TodoProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </TodoProvider>
  </>
}

export default MyApp
