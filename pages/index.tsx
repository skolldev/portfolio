import "../styles/index.css";

import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => (
    <div>
        <Head>
            <title>Alexander May</title>
            <link rel="manifest" href="/static/manifest.json" />
            <meta name="theme-color" content="#72B340" />
            <meta name="description" content="Portfolio Page" />
        </Head>
        <h1 className="text-purple-700 text-4xl">Welcome!</h1>
    </div>
);

export default Home;
