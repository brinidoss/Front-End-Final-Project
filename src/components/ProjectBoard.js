import React, { useEffect, useRef, useState } from "react";
import './ProjectBoard.css'




function ProjectBoard({data}) {
    console.log(data);
    const filterDream = data.filter(x => x.category ==='dream');
    const filterNext = data.filter(x => x.category ==='comingSoon');
    const filterUrgent = data.filter(x => x.category ==='urgent');
    const filterInProgress = data.filter(x => x.category ==='inProgress');

    let orgainize = [
        {
          title: 'Dream', items: []
        },
        {
          title: 'Next', items: []
        },
        {
          title: 'Urgent', items:[]
        },
        {
          title: 'In Progress', items: []
        }
      ];

      console.log(orgainize[1].items);
      orgainize[0].items = orgainize[0].items.concat(filterDream);
      console.log(orgainize[0]);
      console.log(orgainize[0].items);
      console.log(orgainize[0].items.concat(filterDream));
      orgainize[1].items = orgainize[1].items.concat(filterNext);
      orgainize[2].items = orgainize[2].items.concat(filterUrgent);
      orgainize[3].items = orgainize[3].items.concat(filterInProgress);

    //   function insertNewArr(arr, newArr) {    
    //         arr = [...arr, newArr]
    //         return arr;

    //  }

    //  insertNewArr(orgainize[1].items, filterNext);
    //  insertNewArr(orgainize[2].items, filterUrgent);
    //  insertNewArr(orgainize[3].items, filterInProgress);
     
    const [list, setList] = useState(orgainize);

    useEffect(() => {
      setList(orgainize);
    }, [orgainize]);

    // console.log(list);
    const[dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();


//   console.log(filterDream);


//   const updateList = () => {
//       setList()
//   }

//   useEffect(() => {
        
    
    
//         setList('Dream', ;
//         setList([1].items.push(filterNext));
//         setList([2].items.push(filterUrgent));
//         setList([3].items.push(filterInProgress));
//   },[])

    // console.log(list);
  
      const handleDragStart = (e, params) => {
        console.log('drag stating',params)
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(() => {
            setDragging(true)
        }, 0)
        setDragging(true)
    }
    const handleDragEnter = (e, targetItem) => {
        console.log('Entering Drag', targetItem);
        const currentItem = dragItem.current;
        if(e.target !== dragNode.current) {
            console.log("target is not the same");
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList[targetItem.grpI].items.splice(targetItem.itemI, 0, newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0]);
                dragItem.current = targetItem;
                
                return newList
            })
        }

    }
    const handleDragEnd = () => {
        console.log('ending Drag');
        setDragging(false)
        dragNode.current.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null;
        dragNode.current = null;
    }


    const getStyles = (params) => {
        const currentItem = dragItem.current;
        if(currentItem.grpI === params.grpI && currentItem.itemI === params.itemI){
            return 'current dnd-item'
        }
        return 'dnd-item'
    }

    console.log(filterDream);
    console.log(filterNext);
    console.log(filterUrgent);
    console.log(filterInProgress);
    console.log(list);
    console.log(orgainize);
    
    
    
    return (
        <div className="drag-n-drop">
        {list.map((grp, grpI) => (
          <div key={grp.title} onDragEnter={dragging && !grp.items.length?(e) => handleDragEnter(e,{grpI, itemI: 0}):null} className="dnd-group">
            <div className="group-title">{grp.title}</div>
            {grp.items.map((item, itemI) => (
              <div 
                key={itemI} 
              draggable 
              onDragStart={(e) => {handleDragStart(e,{grpI, itemI})}} 
              onDragEnter={dragging?(e) => {handleDragEnter(e, {grpI, itemI})}:null}
              className={dragging ? getStyles({grpI, itemI}) : "dnd-item"}> 
                {item.name}
              </div>
            ))}

          </div>
        ))}
        </div>
        // <div className="drag-n-drop">
        // {list.map((grp, grpI) => (
        //   <div key={grp.title} onDragEnter={dragging && !grp.items.length?(e) => handleDragEnter(e,{grpI, itemI: 0}):null} className="dnd-group">
        //     <div className="group-title">{grp.title}</div>
        //     {grp.items.map((item, itemI) => (
        //       <div 
        //       draggable 
        //       onDragStart={(e) => {handleDragStart(e,{grpI, itemI})}} 
        //       onDragEnter={dragging?(e) => {handleDragEnter(e, {grpI, itemI})}:null}
        //       key={item.name} className={dragging ? getStyles({grpI, itemI}) :"dnd-item"}> 
        //         {item.name}
        //       </div>
        //     ))}

        //   </div>
        // ))}
        // </div>
    )
}


export default ProjectBoard;