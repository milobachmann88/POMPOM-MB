import { obtenerDetallePedido } from "@/service/detallePedidoService";
import { useState, useEffect } from "react";

export default function useDetallePedido() {
  const [detallesPedido, setDetallesPedido] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function traerDetalles() {
      try {
        const data = await obtenerDetallePedido();
        if (!data.ok) {
          throw new Error("Error al obtener los detalles de pedido");
        }
        setDetallesPedido(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    traerDetalles();
  }, []);

  return { detallesPedido, loading, error };
}