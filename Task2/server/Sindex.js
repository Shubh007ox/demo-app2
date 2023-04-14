const express = require("express")
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const database = mysql.createPool({
    host:"localhost",
    user : "root",
    password : "Shubham@1234",
    database : "notesnew",
})
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/api/get",(req,res) => {
    const sqlget = "SELECT * FROM notes";
    database.query(sqlget,(error,result) => {
        console.log("eroor",error)
        res.send(result);
    })
})

app.post("/api/post",(req,res) => {
    const {title,note} = req.body;
    const sqlInsert = "INSERT INTO notes (title, note) VALUES (?,?)";
    database.query(sqlInsert,[title,note],(error,result) => {
        if(error){
            console.log(error)
        }
    });
})
app.delete("/api/remove/:id",(req,res) => {
    const {id} = req.params;
    const sqlRemove = "DELETE FROM notes WHERE id = ?";
    database.query(sqlRemove,id,(error,result) => {
        if(error){
            console.log(error)
        }
    });
})

app.get("/", (req,res) => {
//     const sqlInsert =  ;
//     database.query(sqlInsert,(err,result) => {
//         console.log("result",result)
//         res.send('Running is smotthly on 3002');
//     })
//     // res.send("Running on server");
})

app.listen(3002,() => {
    console.log('Server Running');
})
