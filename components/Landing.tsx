import React from "react";

export default function Landing() {
    return (
        <div className="landing h-screen p-12 text-black flex flex-col justify-center items-center">
            <h1 className="text-6xl text-purple-700 font-bold">Hi! My name is Alexander May</h1>
            <h1 className="text-5xl font-bold">I'm a frontend developer</h1>
            <p className="text-2xl max-w-xl text-center mt-4">
                currently living in munich. I love building awesome applications, learning new
                things, lifting heavy stuff, teaching other people how to lift heavy stuff and eat
                right, cooking.
            </p>
            <p className="text-2xl max-w-xl text-center mt-4">
                I'd love to get to know you and your project!
            </p>
            <div id="links">
                <span>CV </span>
                <span>GitHub </span>
                <span>Email</span>
            </div>
        </div>
    );
}
