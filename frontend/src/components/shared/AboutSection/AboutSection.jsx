// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import MyImg1 from "../../../assets/image1.jpeg";
import MyImg2 from "../../../assets/image2.jpg";
import MyImg3 from "../../../assets/image3.png";
import { Link } from "react-router-dom";
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
            <img
              className="w-[500px] h-[600px] object-cover rounded-md"
              src={MyImg1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[500px] h-[600px] object-cover rounded-md"
              src={MyImg2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[500px] h-[600px] object-cover rounded-md"
              src={MyImg3}
            />
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
              Welcome to my portfolio website. <br />
              A web developer from Gopalganj,Dhaka,Bangladesh. With a strong
              academic background and a passion for crafting innovative
              solutions, I'm dedicated to creating user-friendly applications.
              <br />
              <br />
              My web development journey began in June 2022, enhanced by
              self-learning and completing the Programming Hero course. I strive
              for continuous growth, balancing dedication with self-care.
              <br />
              <br />
              This portfolio showcases my skills, projects, and growth as a web
              developer. Join me on this exciting journey of innovation and
              creativity.
            </p>
            <div className="mt-4">
              <div className="flex gap-2">
                <Link
                  className="bg-yellow-400 p-2 rounded-full"
                  to="https://github.com/BulbulAhmed10"
                  target="_blank">
                  <FiGithub className="text-xl" />
                </Link>
                <Link
                  className="bg-yellow-400 p-2 rounded-full"
                  to="https://www.linkedin.com/in/bulbul-ahmed10/"
                  target="_blank">
                  <FiLinkedin className="text-xl" />
                </Link>
              </div>
              <div className="mt-4 ">
                <button className="border border-yellow-400 px-4 py-2 font-carla uppercase tracking-wider text-[#5b5757] text-sm hover:bg-yellow-400 hover:text-black duration-300 rounded-sm ">
                  Contact me!
                </button>
                <button className="border border-yellow-400 px-4 py-2 font-carla uppercase tracking-wider text-[#5b5757] text-sm hover:bg-yellow-400 hover:text-black duration-300 rounded-sm ml-4">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
