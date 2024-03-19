import Calendar from "./calendar/Calendar";
import Hero from "./hero/Hero";
import HeroSection from "./hero/HeroSection";
import Card from "./lists/Card";
import DescriptionList from "./lists/DescriptionList";
import FlyoutMenu from "./menu/FlyoutMenu";
import Pricing from "./pricing/Pricing";
import OutTeam from "./team/OutTeam";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 my-4">
      <Hero />
      <HeroSection />
      <Pricing />
      <OutTeam />

      <DescriptionList />
      <Card />
      <Calendar />
    </div>
  );
}
