import Carousel from "../../components/Carousel";
import Content from "../../components/Content";

interface props {
    id: string;
    heading: string;
    content: string;
    heading2?: string;
    content2?: string;
    button?: string;
    reverse: boolean;
    photoArray: string[];
  }

const EventSection = ({ id, heading, content, heading2, content2, button, reverse, photoArray }: props) => {
  return (
    <div id={id} className={`h-full w-full lg:flex rounded-lg ${reverse ? "flex-row-reverse" : "flex-row"}`}>
    <Carousel photoArray={photoArray}/>
    <Content heading={heading} content={content} heading2={heading2} content2={content2} button={button}/>
  </div>
  )
}

export default EventSection