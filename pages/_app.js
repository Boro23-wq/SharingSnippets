import '../styles/global.css';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from '@auth0/nextjs-auth0';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UserProvider>
        <div className='w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-700' />
        <div className='bg-blue-100 w-full p-10 min-h-screen'>
          <Navbar />
          <div className='max-w-2xl mx-auto'>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
