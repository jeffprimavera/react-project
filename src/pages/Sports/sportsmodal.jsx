import React, {useEffect, useState, useRef} from 'react'

function SportsModal({closeModal}) {

    return (    
        <div>
            <div>
                Modal
                <button className='btn' onClick={() => {closeModal(false)}}>Close Modal</button>
            </div>
        </div>
    )

}

export default SportsModal;
