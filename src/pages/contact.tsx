import {
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  rem,
  Container,
} from "@mantine/core";
import { Metadata } from "next";
import { ContactIconsList } from "../components/contactIconsList";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch to discuss your project or learn more about my services. I offer web design, development, and branding expertise to help you achieve your goals.",
};

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    container: {
      width: "70%",
      margin: "0 auto",
      minHeight: "75vh",

      [theme.fn.smallerThan("sm")]: {
        width: "95%",
      },
    },
    wrapper: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
    },

    fields: {
      marginTop: rem(-12),
    },

    fieldInput: {
      flex: 1,
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      boxSizing: "border-box",
      position: "relative",
      flex: `0 0 ${rem(280)}`,
    },

    title: {
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      color: theme.colorScheme === "dark" ? theme.colors.gray[3] : theme.black,
      border: `1px solid ${theme.colors.gray[6]}`,
      "&:hover": {
        color: theme.white,
      },
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

export default function Contact() {
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text fz="lg" fw={700} className={classes.title}>
            Contact information
          </Text>

          <ContactIconsList variant="white" />
        </div>

        <form
          className={classes.form}
          onSubmit={(event) => event.preventDefault()}
        >
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={1}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput
                label="Your email"
                placeholder="hello@mantine.dev"
                required
              />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group position="right" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Container>
  );
}
