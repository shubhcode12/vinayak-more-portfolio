import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const navItems = [
    {
      title: "home",
      path: "/",
    },
    {
      title: "about",
      path: "/about",
    },
    {
      title: "contact",
      path: "/contact",
    },
    {
      title: "projects",
      path: "/projects",
    },
  ];

  return (
    <div className="flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4">
      <Image
        src="/logo.webp"
        alt="neopaisa Logo"
        width={180}
        height={40}
        priority
      />
      {navItems.map((navItem) => (
        <Link
          href={navItem.path}
          className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500">
          <span className="hidden sm:block text-sm">{navItem.title}</span>
        </Link>
      ))}

      <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
        <span>Download Resume</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </button>
    </div>
  );
}
