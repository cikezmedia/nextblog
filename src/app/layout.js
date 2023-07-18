import Navbar from '@/navbar/Navbar';
import './globals.css';
import { Inter, Hind_Madurai } from 'next/font/google';
import Footer from '@/footer/Footer';
import Providers from './Providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const hind = Hind_Madurai({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-hind',
});

export const metadata = {
  title: 'Welcome to Folio Digitals Inc.',
  description: 'Your #1 digital folio management',
  icons: {
    icon: { url: '/favicon.ico', type: 'image/ico' },
    shortcut: { url: '/favicon.ico', type: 'image/ico' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${hind.variable}`}>
        <Providers>
          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
