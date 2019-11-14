import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { faAt, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import WhoAmI from "./WhoAmI";

export default function Landing() {
    return (
        <div className="p-12 text-black flex flex-col justify-center items-start">
            <h1 className="text-3xl font-bold mb-4 self-center">Hi there!</h1>
            <img
                src="./portrait.png"
                className="rounded-full shadow-md mb-8 h-64 w-64 self-center"
                alt="Picture of me"
            />
            <h1 className="text-2xl font-bold mb-2">
                My name is <span className="text-purple-700">Alexander May</span>
            </h1>
            <WhoAmI className="" />
            <p className="text-lg max-w-xl text-left mb-2 leading-relaxed">
                currently living in munich. I love building awesome web applications, learning new
                things, cooking, lifting heavy stuff and teaching other people how to lift heavy
                stuff
            </p>
            <p className="text-lg max-w-xl text-center mb-2">I'd love to get to know you!</p>
            <div id="links" className="flex flex-row text-xl">
                <a className="hover:text-purple-600 mr-6" target="blank">
                    <span className="inline-block text-2xl text-center w-8 h-8 mr-1 ">
                        <FontAwesomeIcon icon={faFileAlt} />
                    </span>
                    <span>CV</span>
                </a>
                <a
                    className="hover:text-purple-600 mr-6"
                    href="https://github.com/xDecus"
                    target="blank"
                >
                    <span className="inline-block text-2xl text-center w-8 h-8 mr-1">
                        <FontAwesomeIcon icon={faGithub} />
                    </span>
                    <span>Github</span>
                </a>
                <a className="hover:text-purple-600" href="mailto:alex.may.ush@web.de">
                    <span className="inline-block text-2xl text-center w-8 h-8 mr-1">
                        <FontAwesomeIcon icon={faAt} />
                    </span>
                    <span>Email</span>
                </a>
            </div>
        </div>
    );
}
