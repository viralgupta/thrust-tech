import Link from "next/link";
import ScrollArrow from "./ScrollArrow";

interface props {
  type?: string;
  name: string;
  button?: string;
  image: string;
  page?: string;
  id: string;
  reverse: boolean;
}

const MainSection = ({ type, name, button, image, page, id, reverse }: props) => {
  return (
    <section className="" style={{ backgroundImage: `url(${image})` }}>
      <div className={`section-inner ${reverse ? "pr-5 md:pr-36 right-0" : "left-0 pl-5 md:pl-36 "}`}>
        <h4 className="text-xl">{type}</h4>
        <h2 className="text-3xl w-min md:w-auto">{name}</h2>
        <Link href={`/${page}#${id}`} className="btn">
          <div className="hover"></div>
          <span>{button}</span>
        </Link>
      </div>
      <ScrollArrow />
    </section>
  );
};

export default MainSection;
