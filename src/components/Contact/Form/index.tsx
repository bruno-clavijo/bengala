"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { useContact } from "../../../hooks/useContact";
import { useRouter } from "next/navigation";

const ContactForm = () => {

    const [form, setForm] = useState({
        nombre: "",
        email: "",
        area: "",
        mensaje: ""
        });

    const { submitForm, loading, error, success, resetState  } = useContact();

    useEffect(() => {
        if (success) {
                setForm({
                nombre: "",
                email: "",
                area: "",
                mensaje: ""
                });
            }
    }, [success]);

    useEffect(() => {
    if (success || error) {
        const timer = setTimeout(() => {
        resetState();
        }, 3000);

        return () => clearTimeout(timer);
    }
    }, [success, error]);

    const [timeLeft, setTimeLeft] = useState(120);
    const router = useRouter();

    useEffect(() => {
  if (timeLeft <= 0) {
    // redirigir al home
    router.push("/");
    return;
  }

  const timer = setTimeout(() => {
    setTimeLeft(timeLeft - 1);
  }, 1000);

  return () => clearTimeout(timer);
}, [timeLeft, router]);

if (timeLeft <= 0) {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold text-red-500">
        El tiempo de registro ha expirado ⏳
      </h2>
    </div>
  );
}

    return (
        <>
            <section className="dark:bg-darkmode lg:pb-24 pb-16 pt-0">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
                        <div className="col-span-6">
                            <h2 className="max-w-30 text-[40px] leading-[3.4rem] font-bold mb-9 text-secondary">Regístrate y asegura tu lugar en el hackathon </h2>
                            <form
                                className="flex flex-wrap w-full m-auto justify-between"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    submitForm(form);
                                }}
                                >

                                <div className="mb-4 text-center">
                                    <p className="text-red-500 font-bold">
                                        Tiempo restante: {Math.floor(timeLeft / 60)}:
                                        {String(timeLeft % 60).padStart(2, "0")}
                                    </p>
                                </div>
                                <div className="sm:flex gap-3 w-full">
                                    <div className="mx-0 my-2.5 flex-1">
                                        <label htmlFor="name" className="pb-3 inline-block text-base text-SlateBlueText">Nombre Completo*</label>
                                        <input
                                            //className="
                                            id="name"
                                            type="text"
                                            value={form.nombre}
                                            onChange={(e) =>
                                                setForm({ ...form, nombre: e.target.value })
                                            }
                                            className={`w-full text-base px-4 rounded-lg py-2.5 border 
                                                dark:text-white dark:bg-darkmode 
                                                transition-all duration-500 focus:outline-0 
                                                ${error.includes('nombre') 
                                                ? 'border-red-500 focus:border-red-500' 
                                                : 'border-border dark:border-dark_border focus:border-primary'
                                            }`}
                                            maxLength={50}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="sm:flex gap-3 w-full">
                                    <div className="mx-0 my-2.5 flex-1">
                                        <label htmlFor="email" className="pb-3 inline-block text-base text-SlateBlueText">Correo Electrónico*</label>
                                        <input
                                            id="email"
                                            type="text"
                                            value={form.email}
                                            onChange={(e) =>
                                                setForm({ ...form, email: e.target.value })
                                            }
                                            className={`w-full text-base px-4 rounded-lg py-2.5 border 
                                                dark:text-white dark:bg-darkmode 
                                                transition-all duration-500 focus:outline-0 
                                                ${error.includes('correo') 
                                                ? 'border-red-500 focus:border-red-500' 
                                                : 'border-border dark:border-dark_border focus:border-primary'
                                            }`}
                                            maxLength={100}
                                        />
                                    </div>
                                    <div className="mx-0 my-2.5 flex-1">
                                        <label htmlFor="area" className="pb-3 inline-block text-base text-SlateBlueText">Área de Intéres</label>
                                        <select  
                                            className="w-full text-base px-4 py-2.5 text-SlateBlueText rounded-lg border-border dark:text-white border-solid dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0"
                                            id="Specialist"
                                            value={form.area}
                                            onChange={(e) =>
                                                setForm({ ...form, area: e.target.value })
                                            }
                                        >
                                                <option value="">Selecciona una opción</option>
                                                <option value="Inteligencia Artificial">Inteligencia Artificial</option>
                                                <option value="Machine Learning">Machine Learning</option>
                                                <option value="Ciencia de Datos">Ciencia de Datos</option>
                                                <option value="Desarrollo Web">Desarrollo Web</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:flex gap-3 w-full">
                                    <div className="mx-0 my-2.5 flex-1">
                                        <label htmlFor="date" className="pb-3 inline-block text-base text-SlateBlueText">Tu mensaje*</label>
                                        <textarea 
                                            placeholder="Mensaje"
                                            value={form.mensaje}
                                            onChange={(e) =>
                                            setForm({ ...form, mensaje: e.target.value })
                                            }
                                            className={`w-full text-base px-4 rounded-lg py-2.5 border 
                                                dark:text-white dark:bg-darkmode 
                                                transition-all duration-500 focus:outline-0 
                                                ${error.includes('mensaje') 
                                                ? 'border-red-500 focus:border-red-500' 
                                                : 'border-border dark:border-dark_border focus:border-primary'
                                            }`}
                                            maxLength={300}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="mx-0 my-2.5 w-full">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="mt-4 btn btn-1 hover-filled-slide-down overflow-hidden rounded-lg"
                                    >
                                        <span>
                                            {loading ? "Enviando..." : "Envía tu mensaje"}
                                        </span>
                                    </button>
                                    {error && (
                                        <div className="mt-3 p-3 rounded-lg bg-red-100 border border-red-400 text-red-700 animate-pulse">
                                            ❌ <span>{error}</span>
                                        </div>
                                    )}

                                    {success && (
                                        <div className="mt-3 p-3 rounded-lg bg-green-100 border border-green-400 text-green-700 animate-fade-in">
                                            ✅ <span>Registro exitoso 🎉</span>
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                        <div className="col-span-6">
                            <Image
                                src="/images/contact-page/contact.jpg"
                                alt="Contact"
                                width={1300}
                                height={0}
                                quality={100}
                                style={{ width: '100%', height: 'auto' }}
                                className="bg-no-repeat bg-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;
