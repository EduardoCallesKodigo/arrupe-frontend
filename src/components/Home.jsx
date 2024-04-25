import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Bienvenidos al Frontend</h1>
            <ol>
                <li><Link to='/showBooks'>Libros</Link></li>
                <li><Link to='/showAuthors'>Autores</Link></li>
            </ol>
        </div>
    );
}

export default Home