import "../styles/index.css";

import { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/Landing";

const Home: NextPage = () => (
    <div>
        <Head>
            <title>Alexander May</title>
            <link rel="manifest" href="/static/manifest.json" />
            <meta name="theme-color" content="#edf2f7" />
            <meta name="description" content="Portfolio Page" />
        </Head>
        <Landing />
    </div>
);

export default Home;
