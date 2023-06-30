import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Flex,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  container: {
    width: "70%",
    margin: "0 auto",

    [theme.fn.largerThan("md") && theme.fn.smallerThan("lg")]: {
      width: "80%",
    },

    [theme.fn.smallerThan("sm")]: {
      width: "95%",
    },
  },
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 1.1)`,
    paddingBottom: `calc(${theme.spacing.xl} * 1.1)`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  span: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function FooterLinks() {
  const { classes, theme } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <Flex
          justify={{ base: "center", md: "space-between" }}
          align={"center"}
        >
          <Text
            color={theme.colorScheme === "dark" ? "#fffd" : "dark"}
            size="sm"
          >
            Copyright © 2020 Amjad M Natouf
            <span className={classes.span}> - Powered by Namecheap.</span>
          </Text>

          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg" aria-label="Twitter">
              <IconBrandTwitter size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandYoutube
                size="1.05rem"
                stroke={1.5}
                aria-label="Youtube"
              />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandInstagram
                size="1.05rem"
                stroke={1.5}
                aria-label="Instagram"
              />
            </ActionIcon>
          </Group>
        </Flex>
      </Container>
    </footer>
  );
}
