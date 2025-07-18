import React from "react";
import NavBar from ".. /components/NavBar";

const Home = () => {
  return (
    <>
      <header><NavBar /></header>
      <main>
        <h1>Welcome to the React Router App</h1>
        <p>This is the home page. Use the navigation bar to explore.</p>
      </main>
    </>
  );
};

export default Home;
