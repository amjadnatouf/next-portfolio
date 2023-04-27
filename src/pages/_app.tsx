import Head from "next/head";
import "@/styles/globals.css";
import { useState } from "react";
import Navbar from "../components/navbar";
import FooterLinks from "../components/footer";
import NextApp, { AppProps, AppContext } from "next/app";
import { getCookie, setCookie } from "cookies-next";
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
} from "@mantine/core";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    // when color scheme is updated save it to cookie
    setCookie("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
    <>
      <Head>
        <title>Amjad Natouf portfolio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Welcome to Amjad Natouf's portfolio. Discover my latest projects and learn more about my skills and experience."
        />
        <meta property="og:title" content="Amjad Natouf portfolio" />
        <meta
          property="og:description"
          content="Welcome to Amjad Natouf's portfolio. Discover my latest projects and learn more about my skills and experience."
        />
        <meta property="og:url" content="https://www.amjadnatouf.com/" />
        <meta property="og:site_name" content="Amjad Natouf portfolio" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Navbar
            links={[
              { link: "home", label: "Home" },
              { link: "about", label: "About" },
              { link: "portfolio", label: "Portfolio" },
              { link: "contact", label: "Contact" },
            ]}
          />
          <Component {...pageProps} />
          <FooterLinks />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie("mantine-color-scheme", appContext.ctx) || "light",
  };
};
