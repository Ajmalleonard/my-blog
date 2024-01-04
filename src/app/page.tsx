"use client";

import { Button, NextUIProvider } from "@nextui-org/react";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <NextUIProvider>
      <section className=" w-full h-full">
        <Hero />
        <Featured />
        <Categories />
      </section>
    </NextUIProvider>
  );
}
