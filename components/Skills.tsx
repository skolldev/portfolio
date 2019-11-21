import React, { Component } from "react";
import { skills } from "./skills-list";

export default class Skills extends Component {
    public render() {
        return (
            <div className="px-8 xl:p-0 sm:h-screen text-black flex items-center justify-center">
                <div className="bg-white max-w-6xl shadow-lg rounded-lg ">
                    <h1 className="text-center text-3xl lg:text-4xl  font-bold pt-4">
                        Skills & Technologies
                    </h1>
                    <div className="justify-around flex flex-row flex-wrap">
                        {skills.map(skill => (
                            <div
                                key={skill.name}
                                className="my-6 lg:m-6 w-32 flex flex-col items-center"
                            >
                                <img
                                    src={skill.iconUrl}
                                    alt={skill.name}
                                    className={`h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 mb-2 ${skill.name}`}
                                />
                                <span className="text-lg skill-name">{skill.name}</span>
                                <style jsx>{`
                                    img {
                                        filter: grayscale(100%);
                                        transition: transform 300ms;
                                    }
                                    img:hover {
                                        filter: none;
                                        transform: scale(1.2);
                                    }
                                    .Jenkins {
                                        margin-bottom: 0;
                                        margin-top: 0.5rem;
                                        width: auto;
                                    }
                                    .SVN {
                                        margin-bottom: 0;
                                        margin-top: 0.5rem;
                                    }
                                    .skill-name {
                                        transition: transform 300ms;
                                    }
                                    img:hover + .skill-name {
                                        transform: translateY(0.3rem);
                                    }
                                `}</style>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
