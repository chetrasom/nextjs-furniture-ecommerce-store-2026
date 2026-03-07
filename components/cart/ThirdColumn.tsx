import React from 'react'

// Types
type ThirdColumnProps = {
    id: string
    quantity: number;
};

const ThirdColumn = ({ id, quantity }: ThirdColumnProps) => {
    return (
        <div className='border'>ThirdColumn</div>
    )
}

export default ThirdColumn