import { use } from 'react';
import { Link } from 'react-router-dom';
import { categorias as categoriasConst } from '../../constants/Consts.jsx';
import { useState, useEffect } from 'react';
import { productos } from '../../constants/Consts.jsx';
import styles from './FormProducto.module.css';


const FormProducto = ({initialValues,onSubmit,onCancel,submitButtonText,cancelButtonText, isEditMode =false}) => {
    const [showModal, setShowModal] = useState(false);
    const [categorias, setCategorias] = useState([...categoriasConst]);

    // Recibe la nueva categoría desde el modal y actualiza el estado
    const handleAddCategoria = (nuevaCategoria) => {
        setCategorias(prev => [...prev, nuevaCategoria]);
    };

    const [formData, setFormData] = useState(initialValues || {
        nombre: '',
        categoria: '',
        region: '',
        precio: 0,
        imagen: '',
        descripcion: '',
        stock: 0,
        rareza: '',
        evolucion: {},
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
        <form className={styles['form-container']} onSubmit={handleSubmit}>
            <div>
                <label>
                    Nombre:
                    <input type="text" id='nombre' name="nombre" value={formData['nombre']} onChange={handleChange} required readOnly={isEditMode && !onCancel}/>
                </label>
            </div>
            <div>
                <label>
                    Categoria:
                    <select name="categoria" id="categoria" value={formData['categoria']} onChange={handleChange} required readOnly={isEditMode && !onCancel}>
                        <option value="">Seleccione una categoría</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.nombre}>{categoria.nombre}</option>
                        ))}
                    </select>
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
                <label>
                    Descripción:
                    <textarea id='descripcion' name="descripcion" value={formData['descripcion']} onChange={handleChange} required readOnly={isEditMode && !onCancel}></textarea>
                </label>
            </div>
            <div>
                <label>
                    Stock:
                    <input type="number" id='stock' name="stock" min="0" value={formData['stock']} onChange={handleChange} required readOnly={isEditMode && !onCancel}/>
                </label>
            </div>
            <div>
                <label>
                    Rareza:
                    <select name="rareza" id="rareza" value={formData['rareza']} onChange={handleChange} required readOnly={isEditMode && !onCancel}>
                        <option value="">Seleccione una rareza</option>
                        <option value="común">Común</option>
                        <option value="raro">Raro</option>
                        <option value="épico">Épico</option>
                        <option value="legendario">Legendario</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Evolución:
                    <input type="text" id='evolucion' name="evolucion" value={formData['evolucion']} onChange={handleChange} readOnly={isEditMode && !onCancel}/>
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

