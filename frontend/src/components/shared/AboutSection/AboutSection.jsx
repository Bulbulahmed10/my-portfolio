// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

import MyImg1 from "../../../assets/image1.jpeg";
import MyImg2 from "../../../assets/image2.jpg";
import MyImg3 from "../../../assets/image3.png";
const AboutSection = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            <img className="w-[500px] h-[600px] object-cover" src={MyImg1} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[500px] h-[600px] object-cover" src={MyImg2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[500px] h-[600px] object-cover" src={MyImg3} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <p className="text-[50px] font-playFair">
          I'm <br /> BulBul Ahmed
        </p>
        <div className="relative pl-16 mt-6">
          <div className="absolute left-8">
            <p className="font-carla uppercase tracking-[16px] text-sm rotate-90 relative origin-top-left">
              about
            </p>
            <p className="absolute rotate-90 mt-[132px] -ml-[43px] bg-black w-16 h-[1px] "></p>
          </div>
          <div>
            <p className="font-carla text-[#5b5757]">
              Welcome to my portfolio website. <br /> I'm Mohammad Bulbul Molla,
              a web developer from Dhaka,Bangladesh. With a strong academic
              background, including studies at Khulna Government Commerce
              College and currently pursuing a Bachelor of Arts at National
              University. <br /> <br />
              I'm passionate about crafting innovative solutions. My web
              development journey began in June 2022, complemented by
              self-learning and completing the Programming Hero course. I'm
              driven by the opportunity to create user-friendly applications
              that cater to people's needs. Balancing dedication with self-care,
              I continuously strive for professional and personal growth. <br />
              <br /> This portfolio showcases my skills, projects, and growth as
              a web developer. Join me on this exciting journey of innovation
              and creativity. Feel free to adapt and incorporate this condensed
              version into your portfolio website while maintaining its essence
              and capturing your unique style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
