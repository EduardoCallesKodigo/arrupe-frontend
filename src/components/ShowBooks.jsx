import { useEffect } from "react";
import { useState } from "react";
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

    return (
        <div>
            <div className="d-grid gap-2">
                Boton Crear un nuevo libro
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
                        <td></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowBooks