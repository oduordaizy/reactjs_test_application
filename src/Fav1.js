
import { useState } from "react";
import ReactDOM from "react-dom/client";

export function Fav1 (){
    const [color, setColor] = useState("red");
    return 
    <h1>My best color is {color}</h1>
}