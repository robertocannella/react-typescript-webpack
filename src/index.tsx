import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return (
        <div>
            Hello World
        </div>
    );
}
const element = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(

    <App />

);
