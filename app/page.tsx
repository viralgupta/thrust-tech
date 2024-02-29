import MainSection from "@/components/MainSection";
import Section from "./utils/SectionInterface";
import getFiles from "./utils/GetFiles";
import getDirs from "./utils/GetDirs";
const fs = require("fs");

export const dynamic = "force-static"
export const revalidate = false

export default function Home() {
  function getData(dirs: string[], data: any[] = []): Section[] {
    dirs = dirs.reverse();
    dirs.forEach((dir) => {
      const files = getFiles(dir);
      const sectionJsonPath = files.find((f) => f.endsWith("section.json"));
      if (sectionJsonPath) {
        const sectionJsonContent = fs.readFileSync(sectionJsonPath, "utf-8");
        const sectionData:Section = JSON.parse(sectionJsonContent);
        const photoDir = getDirs(dir).find((d) => d.endsWith("resources"))
        if(sectionData.onHomePage && sectionData.hasPhotosorVideos && photoDir){
          const photoArray = getFiles(photoDir)
          const pictureArray = photoArray.filter((f)=> !f.endsWith(".mp4") && !f.endsWith("webm"));
          if(pictureArray.length > 0){
            sectionData.photoArray = pictureArray;
            data.push(sectionData)
          }
        }
      }
    });
    return data
  }

  return (
    <>
      {getData(getDirs("public/data")).map((section, index) => {
        return <MainSection
        key={index}
        type={section.homeType}
        name={section.heading}
        button={section.homeButton}
        image={section.photoArray[0].substring(6)}
        id={section.id}
        page={section.homeRedirectPage}
        reverse={index%2==0 ? true: false}
      />
      })}
    </>
  );
}
