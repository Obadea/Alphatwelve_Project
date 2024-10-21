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