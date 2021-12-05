


const Todolist = ({id,status,title,handleDelete,handleToggle})=>{
    var listNumber = id;
   
    if(listNumber === 1)
    {
        return (
          ''
        );
    }

    if(status===true)
    {
        var Style = {
           color: "green",
           textDecoration: "line-through"
        }
    }
    return <div style={{width: "300px", background: "transparent" , border:"1px solid black" , margin: "1rem"}}>
        <span onClick={()=>handleToggle(id)}  style={Style}><input type="checkbox" style={{width: "30px",height: "15px"}}/>{title}</span>
        <button onClick={()=>handleDelete(id)} >X</button>
    </div>
 }
 
 export default Todolist