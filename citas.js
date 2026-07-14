function horaOcupada(lista, hora) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].hora === hora) {
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
    atendida: false,
  };
}

function agendarCita(lista, cliente, servicio, hora) {
  const nombre = cliente.trim();

  if (nombre === "") {
    return { ok: false, error: "El nombre del cliente no puede estar vacío." };
  }

  if (horaOcupada(lista, hora)) {
    return { ok: false, error: "Esta hora ya está ocupada. Elige otra hora." };
  }

  const cita = crearCita(nombre, servicio.trim(), hora.trim());
  lista.push(cita);

  return { ok: true, cita };
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
    return { ok: false, error: "No existe una cita con ese número." };
  }

  if (lista[indice].atendida) {
    return { ok: false, error: "Esa cita ya fue atendida." };
  }

  lista[indice].atendida = true;
  return { ok: true, cita: lista[indice] };
}

function cancelarCita(lista, numero) {
  const indice = numero - 1;

  if (indice < 0 || indice >= lista.length) {
    return { ok: false, error: "No existe una cita con ese número." };
  }

  const citaEliminada = lista.splice(indice, 1)[0];
  return { ok: true, cita: citaEliminada };
}

module.exports = {
  horaOcupada,
  agendarCita,
  obtenerResumen,
  atenderCita,
  cancelarCita,
};
