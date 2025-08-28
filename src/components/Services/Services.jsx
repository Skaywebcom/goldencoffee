import React from "react";
import { motion } from "framer-motion";
import Coffee1 from "../../assets/coffee/coffee1.png"
import Coffee3 from "../../assets/coffee/coffee3.png"

const serviceData =[
  {
    id:1,
    image: Coffee1,
    title: "Black coffee",
    substitle: "Pure and bold, made for those who love the authentic taste of coffee without compromise."
  },
  {
    id:2,
    image: Coffee3,
    title: "Hot coffee",
    substitle: "Rich and comforting, brewed to warm your soul and energize your day."
  },
  {
    id:3,
    image: Coffee1,
    title: "cold coffee",
    substitle: "Chilled, refreshing, and irresistibly smooth — the perfect pick-me-up anytime."
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20},
  visible:{
    opacity: 1, 
    y: 0,
    transition:{
      type: "spring",
      stiffness: 150,
      damping:10,
      ease: "easeInOut",
    },
  },
};

const containerVariants ={
  hidden:{ opacity: 1},
  visible: {
    opaciity: 1,
    transition:{
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const Services = () => {

  return <div className="container my-16 space-y-4">
    {/* header section */}
    <div className="text-center max-w-lg mx-auto space-y-2">
      <motion.h1 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 10,
        delay: 0.2,
      }}
      className="text-3xl font-bold text-lightGray">
        Fresh and <span className="text-primary">Tasty Coffee</span>
      </motion.h1>
      <motion.p 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 10,
        delay: 0.4,
      }}
      className="text-sm opacity-50">Awaken your senses with every sip — smooth, aromatic, and crafted to perfection.</motion.p>
    </div>
    {/* Card section */}
    <motion.div variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8}}
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
    >
      {serviceData.map((service) => (
        <motion.div
           variants={cardVariants}
        className="text-center p-4 space-y-6">
          <img src={service.image} alt="" className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration 300 cursor-pointer" />
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-primary">{service.title}</h1>
            <p className="text-darkGray">{service.substitle}</p>
          </div>
        </motion.div>

      ))}
    </motion.div>

  </div>;
};

export default Services;
