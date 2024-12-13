import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edit = () => {
    //extracts id form url
    const {id} = useParams();

    //state variables that holds game details
    const[title, setTitle] = useState('');
    const[year, setYear] = useState('');
    const[developer, setDeveloper] = useState('');
    const[poster, setPoster] = useState('');

    //react hook for navigating pages
    const navigate = useNavigate();

    //fetch game details when id chagnes
    useEffect(()=>{
        axios.get('http://localhost:4000/api/game/' + id)
        .then((res)=>{
            console.log("got"+ res.data);

            //updates components state
            setTitle(res.data.title);
            setYear(res.data.year);
            setDeveloper(res.data.developer);
            setPoster(res.data.poster);
        })
        .catch((err)=>{console.log(err)});
    },[id]);

    //handles form submission to edit game details
    const handleSubmit = (e) => {
        e.preventDefault();
        const game = {title,year,developer,poster};
        console.log(game);

        //sends put req to update game on server
        axios.put('http://localhost:4000/api/game/'+id, game)
        .then((res)=>{
            console.log("Edited: "+res.data);
            navigate('/read');
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    return(
        <div>
            <h3 style={{padding: '15px', color: 'white'}}>Edit Game Details</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label style={{padding: '15px', color: 'white'}}>Edit Game Title:</label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e)=>{setTitle(e.target.value)}}
                        style={{margin: '15px'}}
                    />
                </div>
                <div className="form-group">
                    <label style={{padding: '15px', color: 'white'}}>Edit Game Year:</label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e)=>{setYear(e.target.value)}}
                        style={{margin: '15px'}}
                    />
                </div>
                <div className="form-group">
                    <label style={{margin: '15px', color: 'white'}}>Edit Game Developer:</label>
                    <input type="text"
                        className="form-control"
                        value={developer}
                        onChange={(e)=>{setDeveloper(e.target.value)}}
                        style={{margin: '15px'}}
                    />
                </div>
                <div className="form-group">
                    <label style={{padding: '15px', color: 'white'}}>Edit Game Poster:</label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e)=>{setPoster(e.target.value)}}
                        style={{margin: '15px'}}
                    />
                </div>
                <div>
                    <input style={{margin: '15px'}}type="submit" value="Edit Game"></input>
                </div>
            </form>
        </div>
    );
}

export default Edit;
