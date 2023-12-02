import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    // const fetchAccount = async () => {
    //     const account = await client.account();
    //     setAccount(account);
    // };
    // const updateUser = async () => {
    //     const status = await client.updateUser(user._id, user);
    // };

    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
      };
    

    const fetchAccount = async () => {
        try {
            const account = await client.account();
            console.log("Account fetched:", account); // Log statement
            setAccount(account);
        } catch (error) {
            console.error("Error fetching account:", error); // Error log
            navigate("/project/signin");
        }
    };

    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const save = async () => {
        try {
            await client.updateUser(account._id, account);
            console.log("Account updated successfully");
            navigate("/project/users");
        } catch (error) {
            console.error("Error updating account:", error);
        }
    };

    useEffect(() => {
        if (id) {
          findUserById(id);
        } else {
          fetchAccount();
        }
      }, []);

    // useEffect(() => {
    //     fetchAccount();
    // }, []);

    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <input value={account.username}
                        onChange={(e) => setAccount({
                            ...account,
                            username: e.target.value
                        })} />
                    <input value={account.password}
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} />
                    <input value={account.firstName}
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />
                    <input value={account.lastName}
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />
                    <input value={account.dob}
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} />
                    <input value={account.email}
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    <select onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button onClick={save}>
                        Save
                    </button>
                    <Link to="/project/admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>

                    {/* <button onclick={updateUser} className="btn btn-primary">
                        Update
                    </button> */}

                    <button onClick={signout} className="btn btn-primary">
                        Signout
                    </button>

                </div>
            )}
        </div>
    );

}
export default Account;