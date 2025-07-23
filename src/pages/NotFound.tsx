import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-4">Página no encontrada</p>
      <Link 
        to="/" 
        className="text-blue-500 hover:text-blue-700 underline"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;