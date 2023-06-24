import { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import image1 from "../assests/images/image1.jpg";
import image2 from "../assests/images/image2.jpg";
import image3 from "../assests/images/image3.jpg";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function Slider() {
  const [sliderPictures, setSliderPictures] = useState(null);

  useEffect(() => {
    setSliderPictures(image1);
  }, []);

  return (
    sliderPictures && (
      <>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="mb-6 -z-10"
        >
          <SwiperSlide>
            <div name='inicio'
              style={{
                background: `url(${image1}) center no-repeat`,
                backgroundSize: "cover",
                minHeight: "12rem",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${image2}) center no-repeat`,
                backgroundSize: "cover",
                minHeight: "12rem",
              }}
            ></div>kjb
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${image3}) center no-repeat`,
                backgroundSize: "cover",
                minHeight: "12rem",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </>
    )
  );
}
export default Slider;
