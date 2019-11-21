import "../styles/index.css";

import { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/Landing";
import Skills from "../components/Skills";

const Home: NextPage = () => (
    <div>
        <Head>
            <title>Alexander May</title>
            <meta
                name="google-site-verification"
                content="sOxMFnUqn1CIrhafC5Q76SUrcfbno5sgjQaMZjzzXhY"
            />
            <meta name="description" content="Portfolio Page" />
            // @ts-ignore
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        </Head>
        <Landing />
        <Skills />
    </div>
);

export default Home;
