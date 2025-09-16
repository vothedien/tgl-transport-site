import Image from "next/image";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Zalo */}
      <a
        href="https://zalo.me/0343599380"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo 0343599380"
        className="group"
      >
        <div className="grid place-items-center h-14 w-14 rounded-full bg-white/90 backdrop-blur-xl shadow-xl ring-1 ring-black/10 hover:scale-105 transition">
          <Image
          
           src="/tgl-transport-site/icons/zalo.png"
            alt="Zalo"
            width={38}
            height={38}
            className="transition group-hover:scale-110"
            priority
          />
        </div>
      </a>

      {/* Gọi điện */}
      <a
        href="tel:0343599380"
        aria-label="Gọi 0343599380"
        className="group"
      >
        <div className="grid place-items-center h-14 w-14 rounded-full bg-white/90 backdrop-blur-xl shadow-xl ring-1 ring-black/10 hover:scale-105 transition">
          <Image
            src="/icons/phone.png"
            alt="Gọi điện"
            width={36}
            height={36}
            className="transition group-hover:scale-110"
          />
        </div>
      </a>
    </div>
  );
}
