import FAQSection from "./components/FAQ/FAQSection";
import Hero from "./components/Hero";
import Layout from "./components/layout/Layout";
import Map from './components/map/Map';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section id="locations" className="py-16">
        <div className="container ">
          <h2 className="text-3xl font-bold ">Interactive Map </h2>
          <div className=" text-sm font-light text-gray-500  my-3">
            Get an Interactive, playful and visually appealing map that helps
            you navigate the noise
          </div>
          <Map />
        </div>
      </section>
      <section id="faq" className="py-16 ">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <FAQSection />
        </div>
      </section>
    </Layout>
  );
}
