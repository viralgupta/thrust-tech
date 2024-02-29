import getDirs from "../utils/GetDirs";
import getFiles from "../utils/GetFiles";
import Section from "../utils/SectionInterface";
const fs = require("fs");
import ProductSection from "./ProductSection"

export const dynamic = "force-static"
export const revalidate = false

const page = () => {
  function getData(dirs: string[], data: any[] = []): Section[] {
    dirs = dirs.reverse();
    dirs.forEach((dir) => {
      const files = getFiles(dir);
      const sectionJsonPath = files.find((f) => f.endsWith("section.json"));
      if (sectionJsonPath) {
        const sectionJsonContent = fs.readFileSync(sectionJsonPath, "utf-8");
        const sectionData:Section = JSON.parse(sectionJsonContent);
        if(sectionData.onProductPage){
          if(sectionData.hasModel){
            const modelLocation = files.find((file)=> file.endsWith(`${sectionData.modelName}.glb`))
            if(modelLocation){
              sectionData.modelLocation = modelLocation.substring(6);
              data.push(sectionData)
            }
          }
          else if(sectionData.hasPhotosorVideos && !sectionData.hasModel){
            const photoDir = getDirs(dir).find((d) => d.endsWith("resources"))
            if(photoDir){
              const photoArray = getFiles(photoDir)
              let newPhotoArray: string[] = []
              photoArray.forEach(photo => {
                newPhotoArray.push(photo.substring(6))
              });
              sectionData.photoArray = newPhotoArray;
              if(newPhotoArray.length > 0){
                sectionData.photoArray = newPhotoArray;
                data.push(sectionData);
              }
            }
          }
        }
      }
    });
    return data
  }
  return (
    <>
    <div className='w-full h-full bg-gray-900'>
        <div className="h-[100px]"></div>
        {getData(getDirs("public/data")).map((section, index) => {
          return <ProductSection key={index} hasPhotosorVideos={section.hasPhotosorVideos} photoArray={section.photoArray}  id={section.id} heading={section.heading} content={section.content} heading2={section.heading2} content2={section.content2} button={section.button} hasModel={section.hasModel} modelLocation={section.modelLocation} zoomLevel={section.zoomLevel} reverse={index % 2 == 0 ? true : false}/>
        })}
    </div>
    </>
  )
}

export default page