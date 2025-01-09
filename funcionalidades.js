
// Cambiar imagen del header

document.getElementById('change-image').addEventListener('click', () => {
    // Solicita al usuario la URL de una nueva imagen
    const imageUrl = prompt('Ingresa la URL de la imagen:');
    if (imageUrl) {
      // Cambia el fondo del encabezado principal
      document.getElementById('main-header').style.backgroundImage = `url(${imageUrl})`;
    }
  });
  

  // Crear horario dinámico
  
  
  // Referencia al cuerpo de la tabla
  const scheduleBody = document.getElementById('schedule-body');
  
  // Horas predefinidas para el horario
  const hours = ['8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'];
  
  // Generar filas dinámicamente basadas en las horas
  hours.forEach((hour) => {
    const row = document.createElement('tr'); // Crea una fila
    const timeCell = document.createElement('td'); // Crea la celda de hora
    timeCell.textContent = hour; // Añade el texto de la hora
    row.appendChild(timeCell); // Agrega la celda de hora a la fila
  
    // Crea las celdas para cada día de la semana (7 columnas)
    for (let i = 0; i < 7; i++) {
      const cell = document.createElement('td');
      cell.textContent = ''; // Inicialmente vacío
      cell.contentEditable = true; // Hace editable la celda
      cell.setAttribute('aria-label', `Actividad para ${hour}, día ${i + 1}`); // Mejora accesibilidad
      row.appendChild(cell); // Agrega la celda a la fila
    }
  
    scheduleBody.appendChild(row); // Agrega la fila completa al cuerpo de la tabla
  });
  
  
  // Agregar notas dinámicas
  
  
  // Referencia al contenedor de notas
  const notasContainer = document.getElementById('notas-container');
  
  // Evento para agregar una nueva nota
  document.getElementById('add-note').addEventListener('click', () => {
    // Solicita al usuario el texto de la nota
    const notaText = prompt('Agrega tu nota:');
    if (notaText) {
      const nota = document.createElement('div'); // Crea un elemento div para la nota
      nota.className = 'nota'; // Asigna la clase de estilo
      nota.textContent = notaText; // Añade el texto de la nota
  
      // Evento para marcar la nota como completada
      nota.addEventListener('click', () => {
        nota.classList.toggle('completed'); // Alterna la clase "completed"
      });
  
      notasContainer.appendChild(nota); // Agrega la nota al contenedor
    }
  });
  