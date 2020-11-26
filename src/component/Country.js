import React from 'react';
import { motion } from 'framer-motion';
import '../card.css';
import { Link } from 'react-router-dom';

const Country = ({ data }) => {
  return (
    <Link to={`/country/${data.name.toLowerCase()}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="card-holder"
      >
        <img className="card-flag" src={data.flag} alt={data.title}></img>
        <p className="card-name">{data.name}</p>
      </motion.div>
    </Link>
  );
};

export default Country;
