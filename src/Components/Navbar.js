import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../Context/DataContext'
import ShoppingIcon from '../ShoppingIcon';

const Navbar = () => {

    const { selected, setSelected } = useContext(DataContext)

    const navCount = selected.reduce(( total, currentItem ) => total += currentItem.count, 0)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-primary" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active text-primary" aria-current="page" to="/products">Products</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-5">
                            <li className="nav-item">
                                <NavLink className="nav-link active mx-4" aria-current="page" to="/basket"><ShoppingIcon/></NavLink>
                            </li>
                        </ul>
                            <span style={{fontSize:"20px"}} className="mx-5">{navCount}</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
