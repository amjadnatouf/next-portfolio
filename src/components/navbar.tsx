import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  ActionIcon,
  useMantineColorScheme,
  Overlay,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import MySvg from "../../public/assets/logo";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  logo: {
    fill: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "70%",
    margin: "0 auto",

    [theme.fn.smallerThan("sm")]: {
      width: "95%",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export default function Navbar({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        link.label === "home"
          ? router.push("/")
          : router.push(`/${link.label}`);

        close();
      }}
    >
      {link.label}
    </a>
  ));

  const handleClose = () => {
    if (opened) close();
  };

  return (
    <Header
      height={HEADER_HEIGHT}
      mb={120}
      className={classes.root}
      onClick={handleClose}
    >
      <Container className={classes.header}>
        <div
          style={{ width: "30px", cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          <MySvg fill={classes.logo} />
        </div>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <div className="flex flex-row-reverse items-center justify-center">
          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
          </ActionIcon>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          {opened && (
            <Overlay opacity={0.2} fixed={true} zIndex={-1} onClick={close} />
          )}
          <Transition
            transition="pop-top-right"
            duration={200}
            mounted={opened}
          >
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </div>
      </Container>
    </Header>
  );
}
