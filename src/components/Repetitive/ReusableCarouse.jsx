import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, EffectCube } from "swiper/modules";

function ReusableSwiper({ imagePaths }) {
  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay, EffectCube]}
      className="mySwiper"
    >
      {imagePaths.map((path, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            <img
              src={path}
              alt={`card ${index + 1}`}
              className=" xs:object-cover xs:h-screen mdCstm:h-auto"
            />
            <div className="text-white absolute z-50 xs:top-[34%] mdCstm:top-[25%] xs:left-10 mdCstm:left-36 xs:text-center mdCstm:text-left">
              <h5 className="text-bold text-base xs:mb-3 mdCstm:mb-8">
                SUMMER 2020
              </h5>
              <h1 className="xs:text-[2rem] mdCstm:text-[3.6rem] text-bold xs:mb-[3.5rem] mdCstm:mb-8">
                NEW COLLECTION
              </h1>
              <p className="text-[#FAFAFA] text-xl xs:mb-3 mdCstm:mb-6">
                We know how large objects will act, <br /> but things on a small
                scale.
              </p>
              <button className="px-3 py-4 bg-success-color font-bold text-2xl">
                SHOP NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ReusableSwiper;
