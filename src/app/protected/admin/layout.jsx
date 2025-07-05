const AdminLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-xl font-bold">Admin Panel</h1>
            </header>
            <main className="flex-1 p-4">
                {children}
            </main>
        </div>
    )
}

export default AdminLayout;
