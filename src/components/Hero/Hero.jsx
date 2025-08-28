import React from 'react';
import '../../index.css';
import Navbar from "../Navbar/Navbar";
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import BlackTumbler from "../../assets/black.png";


const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);

  return (
    <main className='bgImage'>
      <section className='relative min-h-[750px] w-full'>
        <div className="container">
          {/* Navbar section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          
          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* Text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-24">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  delay: 1,
                }}
                className='text-7xl font-bold leading-tight ml-14'
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className='relative z-10 space-y-4'>
                  <h1>Blvck Tumbler</h1>
                  <h1 className='text-sm opacity-55 leading-loose'>
                    Bold, timeless coffee crafted for those who embrace the black lifestyle.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25"></div>
              </motion.div>
            </div>

            {/* Hero Image section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={BlackTumbler}
                alt="Hero Image" className='relative z-40 h-[400px] md:h-[700px] img-shadow'
              />
              {/* Orange circle ring */}
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-[20px] border-primary rounded-full z-10"
              ></motion.div>

              {/* Big text section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                  delay: 0.8,
                }}
                className='absolute -top-20 left-[200px] z-[1]'
              >
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40">
                  Blvck Tumbler
                </h1>
              </motion.div>
            </div>

            {/* Third div section */}
            <div className='hidden lg:block'>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                  delay: 1.2,
                }}
                className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-24"
              >
                <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>
                  Blvck Tumbler
                </h1>
                <div className="relative">
                  <div className='relative z-10 space-y-4'>
                    <h1>Pure Strength in Every Sip</h1>
                    <h1 className='text-sm opacity-55 leading-loose'>
                      Smooth, rich, and unapologetically strong — a coffee that matches your drive.
                    </h1>
                  </div>
                  <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25"></div>
                </div>
              </motion.div>
              <div></div>
            </div>
          </div>
        </div>

        {/* Sidebar menu section */}
        {sidebar && (
          <motion.div 
            initial={{ x: "100%" }}
            whileInView={{ x: 0}}
        
          
          className='absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-50'>
            <div className='w-full h-full flex justify-center items-center'>
              <div className='flex flex-col justify-center items-center gap-6 text-white'>
                {/* Line */}
                <div className='w-[1px] h-[70px] bg-white'></div>
                {/* Social Icons */}
                <div className='inline-block p-2 rounded-full cursor-pointer border border-white hover:text-[#1877F2] hover:border-[#1877F2] transition-colors duration-300'>
                  <FaFacebookF className='text-2xl' />
                </div>
                <div className='inline-block p-2 rounded-full cursor-pointer border border-white hover:text-[#E4405F] hover:border-[#E4405F] transition-colors duration-300'>
                  <FaInstagram className='text-2xl' />
                </div>
                <div className='inline-block p-2 rounded-full cursor-pointer border border-white hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors duration-300'>
                  <FaTwitter className='text-2xl' />
                </div>
                <div className='w-[1px] h-[70px] bg-white'></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
