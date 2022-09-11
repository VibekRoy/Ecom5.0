import React from "react";
import Header from "./Header";
import Item from "./Item";
import Axios from "./api/axios";
function Cart()
{   
    
    const [notes,setNotes]=React.useState();
    React.useEffect(()=>{
        fetch("/cart").then(res => res.json())
           .then(jsonRes =>{
            setNotes(jsonRes);});
      });
      function onclick(id)
      {
        console.log("|  "+id);
        const newNote={
          id: id
        }
        //post
        Axios.post("/del", newNote);
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
        //window.location.reload();
        // .then((res) => console.log(res.data))
        // .catch((err) => console.log(err))
      }
    return(
        <div>
            <Header />
            <h1> Your Cart </h1>
            {notes.map((noteItem, index) => {
            return(
                <div>
                    <Item
                    img=""
                    title=""
                    price=""
                    id=""
                    onclick={onclick} 
                    />
                </div>
            );})}
        </div>
    );
}

export default Cart;