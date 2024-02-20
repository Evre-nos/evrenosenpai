import Header from "@/app/layouts/Header";
import Hero from "@/app/layouts/Hero";
import Service from "@/app/layouts/Service";
import Skills from "@/app/layouts/Skills";
import Projects from "@/app/layouts/Projects";
import Blogs from "@/app/layouts/Blogs";
import Contact from "@/app/layouts/Contact";
import Footer from "@/app/layouts/Footer";

export default function Home() {
  return (
    <>
    <main>
      <Header />
      <article>
          <Hero />
          <Service />
          <Skills />
          <Projects />
          <Blogs />
          <Contact />
      </article>
    </main>
    <Footer />
    </>
  );
}