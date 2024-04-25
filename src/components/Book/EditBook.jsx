import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://127.0.0.1:8000/api/books';

const EditBook = () => {
    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [datePub, setDatePub] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}/${id}`, {
            isbn: isbn,
            title: title,
            date_pub: datePub
        });
        navigate('/showBooks');
    }

    useEffect( () => {
        const getBookById = async () => {
            const response = await axios.get(`${endpoint}/${id}`)
            console.log(response);
            setIsbn(response.data.isbn);
            setTitle(response.data.title);
            setDatePub(response.data.date_pub);
        }
        getBookById();
        
    }, []);

    return (
        <div>
            <h3>Modificar el libro:</h3>
            <form onSubmit={update}>
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
                <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </div>
    );
}

export default EditBook