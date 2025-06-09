import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Inicia Sesion</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo electronico</label>
            <input type="email"className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"placeholder="correo@ejemplo.com"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input type="password"className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"placeholder="••••••••"/>
          </div>
          <button type="submit"className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Iniciar</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
