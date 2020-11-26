import React from 'react';
import { motion } from 'framer-motion';
import '../card.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Country = ({ data }) => {
  return (
    <Link to={`/country/${data.name.toLowerCase()}`}>
      <motion.div whileHover={{ scale: 1.05 }} className="card-holder">
        <img className="card-flag" src={data.flag} alt={data.title}></img>
        <p className="card-name">{data.name}</p>
      </motion.div>
    </Link>
  );
};

export default Country;
