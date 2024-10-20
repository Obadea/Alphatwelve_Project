'use client';

import Cards from '@/components/Cards/Cards';
// import Chart from '@/components/Chart/Chart';
// import ImgSwiper from '@/components/Swiper/Swiper';
import Table from '@/components/Table/Table';
import dynamic from 'next/dynamic';

const ImgSwiper = dynamic(() => import('@/components/Swiper/Swiper'), {
  ssr: false,
});
const Chart = dynamic(() => import('@/components/Chart/Chart'), {
  ssr: false,
});

const page = () => {
  return (
    <div className="home-container">
      <h1 className="text-2xl ">Welcome! here’s your summary</h1>
      {/* Note: cards */}
      <Cards />
      {/* Chart and swipper */}
      <p className="mt-5 font-medium text-lg">Event Registrations per month</p>
      <div className="char_swipper-container transition-all duration-600">
        <div className="w-[530px] h-[320px] transition-all duration-500 p-5 rounded-md border border-primary-nav/10 dark:bg-primary-nav overflow-hidden">
          <Chart />
        </div>
        <div className="w-fit">
          <ImgSwiper />
        </div>
      </div>
      <p className="mt-5 font-medium text-lg">Event History</p>
      <Table />
    </div>
  );
};

export default page;
