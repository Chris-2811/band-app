import React from 'react';
import plus from '../assets/design-plus.png';

function Heading({ title }) {
  return (
    <div className="relative">
      <img src={plus} alt="plus sign" className="w-8 md:w-10 mb-2 md:mb-4" />

      <h1 className="uppercase text-primary text-4xl font-bold pl-8">
        {title}
      </h1>
    </div>
  );
}

export default Heading;
