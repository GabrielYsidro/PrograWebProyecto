import { useState, useEffect } from 'react';
import { useCategoriaContext } from '../../hooks/CategoriaContext.jsx';
import styles from './FormProducto.module.css';

const initialEvolution = {
    nombre: '',
    imagen: '',
    nivel: '',
};

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
        evoluciones: [], // Inicializa como un array vacío
    });

    useEffect(() => {
        if (initialValues) {
            setFormData(initialValues);
        }
    }, [initialValues]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith('evoluciones')) {
            const parts = name.split(/\[|\]|\./).filter(Boolean);
            const index = parseInt(parts[1]);
            const field = parts[2];

            const nuevasEvoluciones = [...formData.evoluciones];
            nuevasEvoluciones[index][field] = value;
            setFormData({
                ...formData,
                evoluciones: nuevasEvoluciones,
            });
        }else {
            setFormData({
            ...formData,
            [name]: value,
            });
        }
    }

    const handleAddEvolution = () => {
        setFormData(prevFormData => ({
            ...prevFormData,
            evoluciones: [...prevFormData.evoluciones, { ...initialEvolution }],
        }));
    };

    const handleRemoveEvolucion = (index) => {
        const nuevasEvoluciones = [...formData.evoluciones];
        nuevasEvoluciones.splice(index, 1);
        setFormData({ ...formData, evoluciones: nuevasEvoluciones });
    };

    const renderEvoluciones = () => {
        return formData.evoluciones.map((evolucion, index) => (
        <div key={index}>
            <h3>Evolución {index + 1}</h3>
            <label>
            Nombre:
            <input
                type="text"
                name={`evoluciones[${index}].nombre`}
                value={evolucion.nombre}
                onChange={handleChange}
            />
            </label>
            <label>
            Imagen:
            <input
                type="text"
                name={`evoluciones[${index}].imagen`}
                value={evolucion.imagen}
                onChange={handleChange}
            />
            </label>
            <label>
            Nivel:
            <input
                type="number"
                name={`evoluciones[${index}].nivel`}
                value={evolucion.nivel}
                onChange={handleChange}
            />
            </label>
            <button type="button" onClick={() => handleRemoveEvolucion(index)}>
            Eliminar Evolución
            </button>
        </div>
        ));
    };

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
                        {categoriasItems.map((categoria) => (
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
                    <input name="rareza" id="rareza" value={formData['rareza']} onChange={handleChange} required readOnly={isEditMode && !onCancel}>
                    </input>
                </label>
            </div>
            <div>
                <label>
                    Evolución:
                    {renderEvoluciones()}
                    <button type="button" onClick={handleAddEvolution}>
                        Agregar Evolución
                    </button>
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