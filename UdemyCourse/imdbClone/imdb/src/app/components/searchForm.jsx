import React from 'react';

const SearchForm = (props) => {
    return (
        <form className='w-8/12 mx-auto flex mb-8'>
            <input type="text" className='w-full bg-inherit p-2 rounded-lg' placeholder='Search...'/>
            <button className='bg-inherit p-2'>Search</button>
        </form>
    )
}

export default SearchForm;