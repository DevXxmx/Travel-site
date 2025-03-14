import Img11 from "../../assets/img/Img11.jpeg";
import Img12 from "../../assets/img/Img12.jpeg";
import Img13 from "../../assets/img/Img13.jpeg";
import BlogCard from "./BlogsCard";
const BlogsData = [
  {
    id: 1,
    image: Img11,
    title: "The Best 10 Places to Visit in Algeria",
    description:
      "Algeria is a country in North Africa. It is the largest country in Africa and the Arab world, and the tenth-largest country in the world. Algeria is bordered to the northeast by Tunisia, to the east by Libya, to the southeast by Niger, to the southwest by Mali, Mauritania, and Western Sahara, to the west by Morocco, and to the north by the Mediterranean Sea. The country has a semi-arid geography, with most of the population living in the fertile north and the Sahara dominating the geography of the south. This article will explore some of the best places to visit in Algeria. ",
    author: "Sami Boukhalfa",
    date: "2021-09-01",
  },
  {
    id: 2,
    image: Img12,
    title: "The Best 10 Places to Visit in Europe",
    description:
      "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It comprises the westernmost peninsulas of the continental landmass of Eurasia, it shares the continental landmass of Afro-Eurasia with both Asia and Africa and is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south, and Asia to the east. Europe is commonly considered to be separated from Asia by the watershed of the Ural Mountains, the Ural River, the Caspian Sea, the Greater Caucasus, the Black Sea, and the waterways of the Turkish Straits. Although much of this border is over land, Europe is recognised as its own continent because of its great physical size and the weight of its history and traditions.",
    author: "Ramy Mokrani",
    date: "2023-03-21",
  },
  {
    id: 3,
    image: Img13,
    title: "The Best 10 Places to Visit in Asia",
    description:
      "Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe and the continental landmass of Afro-Eurasia with both Europe and Africa. Asia covers an area of 44,579,000 square kilometres (17,212,000 sq mi), about 30% of Earth's total land area and 8.7% of the Earth's total surface area. The continent, which has long been home to the majority of the human population, was the site of many of the first civilizations. Asia is notable for not only its overall large size and population, but also dense and large settlements, as well as vast barely populated regions. Its 4.5 billion people constitute roughly 60% of the world's population.",
    author: "Halim Nait",
    date: "2025-02-01",
  },
];
const BlogsCom = () => {
  return (
    <div className="py-10">
      <div data-aos="fade-up" className="container justify-self-center w-full ">
        <h1 className="my-8 border-l-8 border-active py-2 pl-2 text-3xl font-bold ">
          Our latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {BlogsData.map((item, index) => (
            <BlogCard key={index} {...item} />
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default BlogsCom;
