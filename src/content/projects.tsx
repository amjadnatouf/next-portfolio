import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { ReactElement } from "react";
import carelyo from "../../public/assets/carelyo.webp";
import loanCalc from "../../public/assets/loan-calculator.webp";

interface linksObject {
  link: string;
  title: ReactElement;
}

export type Project = {
  id: string;
  image: string;
  description: string;
  title: string;
  technology: string[];
  links: linksObject[];
};

export function getProjects(): Project[] {
  return [
    {
      id: "1",
      image: carelyo.src,
      description:
        "Carelyo is a healthcare app built that offer patients a simple and convenient way to schedule appointments and receive medical care remotely. Say hello to the future of healthcare with Carelyo.",
      title: "Carelyo Clinic",
      technology: ["react", "mantine", "daily", "paystack", "java"],
      links: [
        {
          link: "https://login-dev.carelyo.io",
          title: <IconExternalLink />,
        },
        {
          link: "https://github.com/amjadnatouf",
          title: <IconBrandGithub />,
        },
      ],
    },
    {
      id: "2",
      image: loanCalc.src,
      description:
        "Take control of your finances with our loan calculator app built on React, styled-components, and rc-slider. With customizable design and easy input of loan amounts, simplify your financial planning hassle-free with our app. Calculate loan payments, interest rates, and loan amounts with ease.",
      title: "Loan Calculator",
      technology: ["react", "styled-components", "rc-slider", "npm"],
      links: [
        {
          link: "https://amjadnatouf.github.io/loan-calculator/",
          title: <IconExternalLink />,
        },
        {
          link: "https://github.com/amjadnatouf/loan-calculator",
          title: <IconBrandGithub />,
        },
      ],
    },
  ];
}
