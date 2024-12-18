function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <h1 className="text-9xl font-extrabold text-red-600 mb-4">404</h1>
            <p className="text-2xl text-gray-800 mb-8">
                Oops! The page you are looking for does not exist.
            </p>
            <div className="text-center">
                <img
                    src="https://i.ibb.co/Ny7Y5ST/image-removebg-preview.png"
                    alt="Logo"
                    className="h-32 mb-4"
                />
                <p className="text-lg text-gray-600">
                    Powered by{" "}
                    <span className="font-semibold text-red-600">
                        Mr Saifi
                    </span>
                </p>
            </div>
            <a
                href="/"
                className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
            >
                Go to Homepage
            </a>
        </div>
    );
}

export default NotFound;
