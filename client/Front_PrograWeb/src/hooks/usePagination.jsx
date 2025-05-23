export function usePagination(items, itemsPerPage) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const paginatedItems = items.slice(startIdx, startIdx + itemsPerPage);
    return { currentPage, setCurrentPage, totalPages, paginatedItems };
}