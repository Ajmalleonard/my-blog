"use client";

import { Button, NextUIProvider } from "@nextui-org/react";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import MainPage from "./components/MainPage";

export default function Home() {
  return (
    <NextUIProvider>
      <section className=" w-full h-full justify-center  flex flex-col max-container ">
        <Hero />
        <MainPage />
        <Categories />
      </section>
    </NextUIProvider>
  );
}
