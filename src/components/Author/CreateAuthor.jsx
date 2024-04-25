import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const endpoint = 'http://127.0.0.1:8000/api/authors';

const CreateAuthor = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    //Funcion para guardar un libro
    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {
            name: name
        });
        navigate('/showAuthors');
    }

    return (
        <div>
            <h3>Crear un nuevo autor</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                        value={name}
                        onChange={ (e) =>  setName(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    );
}

export default CreateAuthor