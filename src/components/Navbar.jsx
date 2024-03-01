import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", delay: 0.1 }}
          className="nav-animate logo"
        >
          LOGO
        </motion.h1>
      </Link>
      <ul>
        <Link to="/about">
          <motion.li
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, type: "spring" }}
            className="nav-animate"
          >
            About
          </motion.li>
        </Link>
        <Link to="/projects">
          <motion.li
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="nav-animate"
          >
            Projects
          </motion.li>
        </Link>
        <Link to="contact">
          <motion.li
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="nav-animate"
          >
            Contact
          </motion.li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
