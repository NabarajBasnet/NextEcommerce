const Loading = () => {
    return (
        <>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1><span className="animate-ping text-black text-9xl">....</span></h1>
            </div>
        </>
    )
}

export default Loading;
