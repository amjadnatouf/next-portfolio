import { getProjects } from "../content/projects";
import ProjectCard from "../util/projectCard";
import { Container, Title } from "@mantine/core";
import { Metadata } from "next";
import { useStyles } from "./index";

export const metadata: Metadata = {
  title: "Amjads Portfolio",
  description:
    "Examples of my best work in web design, graphic design, and branding. Explore to see how I can bring your vision to life!",
};

export default function Portfolio() {
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      <section className="mt-32">
        <Title order={2} size={30} my={20}>
          Some Things I’ve Built
        </Title>
        <>
          {getProjects().map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </>
      </section>
    </Container>
  );
}
