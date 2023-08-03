import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { HiMail } from "react-icons/hi";
import { staggeredContainer } from "@/utils";
import { FaGithub, FaInstagram, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import NowPlaying from "../pages/api/NowPlaying";

const HoverLink = chakra.a;

export default function FooterComponent(): React.JSX.Element {
return (
  <section id="contact">
        <Box
        as="section"
        id="contact"
        width="100vw"
        paddingBottom="1rem"
    >
        <Box as="div" textAlign="center">
        <Text as="h1" fontSize="5xl">
          Get in Touch
        </Text>
        <Text>So that we can talk more about...</Text>
        <Flex justify="center" align="center" gap={4} my={4}>
          <HoverLink
      aria-label="Email"
      display="inline-block"
      borderRadius="full"
      p="2"
      transition="transform 0.3s"
      _hover={{
        transform: 'scale(1.25)',
      }}
      href="mailto:iamkalai33@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
            <HiMail style={{ cursor: "pointer" }} fontSize="38px" />
          </HoverLink>
          <Link
            aria-label="Github"
            className="contact-icon transition duration-300 hover:scale-125"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Kalai2773/"
          >
            <FaGithub style={{ cursor: "pointer" }} fontSize="32px" />
          </Link>
          <Link
            aria-label="Linkedin"
            className="contact-icon transition duration-300 hover:scale-125"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in//"
          >
            <FaLinkedin style={{ cursor: "pointer" }} fontSize="32px" />
          </Link>
          <Link
            aria-label="Instagram"
            className="contact-icon transition duration-300 hover:scale-125"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/kxlai_3/"
          >
            <FaInstagramSquare style={{ cursor: "pointer" }} fontSize="32px" />
          </Link>
        </Flex>
        <Box as="div" textAlign="center">
          <NowPlaying />
        </Box>
        <Text>Copyright © 2023</Text>
        <Link aria-label="OldSite" color="gray.400" fontSize="sm" target="_blank" rel="noreferrer" href="https://portfolio-kalai2773.vercel.app/">
          View Old Site
        </Link>
        </Box>
      </Box>
  </section>
);
}
