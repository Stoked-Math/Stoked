import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-black">
            404
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Oops! Page not found
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 border-2 border-black rounded-lg font-semibold text-black hover:bg-gray-100 transition-colors"
          >
            Return to Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
