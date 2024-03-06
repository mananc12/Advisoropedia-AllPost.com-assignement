import React from "react";

const Home = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Awesome App!</h1>
      <p className="text-lg">
        Explore the features, engage with posts, and enjoy the community.
      </p>
      <img
        src="https://placekitten.com/400/300" // Replace with your app logo or image
        alt="App Logo"
        className="mt-8 rounded-lg shadow-md"
      />
    </div>
  );
};

export default Home;
