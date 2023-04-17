import { Project } from "@/content/projects";
import { Anchor, Image, Text, Title } from "@mantine/core";

interface projectProps {
  project: Project;
}

export default function ProjectCard({ project }: projectProps) {
  return (
    <ul className="project">
      <li className="projects-list">
        <div className="project-image">
          <Image
            src={project.image}
            alt={project.title}
            height="100%"
            width="100%"
          />
        </div>
        <div className="project-content text-left">
          <Text>project features</Text>
          <Title order={3} size={40} my={9}>
            {project.title}
          </Title>
          <Text
            className="shadow-lg relative z-20 p-4 sm:p-6 rounded bg-slate-800 text-base md:text-lg"
            color={"#fff"}
          >
            {project.description}
          </Text>
          <ul className="flex flex-wrap mt-3 technology">
            {project.technology.map((tech, index) => (
              <li
                className="text-gray-700 dark:text-gray-400 text-sm mr-2 md:mr-4 mb-2"
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap mt-3 technology">
            {project.links.map((link, index) => (
              <Anchor
                href={link.link}
                target="_blank"
                key={index}
                mx={5}
                aria-label="link"
              >
                {link.title}
              </Anchor>
            ))}
          </div>
        </div>
      </li>
    </ul>
  );
}
