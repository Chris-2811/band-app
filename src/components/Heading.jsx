import React from 'react';
import plus from '../assets/design-plus.png';

function Heading({ title }) {
  return (
    <div className="relative">
      <h1 className="uppercase text-primary text-4xl font-bold ">{title}</h1>
    </div>
  );
}

export default Heading;
