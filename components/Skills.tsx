import React, { Component } from "react";

interface ISkill {
    name: string;
    icon?: string;
}

export default class Skills extends Component {
    private skills: ISkill[] = [
        {
            name: "React.js"
        },
        {
            name: "Angular"
        },
        {
            name: "Javascript"
        },
        {
            name: "Typescript"
        },
        {
            name: "HTML/CSS"
        },
        {
            name: "SCSS"
        },
        {
            name: "Jasmine"
        },
        {
            name: "Jest"
        },
        {
            name: "Tailwind CSS"
        },
        {
            name: "Scrum"
        },
        {
            name: "Git"
        },
        {
            name: "SVN"
        },
        {
            name: "Next.js"
        },
        {
            name: "GitLab"
        },
        {
            name: "GitHub"
        },
        {
            name: ".NET"
        },
        {
            name: ".NET Core"
        },
        {
            name: "EF Core"
        },
        {
            name: "C#"
        },
        {
            name: "Jenkins"
        },
        {
            name: "MSSQL"
        },
        {
            name: "Protractor"
        },
        {
            name: "IIS"
        },
        {
            name: "Advanced Installer"
        }
    ];
    public render() {
        return <div />;
    }
}
