import React from "react";
import { motion } from "framer-motion";
import dp from "../../public/ico.png";

const About = () => {
  return (
    <div className="aboutPage text-center">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        About Page
      </motion.h1>
      <div className="content">
        <div className="col profilePicture">
          <motion.img src={dp} />
        </div>
        <motion.h3 className="col">
          I am a high school student who is really passionate about computers
          and music. I am a web developer and have quite a bit of experience in
          building web applications. I have some knowledge and experience in
          building applications based on the MEN (MongoDB, Express and Node.js
          only) and MEVN stacks. I also have some experience in building apps
          using the Flutter framework. I also sometimes try to create songs.
        </motion.h3>
      </div>
    </div>
  );
};

export default About;
