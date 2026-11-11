import { obtenerCliente } from "@/service/clienteService";
import { useState, useEffect } from "react";

export default function useCliente() {
  const [clientes, setClientes] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function traerClientes() {
      try {
        const data = await obtenerCliente();
        if (!data.ok) {
          throw new Error("Error al obtener los clientes");
        }
        setClientes(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    traerClientes();
  }, []);

  return { clientes, loading, error };
}