import * as React from "react";
import { motion } from "framer-motion";
import { Box, Flex, Show, Tooltip } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { navigationLinkList } from "@/constants";
import { fadeInTransition, staggeredContainer } from "@/utils";

export default function SectionLayout(MainSection: React.FunctionComponent, activeSectionIndicator: string = ""): (props: any) => React.JSX.Element {
  return function WrappedSection(props: any): React.JSX.Element {
    return (
      <Box
        as={motion.div}
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true }}
        whileInView="show"
        initial="hidden"
        width="100vw"
        position="relative"
      >
        {/* Main Section */}
        <MainSection {...props} />

        {/* Active Section Dots Navigations */}
        <Show above="xl">
          <Flex
            direction="column"
            position="absolute"
            bottom="44%"
            right={6}
            zIndex={10}
            rowGap={2}
          >
            {navigationLinkList.map(
              ({ title, href }, index): React.ReactNode => (
                <Tooltip
                  label={title}
                  key={`#${title} - ${index}`}
                  placement="left"
                >
                  <Link
                    href={`/#${href}`}
                    scroll={false}
                    aria-label="Section Navigation Indicator Button"
                  >
                    <Box
                      as={motion.div}
                      variants={fadeInTransition("left", "tween", 0.2, 0.5)}
                      width={2}
                      height={2}
                      borderRadius="full"
                      backgroundColor={activeSectionIndicator === href ? "secondary" : "primary"}
                      transition="all 300ms"
                    />
                  </Link>
                </Tooltip>
              )
            )}
          </Flex>
        </Show>
      </Box>
    );
  };
}
