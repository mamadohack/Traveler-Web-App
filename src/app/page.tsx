import Booking from "@/lib/booking";
import Category from "@/lib/category";
import Destinations from "@/lib/destinations";
import Footer from "@/lib/footer";
import Hero from "@/lib/hero";
import Navbar from "@/lib/navbar";
import Testimonials from "@/lib/testimonials";
import { useState } from "react";

export default function Home() {
  return (
    <main className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <Category></Category>
      <Destinations></Destinations>
      <Booking></Booking>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </main>
  );
}
