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
import { FormEvent } from "react";
import emailjs from '@emailjs/browser';
import { showNotification } from "@mantine/notifications";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

      [BREAKPOINT]: {
        marginTop:'2rem'
      },
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
      background: 'transparent',
      "&:hover": {
        color: theme.white,
        background: theme.fn.darken("#228be6", 0.05),
      },
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

export default function Contact() {
  const { classes } = useStyles();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm('service_2ue2355', 'template_1xv1njw', e.currentTarget, '44y2DhQy7o9qaoYpI')
      .then((result) => {
        console.log(result.text);
        showNotification({
          title: 'Success',
          message: "Your email has been sent. We'll get back to you soon :)",
          color: 'blue',
        });
      }, (error) => {
        console.log(error.text);
        showNotification({
          message: "Failed to send email.",
          color: 'red',
        });
      });
      e.currentTarget.reset()
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const contactsVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const [formRef, inViewForm] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [contactsRef, inViewContacts] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Container className={classes.container}>
      <div className={classes.wrapper}>
        <motion.div
          className={classes.contacts}
          ref={contactsRef}
          initial={inViewContacts ? "visible" : "hidden"}
          animate={inViewContacts ? "visible" : "hidden"}
          variants={contactsVariants}
          transition={{ duration: 0.5 }}
        >
          <Text fz="lg" fw={700} className={classes.title}>
            Contact information
          </Text>

          <ContactIconsList variant="white" />
        </motion.div>

        <motion.form
          ref={formRef}
          className={classes.form}
          onSubmit={handleSubmit}
          initial={inViewForm ? "visible" : "hidden"}
          animate={inViewForm ? "visible" : "hidden"}
          variants={formVariants}
          transition={{ duration: 0.5 }}
        >
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={1}>
              <TextInput label="Your name" placeholder="Your name" name="from_name" />
              <TextInput
                label="Your email"
                placeholder="hello@mantine.dev"
                required
                name="from_email"
              />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required name="subject" />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
              name="message"
            />

            <Group position="right" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </motion.form>
      </div>
    </Container>
  );
}
