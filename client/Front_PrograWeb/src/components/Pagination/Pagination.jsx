import React from 'react';
import styles from './Pagination.module.css';

function getPageNumbers(currentPage, totalPages) {
  const pages = [];
  if (totalPages <= 4) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return pages;
  }

  // Siempre muestra la primera y la última página
  pages.push(1);

  // Si la página actual está lejos del inicio, muestra puntos suspensivos
  if (currentPage > 3) pages.push('...');

  // Páginas cercanas a la actual
  for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
    pages.push(i);
  }

  // Si la página actual está lejos del final, muestra puntos suspensivos
  if (currentPage < totalPages - 2) pages.push('...');

  pages.push(totalPages);
  return pages;
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      {pageNumbers.map((num, idx) =>
        num === '...' ? (
            <span key={`ellipsis-${idx}`} className={styles.paginationEllipsis}>...</span>
        ) : (
            <button
            key={`page-${num}`}
            className={`${styles.paginationButton} ${currentPage === num ? styles.active : ''}`}
            onClick={() => onPageChange(num)}
            disabled={currentPage === num}
            >
            {num}
            </button>
        )
        )}
      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;