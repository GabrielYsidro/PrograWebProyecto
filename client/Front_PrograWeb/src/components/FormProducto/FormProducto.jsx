
import { Link } from 'react-router-dom';

const FormProduct = () => {
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
        </form>
    );
};

export default FormProduct;

