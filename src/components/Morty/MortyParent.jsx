import React, { useEffect, useState } from 'react';
import MortyChild from './MortyChild';
import { CardColumns } from 'reactstrap';


const MortyParent = () => {
    const [characters, setCharacters] = useState([])

    function fetchMorty() {
        const url = 'https://rickandmortyapi.com/api/character';
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setCharacters(json.results)
                console.log(json.results);
            });
    }

    useEffect(() => {
        fetchMorty();
    }, []); 
    //THE EMPTY BRACKETS SAYS "I ONLY WANT TO DO THIS ON PAGE LOAD"

    function displayCards(){

        return characters.length > 0 ? characters.map((character) => <MortyChild mortyCharacter={character} />) : null;
    }

    return ( 
        <div>
            <button onClick={fetchMorty} >Fetch Morty</button>
            <CardColumns>
                {displayCards()}
            </CardColumns>
        </div> 
    );
};

export default MortyParent;