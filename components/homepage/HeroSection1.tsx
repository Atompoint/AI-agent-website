// app/components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import ShinyText from '@/components/ui/ShinyText';
import { ShineBorder } from "@/components/magicui/shine-border";

export default function Hero() {
  return (




// main contnent container
    <section className="relative container mx-auto px-6 py-16 flex flex-col items-center text-center">
       <div
        className="subtext1 h-[33px] px-3 lg:px-6 flex items-center justify-center rounded-full  mb-4 lg:mb-6"
        style={{
          border: '1px solid #FFFFFF12',
          backdropFilter: 'blur(3px)',
          background: '#FFFFFF08',
          lineHeight: 1.6,
          letterSpacing: 0.4,
        }}
      >
        Tired of Watching 67% of Your Website Visitors Leave Without Buying?
      </div>

      {/* Hero Title */}
      <div className="animate-fadeIn delay-100">
      <div
        className="relative z-10 mb-4 lg:mb-6"
        style={{
          fontFamily: 'Radio Grotesk',
          fontWeight: 400,
          fontSize: 'clamp(16px, 5vw, 52px)',
          lineHeight: '0.8',
          letterSpacing: '0%',
        
          color: 'transparent',
          background: 'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <div>
          <ShinyText text="World's First" speed={5} className="gradient-white-text" />
          {' '}
          <ShinyText text="Smart Voice AI" speed={5} className="gradient-mask-text" />
          {' '}
          <ShinyText text="Agent That" speed={5} className="gradient-white-text" />
        </div>
        <div>
          <ShinyText text="Actually TALKS to Your Website Visitors &" speed={5} className="gradient-white-text" />
        </div>
        <div>
          <ShinyText text="Guides Them to Buy... While You Sleep!" speed={5} className="gradient-white-text" />
        </div>
      </div>   
      </div>

      {/* Paragraph */}
      <div className="mt-6 animate-fadeIn delay-200 max-w-2xl">
      <p className="subtext1 w-full px-5 lg:w-[760px] leading-[1.4] sm:leading-[1.5] md:leading-[1.6] mb-8 md:mb-12">
        Just Paste One Line of Code & Watch This Revolutionary AI Turn Your Silent Website Into A 24/7 Sales Machine That Answers Questions, Overcomes Objections & Converts Visitors Into Paying Customers—Instantly!
      </p>
      </div>


      {/* Hero Image */}
      <div className="relative mt-12 animate-fadeIn delay-400">
        <div className="relative max-w-4xl mx-auto">
          <Image
            src="/assets/images/main1.png"
            alt="App Screenshot"
            width={1200}
            height={800}
            className="rounded-xl shadow-2xl"
          />
           
              {/* Glow behind Main1 */}
              <div className="absolute  w-full -translate-y-[24%]">
                <Image
                  src="/assets/images/glow1.png"
                  width={1200}
                  height={900}
                  alt="glow effect"
                  className="object-contain w-full sm:max-w-[400px] md:max-w-[600px] lg:max-w-[870px]"
                  priority
                />
              </div>
          
              {/* Main1 Image */}
              <div className="relative w-full "> {/* Slightly bigger */}
                <ShineBorder
                  borderWidth={2}
                  duration={23}
                  shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                />
                <Image
                  src="/assets/images/main1.png"
                  alt="main image"
                  width={1500}  // Increased to 1500px
                  height={1500} // Increased to 1500px
                  className="w-full h-auto object-contain rounded-md lg:rounded-2xl relative z-80 "
                  priority
                />
              </div>
          {/* Circle Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673c8790c213543ea74788a0_Red%20Circle%20No%20Glow.png"
              alt="Circle"
              width={800}
              height={800}
              className="absolute -z-10 opacity-90"
            />
            <Image
              src="https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673c87ad03ca3526725241f9_Red%20Glow.png"
              alt="Red Glow"
              width={800}
              height={800}
              className="absolute -z-20 opacity-40"
            />
            <Image
              src="https://cdn.prod.website-files.com/673c8623b53e085c22dcde7d/673c878ff9abee9c378d3e76_Glow.png"
              alt="White Glow"
              width={800}
              height={800}
              className="absolute -z-30 opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



