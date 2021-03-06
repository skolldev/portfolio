import App from "next/app";
import React from "react";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

class DefaultApp extends App {
    public render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}

export default DefaultApp;
