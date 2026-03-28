import { useState } from 'react';

export const useContact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

const resetState = () => {
  setError('');
  setSuccess(false);
};
  
const submitForm = async (form: {
  nombre: string;
  email: string;
  area: string;
  mensaje: string;
}) => {
  setError('');
  setSuccess(false);


  
  // 🧠 regex básico de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!form.nombre) {
    setError('El nombre es obligatorio');
    return;
  }

  if (!form.email) {
    setError('El correo es obligatorio');
    return;
  }

  if (!emailRegex.test(form.email)) {
    setError('El correo no es válido');
    return;
  }

  if (!form.mensaje) {
    setError('El mensaje es obligatorio');
    return;
  }

  try {
    setLoading(true);

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    console.log(data);

    if (!res.ok) throw new Error(data.error);

    setSuccess(true);

  } catch (err) {
    setError('Ocurrió un error');
  } finally {
    setLoading(false);
  }
};

  return {
    submitForm,
    loading,
    error,
    success,
    resetState
  };
};