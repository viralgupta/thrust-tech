import Carousel from "../../components/Carousel";
import Content from "../../components/Content"
import Model from "./Model"

interface props {
  id: string;
  heading: string;
  content: string;
  heading2?: string;
  content2?: string;
  button?: string;
  hasModel: boolean;
  modelLocation?: string;
  zoomLevel?: number;
  reverse: boolean;
  photoArray: string[];
}


const ProductSection = ({ id, heading, content, heading2, content2, button, hasModel, modelLocation, zoomLevel, reverse, photoArray }: props) => {
  return (
    <>
      <div id={id} className={`h-full w-full lg:flex rounded-lg ${reverse ? "flex-row-reverse" : "flex-row"}`}>
        {hasModel && <Model zoomLevel={zoomLevel} modelLocation={modelLocation}/>}
        {!hasModel && <Carousel photoArray={photoArray}/>}
        <Content heading={heading} content={content} heading2={heading2} content2={content2} button={button}/>
      </div>
    </>
  )
}

export default ProductSection