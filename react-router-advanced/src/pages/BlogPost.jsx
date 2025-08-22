import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams(); // 👈 get dynamic id
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1>Blog Post #{id}</h1>
      <p>This is content for blog post with ID {id}.</p>
    </div>
  );
}
