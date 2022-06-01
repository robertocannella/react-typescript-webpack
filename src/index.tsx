import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return (
        <div>
            Hello World
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
 <StrictMode>
     <App />
 </StrictMode>

);
