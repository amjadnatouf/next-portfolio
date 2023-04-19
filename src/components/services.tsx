import {
  createStyles,
  Paper,
  Text,
  ThemeIcon,
  rem,
  Group,
  SimpleGrid,
  Title,
} from "@mantine/core";
import {
  IconCrown,
  IconDeviceGamepad2,
  IconDevices,
  IconGlobe,
} from "@tabler/icons-react";

const mockdata = [
  {
    title: "Responsive Design",
    description:
      "I specialize in creating responsive websites that adapt seamlessly to any device or screen size. Let me work my responsive design wizardry to ensure your website looks great on every device.",
    icon: IconDevices,
  },
  {
    title: "UI/UX Designer",
    description:
      "With my expertise in user interface and user experience design, I can create a website that not only looks beautiful but also functions flawlessly. Let me be your UI/UX ninja and elevate your online presence.",
    icon: IconCrown,
  },
  {
    title: "SEO-Optimized Web Design",
    description:
      "I specialize in creating beautiful and functional websites that are optimized for search engines. Let me help your website stand out with SEO-optimized web design that drives traffic and leads.",
    icon: IconGlobe,
  },
  {
    title: "Interactive Web Applications",
    description:
      "With expertise in modern JavaScript frameworks like React and Angular, I create captivating web applications that engage visitors with responsive user interfaces. Let's work together to craft unforgettable user experiences.",
    icon: IconDeviceGamepad2,
  },
];

const useStyles = createStyles((theme) => ({
  services: {
    margin: "7.5rem auto",
  },

  title: {
    color: theme.fn.primaryColor(),
    position: "relative",
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

  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan("sm")]: {
      padding: `${theme.spacing.md} ${theme.spacing.sm}`,
    },

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.blue[6],
        theme.colors.gray[6]
      ),
    },
  },
}));

interface CardGradientProps {
  title: string;
  description: string;
}

export default function ServicesCards() {
  const { classes, theme } = useStyles();
  const services = mockdata.map((service) => (
    <Paper withBorder radius="md" className={classes.card} key={service.title}>
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: "blue", to: "gray" }}
      >
        <service.icon size={rem(28)} stroke={1.5} />
      </ThemeIcon>
      <Text size="xl" weight={500} mt="md">
        {service.title}
      </Text>
      <Text
        size="md"
        mt="sm"
        color={theme.colorScheme === "dark" ? "#fffd" : "dark"}
      >
        {service.description}
      </Text>
    </Paper>
  ));

  return (
    <section className={classes.services}>
      <Group position="left">
        <Title order={2} className={classes.title} size={40}>
          Services
        </Title>
      </Group>

      <SimpleGrid
        cols={2}
        spacing="xl"
        mt={25}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {services}
      </SimpleGrid>
    </section>
  );
}
