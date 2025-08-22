// src/components/PostsComponent.jsx
import { useQuery } from '@tanstack/react-query';

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    // Throw error if request fails
    throw new Error('Failed to fetch posts');
  }
  return res.json(); // Parse JSON response
};

export default function PostsComponent() {
  // useQuery handles fetching, caching, and updating data
  const {
    data: posts,     // The fetched posts data
    isLoading,       // True while fetching for the first time
    isError,         // True if an error occurs
    error,           // Error object with message
    refetch,         // Function to manually refetch posts
    isFetching,      // True if a background refetch is happening
  } = useQuery({
    queryKey: ['posts'],  // Unique key to identify this query
    queryFn: fetchPosts,  // Function that fetches the data

    // Query options:
    staleTime: 5000,          // Data is "fresh" for 5s (no refetch during that time)
    cacheTime: 1000 * 60 * 5, // Keep data in cache for 5 minutes

    refetchOnWindowFocus: false, // ❌ Disable auto refetch when user switches back to the tab
    keepPreviousData: true,      // ✅ Keep showing old data while fetching new data (avoids UI flicker)
  });

  // Show loading state while fetching data
  if (isLoading) return <p>Loading posts...</p>;

  // Show error message if fetching fails
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      {/* Button to manually refetch posts */}
      <button
        onClick={() => refetch()}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        {/* Change button text when background refetching */}
        {isFetching ? 'Refreshing...' : 'Refetch Posts'}
      </button>

      {/* Render first 10 posts */}
      <ul className="space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-3 border rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
