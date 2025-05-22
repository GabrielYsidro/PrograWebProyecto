
import { use } from 'react';
import { Link } from 'react-router-dom';

const FormProduct = ({initialValues,onSubmit,onCancel,submitButtonText,cancelButtonText, isEditMode =false}) => {
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
            <div>
                <label>
                    Nombre del producto:
                    <input type="text" id='nombre' name="nombre" value={formData.nombre} onChange={handleChange} required readOnly={isEditMode && !onCancel}/>
                </label>
            </div>
            <div>
                <label>
                    Color:
                    <input type="text" id='color' name="color" value={formData.color} onChange={handleChange} required readOnly={isEditMode && !onCancel}/>
                </label>
            </div>
            <div>
                <label>
                    Precio:
                    <input type="number" id='precio' name="precio" min="0" step="0.01" value={formData.precio} onChange={handleChange} required readOnly={isEditMode && !onCancel}/>
                </label>
            </div>
            <div>
                <label>
                    Imagen (URL):
                    <input type="url" id='imagen' name="imagen" value={formData.imagen} onChange={handleChange} required readOnly={isEditMode && !onCancel}/>
                </label>
            </div>
            <div>
                <button type="submit" className="btn btn-primary">{submitButtonText || 'Guardar'}</button>
                {onCancel && (
                    <Link to="/admin">
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>{cancelButtonText}</button>
                    </Link>
                )}
            </div>
        </form>
    );
};

export default FormProduct;

