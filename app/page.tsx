import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Rules from "@/components/Rules";
import Judge from "@/components/Judge";
import Faq from "@/components/Faq";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Rules />
      <Judge />
      <Faq />
      <Timeline />
    </div>
  );
}
