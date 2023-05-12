import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-sky-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4 text-gray-700 text-center">404</h1>
        <p className="text-gray-500 mb-6">Houston, we have a problem!</p>
        <img
          src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
          alt="Funny GIF"
          className="w-64 mx-auto"
        />
        <p className="text-gray-400 mt-6">
          Looks like you&apos;ve ventured too far into space.
          <br />
          You might want to consider turning back.
        </p>
        <Link to="/" className="block mt-6 text-blue-500 hover:underline">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
