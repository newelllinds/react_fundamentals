import React, { useState } from 'react';

const ChuckJokes = () => {
    const [joke, setJoke] = useState("")

    function handleFetch() {
        const url = 'https://api.chucknorris.io/jokes/random';
        
        fetch(url)
        .then((response) => response.json())
        .then((json) => setJoke(json.value));
    }

    return ( 
        <div>
           {joke} <button onClick={handleFetch} >Get Chuck Norris Joke</button>
        </div> 
    );
};

export default ChuckJokes;