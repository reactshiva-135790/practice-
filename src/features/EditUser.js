import { useState } from "react"
import Button from "../components/Button"
import TextField from "../components/TextField"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { editUser } from "../store/feature/userSlice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditUser = () => {
    const users = useSelector(store => store.user)
    const dispatch = useDispatch();
    const params = useParams();
    console.log(params)
    const navigate = useNavigate();
    const exiting = users.filter((user) => user.id === params.id)
    const { name, email, phone, contact } = exiting[0]
    const [values, setValues] = useState({
        name: name,
        email: email,
        phone: phone,
        contact: contact,
    })

    const handleEdit = () => {
        setValues({ name: " ", email: "", phone: " ", contact: " " })
        dispatch(editUser({
            id: params.id,
            name: values.name,
            email: values.email,
            phone: values.phone,
            contact: values.contact
        }))

        toast.success('User updated successfully!', {
            position: toast.POSITION.TOP_CENTER
        });

        setTimeout(() => {
            console.log(values)
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
                                label="Name" inputProps={{ type: "text", placeholder: "John Doe" }} />
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <TextField value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })}
                                label="email" inputProps={{ type: "email", placeholder: "example@gmail.com" }} />
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <TextField value={values.phone} onChange={(e) => setValues({ ...values, phone: e.target.value })}
                                label="Phone" inputProps={{ type: "text", placeholder: "123-456-789" }} />
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <TextField value={values.contact} onChange={(e) => setValues({ ...values, contact: e.target.value })}
                                label="Contact" inputProps={{ type: "text", placeholder: "Lucknow Uttar Pradesh" }} />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <Button onClick={handleEdit}>Edit User Data</Button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default EditUser;