import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://127.0.0.1:8000/api/authors';

const EditAuthor = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (e) => {
        e.preventDefault();
        console.log({ name: name });
        await axios.put(`${endpoint}/${id}`, { name: name });
        navigate('/showAuthors');
    }

    useEffect( () => {
        const getAuthorById = async () => {
            const response = await axios.get(`${endpoint}/${id}`)
            console.log(response);
            setName(response.data.name);
        }
        getAuthorById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h3>Modificar el autor:</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                        value={name}
                        onChange={ (e) =>  setName(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </div>
    );
}

export default EditAuthor