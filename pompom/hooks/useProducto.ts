import { obtenerProducto } from "@/service/productoService";
import { useState, useEffect } from "react";

export default function useProducto() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function traerProductos() {
      try {
        const data = await obtenerProducto()
      /*  if (!data.ok) {
          throw new Error("Error");
        }*/
       console.log(productos)
       setProductos(data.content)
        } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    traerProductos();
  }, []);
  return { productos, loading, error };
}
