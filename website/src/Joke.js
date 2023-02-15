import React, { useState } from 'react'
import axios from 'axios';

function Joke() {

    // Die useState-Funktion wird genutzt um die Variablen zu einem bestimmten Zeitpunkt zu setzen und einen bestimmten Anfangszustand zu bekommen. 
    const [jokeVer1Part1, setJokeVer1Part1] = useState("");
    const [jokeVer1Part2, setJokeVer1Part2] = useState("");
    const [jokeVer2, setJokeVer2] = useState("");
    const [jokeType, setJokeType] = useState("")

    /** 
     * Axios wird genutzt um HTTP-Requests (Server-Anfragen) zu stellen.
     * Da manchmal der Server nicht so schnell antwortet, benutze ich dafür gerne asynchrone Funktionen.
     * 
     * "async als Teil der Deklaration einer Funktion gibt an, dass der Code asynchron ausgeführt werden soll. 
     * await vor einer Anweisung gibt ein Promise zurück, dass die Funktion anhält und auf das Ergebnis wartet, bevor die Ausführung fortgesetzt wird."
     * 
     * So ist sichergestellt, dass auch wirklich ein neuer Wert vom Server geholt wird.
     */
    const getJoke = async () =>{
        try {
            const {data: response} = await axios.get('https://v2.jokeapi.dev/joke/Any?lang=de');
            console.log(response);
            setJokeType (response.type);
            setJokeVer1Part1 (response.setup);
            setJokeVer1Part2 (response.delivery);
            setJokeVer2 (response.joke);
        } catch (error) {
            console.error(error.message);
        }
    }

    /**
     * Bei der Ausgabe kann eine Bedingung gesetzt werden, wenn diese wahr ist, wird etwas z.B. etwas angezeigt.
     * Der Abfragetyp mit dem ? entspricht einer if-Abfrage.
     * Es muss eine Alternative, ein Default geben, wenn die Bedingung nicht erfüllt ist. Diese muss hinter einem : (Doppelpunkt) stehen.
     * Bedingung ? true : false
     * Wenn nichts ausgegeben werden soll, reicht ein leerer DIV-Container <div></div>
     * Wenn Werte verglichen werden sollen muss mit  === (3 Gleichzeichen) verglichen werden.
     */
    return (
        <div>
            <h1>Joke-Generator</h1>
            <button onClick={getJoke}> get Joke </button>

            {jokeType === "single" ? <h2> {jokeVer2} </h2> : <div></div>} 

            {jokeType === "twopart" ?
                <div> 
                    <h2> {jokeVer1Part1} </h2> 
                    <br/>
                    <h2> {jokeVer1Part2} </h2>
                </div> 
                : 
                <div></div>
            }   

        </div>
    )
}

export default Joke