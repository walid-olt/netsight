import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative  w-full h-screen py-12 md:py-0 ">
      <div className="z-10 relative px-4 md:top-1/3 md:w-1/2 text-pretty text-center md:text-left leading-relaxed *:py-2">
        <h1 className="text-2xl md:text-4xl font-semibold text-foreground  md:text-neutral-100">
          Protect your home with savings up to{" "}
          <strong className="font-serif text-primary">50%</strong>
        </h1>
        <h2 className="text-xl text-foreground/70 md:text-neutral-300">
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
      <div className="inset-0 md:absolute z-0 px-2">
        <Image
          width={1200}
          height={700}
          loading="eager"
          style={{ width: "100%", height: "100%" }}
          src="/hero.jpg"
          aria-hidden={true}
          alt="Hero image"
          className="w-full object-contain   object-[30%_0%] rounded-(--radius) "
        />
      </div>
    </section>
  );
};

export default Hero;
