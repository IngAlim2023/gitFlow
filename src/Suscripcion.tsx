const Suscripcion = () => {
  return (
     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-2xl max-w-md w-full shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
          Suscríbete a Previmed
        </h2>
        <input
          type="email"
          placeholder="Ingrese su correo electrónico"
          className="w-full h-14 px-5 mb-6 rounded-lg border border-gray-300 shadow-inner placeholder-gray-400
                     focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent transition"
        />
        <button
          className="w-full h-14 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500
                     text-white font-semibold text-lg shadow-lg hover:from-pink-500 hover:to-purple-600
                     active:scale-95 transition-transform duration-150"
        >
          Suscribirse
        </button>
        <p className="mt-4 text-center text-gray-500 text-sm select-none">
          🔒 Tu información está segura con nosotros.
        </p>
      </div>
    </div>
  );
};

export default Suscripcion;
