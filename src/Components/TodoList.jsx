import React, { useState } from 'react'

const TodoList = () => {
    const [activity, setActivity]=useState("")
    const [listData, setlistData]=useState([])

    const updateList=()=>{
        // setlistData([...listData, activity])
        // console.log(listData)
        setlistData((listData)=>{
          const updatelistData=[...listData, activity]
          console.log(updatelistData)
          setActivity('');
          return updatelistData;
        })
    }
    const updatelistData=(i)=>{
       const updatedlistData=listData.filter((elem, id)=>{
          return id!=i;
       })
       setlistData(updatedlistData)
    }
    return (
    <>
      <div className='container'>
        <div className='header'>Todo List</div>
        <input type="text" placeholder='add activity... ' value={activity} onChange={(e)=>setActivity(e.target.value)} />
        <button onClick={updateList}>add</button>
        <p className='list-heading'>Here is your list :{")"}</p>
        {listData!=[] && listData.map((data, i)=>{
            return(
              <>
                  <p key={i}>
                     <div className='listdata'>{data}</div> 
                     <div className="rem"><button onClick={()=>updatelistData(i)}>remove(-)</button></div>
                 </p>
              </>
            )
        })}
      </div>
    </>
  )
}

export default TodoList
