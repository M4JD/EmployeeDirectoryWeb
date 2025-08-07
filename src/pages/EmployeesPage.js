import { useEffect } from "react";


export const ContactPage = () => {
    useEffect(() => {
        // This runs once when the component mounts
        console.log("Component mounted");

        // Example: Fetch employee data
        fetch("/api/employees")
            .then(res => res.json())
            .then(data => {
                console.log("Fetched employees:", data);
                // setState(data) if needed
            });

        // Optional cleanup
        return () => {
            console.log("Component unmounted");
        };
    }, []); // ← empty dependency array means "run only once"

    return (<h2>Hi, I am a Contact!</h2>);
}  