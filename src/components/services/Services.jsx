import React from "react";
import "./services.scss";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I focus on helping brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1><b>Unique</b> Ideas</h1>
        </div>
        <div className="title">
          <h1><b>for Your</b> Business.</h1>
          <button>What we do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div className="box" whileHover={{background:'lightgray', color:'black'}}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum repellat dicta perspiciatis illum quis error consectetur ipsum dolorum corporis, aliquam tempora iusto, asperiores blanditiis fugiat ipsa earum rerum id.</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:'lightgray', color:'black'}}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum repellat dicta perspiciatis illum quis error consectetur ipsum dolorum corporis, aliquam tempora iusto, asperiores blanditiis fugiat ipsa earum rerum id.</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:'lightgray', color:'black'}}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum repellat dicta perspiciatis illum quis error consectetur ipsum dolorum corporis, aliquam tempora iusto, asperiores blanditiis fugiat ipsa earum rerum id.</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:'black'}}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum repellat dicta perspiciatis illum quis error consectetur ipsum dolorum corporis, aliquam tempora iusto, asperiores blanditiis fugiat ipsa earum rerum id.</p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
