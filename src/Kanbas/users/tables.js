import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import * as client from "./client";
import { BsTrash3Fill, BsFillCheckCircleFill, BsPencil, BsPlusCircleFill }
    from "react-icons/bs";


function UserTable() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ username: "", password: "", firstName: "", lastName: "", role: "USER" });

    const createUser = async () => {
        console.log("Creating user with data:", user);
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };

    const selectUser = async (selectedUser) => {
        console.log("Selected user ID:", selectedUser._id); // Log the user ID being passed
        try {
            const u = await client.findUserById(selectedUser._id);
            if (u) {
                console.log("Fetched user:", u);
                setUser(u);
            } else {
                console.log("User not found for ID:", selectedUser._id); // Log if user not found
                setUser({ username: "", password: "", firstName: "", lastName: "", role: "USER" });
            }
        } catch (err) {
            console.error("Error fetching user with ID:", selectedUser._id, err);
        }
    };

    const updateUser = async () => {
        try {
            console.log("Updating user with ID:", user._id, "Data:", user); // Log ID and data
            await client.updateUser(user._id, user);
            const updatedUsers = users.map(u => u._id === user._id ? user : u);
            setUsers(updatedUsers);
        } catch (err) {
            console.error("Error updating user:", err);
        }
    };
    
    

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };



    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <h1>User List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                            <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                        </td>
                        <td>
                            <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>

                        <td className="text-nowrap">
                            <BsFillCheckCircleFill onClick={updateUser}
                                className="me-2 text-success fs-1 text" />
                            <BsPlusCircleFill onClick={createUser}
                                className="text-success fs-1 text" />
                        </td>
                    </tr>

                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <Link to={`/kanbas/account/${user._id}`}>
                                {user.username}
                            </Link>
                            <td>{user.password}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.role}</td>

                            <td className="text-nowrap">
                                <button onClick={() => deleteUser(user)} className="btn btn-danger me-2">
                                    <BsTrash3Fill />
                                </button>
                                <button onClick={() => selectUser(user)} className="btn btn-warning me-2">
                                    <BsPencil />
                                </button>
                            </td>

                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;