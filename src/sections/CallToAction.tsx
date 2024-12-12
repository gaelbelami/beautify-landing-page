'use client'
import ArrowRight from '@/assets/arrow-right.svg';
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import Image from 'next/image';
import {motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">

    <div className="container">
      <div className='section-heading relative'>
      <h2 className="section-title">Sign Up for free today</h2>
        <p className="section-description mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        <motion.img style={{translateY}} src={starImage.src} alt="star Image" width={360} height={360} className="absolute -top-[137px] -left-[350px]" />
        <motion.img style={{translateY}} src={springImage.src} alt="spring Image" width={360} height={50} className="absolute -top-[19px] -right-[331px]" />
      </div>
       <div className="flex gap-2 mt-10 justify-center ">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span className='font-semibold' >Learn more</span>
              <ArrowRight className="w-6 h-6" />
            </button>
        </div>
    </div>
  </section>
};
