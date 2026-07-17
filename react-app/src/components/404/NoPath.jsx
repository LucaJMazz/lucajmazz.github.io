function NoPath() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <h1 className="m-10">404</h1>
            <h2 className="text-2xl">Page not found</h2>
            <p className="text-gray-400 jetbrains-mono mt-2 mb-5">The requested URL was not found.</p>
            <button onClick={() => open('/', '_self')} className="underline jetbrains-mono cursor-pointer m-5">back to homepage</button>
            <div className="fludd bg-amber-500">
                <div className="h-1 w-screen bg-amber-400"></div>
                <div className="h-1 w-screen bg-amber-400"></div>
            </div>
        </div>
    );
}

export default NoPath;