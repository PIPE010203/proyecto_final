function horaOcupada(lista, hora) {
  for (let i = 0; i <lista.length; i++) {
    if (lista [i].hora === hora) {
      return true;
    }
  }
  return false;
}

function crearCita(cliente, servicio, hora) {
  return {
    cliente,
    servicio,
    hora,
  };
}

function agendarCita(lista, cliente,servicio, hora) {
  const nombre = cliente.trim();

  if (nombre === "") {
    return { ok: false, error: "el espacio del nombre no puede estar vacio" };
  }

  if (horaOcupada(lista, hora)) {
    return {ok: false, error: "la hora ya está ocupada" };
  }

  const Cita = crearCita(nombre, servicio.trim(), hora.trim());
  lista.push(Cita);
  return { ok: true, cita: Cita };
}

function obtenerResumen(lista) {
  let pendientes = 0;
  let atendidas = 0;

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].atendida) {
      atendidas++;
    } else {
      pendientes++;
    }
  }

  return { pendientes, atendidas };
}

function atenderCita(lista, numero) {
  const indice = numero - 1;
  if (indice < 0 || indice >= lista.length) {
    return { ok: false, error: "Número de cita inválido" };
  }

  if (lista[indice].atendida) {
    return { ok: false, error: "La cita ya ha sido atendida" };
  }
  lista[indice].atendida = true;
  return { ok: true, cita: lista[indice] };
}

function cancelarCita(lista, numero) {
  const indice = numero - 1;
  if (indice < 0 || indice >= lista.length) {
    return { ok: false, error: "Número de cita inválido" };
  }

  const citaEliminada = lista.splice(indice, 1)[0];
  return {ok: true, cita: citaEliminada };
}

module.exports = {
  horaOcupada,
  agendarCita,
  obtenerResumen,
  atenderCita,
  cancelarCita,
};
