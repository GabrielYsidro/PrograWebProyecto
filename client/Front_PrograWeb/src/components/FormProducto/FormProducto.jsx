import { Link } from 'react-router-dom';
import { useState } from 'react';
import AgregarCategoria from '../../pages/AdminPages/AddCategory.jsx';
import { categorias as categoriasConst } from '../../constants/Consts.jsx';
import modalStyles from '../../styles/AddCategory.module.css';

const FormProduct = () => {
    const [showModal, setShowModal] = useState(false);
    const [categorias, setCategorias] = useState([...categoriasConst]);

    // Recibe la nueva categoría desde el modal y actualiza el estado
    const handleAddCategoria = (nuevaCategoria) => {
        setCategorias(prev => [...prev, nuevaCategoria]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para manejar el envío del formulario
        console.log('Formulario enviado');
    };

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
            <label htmlFor="categoria">Categoría:</label>
            <select id="categoria" name="categoria" required>
                <option value="">Selecciona una categoría</option>
                {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.nombre}>
                        {categoria.emoji} {categoria.nombre}
                    </option>
                ))}
            </select>
            <button
                type="button"
                className={modalStyles.addCategoryBtn}
                onClick={() => setShowModal(true)}
            >
                + Agregar categoría
            </button>

            {showModal && (
                <div className={modalStyles.modalOverlay}>
                    <div className={modalStyles.modalContent}>
                        <button
                            className={modalStyles.closeBtn}
                            onClick={() => setShowModal(false)}
                        >
                            ×
                        </button>
                        <AgregarCategoria
                            onClose={() => setShowModal(false)}
                            onAddCategoria={handleAddCategoria}
                        />
                    </div>
                </div>
            )}
        </form>
    );
};

export default FormProduct;

