import * as React from "react";
import dynamic, { LoaderComponent } from "next/dynamic";
import { Box } from "@chakra-ui/react";

const HomeSectionComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/HomeSectionComponent"));
const AboutSectionComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/AboutSectionComponent"));
const SkillsSectionComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/SkillsSectionComponent"));
const PortfolioSectionComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/PortfolioSectionComponent"));
// const GetInTouchComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/GetInTouchComponent"));
 const BlogSectionComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/BlogSectionComponent"));
 const FooterComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/FooterComponent"));


export default function MainPage(): React.JSX.Element {
  return (
    <Box
      as="main"
      backgroundColor="background"
    >
      <HomeSectionComponent />
      <AboutSectionComponent />
      <SkillsSectionComponent />
      <PortfolioSectionComponent />
      <BlogSectionComponent />
      <FooterComponent />
    </Box>
  );
}
