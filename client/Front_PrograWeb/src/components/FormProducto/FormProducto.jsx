import { useState, useEffect } from 'react';
import { useCategoriaContext } from '../../hooks/CategoriaContext.jsx';
import styles from './FormProducto.module.css';

const FormProducto = ({initialValues,onSubmit,onCancel,submitButtonText,cancelButtonText, isEditMode =false}) => {
    const { categoriasItems } = useCategoriaContext();

    const [formData, setFormData] = useState(initialValues || {
        nombre: '',
        categoria: '',
        region: '',
        precio: 0,
        imagen: '',
        descripcion: '',
        stock: 0,
        rareza: '',
        activo: true,
        quantity: 1,
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
        // Asegura que los campos obligatorios estén presentes y con valores por defecto
        const { id, ...productoFinal } = {
        ...formData,
        activo: true,
        quantity: 1,
    };
        onSubmit(productoFinal);
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
                        {categoriasItems.map((categoria) => (
                            <option key={categoria.id} value={categoria.name}>{categoria.name}</option>
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
                    <input name="rareza" id="rareza" value={formData['rareza']} onChange={handleChange} required readOnly={isEditMode && !onCancel}>
                    </input>
                </label>
            </div>
            <div>
                <button type="submit">{submitButtonText || 'Guardar'}</button>
                    {onCancel && (
                    <button type="button" onClick={onCancel}>
                        {cancelButtonText || 'Cancelar'}
                    </button>
                    )}
            </div>
        </form>
    );
};

export default FormProducto;