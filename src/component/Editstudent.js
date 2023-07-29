import { Link, useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Editstudent() {

    let navigate = useNavigate();

    let [data, setData] = useState({
        UserId: "",
        id: "",
        title: "",
        complete: false
    })


    let { id } = useParams();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/" + id).then((result) => {
            result.json().then((resp) => {
                setData({
                    UserId: (resp.userId),
                    id: (resp.id),
                    title: (resp.title),
                    complete: (resp.complete)
                })
            })
        })
    }, [])

    function getdata() {
        fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
            result.json().then((resp) => {
                setData(resp)
            })
        })
    }

    function handlesubmit(e) {
        e.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/todos/" + id,
            {
                method: 'PUT',
                headers:
                    { 
                        'Accept': 'application/json',    
                        'Content-Type': 'application/json' 
                    },
                body:
                    JSON.stringify({ data })
            })

            .then((result) => {
                result.json().then((resp) => {
                    navigate("/Students");
                    getdata();
                })
            })
    }


    return (
        <div style={{ marginTop: "70px" }}>
            <h1>Edit Student</h1><br />
            <div style={{ marginLeft: "28%" }}>
                <form className="form border shadow form-hover" onSubmit={handlesubmit} style={{ height: "450px", width: "60%", backgroundColor: "rgba(110, 113, 122, 0.993)", borderRadius: "10px" }}>
                    <div style={{  }}>
                        <input type="text" style={{ width: "60%" }} value={data.UserId} /><br /><br /><br />
                        <input type="text" style={{ width: "60%" }} value={data.id} /><br /><br /><br />
                        <input type="text" style={{ width: "60%" }} value={data.title} onChange={(e)=>setData({title:e.target.value})} /><br /><br /><br />
                        <select style={{ width: "60%", height: "30px" }} value={data.complete} onChange={(e)=>setData({complete:e.target.value})} >
                            <option>--Options--</option>
                            <option>In Progress</option>
                            <option>Complete</option>
                        </select><br /><br /><br/>
                        <button className="btn btn-primary" style={{width:"30%"}}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Editstudent;