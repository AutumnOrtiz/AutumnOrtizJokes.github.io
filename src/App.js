import {useEffect, useState} from 'react';
import './App.css'


function App() { 
    const [jokes, setJokes] = useState([]);
    const [x, setX] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist&type=single`;
            const response = await fetch(url);
            const json = await response.json();
           // const randomJoke = json.joke[Math.round(Math.random() * json.joke.length)].joke;
            console.log(json);
            setJokes(json);
        }

        getData();
    }, [x]);

    return (
    <>
            <div className='joke'>
                <h1>{jokes.joke}</h1>
                <button onClick={ () => setX(x + 1)}>Load Another</button>     
            </div>
    </>   
    );
};


export default App;
