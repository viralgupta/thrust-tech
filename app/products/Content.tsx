import Link from "next/link";

interface props {
  heading: string;
  content: string;
  heading2?: string;
  content2?: string;
  button?: string;
}

const Content = ({ heading, content, heading2, content2, button }: props) => {
  return (
    <div className="product w-full lg:w-1/2 h-[50vh] lg:h-screen flex flex-col p-2 md:px-10 overflow-scroll overflow-x-hidden">
      <h4 className="md:text-3xl md:mb-3 font-bold uppercase text-xl ">
        {heading}
      </h4>
      <div className="text-xs md:text-xl mb-3 font-mono">{content}</div>
      {heading2 && (
        <h4 className="md:text-3xl md:mb-3 lg:mt-10 font-bold uppercase text-xl">
          {heading2}
        </h4>
      )}
      {content2 && (
        <div className="text-xs md:text-xl font-mono mb-3">{content2}</div>
      )}
      <Link
        href={`/contactus`}
        className="bold font-mono p-2 md:p-4 border-2 uppercase text-sm md:text-xl mr-auto hover:bg-white hover:text-black transition-all duration-300"
      >
        <span className="">{button}</span>
      </Link>
    </div>
  );
};

export default Content;
