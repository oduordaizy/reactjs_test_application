import React from "react";

//Defining the car component
function Car({brand}){
    return(
    <li>{brand}</li>
    )
}

export function Garage(){
    const cars = ['Ford', 'BMW', 'Audi'];
    return(
        <>
        <h1>Who lives in my Garage?</h1>

        <ul>
            {cars.map((car, index) => 
            
            <Car key={index} brand={car} />)}
        </ul>
        </>
    )
}