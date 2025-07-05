'use client';
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AdminPage = () => {
    const adminId = Cookies.get('adminId');
    const navigation = useRouter();

    useEffect(() => {
        if (!adminId) {
            navigation.push('/protected/admin/login');
        }
    }, [adminId, navigation]);

    if (!adminId) {
        return null;
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-stone-900">
            <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
            <p className="mb-6">This page is under construction.</p>
            <p className="text-gray-600">Please check back later.</p>
        </div>
    )
}

export default AdminPage;