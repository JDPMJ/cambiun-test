"use client";

import React, { useState } from "react";
import Link from "next/link";

// Icons
import { RiMailFill, RiLockFill, RiEyeFill, RiEyeOffFill, RiUserFill } from "react-icons/ri";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px] bg-gray-800">
      <h1 className="text-3xl font-bold text-white text-center">Registro</h1>
      <form className="mb-6">
        <div className="mt-6 relative">
          <RiUserFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="email"
            className="py-3 pl-8 pr-4 bg-gray-900 w-full outline-none rounded-lg"
            placeholder="Nombres"
          />
        </div>
        <div className="mt-3 relative">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            className="py-3 pl-8 pr-4 bg-gray-900 w-full outline-none rounded-lg"
            placeholder="Email"
          />
        </div>
        <div className="mt-3 relative">
          <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type={showPassword ? "text" : "password"}
            className="py-3 pl-8 pr-4 bg-gray-900 w-full outline-none rounded-lg"
            placeholder="Contraseña"
          />
          {showPassword ? (
            <RiEyeFill onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
          ) : (
            <RiEyeOffFill onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
          )}
        </div>
        <div className="mt-3 mb-6 relative">
          <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type={showPassword ? "text" : "password"}
            className="py-3 pl-8 pr-4 bg-gray-900 w-full outline-none rounded-lg"
            placeholder="Confirmar contraseña"
          />
          {showPassword ? (
            <RiEyeFill onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
          ) : (
            <RiEyeOffFill onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
          )}
        </div>
        <div>
          <button type="submit" className="bg-primary font-bold text-white w-full py-3 px-4 rounded-lg hover:text-gray-100 hover:bg-orange-700 transition-colors">Registrar</button>
        </div>
      </form>
      <div className="text-center text-gray-100">
        <Link href="/auth" className="hover:text-orange-400 transition-colors">
          Ingresar
        </Link>
      </div>
    </div>
  );
};

export default Register;