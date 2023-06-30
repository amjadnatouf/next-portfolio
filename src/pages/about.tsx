import { motion } from "framer-motion";
import SocialMedia from "../components/socialMedia";
import { Container, Divider, Group } from "@mantine/core";
import { Metadata } from "next";
import { useStyles } from "./index";
import { useInView } from "react-intersection-observer";

export const metadata: Metadata = {
  title: "About Amjad",
  description: "Front-end developer passionate about creating seamless user experiences.",
};

export default function About() {
  const { classes } = useStyles();

  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const socialMediaVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const [containerRef, containerInView] = useInView({
    triggerOnce: true
  });

  const [socialMediaRef, socialMediaInView] = useInView({
    triggerOnce: true
  });

  return (
    <Container className={classes.container}>
      <motion.section
        style={{ maxWidth: "65ch" }}
        initial="hidden"
        animate={containerInView ? "visible" : "hidden"}
        variants={containerVariants}
        transition={{ duration: 1 }}
        ref={containerRef}
      >
        <h1 className="font-bold text-3xl font-serif">About Amjad</h1>
        <p className="my-5">
          Hey there, I&apos;m Amjad, a full stack developer.
        </p>
        <div className="">
          <p>
            I&apos;m passionate about creating seamless and visually-pleasing
            user experiences. I&apos;m currently working at Swedcon 18 and have
            a background in software engineering. My expertise covers full-stack
            development with Node.js and MongoDB, but I enjoy focusing on the
            front-end and crafting exceptional user experiences.
          </p>
          <Divider my={30} />
          <p className="mb-5">
            Apart from my work, I enjoy volunteering at the local food bank once
            a month. During my last volunteer shift, I was responsible for
            sorting dry goods to provide food to 300 community members in need.
            Volunteering at the food bank not only allows me to serve my
            community but also introduces me to new people from different
            backgrounds who share my passion for giving back.
          </p>
          <p className="mb-5">
            In addition to volunteering, I also enjoy traveling to new places,
            swimming, solving puzzles, and playing video games in my free time.
            These activities help me recharge and keep me motivated to bring my
            best to the job.
          </p>
          <p className="mb-5">
            I understand that your company is involved in a food drive that
            helps the food bank, and I&apos;m excited to hear that. Do you ever
            organize company outings that involve volunteering in the community?
            I would be thrilled to participate and contribute to such
            initiatives.
          </p>
        </div>
      </motion.section>

      <motion.div
        initial="hidden"
        animate={socialMediaInView ? "visible" : "hidden"}
        variants={socialMediaVariants}
        transition={{ duration: 0.5, delay: 0.5 }}
        ref={socialMediaRef} // Attach the ref to the div element
      >
        <Group position="left" sx={{ margin: "2rem 0" }}>
          <SocialMedia />
        </Group>
      </motion.div>
    </Container>
  );
}
