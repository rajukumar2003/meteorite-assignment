import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/starnight.jpg"
          alt="Iceland Landscape"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Iceland&apos;s Beauty
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Explore breathtaking landscapes, northern lights, and unique
            experiences
          </p>
          <button
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold 
                           hover:bg-blue-50 transition-colors duration-300"
          >
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
