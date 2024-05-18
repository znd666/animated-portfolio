import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "ss1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit suscipit eius sunt incidunt exercitationem. Labore omnis maiores doloremque. Repudiandae ducimus fugiat officia porro? Natus veritatis cumque harum sapiente vitae eum!",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "ss2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit suscipit eius sunt incidunt exercitationem. Labore omnis maiores doloremque. Repudiandae ducimus fugiat officia porro? Natus veritatis cumque harum sapiente vitae eum!",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "ss3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit suscipit eius sunt incidunt exercitationem. Labore omnis maiores doloremque. Repudiandae ducimus fugiat officia porro? Natus veritatis cumque harum sapiente vitae eum!",
  },
  {
    id: 4,
    title: "Music App",
    img: "ss4.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit suscipit eius sunt incidunt exercitationem. Labore omnis maiores doloremque. Repudiandae ducimus fugiat officia porro? Natus veritatis cumque harum sapiente vitae eum!",
  },
];

const Single = ({ item }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"])

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt="" />
          </div>
        <motion.div className="textContainer" style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness:100,
    damping: 30,
  })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
