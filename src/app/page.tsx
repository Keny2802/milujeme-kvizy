import { Fragment } from "react";

import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import TryUs from "@/sections/TryUs";
import Quizes from "@/sections/Quizes";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import BottomHeader from "@/components/BottomHeader";

const Page = () => {
  return (
    <Fragment>
      <Header />
      <Hero className="mt-[calc(var(--spacing-lg)*3)] md:mt-[calc(var(--spacing-xl)*3)]" />
      <TryUs />
      <Quizes />
      <Contact />
      <Footer />
      <BottomHeader />
    </Fragment>
  );
};

export default Page;