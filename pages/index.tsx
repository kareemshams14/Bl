import type { NextPage } from 'next';
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Features } from "@/components/features";
import { WhyUs } from "@/components/why-us";
import { Contact } from "@/components/contact";

const Home: NextPage = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Features />
      <WhyUs />
      <Contact />
    </main>
  );
};

export default Home;