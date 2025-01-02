import FAQSection from "./components/FAQ/FAQSection";
import Hero from "./components/Hero";
import Layout from "./components/layout/Layout";
import RecommendationsSection from "./components/recommendations/RecommendationsSection";
import ClientMap from "./components/map/ClientMap";


export default function Home() {
  return (
    <Layout>
      <Hero />
      
      <section id="locations" className="py-16">
        <div className="container ">
          <h2 className="text-3xl ">Interactive Map </h2>
          <div className=" text-sm font-light text-gray-500  my-3">
            Get an Interactive, playful and visually appealing map that helps
            you navigate the noise
          </div>
          <ClientMap />
        </div>
      </section>

      <section id="recommendations" className="py-8">
        <div className="container">
            <RecommendationsSection />
        </div>
      </section>

      <section id="faq" className="py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start gap-14">
            <div className="w-1/3">
              <h2 className="text-3xl font-bold">FAQs</h2>
            </div>
            <div className="w-2/3">
              <FAQSection />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
