import React, {useEffect, useState} from 'react'

function SportsModal({closeModal}) {

    return (    
        <div>
            Modal
            <button className='btn' onClick={() => {closeModal(false)}}>Close Modal</button>
        </div>
    )

}

export default SportsModal;
