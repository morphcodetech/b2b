import Hero from "../components/Hero";
import PropertiesByArea from "../components/PropertiesByArea";
import LatestProperties from "../components/LatestProperties";
import PropertiesForRent from "../components/PropertiesForRent";
import RealEstateAgents from "../components/RealEstateAgents";
import ContactCTA from "../components/ContactCTA";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <PropertiesByArea />
      <LatestProperties />
      <PropertiesForRent />
      <RealEstateAgents />
      <ContactCTA />

    </div>
  );
};

export default Home;