import React, { Component } from "react";
import TypeWriter from "./Typewriter";
interface IProps {
    className?: string;
}
interface IState {
    index: number;
}
export default class WhoAmI extends Component<IProps, IState> {
    public state: IState = { index: 0 };

    /**
     * Contains all words that will be iterated through to show in the I'm a xxx span
     */
    private words: string[] = ["frontend dev", "powerlifter", "backend dev", "coach", "nerd"];
    private timer!: NodeJS.Timeout;

    public componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((lastState, _) => ({
                // Using modulo wraps around the index once it goes out of the array's bounds
                index: (lastState.index + 1) % this.words.length
            }));
        }, 1000);
    }

    public componentWillUnmount() {
        clearInterval(this.timer);
    }

    public render() {
        return (
            <h1 className={`text-xl ${this.props.className}`}>
                I'm a <TypeWriter items={this.words} />
            </h1>
        );
    }
}
