import { Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Teacherviewform() {

    let [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        website: ""
    })

    let { id } = useParams()

        useEffect(()=>{
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
    },[])
    

    

    return (
        <div style={{ marginTop: "50px" }}>
            <br/><h1>Teacher</h1><br/>
            <ul className="list-group w-50" style={{display:"inline-block"}}>
                <h5>Id</h5><li className="list-group-item active">{data.id}</li> <br/>
                <h5>Name</h5><li className="list-group-item active">{data.name}</li><br/>
                <h5>Email</h5><li className="list-group-item active">{data.email}</li><br/>
                <h5>Website</h5><li className="list-group-item active">{data.website}</li>
            </ul>
        </div>
    )
}

export default Teacherviewform;