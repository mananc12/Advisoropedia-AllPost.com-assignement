import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Logout from "./components/Logout";
import AllPosts from "./components/AllPosts";
import Home from "./components/Home";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="App pt-[6%]">
      <div className="z-10 flex flex-col justify-center items-center ml-auto md:mb-24 mr-auto w-full md:fixed md:top-0 bg-white">
        <NavBar />
      </div>

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <Routes>
        <Route path="/registration" element={<Signup />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <div className="w-full bottom-0 mt-10 mb-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
