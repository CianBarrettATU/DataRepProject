import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const Content = ()=>{
    const navigate = useNavigate();
    
    return(
        <div>
        <Card style={{marginInline: '25%', marginTop: '50px'}}>
            <h1 style={{textAlign: 'center'}}>Welcome to the GameDB</h1>
            <Card.Body>
                <h3>Add your favourite games to your list.</h3>
                <hr></hr>
                <h3>Rate the games you have played out of ten.</h3>
                <hr></hr>
                <h3>Easily edit game details.</h3>
                <hr></hr>
                <h3>Review games and view other's recommendations</h3>

                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <Button
                            style={{ padding: '10px 20px', backgroundColor: '#1DB954', border: 'none', color: 'white', borderRadius: '5px' }}
                            onClick={() => navigate('/create')}
                        >
                            Get Started
                        </Button>
                    </div>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Content;