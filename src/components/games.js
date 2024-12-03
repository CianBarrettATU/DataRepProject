import GameItem from './gameitem';

const Games = (props)=>{
    return props.myGames.map(
        (game)=>{
            return <GameItem mygame={game} key={game._id}/>
        }
    );
}

export default Games;