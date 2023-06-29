import AboutSection from "../../components/shared/AboutSection/AboutSection";
import SectionHeading from "../../components/shared/SectionHeading/SectionHeading";
import ServiceSection from "../../components/shared/ServiceSection/ServiceSection";

const Home = () => {
  return (
    <div className="px-20">
      <SectionHeading
        mainTitle="about"
        subTitle="about me"
        headingDescription="MERN Developer"
      />
      <div className="z-10 relative mt-6">
        <AboutSection />
      </div>
      <div className="my-60">
        <SectionHeading
          mainTitle="services"
          subTitle="my services"
          headingDescription="here are some of my skills"
        />
        <div className="z-10 relative mt-6">
          <ServiceSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
