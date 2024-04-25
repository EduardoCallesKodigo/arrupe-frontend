import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const endpoint = 'http://127.0.0.1:8000/api/books';

const CreateBook = () => {
    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [datePub, setDatePub] = useState('');
    const navigate = useNavigate();

    //Funcion para guardar un libro
    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {
            isbn: isbn,
            title: title,
            date_pub: datePub
        });
        navigate('/showBooks');
    }

    return (
        <div>
            <h3>Crear un nuevo libro</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">ISBN</label>
                    <input 
                        value={isbn}
                        onChange={ (e) =>  setIsbn(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input 
                        value={title}
                        onChange={ (e) =>  setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha de publicación</label>
                    <input 
                        value={datePub}
                        onChange={ (e) =>  setDatePub(e.target.value)}
                        type="date"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    );
}

export default CreateBook