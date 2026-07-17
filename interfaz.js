const readline = require('readline');

const el = readline.createInterface({
  imput: process.stdin,
  ouput: process.stdout,
});

function preguntar(texto) {
  return new Promise((resolver)=>{
    rl.question(texto, (respuesta) => {
      resolver(respuesta);
    }); 
  })
}

function mostrarmenu() {
  console.log("\n=== Agenda de Citas ===");
  console.log("1. Agendar cita");
  console.log("2. Ver agenda");
  console.log("3. Atender cita");
  console.log("4. Cancelar cita");
  console.log("5. Salir");
}

function mostrarAgenda(citas, resumen) {
  console.log("\n=== AGENDA ===");

  if (citas.length === 0) {
    console.log("No hay citas agendadas.");
  }else {
    for(let i =0; i < citas.length; i++) {
      const cita = citas[i];
      const estado = cita.atendida ? "Atendida" : "Pendiente";
      console.log(
        `${i + 1}. ${cita.cliente} - ${cita.servicio} a las ${cita.hora} (${estado})`
      );
    }
  }

  if (resumen) {
    console.log(
      `Resumen: ${resumen.pendientes} pendientes, ${resumen.atendidas} atendidas.`
    )
  }
}

function mostrarMensaje(mensaje) {
  console.log(mensaje);
}

function mostrarError(error) {
  console.log(`Error: ${error}`);
}

function cerrar() {
  rl.close();
}

module.exports = {
  preguntar,
  mostrarmenu,
  mostrarAgenda,
  mostrarMensaje,
  mostrarError,
  cerrar,
};