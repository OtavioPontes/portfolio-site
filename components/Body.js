import Image from "next/image";
import phone from "../assets/phone.png";
import laptop from "../assets/laptop.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import coffee from "../assets/CoffeeApp.jpg";
import maid from "../assets/MaidApp.jpg";
import marvel from "../assets/MarvelApp.jpg";
import melivra from "../assets/MelivraApp.png";
import ctservice from "../assets/CT Service.jpg";
import pethero from "../assets/PetheroApp.jpg";
import tiktakinfinity from "../assets/TikTakInfinity.png";

const apps = [
  { src: tiktakinfinity, label: "App TikTak Infinity" },
  { src: melivra, label: "App Me Livra" },
  { src: pethero, label: "App Pet Hero" },
  { src: ctservice, label: "App CT Service" },
  { src: marvel, label: "App Marvel" },
  { src: maid, label: "App Maid Café" },
  { src: coffee, label: "App Café" },
];

function Body() {
  return (
    <section className="relative flex flex-col w-full items-center justify-start px-6 pt-16 pb-24 bg-personal bg-top bg-no-repeat bg-cover max-md:px-4 max-md:pt-12 max-md:pb-20">
      <div className="flex flex-col w-full max-w-280 gap-16 max-md:gap-12">
        <div className="flex flex-row self-start items-end gap-6 transition-transform duration-300 hover:translate-x-2.5 max-md:self-center max-md:flex-col max-md:items-center max-md:text-center max-md:gap-4">
          <p>
            <span className="text-white text-h4 max-[480px]:text-h5">
              Stack
            </span>{" "}
            <span className="text-pink text-h4 max-[480px]:text-h5">
              Mobile
            </span>
          </p>
          <div className="flex">
            <Image src={phone} width={50} height={100} alt="Smartphone" />
          </div>
        </div>
        <p className="self-start text-start max-w-full -mt-8 max-md:self-center max-md:text-center max-md:mt-0">
          <span className="text-white text-h5 max-md:text-h6">
            I build multiplatform
          </span>{" "}
          <span className="text-pink text-h4 max-md:text-h5">Apps</span>{" "}
          <span className="text-white text-h5 max-md:text-h6">
            with Flutter, Dart, Firebase &amp; 💙
          </span>
        </p>

        <div className="grid grid-cols-3 gap-x-10 gap-y-14 my-8 w-full max-md:grid-cols-2 max-md:gap-x-6 max-md:gap-y-10 max-[480px]:gap-x-4 max-[480px]:gap-y-8">
          {apps.map((app) => (
            <div
              key={app.label}
              className="group flex flex-col items-center gap-5 text-center transition-[transform,color] duration-350 hover:-translate-y-3 hover:text-pink"
            >
              <div className="w-full max-w-80 aspect-9/19 relative overflow-hidden rounded-[20px] bg-[linear-gradient(160deg,rgba(97,0,255,0.18),rgba(248,99,171,0.12))] shadow-[0_14px_40px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(255,255,255,0.06)] transition-[box-shadow,transform] duration-350 group-hover:shadow-[0_20px_55px_rgba(248,99,171,0.35),inset_0_0_0_1px_rgba(248,99,171,0.35)] max-md:max-w-65 max-md:rounded-2xl max-[480px]:max-w-full max-[480px]:rounded-[14px]">
                <Image
                  src={app.src}
                  alt={app.label}
                  sizes="(max-width: 480px) 45vw, (max-width: 768px) 40vw, 320px"
                  placeholder="blur"
                  className="object-cover w-full! h-full! absolute! inset-0"
                />
              </div>
              <p className="text-h6 tracking-[0.5px]">{app.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-row self-end items-end gap-6 transition-transform duration-300 hover:-translate-x-2.5 max-md:self-center max-md:flex-col max-md:items-center max-md:text-center max-md:gap-4">
          <p>
            <span className="text-white text-h4 max-[480px]:text-h5">
              Stack
            </span>{" "}
            <span className="text-blue text-h4 max-[480px]:text-h5">Web</span>
          </p>
          <div className="flex">
            <Image src={laptop} width={100} height={62} alt="Laptop" />
          </div>
        </div>
        <p className="self-end text-end max-w-full -mt-8 max-md:self-center max-md:text-center max-md:mt-0">
          <span className="text-white text-h5 max-md:text-h6">I build</span>{" "}
          <span className="text-blue text-h4 max-md:text-h5">Web Systems</span>{" "}
          <span className="text-white text-h5 max-md:text-h6">and</span>{" "}
          <span className="text-blue text-h4 max-md:text-h5">Sites</span>{" "}
          <span className="text-white text-h5 max-md:text-h6">
            with React, JavaScript, Firebase &amp; 💜
          </span>
        </p>

        <p
          aria-hidden="true"
          className="absolute top-[30%] left-6 text-h5 tracking-[10px] [writing-mode:vertical-rl] [text-shadow:1px_4px_20px_var(--color-purple)] transition-transform duration-300 pointer-events-none max-lg:hidden"
        >
          ソフトウェア　エンジニア
        </p>

        <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-10 max-md:static max-md:flex-row max-md:justify-center max-md:mt-12">
          <a
            href="https://www.linkedin.com/in/otavio-pontes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex transition-[opacity,transform] duration-200 hover:opacity-90 hover:scale-105"
          >
            <Image src={linkedin} width={64} height={64} alt="" />
          </a>
          <a
            href="https://github.com/OtavioPontes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex transition-[opacity,transform] duration-200 hover:opacity-90 hover:scale-105"
          >
            <Image src={github} width={64} height={64} alt="" />
          </a>
        </div>

        <footer className="text-center text-h6 [text-shadow:1px_4px_20px_var(--color-purple)] mt-16 transition-[font-size] duration-300 hover:cursor-default hover:text-h5">
          <p>Designed &amp; Built with ❤ by Otávio Pontes</p>
        </footer>
      </div>
    </section>
  );
}

export default Body;
