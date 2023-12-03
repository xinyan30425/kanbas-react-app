import Home from "./home";
import { Routes, Route, Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import UserTable from "./users/tables";
import SignIn from "./users/signin";
import Signup from "./users/signup";
import Account from "./users/account";

function Project() {
    const [key, setKey] = useState("home");

    return (
        <div className="container-fluid">
            <h1>Project</h1>
            <div className="row">
                <div className="col-2">
                    <div className="list-group">
                        <Link to="/project/" className="list-group-item">
                            Home
                        </Link>
                        <Link to="/project/signin" className="list-group-item">
                            Signin
                        </Link>
                        <Link to="/project/signup" className="list-group-item">
                            Signup
                        </Link>
                        <Link to="/project/account" className="list-group-item">
                            Account
                        </Link>
                        <Link to="/project/users" className="list-group-item">
                            Users
                        </Link>
                    </div>
                </div>
                <div className="col-10">
                    <Routes>
                        <Route path="/admin/users" element={<UserTable />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/account/:id" element={<Account />} />
                        <Route path="/users" element={<UserTable />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Project;