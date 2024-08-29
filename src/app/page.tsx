import Contact from "@/components/landing/contact";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header"
import Hero from "@/components/landing/hero";
import Product from "@/components/landing/product";

export default function Home() {
  return (
    <>
    <Header />
      <main>
        <Hero />
        <Product />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
