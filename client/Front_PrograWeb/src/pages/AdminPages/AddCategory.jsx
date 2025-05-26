import styles from '../../styles/AddCategory.module.css';
import { useCategoriaContext } from '../../hooks/CategoriaContext.jsx';

function AgregarCategoria({ onClose, onAddCategoria }) {
    const { categoriasItems, addItem } = useCategoriaContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const nombre = formData.get('nombre');
        const color = formData.get('color');
        const emoji = formData.get('emoji');

        const nuevaCategoria = { id: categoriasItems.length + 1, nombre, color, emoji };
        addItem(nuevaCategoria); // Usa el contexto para agregar
        if (onAddCategoria) onAddCategoria(nuevaCategoria); // Notifica al padre si es necesario
        alert(`Categoría "${nombre}" agregada con éxito.`);
        event.target.reset();
        if (onClose) onClose();
    };

    return (
        <div>
            <h2>Agregar Categoría</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="nombre">Nombre de la Categoría:</label>
                <input type="text" id="nombre" name="nombre" required />
                <label htmlFor="color">Color de la Categoría:</label>
                <input type="color" id="color" name="color" required />
                <label htmlFor="emoji">Emoji de la Categoría:</label>
                <input type="text" id="emoji" name="emoji" required maxLength={2} />
                <button type="submit" className={styles.submitBtn}>Agregar Categoría</button>
            </form>
        </div>
    );
}

export default AgregarCategoria;