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
        <span className="inline-block text-2xl xl:text-3xl text-center mr-2">
            <FontAwesomeIcon icon={props.icon} />
        </span>
        <span>{props.text}</span>
    </a>
);

export default function Landing() {
    return (
        <div className="p-8 text-black flex flex-col justify-center items-start block lg:h-screen">
            <h1 className="text-3xl font-bold mb-4 self-center lg:hidden">Hi there!</h1>
            <div className=" text-black flex flex-col lg:flex-row items-start w-full justify-center lg:px-12">
                <img
                    src="./portrait.png"
                    className="rounded-full shadow-md mb-8 lg:mb-0 h-64 w-64 xl:h-80 xl:w-80 self-center lg:order-1 object-cover"
                    alt="Picture of me"
                />
                <div className="flex flex-col pt-2 xl:pt-0 lg:mr-8 xl:mr-12">
                    <h1 className="text-2xl xl:text-3xl font-bold mb-2">
                        My name is <span className="text-purple-700">Alexander May</span>
                    </h1>
                    <h1 className={`text-xl xl:text-2xl`}>
                        I'm a{" "}
                        <TypeWriter
                            items={["frontend dev", "powerlifter", "backend dev", "coach", "nerd"]}
                        />
                    </h1>
                    <p className="text-lg xl:text-2xl max-w-lg text-left mb-2 leading-relaxed">
                        currently living in munich. I love building awesome web applications,
                        learning new things, cooking, lifting heavy stuff and teaching other people
                        how to lift heavy stuff
                    </p>
                    <p className="text-lg xl:text-xl max-w-xl text-left mb-2">
                        I'd love to get to know you!
                    </p>
                    <div id="links" className="flex flex-row text-xl xl:text-2xl">
                        <IconLink text="CV" link="https://github.com/xDecus" icon={faFileAlt} />
                        <IconLink text="Github" link="https://github.com/xDecus" icon={faGithub} />
                        <IconLink text="Email" link="mailto:alex.may.ush@web.de" icon={faAt} />
                    </div>
                </div>
            </div>
        </div>
    );
}
