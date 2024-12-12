import Games from "./games";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {
    //stores list of games
    const [data, setData] = useState([]);

    //function to load game data.
    const ReloadData = ()=>{
        axios.get('http://localhost:4000/api/games')
        .then((response) => {
            console.log(response.data);
            setData(response.data.games);
        })
        .catch((error)=> {
            console.log(error);
        });
    }
    //loads list when read is rendered
    useEffect(()=>{
        ReloadData();
    },[]);

    return(
        <div>
            <Games myGames={data} ReloadData={ReloadData}/>
        </div>
    );
}

export default Read;