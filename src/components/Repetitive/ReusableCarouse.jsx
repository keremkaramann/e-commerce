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
          <div>
            <img src={path} alt={`card ${index + 1}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ReusableSwiper;
