# Agenda de Citas

Aplicación de consola en JavaScript (Node.js) para gestionar citas de un negocio (peluquería, clínica, etc.). Evita doble reserva de horarios y mantiene la agenda organizada.

## Estructura del proyecto

```
agenda/
├── citas.js       # Lógica de negocio (sin console.log)
├── interfaz.js    # Menús, listados y entrada del usuario
├── app.js         # Coordinador: bucle principal y flujo del menú
├── package.json   # Configuración del proyecto Node.js
├── .gitignore     # Archivos ignorados por Git
└── README.md      # Este archivo
```

### Responsabilidades

| Archivo | Rol |
|---------|-----|
| `citas.js` | Agendar, atender, cancelar citas y validar horarios. Solo recibe y devuelve datos. |
| `interfaz.js` | Mostrar menús, listados y mensajes en consola. No contiene lógica de negocio. |
| `app.js` | Conecta `citas.js` e `interfaz.js` con un `while` + `switch`. |

## Requisitos

- [Node.js](https://nodejs.org/) (v14 o superior)

## Ejecución

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd agenda

# Iniciar la aplicación
npm start
```

También puedes ejecutarla directamente:

```bash
node app.js
```

## Menú

```
=== Agenda de Citas ===
1. Agendar cita
2. Ver agenda
3. Atender cita
4. Cancelar cita
5. Salir
```

- Escribe `5` o `salir` para cerrar el programa.
- Las citas se muestran numeradas desde **1** (no desde 0).
- Al ver la agenda se muestra un resumen de citas pendientes y atendidas.

## Modelo de datos

Cada cita es un objeto con estos campos:

```javascript
{
  cliente: "María López",   // string
  servicio: "Corte de pelo", // string
  hora: "10:00",             // string
  atendida: false            // boolean
}
```

## Validaciones

- No se permite agendar dos citas a la misma hora.
- El nombre del cliente no puede estar vacío.
- Al atender o cancelar, se valida que el número de cita exista.
