import Image from "next/image";
import image from "../assets/avatar.png";

function Header() {
  return (
    <header className="flex flex-col items-center w-full bg-site-gradient px-6 pt-16 pb-8 max-md:px-4 max-md:pt-12 max-md:pb-6">
      <div className="flex flex-col items-center w-full max-w-280 gap-8 max-md:gap-6">
        <div className="flex transition-[filter] duration-300 hover:filter-[drop-shadow(0px_5px_5px_var(--color-blue))]">
          <Image
            src={image}
            width={180}
            height={180}
            priority
            sizes="(max-width: 480px) 120px, (max-width: 768px) 150px, 180px"
            alt="Pixel art of the author"
          />
        </div>
        <h1 className="text-center text-h4 transition-[text-shadow] duration-300 hover:[text-shadow:1px_4px_20px_var(--color-purple)]">
          Otávio Pontes
        </h1>
        <h2 className="text-center text-h4 text-blue transition-[text-shadow] duration-300 hover:[text-shadow:1px_4px_20px_var(--color-blue)]">
          &lt;Software Engineer/&gt;
        </h2>
        <p className="w-full max-w-240 text-justify mt-8 leading-[2.2] max-md:text-left max-md:leading-[1.8]">
          <span className="text-white text-h6">
            Software Engineer focused on crafting Frontend solutions, such as
          </span>{" "}
          <span className="text-pink text-h5">Mobile Apps</span>
          <span className="text-white text-h6">,</span>{" "}
          <span className="text-pink text-h5">Websites</span>{" "}
          <span className="text-white text-h6">and</span>{" "}
          <span className="text-pink text-h5">Web Systems</span>
          <span className="text-white text-h6">
            . Also a Design Enthusiast. Currently, building apps at
          </span>{" "}
          <span className="text-blue text-h5">Dialog</span>
          {"."}
        </p>
        <div className="flex w-full max-w-240 justify-end mt-12 max-md:justify-center max-md:mt-8">
          <a
            className="text-white text-body tracking-[6px] [text-shadow:1px_4px_20px_var(--color-purple)] wrap-break-word transition-[font-size] duration-300 hover:text-h6 max-md:tracking-[3px] max-[480px]:tracking-[2px] max-[480px]:text-overline"
            href="mailto:otavio.pontes1103@gmail.com"
          >
            otavio.pontes1103@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
