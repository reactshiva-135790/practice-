
import { useRoutes } from "react-router-dom";
import UserList from "../features/UserList"
import AddUser from "../features/AddUser";
import EditUser from "../features/EditUser"
import Error from "../pages/Error"


function RoutPage() {
    let element = useRoutes([
        {
            path: "/",
            element: <UserList />
        },
        { path: "/add-user", element: <AddUser /> },
        { path: "/edit-user/:id", element: <EditUser /> },
        { path: "*", element: <Error /> },
    ]);

    return element;
}

export { RoutPage }