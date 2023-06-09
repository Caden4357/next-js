'use client'
import Image from "next/image";
import HomePage from "./homepage/home";
import { MovieProvider } from "./context/MovieProvider";
import SearchResults from "./MovieSearchResults/page";
import Nav from "./nav/Nav";

export default function Home() {

  return (
    <div>
      <HomePage/>
    </div>
  )
}
