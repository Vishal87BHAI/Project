import { Link, useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Editteacher() {

    let navigate = useNavigate();

    let [data, setData] = useState({
        id: "",
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

    function getdata() {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            result.json().then((resp) => {
                setData(resp)
            })
        })
    }

    function handlesubmit(e) {
        e.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/users/" + id,
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
                    navigate("/Teachers");
                    getdata();
                })
            })
    }


    return (
        <div style={{ marginTop: "70px" }}>
            <h1>Edit Teacher</h1><br />
            <div style={{ marginLeft: "28%" }}>
                <form className="form border shadow form-hover" onSubmit={handlesubmit} style={{ height: "450px", width: "60%", backgroundColor: "rgba(110, 113, 122, 0.993)", borderRadius: "10px" }}>
                    <div style={{ marginTop: "50px" }}>
                        <input type="text" style={{ width: "60%" }} value={data.id} /><br /><br /><br />
                        <input type="text" style={{ width: "60%" }} value={data.name} onChange={(e) => setData({ name: e.target.value })} /><br /><br /><br />
                        <input type="text" style={{ width: "60%" }} value={data.email} onChange={(e) => setData({ email: e.target.value })} /><br /><br /><br />
                        <input type="text" style={{ width: "60%" }} value={data.website} onChange={(e) => setData({ website: e.target.value })} /><br /><br /><br />
                        <button className="btn btn-primary" style={{ width: "30%" }}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Editteacher;