import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Contact from "../components/shared/Contact/Contact";
import Footer from "../components/shared/Footer/Footer";
import SectionHeading from "../components/shared/SectionHeading/SectionHeading";

const Main = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 overflow-x-hidden ">
      <Header />
      <div>
        <Outlet />
      </div>
      <div className="md:px-10">
        <SectionHeading
          mainTitle="Contact"
          subTitle="Contact Me"
          headingDescription="Feel free to contact me"
        />
        <div className="z-10 relative mt-6">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
