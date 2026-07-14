const citas = require("./citas");
const interfaz = require("./interfaz");

const listaCitas = [];

async function main() {
  while (true) {
    interfaz.mostrarMenu();
    const opcion = await interfaz.preguntar("\nElige una opción: ");

    if (opcion.toLowerCase() === "salir") {
      interfaz.mostrarMensaje("\n¡Hasta luego!");
      break;
    }

    switch (opcion) {
      case "1": {
        const cliente = await interfaz.preguntar("Nombre del cliente: ");
        const servicio = await interfaz.preguntar("Servicio: ");
        const hora = await interfaz.preguntar("Hora (ej: 10:00): ");

        const resultado = citas.agendarCita(listaCitas, cliente, servicio, hora);

        if (resultado.ok) {
          interfaz.mostrarMensaje(
            `\nCita agendada: ${resultado.cita.cliente} - ${resultado.cita.servicio} a las ${resultado.cita.hora}.`
          );
        } else {
          interfaz.mostrarError(resultado.error);
        }
        break;
      }

      case "2": {
        const resumen = citas.obtenerResumen(listaCitas);
        interfaz.mostrarAgenda(listaCitas, resumen);
        break;
      }

      case "3": {
        interfaz.mostrarAgenda(listaCitas);
        const numeroTexto = await interfaz.preguntar(
          "\nNúmero de cita a atender: "
        );
        const numero = Number(numeroTexto);
        const resultado = citas.atenderCita(listaCitas, numero);

        if (resultado.ok) {
          interfaz.mostrarMensaje(
            `\nCita atendida: ${resultado.cita.cliente} - ${resultado.cita.servicio} a las ${resultado.cita.hora}.`
          );
        } else {
          interfaz.mostrarError(resultado.error);
        }
        break;
      }

      case "4": {
        interfaz.mostrarAgenda(listaCitas);
        const numeroTexto = await interfaz.preguntar(
          "\nNúmero de cita a cancelar: "
        );
        const numero = Number(numeroTexto);
        const resultado = citas.cancelarCita(listaCitas, numero);

        if (resultado.ok) {
          interfaz.mostrarMensaje(
            `\nCita cancelada: ${resultado.cita.cliente} - ${resultado.cita.servicio} a las ${resultado.cita.hora}.`
          );
        } else {
          interfaz.mostrarError(resultado.error);
        }
        break;
      }

      case "5": {
        interfaz.mostrarMensaje("\n¡Hasta luego!");
        break;
      }

      default: {
        interfaz.mostrarError("Opción no válida. Elige un número del 1 al 5.");
        break;
      }
    }

    if (opcion === "5") {
      break;
    }
  }

  interfaz.cerrar();
}

main();
