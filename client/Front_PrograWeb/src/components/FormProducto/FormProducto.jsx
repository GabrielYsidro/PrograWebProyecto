import { use } from 'react';
import { Link } from 'react-router-dom';
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
        tipo: '',
        region: '',
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
            <div>
                <label>
                    Nombre:
                    <input type="text" id='nombre' name="nombre" value={formData['nombre']} onChange={handleChange} required readOnly={isEditMode && !onCancel}/>
                </label>
            </div>
            <div>
                <label>
                    Tipo:
                    <input type="text" id='tipo' name="tipo" value={formData['tipo']} onChange={handleChange} required readOnly={isEditMode && !onCancel}/>
                </label>
            </div>
            <div>
                <label>
                    Region:
                    <input type="text" id='region' name="region" value={formData['region']} onChange={handleChange} required readOnly={isEditMode && !onCancel}/>
                </label>
            </div>
            <div>
                <label>
                Precio:
                <input type="number" id='precio' name="precio" min="0" step="0.01" value={formData['precio']} onChange={handleChange} required readOnly={isEditMode && !onCancel}/>
            </label>
            </div>
            <div>
                <label>
                    Imagen:
                    <input type="text" id='imagen' name="imagen" value={formData['imagen']} onChange={handleChange} required readOnly={isEditMode && !onCancel}/>
                </label>
            </div>
            <div>
                <button type="submit">{submitButtonText || 'Guardar'}</button>
                    {onCancel && ( // Mostrar el botón de cancelar solo si se pasa la prop onCancel
                    <button type="button" onClick={onCancel}>
                        {cancelButtonText || 'Cancelar'}
                    </button>
                    )}
            </div>
        </form>
    );
};

export default FormProducto;

