
import Column from './Column'

function Board() {

    return (
        <div className="Board">

            <Column category='dream' />
            <Column category='comingSoon' />
            <Column category='urgent' />
            <Column category='inProgress' />
            
        </div>
    )
}

export default Board
