import React from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  // Dummy blog data
  const posts = [
    { id: 1, title: "Getting Started with React", summary: "Learn the basics of React and how to build your first app." },
    { id: 2, title: "Understanding React Router", summary: "A guide to navigation and routing in React apps." },
    { id: 3, title: "State Management with Redux", summary: "Manage complex state in larger applications." },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Blog Posts</h1>
      <ul className="w-full max-w-2xl space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600">{post.summary}</p>
            <Link 
              to={`/blog/${post.id}`} 
              className="inline-block mt-2 text-blue-500 underline"
            >
              Read More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
