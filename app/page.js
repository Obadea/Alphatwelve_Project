'use client';

import ImgSwiper from '../components/Swiper/Swiper';
import Table from '../components/Table/Table';
import Cards from '../components/Cards/Cards';
import dynamic from 'next/dynamic';
import MobileTable from '@/components/MobileTable/MobileTable';

const Chart = dynamic(() => import('../components/Chart/Chart'), {
  ssr: false, // Disable SSR
});

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="text-2xl mobile:text-lg font-normal">
        Welcome! here’s your summary
      </h1>

      <Cards />

      <p className="mt-5 font-medium text-lg mobile:font-medium">
        Event Registrations per month
      </p>
      <div className="char_swipper-container transition-all duration-600 midxl:flex-col">
        <div className="w-[530px] h-[320px] transition-all duration-500 p-5 rounded-md border border-primary-nav/10 dark:bg-primary-nav overflow-hidden midxl:w-full mobile:py-2 mobile:px-0">
          <Chart />
        </div>
        <div className="w-fit">
          <ImgSwiper />
        </div>
      </div>
      <p className="mt-5 font-medium text-lg">Event History</p>
      {/* Big screen table */}
      <div className="mobile:hidden">
        <Table />
      </div>
      {/* Mobile screen table */}
      <div className="hidden mobile:block">
        <MobileTable />
      </div>
    </div>
  );
}

// <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//     <Image
//       className="dark:invert"
//       src="https://nextjs.org/icons/next.svg"
//       alt="Next.js logo"
//       width={180}
//       height={38}
//       priority
//     />
//     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//       <li className="mb-2">
//         Get started by editing{' '}
//         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//           app/page.js
//         </code>
//         .
//       </li>
//       <li>Save and see your changes instantly.</li>
//     </ol>

//     <div className="flex gap-4 items-center flex-col sm:flex-row">
//       <a
//         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Image
//           className="dark:invert"
//           src="https://nextjs.org/icons/vercel.svg"
//           alt="Vercel logomark"
//           width={20}
//           height={20}
//         />
//         Deploy now
//       </a>
//       <a
//         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Read our docs
//       </a>
//     </div>
//   </main>
//   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//     <a
//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="https://nextjs.org/icons/file.svg"
//         alt="File icon"
//         width={16}
//         height={16}
//       />
//       Learn
//     </a>
//     <a
//       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         aria-hidden
//         src="https://nextjs.org/icons/window.svg"
//         alt="Window icon"
//         width={16}
//         height={16}
//       />
//       Examples
//     </a>
//     <NavBar />
//   </footer>
// </div>
