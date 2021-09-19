
import React, { Suspense, useEffect, useRef, useState } from "react";
import './ProjectBoard.css'
import { fetchProjects } from '../services/ProjectService'



function ProjectBoard() { 
  
  const [data, setData] = useState([]);
  
  function loadProjects() {
    fetchProjects().then(setData);

  }
  
  useEffect(loadProjects , [])
 

  

  console.log(data);
    let newData = data;
    // const updateData = (data) = {

    // } 
    // const handleFilterDreams = (data) => {
    //   const filter = data.filter(x => x.category ==='dream');
    //   return filter
    // }
    // const handleFilterNext = (data) => {
    //   return data.filter(x => x.category ==='comingSoon');
    // }
    // const handleFilterUrgent = (data) => {
    //   return data.filter(x => x.category ==='urgent');
    // }
    // const handleFilterInProgress = (data) => {
    //   return data.filter(x => x.category ==='inProgress');
    // }
   
    const handleFilter = (data) => {
        return (data.filter(x => x.category ==='dream'));
    }
    const handleFilterNext = (data) => {
      return (data.filter(x => x.category ==='dream'));
    }
    const handleUrgent = (data) => {
      return (data.filter(x => x.category ==='urgent'));
    }
    const handeInProgress = (data) => {
      return (data.filter(x => x.category ==='inProgress'));
    }
 
    // const filterDream = data.filter(x => x.category ==='dream');
    // const filterNext = data.filter(x => x.category ==='comingSoon');
    // const filterUrgent = data.filter(x => x.category ==='urgent');
    // const filterInProgress = data.filter(x => x.category ==='inProgress');

    useEffect(() => {
        handleFilter(newData);
        handleFilterNext(newData);
        handleUrgent(newData);
        handeInProgress(newData);
        console.log('heredfdfdfddf')
    },[newData]);
        // let orgainize = [
    //     {
    //       title: 'Dream', items: []
    //     },
    //     {
    //       title: 'Next', items: []
    //     },
    //     {
    //       title: 'Urgent', items:[]
    //     },
    //     {
    //       title: 'In Progress', items: []
    //     }
    //   ];

      // console.log(orgainize[1].items);
     
      // console.log(orgainize[0]);
      // console.log(orgainize[0].items);
      // console.log(orgainize[0].items.concat(filterDream));

      
     
     
     
      

    //   function insertNewArr(arr, newArr) {    
    //         arr = [...arr, newArr]
    //         return arr;

    //  }

    //  insertNewArr(orgainize[1].items, filterNext);
    //  insertNewArr(orgainize[2].items, filterUrgent);
    //  insertNewArr(orgainize[3].items, filterInProgress);
     
    const [list, setList] = useState([
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
    ]);
    
    const updateList = () => {
      
      setList(list.map((x) => {
        if(x.title === 'Dream') {
          return {...x, items: handleFilter(newData)}
        }
        else if (x.title === 'Next'){
          return {...x, items: handleFilterNext(newData)}
        }
        else if (x.title === 'Urgent') {
          return {...x, items: handleUrgent(newData)}
        }
        else if (x.title === 'In Progress') {
          return {...x, items: handeInProgress(newData)}
        }
        return null;
      }))
      
      
      // orgainize[0].items = orgainize[0].items.concat(filterDream);
      // orgainize[1].items = orgainize[1].items.concat(filterNext);
      // orgainize[2].items = orgainize[2].items.concat(filterUrgent);
      // orgainize[3].items = orgainize[3].items.concat(filterInProgress);
    }
    
   
    
    

    useEffect(() => {
     updateList();

    },[setList]);



    console.log(list);
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
        console.log(dragItem.current);
        console.log(dragNode.current);
        console.log(e.target);
        console.log(params);
        console.log(e.target.name);
        
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
        console.log(targetItem.name);
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

    // console.log(filterDream);
    // console.log(filterNext);
    // console.log(filterUrgent);
    // console.log(filterInProgress);
    // console.log(list);
    // console.log(orgainize);
    
    
    
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