const URL = "http://127.0.0.1:8080/api/pedido"

export async function obtenerPedido() {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    return {
      ok: response.ok,
      data: data
    };
  } catch (error) {
    console.error("Error en pedidoService:", error);
    return { ok: false, error };
  }
}