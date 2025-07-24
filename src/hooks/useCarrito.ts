import { useState, useEffect } from 'react';

export const useCarrito = () => {
  const [carrito, setCarrito] = useState([]);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      try {
        setCarrito(JSON.parse(carritoGuardado));
      } catch (error) {
        console.error('Error al cargar carrito desde localStorage:', error);
        setCarrito([]);
      }
    }
  }, []);

  // Crear objeto de productos en carrito para el Header
  const productosEnCarrito = carrito.reduce((acc, item) => {
    acc[item.id] = item.cantidad;
    return acc;
  }, {});

  return { carrito, productosEnCarrito, setCarrito };
};
