import { useEffect, useState} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Review = () => {

    const { id } = useParams('');
    const [game, setGame ] = useState('');
    const [content, setContent] = useState('');
    const [recommend, setRecommend] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/api/game/${id}`)
        .then((res)=> {
            setGame(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);
    
     const handleReview = (e) => {
        e.preventDefault();

        const newReview = { content, recommend };

        axios.post(`http://localhost:4000/api/game/${id}/review`, newReview)
        .then((res) => {
            console.log("review added:", res.data)
            setContent("");
            setRecommend("");
            console.log("navigating to read")
            navigate('/read');
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    return(
        <div style={{padding: '15px'}}>
            <h1>Review {game.title}</h1>
            <form onSubmit={handleReview}>
                <div className="form-group">
                    <label>Your review:</label>
                    <textarea 
                        className="form-control" 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="write your review...."
                        required
                    />
                </div>
                <div className="form-group" >
                    <label>Would you recommend playing?</label>
                    <select
                        className="form-control" 
                        value={recommend}
                        onChange={(e) => setRecommend(e.target.value)}
                        required
                        >
                        <option value="" disabled>Select Your Recommendation</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>   
                </div>
                <button type="submit" className="btn btn-primary" style={{marginTop: '15px'}}>Submit Review</button>
            </form>
        </div>
    );
};

export default Review;