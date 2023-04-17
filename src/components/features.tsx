import {
  createStyles,
  Title,
  Text,
  Card,
  SimpleGrid,
  rem,
  Group,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";

const mockdata = [
  {
    title: "Timely and Exceeding Delivery",
    description:
      "I always deliver high-quality work on or before the deadline, exceeding expectations",
    icon: IconGauge,
  },
  {
    title: "Organized and Tidy Projects",
    description: "Practicing a clean workspace for efficient, detailed work.",
    icon: IconUser,
  },
  {
    title: "Client Satisfaction Guaranteed",
    description: "Providing personalized attention for outstanding results.",
    icon: IconCookie,
  },
];

const useStyles = createStyles((theme) => ({
  features: {
    margin: "7.5rem auto",
  },

  title: {
    color: theme.fn.primaryColor(),
    // color: theme.colorScheme === "dark" ? "#64ffda" : theme.fn.primaryColor(),
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

  sub_title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function FeaturesCards() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <section className={classes.features}>
      <Group position="left">
        <Title order={2} className={classes.title} size={40}>
          Features
        </Title>
      </Group>

      <Title order={2} className={classes.sub_title} ta="left" mt="sm">
        Unlocking My Unique Value: 3 Ways I Can Positively Impact Your Team
      </Title>

      <Text c="dimmed" className={classes.description} ta="left" mt="md">
        There are several compelling reasons why selecting me would be an
        excellent decision. Here are three key factors that set me apart and
        make me a valuable addition to your team:
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </section>
  );
}
