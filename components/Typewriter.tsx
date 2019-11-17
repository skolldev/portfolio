import React from "react";
interface IProps {
    className?: string;
    items: string[];
}
interface IState {
    index: number;
    output: string;
}

export default class TypeWriter extends React.Component<IProps, IState> {
    public state: IState = {
        index: 0,
        output: ""
    };
    /**
     * Determines how much time passes between deletions of characters
     */
    private erasingIntervalMs: number = 50;

    /**
     * Determines how much time passes after erasing the last word, before beginning to type a new word
     */
    private startPauseMs = 500;

    /**
     * Determines how much time passes after typing a word, before starting to erase it
     */
    private endPauseMs = 1500;

    /**
     * Determines how much time passes between typing single characters
     */
    private typingInterval = 50;

    /**
     * Contains references for all running timeouts, for easy deletion in WillUnmount
     */
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

    /**
     * Starts a loop with the given function, waiting a given amount before doing so
     * @param loopingFunc
     * @param pause
     */
    public executeAfterPause(loopingFunc: () => void, pause: number) {
        const timeout = setTimeout(loopingFunc, pause);
        this.timeOuts.push(timeout);

        if (this.timeOuts.length > 80) {
            // If there's too many timeouts running, we'll clear and remove the first one that was added
            clearTimeout(this.timeOuts.shift() as any);
        }
    }

    /**
     * Types the given text, character by character.
     * Executes the given callback after the whole word has been typed.
     * @note Calls itself recursively until it's done typing
     * @param text The text to type
     * @param callback The function to call after typing is done
     */
    public type(text: string, callback: () => void) {
        const characters = this.splitIntoCharacters(text);

        this.setState({
            output: characters
                .slice(0, this.splitIntoCharacters(this.state.output).length + 1)
                .join("")
        });

        if (this.state.output.length < characters.length) {
            this.executeAfterPause(() => this.type(text, callback), this.typingInterval);
        } else {
            callback();
        }
    }

    /**
     * Erases the current output character by character.
     * Executes the given callback after the whole word has been typed.
     * @note Calls itself recursively until it's done typing
     * @param callback The function to call after typing is don
     */
    public erase(callback: () => void) {
        const characters = this.splitIntoCharacters(this.state.output);

        this.setState({ output: characters.slice(0, characters.length - 1).join("") });

        if (characters.length !== 0) {
            this.executeAfterPause(() => this.erase(callback), this.erasingIntervalMs);
        } else {
            callback();
        }
    }

    /**
     * Contiuously iterates through the array of words,
     * typing each word and then erasing it before going on to the next one
     */
    public animate() {
        const nextWord = () => {
            this.setState((lastState, _) => ({
                // Using modulo wraps around the index once it goes out of the array's bounds
                index: (lastState.index + 1) % this.props.items.length
            }));
            this.executeAfterPause(() => this.animate(), this.startPauseMs);
        };

        this.type(this.props.items[this.state.index], () =>
            this.executeAfterPause(() => this.erase(nextWord), this.endPauseMs)
        );
    }

    public render() {
        return (
            <span
                className={`font-bold text-purple-700 ${this.props.className}`}
                aria-label={this.props.items[this.state.index]}
            >
                {this.state.output}
                <span className="blinking-text-cursor font-normal text-black">|</span>
            </span>
        );
    }

    private splitIntoCharacters(word: string): string[] {
        return word.split("");
    }
}
