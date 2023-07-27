import React from "react";
import { Button } from 'react-bootstrap';
import Teacherviewform from "./Teacherviewform";
import { Link } from 'react-router-dom';
class Teachers extends React.Component {

    constructor() {
        super();
        this.state = {
            sort1: "",
            data: [],
            search: "",
            sortoption: ["id", "name", "email", "website"]
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            result.json().then((resp) => {
                this.setState({ data: (resp) })
            })
        })
    }

    render() {

        function deletedata(id) {
            fetch("https://jsonplaceholder.typicode.com/users/" + id, { method: "DELETE" })
                .then((result) => {
                    result.json().then((resp) => {
                        alert("Id " + id + " deleted")
                        getdata();
                    })
                })

        }

        function getdata() {
            fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
                result.json().then((resp) => {
                    this.setState({ data: (resp) })
                })
            })
        }

        // function handlesearch(val) {
        //     console.log(val.target.value)
        //     fetch("https://jsonplaceholder.typicode.com/users?q=" + val.target.value).then((result) => {
        //         result.json().then((resp) => {
        //             this.setState({ data: (resp) })
        //         })
        //     })
        // }

        function handlesort(e) {
            this.setState({ sort1: e.target.value })
            fetch("https://jsonplaceholder.typicode.com/users?_sort=" + e.target.value + "&_order=asc").then((result) => {
                result.json().then((resp) => {
                    this.setState({ data: (resp) })
                })
            })
        }

        return (
            <div style={{ marginTop: "50px" }}>
                <br />
                <div style={{ backgroundColor: "orange", height: "40px", marginLeft: "5px", marginRight: "5px", borderRadius: "10px" }}>
                    <input type="text" placeholder="Search" onChange={(e) => this.setState({ search: e.target.value })} style={{ marginTop: "5px", float: "left", marginLeft: "10px" }} />
                    <select style={{ float: "left", marginLeft: "5px", width: "20%", height: "30px", marginTop: "5px" }} value={this.state.sort1} onChange={handlesort}>
                        <option>Sort By</option>
                        {
                            this.state.sortoption.map((item) => (
                                <option value={item}>{item}</option>
                            )
                            )
                        }
                    </select>
                    <Link to={"/AddTeacher"}><Button style={{ float: "right", marginRight: "130px", marginTop: "1px" }}>Add Teacher</Button></Link>
                </div>
                <br />
                <table className="table border shadow table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Website</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.filter((val) => {
                                if (this.state.search == "") {
                                    return val
                                }
                                else if (
                                    val.id.toString().includes(this.state.search.toString()) ||
                                    val.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
                                    val.email.toLowerCase().includes(this.state.search.toLowerCase()) ||
                                    val.website.toLowerCase().includes(this.state.search.toLowerCase())
                                ) {
                                    return val
                                }
                            }).map((item) =>
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.website}</td>
                                    <td><Link to={"/teacherviewform/" + item.id}><Button style={{ marginRight: "5px" }}>View</Button></Link>
                                        <Link to={"/Editteacher/" + item.id}><Button className="button bg-primary" style={{ marginRight: "5px" }}>Edit</Button></Link>
                                        <Button className="button bg-primary" onClick={() => deletedata(item.id)}>Delete</Button></td>


                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Teachers;