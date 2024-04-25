import { useEffect } from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

const endpoint = 'http://127.0.0.1:8000/api';

const ShowBooks = () => {

    const [books, setBooks] = useState([]);
    
    useEffect( () => {
        getAllBooks();
    }, []);

    const getAllBooks = async () => {
        const response = await axios.get(`${endpoint}/books`);
        //console.log(response.data);
        setBooks(response.data);
    }

    const deleteBook = async (id) => {
        await axios.delete(`${endpoint}/books/${id}`);
        getAllBooks();
    }

    return (
        <div>
            <div className="d-grid gap-2">
                <Link to={'/createBook'} className="btn btn-success btn-lg mb-2 text-white">Crear un nuevo libro</Link>
            </div>
            <table className="table table-striped">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>ISBN</th>
                        <th>Título</th>
                        <th>Fecha publicación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { books.map( (book) => (
                    <tr key={book.id}>
                        <td>{book.isbn}</td>
                        <td>{book.title}</td>
                        <td>{book.date_pub}</td>
                        <td>
                            <Link to={`/editBook/${book.id}`} className="btn btn-warning">Editar</Link>
                            <button onClick={ () => deleteBook(book.id) } className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowBooks