import React from 'react';

const page = ({params}) => {
    const id = params.id;
    return (
        <div className="min-h-screen bg-gray-50">
            <h1 className='text-4xl font-bold py-10 bg-amber-600'>
                Services : {id}
            </h1>
        </div>
    );
};

export default page;