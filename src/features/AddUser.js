import { useState } from "react"
import Button from "../components/Button"
import TextField from "../components/TextField"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addUser } from "../store/feature/userSlice"
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        contact: "",
    })

    const handleAdd = () => {
        setValues({ name: " ", email: "",phone: "",contact : "" })
        dispatch(addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email,
            phone: values.phone,
            contact: values.contact
        }))

        toast.success('User added successfully!', {
            position: toast.POSITION.TOP_CENTER
        });

        console.log(values)
        setTimeout(() => {
            navigate("/")
        }, 1000);

    }
    return (
        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-center">
                    <div>
                        <div>
                            <TextField value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })}
                                label="Name" inputProps={{ type: "text", placeholder: "John Doe" }}  />

                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <TextField value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })}
                                label="Email" inputProps={{ type: "email", placeholder: "example@gmail.com" }} />
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <TextField value={values.phone} onChange={(e) => setValues({ ...values, phone: e.target.value })}
                                label="Phone" inputProps={{ type: "number", placeholder: "123-456-789" }} />
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <TextField value={values.contact} onChange={(e) => setValues({ ...values, contact: e.target.value })}
                                label="Contact" inputProps={{ type: "text", placeholder: "Lucknow Uttar Pradesh" }} />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <Button onClick={handleAdd}>Submit</Button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddUser