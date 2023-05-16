import { AppProps } from "next/app";
import { IBM_Plex_Mono } from "next/font/google";
import "../styles/index.scss";

const ibm = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={ibm.className}>
      <Component {...pageProps} />;
    </main>
  );
}
