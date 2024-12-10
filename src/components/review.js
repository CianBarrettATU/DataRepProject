import { useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Review = () => {

    const { id } = useParams('');
    const [game, setGame ] = useState('');
    const [content, setContent] = useState('');
    const [recommend, setRecommend] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4000/api/game/' + id)
        .then((res)=> {
            setGame(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);
    
    handleReview = (e) => {
        e.preventDefault();

        const newReview = { content, recommend };

        axios.post('http://localhost:4000/api/game/id/review', newReview)
        .then((res) => {
            console.log("review added")
        })
        .catch()
    }

    return(
        <div></div>
    );

};

export default Review;