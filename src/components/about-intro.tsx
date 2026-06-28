import Image from "next/image";

export function AboutIntro() {
  return (
    <section id="about">
      <div className="flex flex-col items-center gap-4 text-center">
        <Image
          src="/images/portrait.png"
          alt="Christian Ace Masayon"
          width={250}
          height={250}
          className="rounded-2xl"
        />
        <div className="flex flex-col items-center gap-1">
          <h1 className="scroll-m-20 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Hi, I&apos;m Christian Ace! 👋
          </h1>
          <p className="scroll-m-20 text-balance text-base font-normal tracking-tight text-muted-foreground sm:text-xl">
            Based in Davao, Philippines
          </p>
        </div>
      </div>
    </section>
  );
}
