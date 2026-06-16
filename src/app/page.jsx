import Categories from "@/components/Categories";
import FeaturedGadgets from "@/components/FeaturedGadgets";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero></Hero>
    <Features></Features>
    <FeaturedGadgets></FeaturedGadgets>
    <Categories></Categories>
    <Testimonials></Testimonials>
   </div> 
  );
}
