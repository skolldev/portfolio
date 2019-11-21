import React, { Component } from "react";
import { skills } from "./skills-list";

export default class Skills extends Component {
    public render() {
        return (
            <div className="p-8 xl:p-0 text-black flex h-screen items-center justify-center">
                <div className="bg-white max-w-6xl flex flex-row flex-wrap shadow-lg rounded-lg justify-around">
                    {skills.map(skill => (
                        <div
                            key={skill.name}
                            className="my-6 lg:m-6 w-32 flex flex-col items-center"
                        >
                            <img
                                src={skill.iconUrl}
                                alt={skill.name}
                                className="h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 mb-2"
                            />
                            <span className="text-lg">{skill.name}</span>
                        </div>
                    ))}
                </div>
                <style jsx>{`
                    img {
                        filter: grayscale(100%);
                    }
                    img:hover {
                        filter: none;
                    }
                `}</style>
            </div>
        );
    }
}
