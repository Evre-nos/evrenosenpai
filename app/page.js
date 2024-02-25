// Importing all the necessary components from the layouts directory
import Header from "@/app/layouts/Header"; // Header component for the top of the page
import Hero from "@/app/layouts/Hero"; // Hero component for the main banner/hero section
import Service from "@/app/layouts/Service"; // Service component to showcase the services offered
import Skills from "@/app/layouts/Skills"; // Skills component to display the skills
import Projects from "@/app/layouts/Projects"; // Projects component to display the projects
import Blogs from "@/app/layouts/Blogs"; // Blogs component to display the blog posts
import Contact from "@/app/layouts/Contact"; // Contact component for the contact section
import Footer from "@/app/layouts/Footer"; // Footer component for the bottom of the page

// The Home function is the main component that renders all the imported components
// It's the default export of this module, meaning it can be imported in other files using the file path
export default function Home() {
  return (
    <>
      <main>
        {/* The Header component is rendered first */}
        <Header />
        <article>
          {/* The Hero, Service, Skills, Projects, Blogs, and Contact components are rendered inside an article tag */}
          <Hero />
          <Service />
          <Skills />
          <Projects />
          <Blogs />
          <Contact />
        </article>
      </main>
      {/* The Footer component is rendered last, outside the main tag */}
      <Footer />
    </>
  );
}