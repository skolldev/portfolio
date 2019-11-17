import { shallow } from "enzyme";
import React from "react";
import TypeWriter from "../components/Typewriter";

describe("Typewriter", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    it("should type the word", () => {
        const typewriter = shallow(<TypeWriter items={["hello"]} />);
        expect(typewriter.state("output")).toBe("h");
        jest.advanceTimersByTime(50);
        expect(typewriter.state("output")).toBe("he");
        jest.advanceTimersByTime(50);
        expect(typewriter.state("output")).toBe("hel");
        jest.advanceTimersByTime(50);
        expect(typewriter.state("output")).toBe("hell");
        jest.advanceTimersByTime(50);
        expect(typewriter.state("output")).toBe("hello");
    });

    it("should erase the word", () => {
        const typewriter = shallow(<TypeWriter items={["hello"]} />);
        // type the word
        jest.advanceTimersByTime(200);
        // wait for the end pause
        jest.advanceTimersByTime(1500);
        expect(typewriter.state("output")).toBe("hell");
        jest.advanceTimersByTime(50);
        expect(typewriter.state("output")).toBe("hel");
        jest.advanceTimersByTime(50);
        expect(typewriter.state("output")).toBe("he");
        jest.advanceTimersByTime(50);
        expect(typewriter.state("output")).toBe("h");
        jest.advanceTimersByTime(50);
        expect(typewriter.state("output")).toBe("");
    });

    it("should cycle through the given words", () => {
        const typewriter = shallow(<TypeWriter items={["hello", "bye"]} />);
        // type the word
        jest.advanceTimersByTime(200);
        // wait for the end pause
        jest.advanceTimersByTime(1500);
        // erase it
        jest.advanceTimersByTime(200);
        // wait for start pause
        jest.advanceTimersByTime(500);
        jest.advanceTimersByTime(50);
        expect(typewriter.state("output")).toBe("b");
    });
});
