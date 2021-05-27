import {useState} from 'react';

const ReviewSortOptions = ({setSortBy, setOrderBy}) => {
    const [order, setOrder] = useState('asc')
    const [sort, setSort] = useState('created_at')
    const handleSortChange = (event) =>{
        setSort(event.target.value)
    }
    const handleOrderChange = (event) =>{
        setOrder(event.target.value)
    }

    return (
        <>
        <form
        onSubmit={(event)=>{
            event.preventDefault()
            console.log(`sort_by=${sort}, order=${order}`)
            setSortBy(sort)
            setOrderBy(order)
        }}
        >
            <select value={sort} onChange={handleSortChange}>
                <option value="votes">Popular</option>
                <option value="comment_count">Comments</option>
                <option value="created_at">Newest</option>
            </select>
            <select value={order} onChange={handleOrderChange}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <button >Sort!</button>
        </form>
        </>
    );
};

export default ReviewSortOptions;