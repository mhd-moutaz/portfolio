import Image from "next/image";
import bg from "@/app/assets/bg.jpg";

export function Background() {
  return (
    <>
      <div className="bg-image" aria-hidden="true">
        <Image
          src={bg}
          alt=""
          fill
          sizes="100vw"
          quality={80}
          loading="eager"
          placeholder="blur"
        />
      </div>
      <div className="bg-overlay" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
    </>
  );
}
