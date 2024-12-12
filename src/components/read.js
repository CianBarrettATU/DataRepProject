import Games from "./games";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {
    const [data, setData] = useState([]);

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