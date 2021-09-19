
import Column from './Column'
import './board.css';

function Board() {

    return (
        <div className="Board">
            <div>
                <h2>Dream</h2>
                <Column category='dream' />
            </div>
            <div>
                <h2>Coming Soon</h2>
                <Column category='comingSoon' />
            </div>
            <div>
                <h2>Urgent</h2>
                <Column category='urgent' />
            </div>
            <div>
                <h2>In Progress</h2>
                <Column category='inProgress' />
            </div>
            
            
            
            
            
        </div>
    )
}

export default Board
