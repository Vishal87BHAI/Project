import { Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Studentview() {

    let [data, setData] = useState({
        userid: "",
        id: "",
        title: "",
    })

    let { id } = useParams()

        useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/todos/" + id).then((result) => {
            result.json().then((resp) => {
                setData({
                    userid: (resp.userId),
                    id: (resp.id),
                    title: (resp.title),
                })
            })
        })
        },[])
    

    

    return (
        <div style={{ marginTop: "50px" }}>
            <br/><h1>Student</h1><br/>
            <ul className="list-group w-50" style={{display:"inline-block"}}>
                
            <h3>User Id</h3><li className="list-group-item active">{data.userid}</li><br/>
                
            <h3>Id</h3><li className="list-group-item active">{data.id}</li><br/>
                
            <h3>Title</h3><li className="list-group-item active">{data.title}</li>
            </ul>
        </div>
    )
}

export default Studentview;