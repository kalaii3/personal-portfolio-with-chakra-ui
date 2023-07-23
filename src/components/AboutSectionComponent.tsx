import * as React from "react";
import { Box, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { SectionTitle } from "@/fragments";
import { profileData } from "@/constants";
import SectionLayout from "@/layouts/SectionLayout";

function AboutSectionComponent(): React.JSX.Element {
  const { pictures, descriptions } = profileData;

  return (
    <Box
      as="section"
      id="about"
      width="100vw"
      paddingTop="7.5rem"
      paddingBottom="1rem"
    >
      {/* About Section Title */}
      <SectionTitle title="About Me" />

      {/* About Section Content Container */}
      <Container maxWidth={{ base: "container.lg", xl: "75rem" }}>
        <Grid
          gap={{ base: "2.5rem", lg: "15%" }}
          templateColumns={{ base: "1fr", lg: "35% 50%" }}
        >
          {/* About Image Banner */}
          <GridItem>
          <Box
          h={["20.5rem", "30rem", "30rem"]} // Responsive heights for different screen sizes
          overflow="hidden"
          borderRadius="1rem"
          transform={{ lg: "rotate(1deg)", base: "none" }} // Rotate 1 degree on large screens (lg) and none on other screens
          transition="all 0.3s"
           _hover={{ transform: "rotate(0deg)" }} // Rotate back to 0 degrees on hover
        >
          <img
           src={pictures[1]} 
            alt={"about"} 
            />
        </Box>
          </GridItem>

          {/* About Section Information Content */}
          <GridItem>
            <Flex
              direction="column"
              justifyContent="center"
              height="100%"
            >
              {/* About Section Information Title And Description */}

              <Box
                textAlign={{ base: "center", lg: "start" }}
                marginTop={{ base: 6, lg: 0 }}
              >
                <Text
                  as="h2"
                  marginBottom={3}
                  fontWeight="semibold"
                  fontSize={{ base: "1.75rem", lg: "2rem" }}
                >
                  Hello i&apos;am{" "}
                  <Text
                    as="span"
                    color="primary"
                  >
                    Kalaiyarasan
                  </Text>
                </Text>

                <Box
                  borderBottom="2px"
                  borderColor={{ base: "transparent", lg: "text" }}
                  paddingBottom={8}
                  marginX={{ base: "auto", lg: 0 }}
                  paddingX={{ base: 4, lg: 0 }}
                  textAlign={{ base: "center", lg: "start" }}
                >
                  <Text
                    color="text"
                    fontWeight="normal"
                    fontSize={{ base: "1rem", lg: "lg" }}
                  >
                    {descriptions[1]}
                  </Text>
                </Box>
              </Box>
             
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default SectionLayout(AboutSectionComponent, "about");
