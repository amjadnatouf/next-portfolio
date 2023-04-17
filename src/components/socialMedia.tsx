import { Button, createStyles } from "@mantine/core";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    background: "transparent",
    border: "1px solid rgb(55 65 81 /1)",
    width: "auto",
    minHeight: "4rem",

    [theme.fn.smallerThan("xs")]: {
      width: "100%",
    },

    "&:hover": {
      color: theme.white,
      background: theme.fn.darken("#228be6", 0.05),
    },
  },
}));

const socialMediaLinks = [
  {
    icon: IconBrandGithub,
    label: "GitHub",
    link: "https://github.com/amjadnatouf",
  },
  {
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/amjad-natouf/",
  },
  {
    icon: IconBrandTwitter,
    label: "Twitter",
    link: "https://twitter.com/amjad_natouf",
  },
];

export default function SocialMediaButtons() {
  const { classes } = useStyles();

  return (
    <>
      {socialMediaLinks.map((link) => (
        <Button
          key={link.label}
          className={classes.icon}
          leftIcon={<link.icon />}
          rightIcon={<IconArrowUpRight />}
          onClick={() => window.open(link.link, "_blank")}
        >
          {link.label}
        </Button>
      ))}
    </>
  );
}
