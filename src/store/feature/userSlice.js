import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        editUser: (state, action) => {
            const { id, name, email,phone,contact } = action.payload
            const exitingUser = state.find((user) => user.id === id)
            if (exitingUser) {
                exitingUser.name = name;
                exitingUser.email = email;
                exitingUser.phone = phone;
                exitingUser.contact = contact;
                localStorage.setItem("users", JSON.stringify(state));
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const updatedUsers = state.filter((user) => user.id !== id);
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            return updatedUsers;
        },
    }
})


export const { addUser, editUser, deleteUser } = userSlice.actions

export default userSlice.reducer