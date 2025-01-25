import React, { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


const App = () => {

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });
  })

  useGSAP(() => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let tl = gsap.timeline()
      let xTransform = gsap.utils.random(-100, 100)

      tl.set(image, {
        transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
      }, "hello")
      tl.to(image, {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: elem,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      }, "hello")
      tl.to(elem, {
        x: `${xTransform}%`,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

    })

    document.querySelectorAll(".card").forEach((card) => {
      let image = card.querySelector("img");
      gsap.to(card, {
        scale: 0.7,
        ease: "none",
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true
        }
      })
    })

  })

  const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg',
    'images/image8.jpg',
    'images/image9.jpg',
    'images/image10.jpg',
    'images/image11.jpg',
    'images/image12.jpg',
    'images/image13.jpg',
    'images/image14.jpg',
    'images/image15.jpg',
    'images/image16.jpg',
    'images/image17.jpg',
    'images/image18.jpg',
    'images/image19.jpg',
    'images/image20.jpg'
  ]

  return (
    <>
      <div className='w-full bg-[#2c2c2c]'>
        <div class="grid grid-cols-8 gap-2 overflow-hidden">

          <div class="grid grid-cols-subgrid gap-2 col-span-5">
            <div class="elem col-start-4"><img src="./images/image1.jpg" alt="Image 1" /></div>
          </div>
          <div className='elem'><img src="./images/image2.jpg" alt="Image 2" /></div>
          <div class="grid grid-cols-subgrid gap-2 col-span-6">
            <div class="elem col-start-2"><img src="./images/image3.jpg" alt="Image 3" /></div>
          </div>
          <div className='elem'><img src="./images/image4.jpg" alt="Image 4" /></div>
          <div class="grid grid-cols-subgrid gap-2 col-span-7">
            <div class="elem col-start-3"><img src="./images/image5.jpg" alt="Image 5" /></div>
          </div>
          <div className='elem'><img src="./images/image6.jpg" alt="Image 6" /></div>
          <div class="grid grid-cols-subgrid gap-2 col-span-4">
            <div class="elem col-start-1"><img src="./images/image7.jpg" alt="Image 7" /></div>
          </div>
          <div className='elem'><img src="./images/image8.jpg" alt="Image 8" /></div>
          <div class="grid grid-cols-subgrid gap-2 col-span-6">
            <div class="elem col-start-2"><img src="./images/image9.jpg" alt="Image 9" /></div>
          </div>
          <div className='elem'><img src="./images/image10.jpg" alt="Image 10" /></div>
          <div class="grid grid-cols-subgrid gap-2 col-span-5">
            <div class="elem col-start-4"><img src="./images/image11.jpg" alt="Image 11" /></div>
          </div>
          <div className='elem'><img src="./images/image12.jpg" alt="Image 12" /></div>
          <div class="grid grid-cols-subgrid gap-2 col-span-6">
            <div class="elem col-start-3"><img src="./images/image13.jpg" alt="Image 13" /></div>
          </div>
          <div className='elem'><img src="./images/image14.jpg" alt="Image 14" /></div>
          <div class="grid grid-cols-subgrid gap-2 col-span-5">
            <div class="elem col-start-2"><img src="./images/image15.jpg" alt="Image 15" /></div>
          </div>
          <div className='elem'><img src="./images/image16.jpg" alt="Image 16" /></div>
          <div class="grid grid-cols-subgrid gap-2 col-span-4">
            <div class="elem col-start-4"><img src="./images/image17.jpg" alt="Image 17" /></div>
          </div>
          <div className='elem'><img src="./images/image18.jpg" alt="Image 18" /></div>
          <div class="grid grid-cols-subgrid gap-2 col-span-7">
            <div class="elem col-start-3"><img src="./images/image19.jpg" alt="Image 19" /></div>
          </div>
          <div className='elem'><img src="./images/image20.jpg" alt="Image 20" /></div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white gap-2">
        <h1 className='text-5xl font-bold font-sixtyfour'>ABDULLAH SHAMOON<sup>®</sup></h1>
        <h2 className='text-3xl font-bold font-meow'>M E R N - developer</h2>
      </div>
      <div className='relative w-full h-screen bg-[#cfcfcf] flex items-center justify-center  z-20 text-center'>
        <p className='w-3/4 text-3xl font-miltonian text-[#7e5252]'>
          I am a passionate web developer with a keen interest in building dynamic and responsive user interfaces. With expertise in modern web technologies like React, I strive to create seamless and engaging web experiences. My attention to detail and dedication to clean, efficient code help me deliver high-quality solutions tailored to client needs. Whether it's front-end development or full-stack projects, I am committed to continuous learning and adapting to the ever-evolving landscape of web development.

        </p>
      </div>

      <div className="cards w-full bg-[#2c2c2c] relative flex flex-col gap-7 justify-center items-center py-[12vh]">

        {
          images.map((image, index) => {
            return <div key={index} className="card w-1/4 h-[75vh] mx-auto sticky top-[12vh]">
              <img className='object-cover w-full h-full rounded-2xl' src={image} alt="" />
              <div className="text-white absolute bottom-0 bg-gradient-to-t from-black  p-5 pb-10 rounded-2xl flex flex-col items-center gap-5 text-2xl font-bold ">PROJECT NAME<br /><span className='text-sm font-normal'>Project description will be shown here when added , Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, facere.</span> </div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App