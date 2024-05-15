import Image from "next/image";
import HomeBanner from "./component/HomeBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <HomeBanner />
     <h1>Rebel Rover</h1>
    </main>
  );
}
