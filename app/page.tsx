import HeroSection from "@/components/homepage/HeroSection"
import Section01 from '@/components/homepage/section/Section01'

import Section02 from "@/components/homepage/section/Section02";
import Section03 from '@/components/homepage/section/Section03'
import Section04 from "@/components/homepage/section/Section04";
import Section05 from "@/components/homepage/section/Section05";
import Section06 from "@/components/homepage/section/Section06";
import Section07 from "@/components/homepage/section/Section07";
import Section08 from "@/components/homepage/section/Section08";
import Section09 from '@/components/homepage/section/Section09';
import Section10 from "@/components/homepage/section/Section10";
import Section11 from "@/components/homepage/section/Section11";
import Section12 from '@/components/homepage/section/Section12'
import Section13 from "@/components/homepage/section/Section13";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
   <div className="w-full overflow-hidden">
      <HeroSection/>

      <Section01/>
      <Section02/>
      <Section03/>
      <Section04/>
      <Section05/>
      <Section06/>
      <Section07/>
      <Section08/>
      <Section09/>
      <Section10/>
      <Section11/>
      <Section12/>
      <Section13/>
    <Footer/>
   </div>
  );
}
