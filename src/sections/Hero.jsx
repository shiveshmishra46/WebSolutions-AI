// ------------Main------------
import { words } from "../constants"
import Button from "../components/Button"
//import FloatingSummary from "../components/FloatingSummary"

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import HeroExperience from "../components/models/HeroModels/HeroExperience.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";


const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text h1',
      {
        y: 50,
        opacity: 0
      },
      {
        y: 20,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut'
      },
    )
  })

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background"/>
      </div>
      <div className="hero-layout">
        {/*LEFT: HERO CONTENT*/}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shivesh
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span key={word.text} className="flex items-center md:gap-1 gap-1 pb-2">
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-6 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>
                          {word.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Problem Solver &</h1>
              <h1>Full-Stack Developer</h1>
            </div>
          
          {/* Hidden paragraph for SEO */}
          {/* <p className="sr-only">
            Hi, I'm Shivesh, a developer based in Greater Noida with a passion for code. 
            Equipped with a Problem-Solving and Competitive-Programming mindset. 
            I approach complex issues with Algorithmic precision and make creative solutions. 
            I specialized in Full-Stack Development with expertise in ReactJS, NodeJS, and modern web technologies. 
            I turn ideas into interactive experiences. The website shouldn't just exist, it should perform.
          </p> */}
          
          {/* Add the floating summary component */}
          {<FloatingSummary />}
          
          <Button
            className="md:w-80 md:h-16 w-60 h-12"
            id="button"
            text="See my Work."
          />
          </div>
        </header>
        {/*RIGHT: 3D MODEL*/}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  )
}

export default Hero
// ----------------Main----------------