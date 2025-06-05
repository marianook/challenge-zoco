import { usuariosSimulados } from "../data/Users";

export const obtenerUsuarioPorToken = async (token) => {
  await new Promise((res) => setTimeout(res, 300));

  const usuario = usuariosSimulados.find((u) => u.token === token);
  if (!usuario) throw new Error("Token inválido");
  return usuario;
};
