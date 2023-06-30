import { Metadata } from "next";
import { motion } from "framer-motion";
import FeaturesCards from "../components/features";
import ServicesCards from "../components/services";
import { name, about, bio } from "../content/aboutMe";
import avatar from "../../public/assets/avatar.webp";
import image from "../../public/assets/hero.gif";
import { IconArrowUpRight } from "@tabler/icons-react";
import { createStyles, Container, rem, Image } from "@mantine/core";
import { useInView } from "react-intersection-observer";

export const metadata: Metadata = {
  title: "Welcome to My Portfolio",
  description:
    "Discover my portfolio and explore examples of my work in web design, graphic design, and branding. I offer creative solutions to help you elevate your brand and achieve your goals.",
};

export const useStyles = createStyles((theme) => ({
  container: {
    width: "70%",
    margin: "0 auto",
    minHeight: "75vh",

    [theme.fn.largerThan("md") && theme.fn.smallerThan("lg")]: {
      width: "80%",
    },

    [theme.fn.smallerThan("sm")]: {
      width: "95%",
    },
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  content: {
    maxWidth: "50%",
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  link: {
    "&:hover": {
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  portfolio_title: {
    color: theme.fn.primaryColor(),
    position: "relative",
    marginBottom: '2rem',
    
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: rem(100),
      height: rem(10),
      borderBottom: `3px solid ${theme.fn.primaryColor()}`,
    },
  },
}));

const Home = () => {
  const { classes } = useStyles();

  const sectionVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const [heroRef, heroInView] = useInView({
    triggerOnce: true
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true
  });

  return (
    <Container className={classes.container}>
      <motion.div
        ref={heroRef}
        className={classes.hero}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <motion.section
          className={classes.content}
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className={`font-bold text-3xl font-serif ${classes.title}`}>
            {name}
          </h1>
          <p className={`my-5 max-w-[460px] ${classes.description}`}>
            {about()}
          </p>
          <div className="flex items-center justify-start gap-[5px] sm:gap-5">
            <Image
              alt={name}
              src={avatar.src}
              width={100}
              height={100}
              radius={100}
            />
            <ul className="flex items-start justify-center flex-col font-sm text-neutral-500 dark:text-neutral-400">
              <li>
                <a
                  className={`flex items-center ${classes.link} transition-all`}
                  rel="noreferrer"
                  target="_blank"
                  href="https://twitter.com/amjad_natouf"
                >
                  <IconArrowUpRight />
                  <p className="h-7">follow me on twitter</p>
                </a>
              </li>
              <li>
                <a
                  className={`flex items-center ${classes.link}  transition-all`}
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/amjadnatouf"
                >
                  <IconArrowUpRight />
                  <p className="h-7">See my GitHub</p>
                </a>
              </li>
            </ul>
          </div>
          <p className={`my-5 max-w-[500px] ${classes.description}`}>{bio()}</p>
        </motion.section>
        <motion.div
          className={classes.image}
          initial="visible"
          animate={heroInView ? "visivle" : "hidden"}
          variants={imageVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image src={image.src} alt="" />
        </motion.div>
      </motion.div>
      <div ref={servicesRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.5 }}
        >
          <ServicesCards />
        </motion.div>
      </div>
      <div ref={featuresRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.5 }}
        >
          <FeaturesCards />
        </motion.div>
      </div>
    </Container>
  );
};

export default Home;
