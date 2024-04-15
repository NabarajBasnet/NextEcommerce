const Loading = () => {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center rounded-full bg-white p-4">
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                <h1><span className="animate-ping text-black text-9xl">Loading...</span></h1>
            </div>
        </div>
    );
}

export default Loading;
