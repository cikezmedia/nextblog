import Navbar from '@/navbar/Navbar';
import './globals.css';
import { Inter, Hind_Madurai } from 'next/font/google';
import Footer from '@/footer/Footer';
import { ThemeProvider } from 'context/ThemeContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const hind = Hind_Madurai({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-hind',
});

export const metadata = {
  title: 'Welcome to Folio Digitals Inc.',
  description: 'Your #1 digital folio management',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${hind.variable}`}>
        <ThemeProvider>
          <div className='container'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
