import * as React from "react";
import { Box, Container, Flex, Grid, GridItem, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FaCode, FaPencilRuler } from "react-icons/fa";
import { SectionDescription, SectionSubtitle, SectionTitle, SkillCard } from "@/fragments";
import { skillList, toolsList } from "@/constants";
import SectionLayout from "@/layouts/SectionLayout";

function SkillsSectionComponent(): React.JSX.Element {
  return (
    <Box
      as="section"
      id="skills"
      width="100vw"
      paddingTop="7.5rem"
      paddingBottom="1rem"
    >
      {/* Skills Section Title */}
      <SectionTitle title="My Skills" />

      {/* Skills Section Content */}
      <Container
        marginTop={{ base: "1rem", lg: "2.5rem" }}
        maxWidth={{ base: "container.lg", xl: "75rem" }}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "70% 25%" }}
          gap={{ base: 10, lg: "5%" }}
        >
          {/* Skills Section Tech Stack & Tools Content */}
          <GridItem
            backgroundColor="card"
            shadow="lg"
            borderRadius="lg"
            padding={10}
            width={{ base: "90%", lg: "100%" }}
            marginX={{ base: "auto", lg: 0 }}
            order={{ base: 2, lg: 1 }}
            transition="all 300ms"
            _hover={{
              shadow: "2xl",
            }}
          >
            {/* Skills Section Tech Stack & Tools Tabs */}
            <Tabs
              align="center"
              variant="unstyled"
            >
              <TabList
                marginBottom={6}
                width="fit-content"
              >
                <Tab
                  fontWeight="semibold"
                  fontSize={{ base: "1em", lg: "1.1em" }}
                  _selected={{ color: "primary" }}
                  columnGap={2}
                >
                  <FaCode />
                  Tech Stack
                </Tab>
                <Tab
                  fontWeight="semibold"
                  fontSize={{ base: "1em", lg: "1.1em" }}
                  _selected={{ color: "primary" }}
                  columnGap={2}
                >
                  <FaPencilRuler />
                  Tools
                </Tab>
              </TabList>

              <TabIndicator
                height="2px"
                marginTop="-1.5rem"
                backgroundColor="primary"
              />

              <TabPanels>
                {/* Skills Section Tech Stack Content */}
                <TabPanel>
                  <Grid
                    templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)" }}
                    justifyContent="center"
                    gap={8}
                  >
                    {skillList.map(
                      ({ skillIcon, title, level }, index): React.ReactNode => (
                        <GridItem key={`Skills - ${index} : ${title}`}>
                          <SkillCard
                            skillIcon={skillIcon}
                            title={title}
                            level={level}
                          />
                        </GridItem>
                      )
                    )}
                  </Grid>
                </TabPanel>

                {/* Skills Section Tools Content */}
                <TabPanel>
                  <Grid
                    templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)" }}
                    justifyContent="center"
                    gap={8}
                  >
                    {toolsList.map(
                      ({ skillIcon, title, level }, index): React.ReactNode => (
                        <GridItem key={`Skills - ${index} : ${title}`}>
                          <SkillCard
                            skillIcon={skillIcon}
                            title={title}
                            level={level}
                          />
                        </GridItem>
                      )
                    )}
                  </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </GridItem>

          {/* Skills Section Subtitle & Description */}
          <GridItem order={{ base: 1, lg: 2 }}>
            <Flex
              height="100%"
              width="100%"
              direction="column"
              justifyContent="center"
              alignItems="center"
              rowGap={{ base: 3, lg: 5 }}
            >
              <SectionSubtitle textAlign={{ lg: "end" }}>Tech Stack & Tools</SectionSubtitle>

              <SectionDescription textAlign={{ base: "center", lg: "end" }}>There are some tech stack and tools that i&apos;ve learned and experienced</SectionDescription>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default SectionLayout(SkillsSectionComponent, "skills");
