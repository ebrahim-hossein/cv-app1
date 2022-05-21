import Head from "next/head";
import Navbar from "../components/Navbar";
import { portfolio, work } from "../data/data";
import Info from "../components/Info";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Workhistory from "../components/Workhistory";
import ContactMe from "../components/ContactMe";

export default function Home({ workss, Portfolios }) {
  return (
    <div >
      <Head>
        <title>Hossein Dehghan</title>
        <meta name="Hossein Dehghan" content="Personal Website of Hossein Dehghan" />
        <link rel="icon" href="./logo.svg" />
      </Head>
      <Navbar />
      <main >
        <Info />
        <Skills />
        <Portfolio data1={Portfolios} />
        <Workhistory data={workss} />
        <ContactMe />
      </main>
    </div>
  );
}
export const getStaticProps = async () => {
  return {
    props: {
      workss: work.slice(0, 4),
      Portfolios: portfolio.slice(0, 4),
    },
  };
};
