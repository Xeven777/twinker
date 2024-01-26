import Image from "next/image";
import bird from "../../public/3972348_11zon.webp";
const Tags = () => {
  return (
    <a
      href="https://bento.me/anish7"
      className="z-20 fixed top-0 right-6 md:right-24"
      target="_blank"
      rel="noopener noreferrer"
      title="anish"
    >
      <Image
        src={bird}
        alt="Me"
        width={55}
        height={55}
        className="p-1 pt-4 rounded-b-lg bg-slate-800/70 w-14 hover:pt-7 transition-all"
      />
    </a>
  );
};

export default Tags;
