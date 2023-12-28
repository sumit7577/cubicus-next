"use client";

import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleHero from "./singleHero";
import HeroData from "./heroData";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="mx-auto md:px-8 2xl:px-0">
          <div
          >
            {/* <!-- Slider main container --> */}
            <div className="swiper testimonial-01">
              {/* <!-- Additional required wrapper --> */}
              <Swiper
                navigation={true}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Navigation]}
              >
                {HeroData.map((hero, index) => (
                  <SwiperSlide key={index}>
                    <SingleHero hero={hero} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
