import GameItem from './gameitem';

const Games = (props)=>{
    //maps through an array of games
    //renders a game item
    return props.myGames.map(
        (game)=>{
            return <GameItem mygame={game} key={game._id} Reload={props.ReloadData}/>
        }
    );
}

export default Games;