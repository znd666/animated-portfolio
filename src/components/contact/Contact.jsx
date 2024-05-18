import React, { useRef } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const Contact = () => {
  const ref = useRef()
  const isInView = useInView(ref, {margin: "-100px"})
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hello@example.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Hello street New York</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+1 234 5678</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="catSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay:3, duration: 1 }}
        >
          <svg
            fill="#000000"
            width="450px"
            height="450px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{pathLength:0}}
              animate={isInView && {pathLength:1}}
              transition={{duration:3}}
              d="M28.926 1.17l-2.182 3.608c-1.876-0.608-4.669-0.489-6.426 0l-2.102-3.557c-3.452 6.448-2.475 10.523 0.159 12.549-0.403 0.252-0.818 0.529-1.247 0.833-10.979-8.759-20.863 1.106-14.379 9.92h0.050c1.163 1.687 2.503 2.731 3.95 3.277 2.050 0.773 4.159 0.551 6.236 0.257s4.109-0.663 6.046-0.525c1.937 0.138 3.874 0.635 5.647 2.569 1.209 1.318 2.926-0.101 1.486-1.507-2.185-2.134-4.525-2.959-6.825-3.122s-4.505 0.293-6.502 0.576c-1.997 0.283-3.761 0.409-5.276-0.163-0.711-0.268-1.403-0.69-2.070-1.36h22.51c1.064-3.756 1.177-7.73-0.033-10.237 3.635-1.897 5.097-6.376 0.958-13.116zM22.176 10.872c-2.316 1.117-3.367 0.212-3.817-1.656 2.273-1.41 3.626-0.278 3.817 1.656zM25.067 10.872c0.191-1.934 1.544-3.067 3.817-1.656-0.45 1.868-1.502 2.774-3.817 1.656z"
            />
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay:4, duration: 1 }}
        >
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Email" required />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </motion.form>
      </div>
    </motion.div>
  );
};
