import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Example() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };
  /* className="w-[43%]" */

  return (
    <div className="xs:max-w-[320px] xs:w-full middle:max-w-[510px] w-full">
      <Swiper
        modules={[Virtual, Navigation, Pagination, EffectFade]}
        onSwiper={setSwiperRef}
        effect={"fade"}
        slidesPerView={1}
        centeredSlides={true}
        navigation={true}
        virtual
        spaceBetween={10}
      >
        <SwiperSlide>
          <img src="/src/assets/product/carousel-item.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/product/carousel-inner.png" alt="" />
        </SwiperSlide>
      </Swiper>

      <p className="append-buttons mt-4">
        <button onClick={() => slideTo(0)} className="prepend-2-slides mr-4">
          <img src="/src/assets/product/single-product-1-thumb-1.jpg" alt="" />
        </button>
        <button onClick={() => slideTo(2)} className="prepend-slide">
          <img src="/src/assets/product/single-product-1-thumb-2.jpg" alt="" />
        </button>
      </p>
    </div>
  );
}
