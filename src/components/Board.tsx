
import Column from './Column'
import './board.css';

function Board() {

    return (
        <div className="Board">
            <div>
                <div className="colum-box">
                    <h2>Dream</h2>
                </div>
                
                <Column category='dream' />
            </div>
            <div>
                
                <div className="colum-box">
                    <h2>Coming Soon</h2>
                </div>
                
                <Column category='comingSoon' />
            </div>
            <div>
                 <div className="colum-box">
                    <h2>Urgent</h2>
                </div>
                
                <Column category='urgent' />
            </div>
            <div>
                <div className="colum-box">
                    <h2>In Progress</h2>
                </div>
                
                <Column category='inProgress' />
            </div>
            
            
            
            
            
        </div>
    )
}

export default Board
