import { obtenerPedido } from "@/service/pedidoService";
import { useState, useEffect } from "react";

export default function usePedido() {
  const [pedidos, setPedidos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function traerPedidos() {
      try {
        const data = await obtenerPedido();
        if (!data.ok) {
          throw new Error("Error al obtener los pedidos");
        }
        setPedidos(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    traerPedidos();
  }, []);

  return { pedidos, loading, error };
}