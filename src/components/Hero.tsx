import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative  w-full h-screen ">
      <div className="inset-0 absolute z-0 px-2">
        <Image
          width={900}
          height={500}
          src="/hero.jpg"
          aria-hidden={true}
          alt="Hero image"
          className="w-full object-cover aspect-video h-125 rounded-(--radius) "
        />
      </div>
      <div className="z-9999 relative px-4 top-1/3 md:w-1/2 text-pretty leading-relaxed *:py-2">
        <h1 className="text-2xl md:text-4xl font-semibold  text-neutral-100">
          Protect your home with savings up to{" "}
          <strong className="font-serif text-primary">50%</strong>
        </h1>
        <h2 className="text-xl text-neutral-300">
          Get deals on everyday security for peace of mind when you need it
          most.
        </h2>

        <Button
          nativeButton={false} // we do this to not break html semantic rules , e.g. a <button> inside an <a>
          render={<Link href={"/products"}>Shop now</Link>}
          size={"lg"}
          className={"text-sm h-12 cursor-pointer my-2"}
        ></Button>
      </div>
    </section>
  );
};

export default Hero;
