import React from 'react';
import { Link } from 'react-router-dom';

const DetailHeader = () => {
  return (
    <div>
      <Link to="/">
        <button>Go back to home</button>
      </Link>
    </div>
  );
};

export default DetailHeader;
