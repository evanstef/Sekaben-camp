

import { Metadata } from "next";
import HomePage from "./_component/HomePage";

export const metadata: Metadata = {
  title : "Home"
}

export default function Home() {
  
  return (
    <>
      <HomePage />
    </>
  );
}
