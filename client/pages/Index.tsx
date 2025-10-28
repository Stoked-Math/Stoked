import Layout from "@/components/Layout";

export default function Index() {
  return (
    <Layout>
      <div className="w-full min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Welcome to Stoked
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Master mathematics through interactive learning
          </p>
        </div>
      </div>
    </Layout>
  );
}
