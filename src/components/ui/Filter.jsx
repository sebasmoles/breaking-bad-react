import { getSuggestedQuery } from '@testing-library/react';
import React, { useState } from 'react'

const Filter = ({ getQuery }) => {
    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q); 
        getQuery(q); 
    }

    return (
        <section className='search'>
            <form>
                <input 
                    type="text" 
                    placeholder='Filter Characters' 
                    value={text}
                    onChange={(e) => onChange(e.target.value)} 
                    autoFocus 
                />
            </form>
        </section>
    )
}

export default Filter
