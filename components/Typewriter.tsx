import React from "react";
interface IProps {
    className?: string;
    items: string[];
}
interface IState {
    index: number;
    output: string;
    substringLength: number;
}

const BlinkingTextCursorStyle = () => (
    <style jsx>
        {`
            .blinking-text-cursor {
                animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
            }

            @-moz-keyframes blinking-cursor {
                0% {
                    opacity: 0;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }

            @-webkit-keyframes blinking-cursor {
                0% {
                    opacity: 0;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }

            @-o-keyframes blinking-cursor {
                0% {
                    opacity: 0;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }

            @keyframes blinking-cursor {
                0% {
                    opacity: 0;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }
        `}
    </style>
);

export default class TypeWriter extends React.Component<IProps, IState> {
    public state: IState = {
        index: 0,
        output: "",
        substringLength: 0
    };
    private deletingInterval: number = 50;
    private emptyPause = 1000;
    private pause = 1500;
    private typingInterval = 50;
    private timeOuts: NodeJS.Timeout[] = [];
    constructor(props: IProps) {
        super(props);
    }

    public componentDidMount() {
        this.animate();
    }

    public componentWillUnmount() {
        // Clears all running timeouts to avoid memory leaks
        this.timeOuts.forEach(timeOut => clearTimeout(timeOut));
    }

    public loop(loopingFunc: () => void, pause: number) {
        const timeout = setTimeout(loopingFunc, pause);
        this.timeOuts.push(timeout);

        if (this.timeOuts.length > 80) {
            // If there's too many timeouts running, we'll clear and remove the first one that was added
            clearTimeout(this.timeOuts.shift() as any);
        }
    }

    public type(text: string, callback: () => void) {
        const characters = this.splitIntoCharacters(text);

        this.setState({
            output: characters
                .slice(0, this.splitIntoCharacters(this.state.output).length + 1)
                .join("")
        });

        if (this.state.output.length < characters.length) {
            this.loop(() => this.type(text, callback), this.typingInterval);
        } else {
            callback();
        }
    }

    public erase(callback: () => void) {
        const characters = this.splitIntoCharacters(this.state.output);

        this.setState({ output: characters.slice(0, characters.length - 1).join("") });

        if (characters.length !== 0) {
            this.loop(() => this.erase(callback), this.deletingInterval);
        } else {
            callback();
        }
    }

    public animate() {
        const nextWord = () => {
            this.setState((lastState, _) => ({
                // Using modulo wraps around the index once it goes out of the array's bounds
                index: (lastState.index + 1) % this.props.items.length
            }));
            this.loop(() => this.animate(), this.emptyPause);
        };

        this.type(this.props.items[this.state.index], () =>
            this.loop(() => this.erase(nextWord), this.pause)
        );
    }

    public render() {
        return (
            <span
                className={`font-bold ${this.props.className}`}
                aria-label={this.props.items[this.state.index]}
            >
                {this.state.output}
                <span className="blinking-text-cursor">|</span>
                <BlinkingTextCursorStyle />
            </span>
        );
    }

    private splitIntoCharacters(word: string): string[] {
        return word.split("");
    }
}
