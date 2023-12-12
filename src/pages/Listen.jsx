import React from 'react';
import Heading from '../components/Heading';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import UserPanel from '../components/UserPanel';

function Listen() {
  const videoUrl = 'https://youtu.be/GbAJLkAf4es'; // Replace with your YouTube video URL

  return (
    <div className="container">
      <div className="md:flex md:justify-between pb-10 border-b-4">
        <div className="md:w-[30%]">
          <Heading />
          <p className="text-body pl-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            vero ex deleniti? Suscipit officia quod magnam reprehenderit enim
            eius ad, aliquid dolorum! Consequuntur praesentium in doloremque
            quasi est, repellendus molestias.
          </p>
        </div>
        <div className="mt-10 max-w-full md:w-[60%]">
          <Link to="https://youtu.be/-zkhr6Ta0HI">
            <ReactPlayer
              width="100%"
              url={videoUrl}
              controls={true}
              className="rounded-lg "
            />
          </Link>
        </div>
      </div>
      <UserPanel />
    </div>
  );
}

export default Listen;
