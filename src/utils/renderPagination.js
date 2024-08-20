export const renderPagination = (totalProducts, productsPerPage, currentPage) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = () => {
        const visiblePages = [];

        if (totalPages <= 4) {
            return pageNumbers;
        }

        if (currentPage <= 4) {
            visiblePages.push(...pageNumbers.slice(0, 4));
            visiblePages.push('...', totalPages);
        } else if (currentPage > totalPages - 2) {
            visiblePages.push(1, '...');
            visiblePages.push(...pageNumbers.slice(totalPages - 4, totalPages));
        } else {
            visiblePages.push(1, '...');
            visiblePages.push(...pageNumbers.slice(currentPage - 2, currentPage + 1));
            visiblePages.push('...', totalPages);
        }

        return visiblePages;
    };
    
    return {
        renderPageNumbers,
        totalPages
    }
}