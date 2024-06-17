import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },
    {
      title: "Singularity",
      description:
        "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
      live: true,
      case: false,
    },
    {
      title: "Like Magic",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      live: true,
      case: false,
    },
    {
      title: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      case: false,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: false,
    },
    {
      title: "Intenseye",
      description:
        "A brand new website for Intenseye just before their $64M Series.",
      live: true,
      case: false,
    },
    {
      title: "Remind",
      description:
        "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
      live: true,
      case: false,
    },
    {
      title: "Summon",
      description:
        "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
      live: true,
      case: false,
    },
    {
      title: "Jungle",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
      live: true,
      case: false,
    },
    {
      title: "Candid Health",
      description:
        "A complete redesign of a health-startup website, followed by cutting edge development.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2021",
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
      live: true,
      case: false,
    },
    {
      title: "Showcase",
      description:
        "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
      live: true,
      case: false,
    },
    {
      title: "Weglot",
      description:
        "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",
      live: true,
      case: true,
    },
    {
      title: "RocketChat",
      description:
        "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="bg-zinc-900 pb-20 relative">
      {products.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} count={index} />
      ))}
      <div className="w-full h-full absolute pointer-events-none  top-0">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[29rem] h-[23rem] left-[44%] rounded-2xl overflow-hidden">
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/Arqitel.webm" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/Cula.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full ">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/LandLayout.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/TTR.webm" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/Maniv.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/Singularity.webm" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/likemagic.webm" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/Silvr.webm" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/rainfall.webm" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/Intenseye.webm" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/remind.webm" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/summon.webm" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/jungle.webm" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/Candid.webm" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/yahoo.webm" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/YIR2024.webm" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/yearinreview.webm" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/showcase.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/weglot.webm" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./src/assets/rocketchat.webm" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
