
import { useEffect, useState } from 'react';
import axios from 'axios';


function Activities() {
    function loadActivities() {
        axios.get('https://v2.jokeapi.dev/joke/Any')
        .then(function (response) {
            // handle success
            console.log(response);
            
            setActivitytest(response.data.type);

            if(activitytest === "single"){
                console.log("ein witz");
                setJoke(response.data.joke);
            }else{
                console.log("zwei witze")
                setActivity(response.data.setup);
                setDelivery(response.data.delivery);
            }
            
            
          })
    }
    const [joke, setJoke] = useState("");
    const [delivery, setDelivery] = useState("")
    const [activitytest, setActivitytest] = useState("");
    const [activity, setActivity] = useState("");
 //   useEffect(() => { loadActivities() })

    return (
        <div>
            
            { activitytest === "single" ? <h1>{joke}</h1> : <div> <h1>{activity} </h1> <br/> <h1> {delivery}</h1> </div>}

            <button onClick={loadActivities}> Load Another</button>
        </div>
    );
}

export default Activities;