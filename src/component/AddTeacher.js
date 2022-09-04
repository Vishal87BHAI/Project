import {Link} from 'react-router-dom'

function AddTeacher() {

    function handlesubmit(e)
    {
        e.preventDefault();
        alert("submitted")
    }

    return (
        <div style={{ marginTop: "70px" }}>
            <h1>Add Teacher</h1><br />
            <div style={{ marginLeft: "28%" }}>
                <form className="form border shadow form-hover" onSubmit={handlesubmit} style={{ height: "450px", width: "60%", backgroundColor: "rgba(110, 113, 122, 0.993)", borderRadius: "10px" }}>
                    <div style={{ marginTop: "50px" }}>
                        <input type="text" style={{ width: "60%" }} placeholder="Id" /><br /><br /><br />
                        <input type="text" style={{ width: "60%" }} placeholder="Enter Your Name" /><br /><br /><br />
                        <input type="text" style={{ width: "60%" }} placeholder="Enter Your Email" /><br /><br /><br />
                        <input type="text" style={{ width: "60%" }} placeholder="Enter Your Website" /><br /><br /><br/>
                        <button className="btn btn-primary" style={{width:"30%"}}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTeacher;