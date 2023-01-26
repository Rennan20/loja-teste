import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CartContextProvider } from "@/context/CartContext";
import { Container } from "@/styles/pages/app";
import { defaultTheme } from "@/styles/theme/default";
import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CartContextProvider children={undefined}>
        <Container>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </CartContextProvider>
    </ThemeProvider>
  );
}
