import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useReducer, useRef, useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Login = () => {
  const intialstate = {
    fields: [],
    arry: [],
    data: {
      Firstname: "",
      Lastname: "",
      Email: "",
      Password: "",
    },
    editkey: -1,
    isTrue: true,
    setColor: "red",
  };
  const fname = useRef(null);
  const lname = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reducer = (state, action) => {
    switch (action.type) {
      case "Firstname":
        return {
          ...state,
          data: { ...state.data, Firstname: action.value },
        };
      case "Lastname":
        return {
          ...state,
          data: { ...state.data, Lastname: action.value },
        };
      case "Email":
        return {
          ...state,
          data: { ...state.data, Email: action.value },
        };
      case "Password":
        return {
          ...state,
          data: { ...state.data, Password: action.value },
        };
      case "delete":
        return {
          ...state,
          arry: [...state.arry.filter((_, index) => index !== action.key)],
        };

      case "update":
        return {
          ...state,
          data: {
            Firstname: action.payload.Firstname,
            Lastname: action.payload.Lastname,
            Email: action.payload.Email,
            Password: action.payload.Password,
          },
          isTrue: false,
          editkey: action.payload.index,
        };

      case "success":
        return {
          ...state,
          arry: [...state.arry, action.value],
        };

      case "edit":
        if (
          state.data.Firstname?.length < 3 ||
          state.data.Lastname?.length < 3 ||
          state.data.Email === "" ||
          state.data.Password?.length < 10
        ) {
          alert("Please fill all required fields.");
          return state;
        }
        state.arry?.splice(state.editkey, 1, { ...state.data });

        return {
          ...state,
          arry: state.arry,
          isTrue: true,
          editkey: -1,
          data: {
            Firstname: "",
            Lastname: "",
            Email: "",
            Password: "",
          },
        };

      default:
        return state;
    }
  };
  const [addstate, dispatch] = useReducer(reducer, intialstate);

  const handleClick = (e) => {
    e.preventDefault();

    const { Firstname, Lastname, Email, Password } = addstate.data;

    if (!Firstname || !Lastname || !Email || !Password) {
      alert("Please Fill all your Data");
      if (!Firstname) {
        fname.current.style.border = "2px solid green";
      } else {
        fname.current.style.border = "2px solid black";
      }
      if (!Lastname) {
        lname.current.style.border = "2px solid green";
      } else {
        lname.current.style.border = "2px solid black";
      }
      if (!Email) {
        emailRef.current.style.border = "2px solid green";
      } else {
        emailRef.current.style.border = "2px solid black";
      }
      if (!Password) {
        emailRef.current.style.border = "2px solid green";
      } else {
        Password.current.style.border = "2px solid black";
      }
      return;
    }
    if (Firstname.length < 3 || Lastname.length < 3 || Password.length < 10) {
      alert("Please enter full values");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(Email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (firstname === "") {
      fname.current.style.border = "2px solid black";
    } else {
      fname.current.style.border = "none";
    }

    if (lastname === "") {
      lname.current.style.border = "2px solid black";
    } else {
      lname.current.style.border = "2px solid orange";
    }

    if (email === "") {
      emailRef.current.style.border = "2px solid black";
    } else {
      emailRef.current.style.border = "2px solid black ";
    }
    if (password === "") {
      passwordRef.current.style.border = "2px solid black";
    } else {
      passwordRef.current.style.border = "2px solid black ";
    }
    dispatch({ type: "success", value: addstate.data });
    dispatch({ type: "Firstname", value: "" });
    dispatch({ type: "Lastname", value: "" });
    dispatch({ type: "Email", value: "" });
    dispatch({ type: "Password", value: "" });
  };

  return (
    <div>
      <h1>LOG-IN-HERE</h1>
      <form>
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="Firstname"
              ref={fname}
              className="form-control"
              placeholder="First name"
              value={addstate.data.Firstname}
              onChange={(e) => {
                dispatch({
                  type: "Firstname",
                  setFirstName,
                  value: e.target.value,
                });
              }}
            />
          </div>
          <br />
          <div className="col">
            <input
              type="text"
              name="Lastname"
              ref={lname}
              className="form-control"
              placeholder="Last name"
              value={addstate.data.Lastname}
              onChange={(e) => {
                dispatch({
                  type: "Lastname",
                  setLastName,
                  value: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <input
              type="email"
              name="Email"
              ref={emailRef}
              className="form-control"
              placeholder="E-mail"
              value={addstate.data.Email}
              onChange={(e) => {
                dispatch({ type: "Email", setEmail, value: e.target.value });
              }}
            />
          </div>
          <div className="col">
            <input
              type="password"
              name="Password"
              ref={passwordRef}
              className="form-control"
              placeholder="password"
              value={addstate.data.Password}
              onChange={(e) => {
                dispatch({
                  type: "Password",
                  setPassword,
                  value: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <br />

        <div>
          {addstate.isTrue ? (
            <Button onClick={handleClick} variant="success" type="submit">
              Submit
            </Button>
          ) : (
            <Button
              onClick={(e) => {
                e.preventDefault();
                dispatch({ type: "edit" });
              }}
              variant="primary"
            >
              Edit
            </Button>
          )}
        </div>
      </form>

      {addstate.arry && (
        <Table className="table border shadow table-hover mt-3">
          <thead className="table-dark">
            <tr>
              <th>Sr.np</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {addstate.arry?.map((value, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{value.Firstname}</td>
                <td>{value.Lastname}</td>
                <td>{value.Email}</td>
                <td>{value.Password}</td>

                <div className="p-1">
                  <Button
                    className="me-2 bg-primary border-0"
                    onClick={(e) => {
                      dispatch({
                        type: "update",
                        payload: {
                          ...value,
                          index: key,
                        },
                      });
                    }}
                  >
                    <FontAwesomeIcon size="lg" icon={faEdit} />
                  </Button>

                  <Button
                    className="bg-danger border-0"
                    onClick={(e) => {
                      dispatch({ type: "delete", key: key });
                    }}
                  >
                    <FontAwesomeIcon size="lg" icon={faTrash} />
                  </Button>
                </div>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Login;
