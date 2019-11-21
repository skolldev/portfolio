import React, { Component } from "react";
import { skills } from "./skills-list";

export default class Skills extends Component {
    public render() {
        return (
            <div>
                {skills.map(skill => (
                    <div key={skill.name}>
                        <span>{skill.name}</span>
                        <img src={skill.iconUrl} alt={skill.name} className="h-8 w-8" />
                    </div>
                ))}
            </div>
        );
    }
}
