"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const dashboard = () => {
    const role  = 'admin';

    if(role === 'admin'){
        return useRouter().push('/admin-dashboard');
    }
    return (
        <div>
            Dashboard
        </div>
    );
};

export default dashboard;