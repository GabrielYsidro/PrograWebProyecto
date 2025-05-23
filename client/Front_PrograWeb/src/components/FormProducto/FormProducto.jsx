import { use } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AgregarCategoria from '../../pages/AdminPages/AddCategory.jsx';
import { categorias as categoriasConst } from '../../constants/Consts.jsx';
import modalStyles from '../../styles/AddCategory.module.css';
import { useState, useEffect } from 'react';
import { productos } from '../../constants/Consts.jsx';

const FormProducto = ({initialValues,onSubmit,onCancel,submitButtonText,cancelButtonText, isEditMode =false}) => {
    const [showModal, setShowModal] = useState(false);
    const [categorias, setCategorias] = useState([...categoriasConst]);

    // Recibe la nueva categoría desde el modal y actualiza el estado
    const handleAddCategoria = (nuevaCategoria) => {
        setCategorias(prev => [...prev, nuevaCategoria]);
    };

    const [formData, setFormData] = useState(initialValues || {
        nombre: '',
        color: '',
        precio: 0,
        imagen: '',
    });

    useEffect(() => {
        if (initialValues) {
            setFormData(initialValues);
        }
    }, [initialValues]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre del producto:
                <input type="text" name="nombre" required />
            </label>
            <label>
                Color:
                <input type="text" name="color" required />
            </label>
            <label>
                Precio:
                <input type="number" name="precio" min="0" step="0.01" required />
            </label>
            <label>
                Imagen (URL):
                <input type="url" name="imagen" required />
            </label>
        </form>
    );
};

export default FormProducto;

