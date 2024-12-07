import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const {id} = useParams();
    const[title, setTitle] = useState('');
    const[year, setYear] = useState('');
    const[developer, setDeveloper] = useState('');
    const[poster, setPoster] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:4000/api/game/' + id)
        .then((res)=>{
            console.log("got"+ res.data);
            setTitle(res.data.title);
            setYear(res.data.year);
            setDeveloper(res.data.developer);
            setPoster(res.data.poster);
        })
        .catch((err)=>{console.log(err)});
    },[id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const game = {title,year,developer,poster};
        console.log(game);

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
            <h3>edit</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Game Title</label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Game Year</label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e)=>{setYear(e.target.value)}}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Game Developer</label>
                    <input type="text"
                        className="form-control"
                        value={developer}
                        onChange={(e)=>{setDeveloper(e.target.value)}}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Game Poster</label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e)=>{setPoster(e.target.value)}}
                    />
                </div>
                <div>
                    <input type="submit" value="Edit Game"></input>
                </div>
            </form>
        </div>
    );
}

export default Edit;
