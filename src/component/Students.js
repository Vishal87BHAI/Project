import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Students(Props) {

    let [data, setData] = useState([])
    let [sort, setSort] = useState()
    let sortoption = ["userId", "id", "title","completed"]
    // let [value, setValue] = useState()
    useEffect(() => {
        getdata();
    }, [])

    function getdata() {
        fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
            result.json().then((resp) => {
                setData(resp)
            })
        })
    }

    function deletedata(id) {
        fetch("https://jsonplaceholder.typicode.com/todos/" + id, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                alert(id + " ID deleted")  
            })
        })
        getdata();
    }


    function handlesearch(val) {
        fetch("https://jsonplaceholder.typicode.com/todos?q=" + val.target.value)
            .then((result) => {
                result.json().then((resp) => {
                    setData(resp)
                })
            })
    }

    function handlesort(e) {
        setSort(e.target.value)
        fetch("https://jsonplaceholder.typicode.com/todos?_sort=" + e.target.value + "&_order=asc")
            .then((result) => {
                result.json().then((resp) => {
                    setData(resp)
                })
            })
    }


    return (
        <div style={{ marginTop: "50px" }}>
            <br />
            <div style={{ backgroundColor: "orange", height: "40px", borderRadius: "10px", marginLeft: "5px", marginRight: "5px" }}>
                <input type="text" placeholder="Search" onChange={handlesearch} style={{ marginTop: "5px", float: "left", marginLeft: "10px" }} />
                <select style={{ float: "left", marginLeft: "5px", width: "20%", height: "30px", marginTop: "5px" }} value={sort} onChange={handlesort}>
                    <option>Sort By</option>
                    {
                        sortoption.map((item) => (
                            <option value={item}>{item}</option>
                        )
                        )
                    }
                </select>
                <Link to={"/Addstudent"}><Button style={{ float: "right", marginRight: "90px", marginTop: "1px" }}>Add Student</Button></Link>
            </div>
            <br />
            <table class="table border shadow table-hover">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Completed</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.completed ? "Complete" : "in Progress"}</td>
                                <td><Link to={"/Studentview/" + item.id}><Button style={{ marginRight: "5px" }}>View</Button></Link>
                                    <Link to={"/Editstudent/"+item.id}><Button class="button bg-primary" style={{ marginRight: "5px" }}>Edit</Button></Link>
                                    <Button class="button bg-primary" onClick={() => deletedata(item.id)}>Delete</Button></td>
                            </tr>

                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Students;