import Image from "next/image";
import styles from "./page.module.css";
import {
  Heading,
  Flex,
  Center,
  Text,
  Stack,
  VStack,
  Container,
  Button,
} from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import { NavbarDemo } from "@/components/header";
import Link from "next/link";
import AboutHomeSection from "@/components/AboutHomeSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <NavBar />

      <AboutHomeSection />

      <ProjectsSection />
    </>
  );
}
