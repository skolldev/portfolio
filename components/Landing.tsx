import { faGit, faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { faAt, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TypeWriter from "./Typewriter";

interface ILinkProps {
    link: string;
    icon: IconDefinition;
    text: string;
}
const IconLink = (props: ILinkProps) => (
    <a className="hover:text-purple-600 mr-6" href={props.link} target="blank">
        <span className="inline-block text-2xl text-center mr-2 align-text-bottom">
            <FontAwesomeIcon icon={props.icon} />
        </span>
        <span>{props.text}</span>
    </a>
);

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
            <h1 className={`text-xl`}>
                I'm a{" "}
                <TypeWriter
                    items={["frontend dev", "powerlifter", "backend dev", "coach", "nerd"]}
                />
            </h1>
            <p className="text-lg max-w-xl text-left mb-2 leading-relaxed">
                currently living in munich. I love building awesome web applications, learning new
                things, cooking, lifting heavy stuff and teaching other people how to lift heavy
                stuff
            </p>
            <p className="text-lg max-w-xl text-center mb-2">I'd love to get to know you!</p>
            <div id="links" className="flex flex-row text-xl">
                <IconLink text="CV" link="https://github.com/xDecus" icon={faFileAlt} />
                <IconLink text="Github" link="https://github.com/xDecus" icon={faGithub} />
                <IconLink text="Email" link="mailto:alex.may.ush@web.de" icon={faAt} />
            </div>
        </div>
    );
}
