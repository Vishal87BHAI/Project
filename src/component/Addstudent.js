import {Link} from 'react-router-dom'

function Addstudent() {

    function handlesubmit(e)
    {
        e.preventDefault();
        alert("submitted")
    }

    return (
        <div style={{ marginTop: "70px" }}>
            <h1>Add Student</h1><br />
            <div style={{ marginLeft: "28%" }}>
                <form className="form border shadow form-hover" onSubmit={handlesubmit} style={{ height: "450px", width: "60%", backgroundColor: "rgba(110, 113, 122, 0.993)", borderRadius: "10px" }}>
                    <div style={{ marginTop: "50px" }}>
                        <input className="inactive" type="text" style={{ width: "60%" }} placeholder="User Id" /><br /><br /><br />
                        <input className="inactive" type="text" style={{ width: "60%" }} placeholder="Id" /><br /><br /><br />
                        <input type="text" style={{ width: "60%" }} placeholder="Enter Your Title" /><br /><br /><br />
                        <select style={{ width: "60%", height: "30px" }}>
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

export default Addstudent;