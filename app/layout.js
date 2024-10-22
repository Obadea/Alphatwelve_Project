import localFont from 'next/font/local';
import './globals.css';
import NavBar from '../components/NavBar/NavBar';
import MobileNav from '@/components/MobileNav/MobileNav';
import MobileButtomNav from '@/components/MobileButtomNav/MobileButtomNav';

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
        className={`${geistSans.variable} antialiased app-layout dark:bg-customDark`}
      >
        {/* Nav for tablet and laptop */}
        <div className="h-lvh mobile:hidden">
          <NavBar />
        </div>

        {/* Navbar for mobile */}
        <div className="hidden mobile:block">
          <MobileNav />
        </div>
        <div className="h-lvh overflow-y-scroll mobile:scrollbar-hide mobile:overflow-auto mobile:pb-20 mobile:h-[89lvh]">
          {children}
          <div className="hidden mobile:block mobile:fixed bottom-0 w-full">
            <MobileButtomNav />
          </div>
        </div>
      </body>
    </html>
  );
}
