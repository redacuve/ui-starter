import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-red-500 mb-4 text-xl">New App</h1>
      <p className="text-gray-800">
        Introducing our new template app - the ultimate solution for creating beautiful and
        functional mobile apps in no time! With this app, you can easily build a custom app for your
        business, organization, or personal use.
      </p>
      <Link className="text-blue-500 underline mt-4" to="/counter">
        Go to Counter
      </Link>
      <br />
      <Link className="text-blue-500 underline mt-4" to="/lorem-ipsum">
        Go to 404
      </Link>
    </div>
  );
}

export default Home;
