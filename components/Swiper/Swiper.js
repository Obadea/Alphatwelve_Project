import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Swiper.css';
import { Card, CardFooter, Image } from '@nextui-org/react';
const ImgSwiper = () => {
  // Custom pagination
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=" ${className} w-3 h-1 rounded-md bg-white dark:bg-[#8576ff]"></span>`;
    },
  };

  return (
    <div className="swiper-container w-fit">
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect="fade" // Apply fade effect
        loop={true} // Loop through slides
        pagination={pagination}
        navigation={true} // Show next/prev buttons
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3 seconds
        fadeEffect={{ crossFade: true }} // Enable cross fade for smooth transition
        className="z-0"
      >
        <SwiperSlide>
          <Card
            className="w-full h-[320px] midxl:h-[500px] laptopmd:h-auto bg-transparent  mobile:h-[300px] "
            radius="lg"
            shadow="none"
          >
            <Image
              removeWrapper
              alt="woman standing"
              radius="lg"
              className="z-0 w-full h-full object-cover bg-transparent"
              src="../Slide.png"
            />
            <CardFooter className="absolute bg-gradient-to-t from-black/80 to-transparent bottom-0 z-10 text-xs flex-col items-start gap-3 pb-4 text-white mobile:text-[11px]">
              <p className="font-semibold">Latest News & Updates</p>
              <p>
                Turpis interdum nunc varius ornare dignissim pretium. Massa
                ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                Fringilla purus, erat fringilla tincidunt quisque non.
                Pellentesque in ut tellus.
              </p>
            </CardFooter>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            isFooterBlurred
            className="w-full h-[320px] bg-transparent midxl:h-[500px] laptopmd:h-auto  mobile:h-[300px]"
            radius="lg"
            shadow="none"
          >
            <Image
              removeWrapper
              alt="woman standing"
              radius="lg"
              className="z-0 w-full h-full object-cover bg-transparent"
              src="../Slide-1.png"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 text-xs flex-col items-start gap-3 pb-4 text-white mobile:text-[11px]">
              <p className="font-semibold">Latest News & Updates (Blurred)</p>
              <p>
                Turpis interdum nunc varius ornare dignissim pretium. Massa
                ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                Fringilla purus, erat fringilla tincidunt quisque non.
                Pellentesque in ut tellus.
              </p>
            </CardFooter>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            className="w-full h-[320px] bg-transparent midxl:h-[500px] laptopmd:h-auto  mobile:h-[300px]"
            radius="lg"
            shadow="none"
          >
            <Image
              removeWrapper
              alt="woman standing"
              radius="lg"
              className="z-0 w-full h-full object-cover bg-transparent"
              src="../Slide-2.png"
            />
            <CardFooter className="absolute bg-gradient-to-t from-black/80 to-transparent bottom-0 z-10 text-xs mobile:text-[11px] flex-col items-start gap-3 pb-4 text-white">
              <p className="font-semibold mobile:font-medium">
                Latest News & Updates (Gradient)
              </p>
              <p>
                Turpis interdum nunc varius ornare dignissim pretium. Massa
                ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                Fringilla purus, erat fringilla tincidunt quisque non.
                Pellentesque in ut tellus.
              </p>
            </CardFooter>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImgSwiper;
