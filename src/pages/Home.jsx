import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="landingPage">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: "spring" }}
        data-text="HELLO!"
      >
        HELLO!
      </motion.h1>
      <motion.h5
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, type: "tween" }}
      >
        I'm Srikant, A web developer and an aspiring music producer!
      </motion.h5>
    </div>
  );
}

export default Home;
