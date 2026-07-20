import { Fragment } from "react";

import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import Quizes from "@/sections/Quizes";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <Fragment>
      <Header />
      <Hero className="mt-[calc(var(--spacing-lg)*3)] md:mt-[calc(var(--spacing-xl)*3)]" />
      <Quizes />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Page;