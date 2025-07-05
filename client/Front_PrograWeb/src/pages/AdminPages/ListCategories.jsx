import TopBarAdmin from '../../components/TopBarAdmin/TopBarAdmin.jsx';
import Footer from '../../components/Footer/Footer.jsx'
import styles from '../../styles/ListCategories.module.css';
import modalStyles from '../../styles/AddCategory.module.css';
import { useState } from 'react';
import AgregarCategoria from '../../pages/AdminPages/AddCategory.jsx';
import { useCategoriaContext } from '../../hooks/CategoriaContext.jsx';

function ListCategories() {
  const [busqueda, setBusqueda] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { categoriasItems } = useCategoriaContext();

  // Filtro por búsqueda usando el contexto
  const categoriasFiltradas = categoriasItems.filter(cat =>
    cat.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <div className={styles['home-background']}></div>
      <div className={styles['home-content']}>
        <TopBarAdmin handleSearch={() => { }} busqueda={busqueda} setBusqueda={setBusqueda} />
        <h1 className={styles.titulo}>Lista de Categorías</h1>
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
              />
            </div>
          </div>
        )}
        <table className={styles.categoriasTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Color</th>
              <th>Emoji</th>
            </tr>
          </thead>
          <tbody>
            {categoriasFiltradas.map(cat => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>
                  <span
                    className={styles.colorBox}
                    style={{ background: cat.color, borderColor: cat.color }}
                    title={cat.color}
                  />
                  {cat.color}
                </td>
                <td className={styles.emoji}>{cat.emoji}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Footer />
      </div>
    </>
  );
}

export default ListCategories;
