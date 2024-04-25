import { useEffect } from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

const endpoint = 'http://127.0.0.1:8000/api';

const ShowAuthors = () => {

    const [authors, setAuthors] = useState([]);
    
    useEffect( () => {
        getAllAuthors();
    }, []);

    const getAllAuthors = async () => {
        const response = await axios.get(`${endpoint}/authors`);
        //console.log(response.data);
        setAuthors(response.data);
    }

    const deleteAuthor = async (id) => {
        await axios.delete(`${endpoint}/authors/${id}`);
        getAllAuthors();
    }

    return (
        <div>
            <div className="d-grid gap-2">
                <Link to={'/createAuthor'} className="btn btn-success btn-lg mb-2 text-white">Crear un nuevo autor</Link>
            </div>
            <table className="table table-striped">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { authors.map( (author) => (
                    <tr key={author.id}>
                        <td>{author.name}</td>
                        <td>
                            <Link to={`/editAuthor/${author.id}`} className="btn btn-warning">Editar</Link>
                            <button onClick={ () => deleteAuthor(author.id) } className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowAuthors