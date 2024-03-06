// AllPosts.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { motion, useScroll } from "framer-motion";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Function to fetch posts based on the current page
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:5000/api/posts?page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Update the state with the fetched posts
        setPosts((prevPosts) => [...prevPosts, ...response.data.allPosts]);

        // Check if there are more posts to fetch
        setHasMore(response.data.allPosts.length === 10); // Adjust based on your server's pagination logic
      } catch (error) {
        toast.error("Login to see all the posts");
      }
    };

    fetchPosts();
  }, [page]); // Fetch posts whenever the page changes

  // Function to load more posts when scrolling to the bottom
  const loadMore = () => {
    if (hasMore) {
      setPage(page + 1);
    }
  };

  return (
    
    <div className="container-all-post">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <h1 className="text-3xl font-bold pt-20 mb-10">Post List</h1>
      {posts.map((post) => (
        <div key={post._id} className="bg-gray-100 p-4 my-2">
          {/* Display post details here */}
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.content}</p>
          <p>~by {post.author}</p>
        </div>
      ))}

      {/* Display a button to load more posts */}
      {hasMore && (
        <button
          onClick={loadMore}
          className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4"
        >
          Load More
        </button>
      )}
      {/* </motion.div> */}
    </div>
    
  );
};

export default AllPosts;
