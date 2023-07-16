import Button from '../components/Button'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from "../store/feature/userSlice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UserList = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user)

    const handleRemoveUser = (id) => {
        toast.success('User deleted successfully!', {
            position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
            dispatch(deleteUser({ id: id }))
        }, 1000);

    }


    const renderCard = () => users.map((user) =>
        <div className="container" key={user.id}>
            <table className="table table-responsive table-borderless table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.contact}</td>
                        <td className='d-flex justify-content-between'>  <Link to={`edit-user/${user.id}`}><Button className="card-link">Edit</Button></Link>

                            <Button onClick={() => handleRemoveUser(user.id)} className="card-link">Delete</Button>
                            <ToastContainer /></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )

    return (
        <div className='container mt-5'>
            <Link to="add-user"><Button>Add User</Button></Link>
            <div className='grid gap-5 md:grid-cols-2'>
                {
                    users.length > 0 ? renderCard() : <p className='text-center col-span-2 text-gray-700'>No user</p>
                }
            </div>
        </div>
    )
}

export default UserList