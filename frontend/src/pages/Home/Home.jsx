import AboutSection from "../../components/shared/AboutSection/AboutSection";
import SectionHeading from "../../components/shared/SectionHeading/SectionHeading";

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
    </div>
  );
};

export default Home;
