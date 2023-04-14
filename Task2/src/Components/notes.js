import React, { useRef, useEffect, useState } from "react";
import { Button, Form, FormLabel, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import classes from "./notes.module.css";
// import useHttp from "./Custom hook/useHttps";
import axios from "axios";
import Card from "./Card";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const initialState = {
  title : "",
  note : "",
}

function Notes() {
  const [showData, setShow] = useState([]);
  const [data,setData] = useState(initialState);
  const {title,note} = data
  const submitHandler = (event) => {
    event.preventDefault();
    if(!title || !note) {
      toast.error("Ples fill the Notes")
    }else{
      axios.post("http://localhost:3002/api/post",{
        title,
        note,
  
      }).then(() => {
        console.log(title,note,"notes data")
        setData({title : "", note : ""})
  
      }).catch((err) => {
        console.log(err)
      })

    }
    setTimeout(() => getDataNotes(),50);
    toast.success("Note ADDED");

  }
  const handlerInputChange = (e) => {
    const {name,value} = e.target;
    setData({...data, [name]: value})

  }

  const getDataNotes = async () => {
    const response = await axios.get("http://localhost:3002/api/get");
    console.log(response.data);
    setShow(response.data);
    console.log(showData, "this is ");
  };
  const deleteNote = (id) => {
    if(
      window.confirm("ARE you sure Your Note will be lost")
    ){
      axios.delete(`http://localhost:3002/api/remove/${id}`);
      toast.success("Note DELETED")
      setTimeout(() => getDataNotes(),500);
    }

  }

  useEffect(() => {
    getDataNotes();
  }, []);

  return (
    <React.Fragment>
      <div className={classes.notes}>
        <h1>Notes</h1>
        <form onSubmit={submitHandler} className={classes.form}>
          <label className={classes.label} style={{fontWeight:"bolder",fontSize:"20px"}}>Title</label>
          <input type="text" id="title" name ="title" value={title} onChange={handlerInputChange} className={classes.input}></input>
          <label className={classes.label} style={{fontWeight:"bolder",fontSize:"20px"}}>Note</label>
          <input type="text(500)" id="note" name ="note" value={note} onChange={handlerInputChange} className={classes.input}></input>
          <Button className={classes.but} onClick={submitHandler}>ADD Notes</Button>
        </form>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {showData.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.title}</td>
                  <td>{data.note}</td>
                  <Card>
                  <Button onClick={() => deleteNote(data.id)}>Delete</Button>
                  </Card>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default Notes;