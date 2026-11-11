const URL = "http://127.0.0.1:8080/api/detalle_pedido"

export async function obtenerDetallePedido() {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    return {
      ok: response.ok,
      data: data
    };
  } catch (error) {
    console.error("Error en detallePedidoService:", error);
    return { ok: false, error };
  }
}