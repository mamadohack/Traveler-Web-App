import Hero from "@/lib/hero";
import Navbar from "@/lib/navbar";
import { useState } from "react";

export default function Home() {
  return (
    <main className="">
      <Navbar></Navbar>
      <Hero></Hero>
    </main>
  );
}
