import CarouselComponent from "./components/CarouselComponent";
import Gallery from "./components/Gallery/Gallery";
import Event from "./components/Event/Event";
import EventComponent from "./components/EventComponent";
import { FaRegHeart } from "react-icons/fa";
import OurStory from "./components/story/OurStory";
import Map from "./components/Map";
import Story from "./components/story/Story";
import EventAnnounce from "./components/story/EventAnnounce";
const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <OurStory />
      <Story />
      <EventAnnounce />
      <EventComponent targetDate={"October 26, 2025 09:00:00"} />
      <Gallery />
      <Event />
      <Map />
    </div>
  );
};

export default Home;
