import { useEffect, useState } from "react";
import Card from "./Card";

export default function App() {
    const [username, setUsername] = useState();
    const [age, setAge] = useState();

    // Callback will be called whenever the component gets rendered.
    // Common use cases include:
    // - Checking for JWTs/cookies (user is signed in, etc.)
    // - Checking request info (device, location, etc.)
    // - Retrieving data from a database
    useEffect(() => console.log("page (re)rendered"));

    return (
        <>
            <header>
                <h1>React Hooks & Props</h1>
            </header>
            <main>
                <input
                    onBlur={e => setUsername(e.target.value)}
                    placeholder="Enter Username"
                ></input>
                <input
                    onBlur={e => setAge(e.target.value)}
                    placeholder="Enter Age"
                    type="number"
                ></input>
                <Card name={username} age={age} />
            </main>
        </>
    );
}
