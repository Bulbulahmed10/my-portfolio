import AboutSection from "../../components/shared/AboutSection/AboutSection";
import SectionHeading from "../../components/shared/SectionHeading/SectionHeading";
import ServiceSection from "../../components/shared/ServiceSection/ServiceSection";
import WorkSection from "../../components/shared/WorkSection/WorkSection";

const Home = () => {
  return (
    <div className="md:px-10 lg:px-20">
      <SectionHeading mainTitle="about" subTitle="" headingDescription="" />
      <div className="z-10 relative mt-6">
        <AboutSection />
      </div>
      <div className="my-24 md:my-40 lg:my-60">
        <SectionHeading
          mainTitle="services"
          subTitle="my services"
          headingDescription="here are some of my skills"
        />
        <div className="z-10 relative mt-6">
          <ServiceSection />
        </div>
      </div>
      <div className="my-24 md:my-40 lg:my-60">
        <SectionHeading
          mainTitle="Works"
          subTitle="Done projects"
          headingDescription="here are some of my Best Projects"
        />
        <div className="z-10 relative mt-6">
          <WorkSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
