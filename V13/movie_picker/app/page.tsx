'use client'
import Image from "next/image";
import HeroImage from "./homepage/HeroImage";
import { MovieProvider } from "./context/MovieProvider";
import SearchResults from "./MovieSearchResults/page";
import Nav from "./nav/Nav";

export default function Home() {

  return (
    <main className="p-4 bg-white dark:bg-slate-900 w-screen h-screen">
        {/* <HeroImage /> */}
        {/* <Image src="/batman.jpg" alt="Logo" fill={true} className="mx-auto"/> */}
    </main>
  )
}
