import React from 'react'

const Spinner =()=> {
    
        return (
            <div className='text-center my-4'>
                <div className="spinner-grow text-dark mx-1" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-dark mx-1" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-dark mx-1" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    
}
export default Spinner
