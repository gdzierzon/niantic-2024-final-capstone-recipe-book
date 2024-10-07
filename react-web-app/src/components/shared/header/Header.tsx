import { Link, NavLink } from "react-router-dom"
import { useAppDispatch } from "../../../store/hooks";
import { logout } from "../../../store/features/authentication-slice";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export default function Header() {

    const dispatch = useAppDispatch()
    const { isAuthenticated, user } = useSelector((state: RootState) => state.authentication)

    function handleLogout()
    {
        localStorage.removeItem('user')
        dispatch(logout()) 
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Capstone</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/recipes">Recipe Search</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/user/1/profile" className="nav-link dropdown-toggle show" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">User</NavLink>
                            <div className="dropdown-menu show" data-bs-popper="static">
                                <Link className="dropdown-item" to="/user/1/profile">Profile</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/user/1/library">Library</Link>
                                <Link className="dropdown-item" to="/user/1/profile">Meal Planner</Link>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto" >

                        { 
                        !isAuthenticated && 
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        }

                        { 
                        isAuthenticated && <>
                        <li className="nav-item"><p className="nav-link">Welcome {user?.username}</p> </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={handleLogout} >Logout</button>
                        </li></>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}