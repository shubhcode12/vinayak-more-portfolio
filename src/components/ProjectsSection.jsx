import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  const projectItems = [
    {
      title: "Netflix Clone",
      technology: "React - Redux - CSS",
      description: "build netflix clone for final year project",
      image: "/project1.jpg",
      link: "https://google.com",
    },
    {
      title: "Zomato Clone",
      technology: "React - Redux - CSS",
      description: "build netflix clone for final year project",
      image: "/project1.jpg",
      link: "https://google.com",
    },
    {
      title: "Swiggy Clone",
      technology: "React - Redux - CSS",
      description: "build netflix clone for final year project",
      image: "/project1.jpg",
      link: "https://google.com",
    },
    {
        title: "Swiggy Clone",
        technology: "React - Redux - CSS",
        description: "build netflix clone for final year project",
        image: "/project1.jpg",
        link: "https://google.com",
      },{
        title: "Swiggy Clone",
        technology: "React - Redux - CSS",
        description: "build netflix clone for final year project",
        image: "/project1.jpg",
        link: "https://google.com",
      },{
        title: "Swiggy Clone",
        technology: "React - Redux - CSS",
        description: "build netflix clone for final year project",
        image: "/project1.jpg",
        link: "https://google.com",
      },{
        title: "Swiggy Clone",
        technology: "React - Redux - CSS",
        description: "build netflix clone for final year project",
        image: "/project1.jpg",
        link: "https://google.com",
      },{
        title: "Swiggy Clone",
        technology: "React - Redux - CSS",
        description: "build netflix clone for final year project",
        image: "/project1.jpg",
        link: "https://google.com",
      },{
        title: "Swiggy Clone",
        technology: "React - Redux - CSS",
        description: "build netflix clone for final year project",
        image: "/project1.jpg",
        link: "https://google.com",
      },{
        title: "Swiggy Clone",
        technology: "React - Redux - CSS",
        description: "build netflix clone for final year project",
        image: "/project1.jpg",
        link: "https://google.com",
      },
  ];

  return (
    <div className="h-full py-28 w-full rounded-md flex md:items-center md:justify-center bg-gradient-to-br from-[#000000] to-[#141313] antialiased bg-grid-white/[0.02] relative overflow-hidden z-0">
      <div className="p-0 max-w-7xl mx-auto relative z-10 w-full pt-0 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Projects
        </h1>

        <div className="grid py-10 md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {projectItems.map((item, index) => (
            <div key={index} className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4">
              <div className="w-full h-48 relative">
                <Image
                  src={item.image}
                  alt="lol"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-sm font-medium text-blue-500 dark:text-blue-400">
                  {item.technology}
                </div>
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-lg">
                  {item.title}
                </div>
                <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                  <span>View Project</span>
                  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
