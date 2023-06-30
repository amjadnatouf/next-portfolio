import { Project } from "@/content/projects";
import { Anchor, Image, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface projectProps {
  project: Project;
}

export default function ProjectCard({ project }: projectProps) {
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  return (
    <ul className="project">
      <li className="projects-list">
        <div className="project-image" ref={ref}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className="cursor-pointer"
              src={project.image}
              alt={project.title}
              height="100%"
              width="100%"
              onClick={() => window.open(project.links[0].link, "_blank")}
            />
          </motion.div>
        </div>
        <motion.div
          className="project-content text-left"
          ref={ref} 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Text>project features</Text>
          <Title order={3} size={40} my={9}>
            {project.title}
          </Title>
          <motion.div
            className="shadow-lg relative z-20 p-4 sm:p-6 rounded bg-slate-800 text-base md:text-lg"
            color={"#fff"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.description}
          </motion.div>
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

          <motion.div
            className="flex flex-wrap mt-3 technology"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
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
          </motion.div>
        </motion.div>
      </li>
    </ul>
  );
}
