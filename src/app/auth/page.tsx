"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Icons
import { RiMailFill, RiLockFill, RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const Login = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    user: "",
    password: ""
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formData.user == "user" && formData.password == "123") {
      router.push("/admin");
    }
  }

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
      <h1 className="text-3xl font-bold text-white text-center">Iniciar Sesión</h1>
      <form className="mb-6" onSubmit={handleSubmit}>
        <div className="mt-6 relative">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            className="py-3 pl-8 pr-4 bg-gray-900 w-full outline-none rounded-lg"
            placeholder="Usuario"
            name="user"
            onChange={handleChange}
          />
        </div>
        <div className="mt-3 mb-6 relative">
          <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type={showPassword ? "text" : "password"}
            className="py-3 pl-8 pr-4 bg-gray-900 w-full outline-none rounded-lg"
            placeholder="Contraseña"
            name="password"
            onChange={handleChange}
          />
          {showPassword ? (
            <RiEyeFill onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
          ) : (
            <RiEyeOffFill onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
          )}
        </div>
        <div>
          <button type="submit" className="bg-gray-900 font-bold text-white w-full py-3 px-4 rounded-lg hover:text-gray-100 hover:bg-orange-700 transition-colors">Ingresar</button>
        </div>
      </form>
      <div className="flex flex-col items-center gap-3 text-gray-100">
        <Link href="/auth/forgetpassword" className="hover:text-orange-400 transition-colors">
          Recuperar contraseña
        </Link>
        <Link href="/auth/register" className="hover:text-orange-400 transition-colors">
          Registro
        </Link>
      </div>
    </div>
  );
};

export default Login;