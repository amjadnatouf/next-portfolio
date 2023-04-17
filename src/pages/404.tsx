import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  rem,
} from "@mantine/core";
import { Metadata } from "next";
import image404 from "../../public/assets/404 Error-rafiki.svg";

const useStyles = createStyles((theme) => ({
  root: {
    width: "70%",
    margin: "0 auto",
    minHeight: "75vh",

    [theme.fn.smallerThan("sm")]: {
      width: "95%",
    },
  },

  title: {
    fontWeight: 900,
    fontSize: rem(34),
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32),
    },
  },

  grid: {
    alignItems: "center",
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export const metadata: Metadata = {
  title: "404 Error - Page Not Found",
  description:
    "Oops! The page you are looking for could not be found. Please check the URL and try again, or contact me if you need assistance.",
};

export default function NotFoundImage() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={20}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
        className={classes.grid}
      >
        <Image src={image404.src} className={classes.mobileImage} alt="" />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
          >
            Get back to home page
          </Button>
        </div>
        <Image src={image404.src} className={classes.desktopImage} alt="" />
      </SimpleGrid>
    </Container>
  );
}
