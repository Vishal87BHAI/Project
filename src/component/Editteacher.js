import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function Editteacher() {

    let [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        website: ""
    })

    let [data1, setData1] = useState({
        name: "",
        email: "",
        website: ""
    })

    let { id } = useParams();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id).then((result) => {
            result.json().then((resp) => {
                    setData({
                        id: (resp.id),
                        name: (resp.name),
                        email: (resp.email),
                        website: (resp.website)
                    })
            })
        })
    }, [])

    function handlesubmit(e) {
        e.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/users/" + id, 
        {method:'PUT'})
        
        .then((result) => {
            result.json().then((resp) => {

            })
        })
        alert("submitted")
    }


    return (
        <div style={{ marginTop: "70px" }}>
            <h1>Edit Teacher</h1><br />
            <div style={{ marginLeft: "28%" }}>
                <form className="form border shadow form-hover" onSubmit={handlesubmit} style={{ height: "450px", width: "60%", backgroundColor: "rgba(110, 113, 122, 0.993)", borderRadius: "10px" }}>
                    <div style={{ marginTop: "50px" }}>
                        <input type="text" style={{ width: "60%" }} value={data.id} /><br /><br /><br />
                        <input type="text" style={{ width: "60%" }} placeholder={data.name} onChange={(e)=>setData1({name:e.target.value})} /><br /><br /><br />
                        <input type="text" style={{ width: "60%" }} placeholder={data.email} onChange={(e)=>setData1({email:e.target.value})} /><br /><br /><br />
                        <input type="text" style={{ width: "60%" }} placeholder={data.website} onChange={(e)=>setData1({website:e.target.value})} /><br /><br /><br />
                        <button className="btn btn-primary" style={{ width: "30%" }}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Editteacher;