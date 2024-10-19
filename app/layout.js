import localFont from 'next/font/local';
import './globals.css';
import NavBar from '@/components/NavBar/NavBar';

const geistSans = localFont({
  src: './fonts/Inter-VariableFont_opsz,wght.ttf',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata = {
  title: 'Alphatwelve App',
  description: 'An event management dashboard create with next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased app-layout dark:bg-[#383544]`}
      >
        <div className="h-lvh">
          <NavBar />
        </div>
        <div className="h-lvh overflow-y-scroll">{children}</div>
      </body>
    </html>
  );
}
