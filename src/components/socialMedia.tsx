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

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },

    [theme.fn.smallerThan("md")]: {
      width: "30%",
    },
    "&:hover": {
      color: theme.white,
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
          className={`py-2 h-auto py-3 ${classes.icon}`}
          leftIcon={<link.icon />}
          rightIcon={<IconArrowUpRight size="2rem" />}
          onClick={() => window.open(link.link, "_blank")}
        >
          {link.label}
        </Button>
      ))}
    </>
  );
}
