import { Metadata } from "next";
import FeaturesCards from "../components/features";
import ServicesCards from "../components/services";
import { name, about, bio } from "../content/aboutMe";
import avatar from "../../public/assets/avatar.webp";
import image from "../../public/assets/bg-home.webp";
import { IconArrowUpRight } from "@tabler/icons-react";
import { createStyles, Container, rem, Image } from "@mantine/core";

export const metadata: Metadata = {
  title: "Welcome to My Portfolio",
  description:
    "Discover my portfolio and explore examples of my work in web design, graphic design, and branding. I offer creative solutions to help you elevate your brand and achieve your goals.",
};

export const useStyles = createStyles((theme) => ({
  hero: {
    display: "flex",
    justifyContent: "space-betwwen",
    alignItems: "center",
  },

  container: {
    width: "70%",
    margin: "0 auto",
    minHeight: "75vh",

    [theme.fn.smallerThan("sm")]: {
      width: "95%",
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
}));

export default function Home() {
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.hero}>
        <section>
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
        </section>
        <Image src={image.src} className={classes.image} alt="" />
      </div>
      <ServicesCards />
      <FeaturesCards />
    </Container>
  );
}
