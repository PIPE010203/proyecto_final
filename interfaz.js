const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntar(texto) {
  return new Promise((resolve) => {
    rl.question(texto, (respuesta) => {
      resolve(respuesta);
    });
  });
}

function mostrarMenu() {
  console.log("\n=== Agenda de Citas ===");
  console.log("1. Agendar cita");
  console.log("2. Ver agenda");
  console.log("3. Atender cita");
  console.log("4. Cancelar cita");
  console.log("5. Salir");
}

function mostrarAgenda(citas, resumen) {
  console.log("\n--- Agenda ---");

  if (citas.length === 0) {
    console.log("No hay citas agendadas.");
  } else {
    for (let i = 0; i < citas.length; i++) {
      const cita = citas[i];
      const estado = cita.atendida ? "atendida" : "pendiente";
      console.log(
        `${i + 1}. ${cita.cliente} - ${cita.servicio} - ${cita.hora} (${estado})`
      );
    }
  }

  if (resumen) {
    console.log(
      `\nResumen: ${resumen.pendientes} pendientes, ${resumen.atendidas} atendidas.`
    );
  }
}

function mostrarMensaje(mensaje) {
  console.log(mensaje);
}

function mostrarError(mensaje) {
  console.log(`Error: ${mensaje}`);
}

function cerrar() {
  rl.close();
}

module.exports = {
  preguntar,
  mostrarMenu,
  mostrarAgenda,
  mostrarMensaje,
  mostrarError,
  cerrar,
};
