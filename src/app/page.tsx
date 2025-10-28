import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import Welcome from "@/components/home/home";
import Members from "@/components/members/Members";
import News from "@/components/news/News";
import Touch from "@/components/touch/Touch";

export default function Home() {
  return (<>
    <Navbar />
    <Welcome />
    <About />
    <Members />
    <News />
    <Touch />
    <Footer />
  </>
    
  );
}
