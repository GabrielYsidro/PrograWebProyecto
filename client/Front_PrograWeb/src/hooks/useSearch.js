export function useSearch(items, key) {
    const [query, setQuery] = useState('');
    const filtered = items.filter(item =>
        item[key].toLowerCase().includes(query.toLowerCase())
    );
    return { query, setQuery, filtered };
}