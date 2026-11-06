import { obtenerProducto } from "@/service/productoService";
import { useState, useEffect } from "react";

export default function useProducto() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function obtenerProducto() {
      try {
        const data = await obtenerProducto();
        if (!data.ok) {
          throw new Error("Error");
        }
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    obtenerProducto();
  }, []);
  return { productos, loading, error };
}
