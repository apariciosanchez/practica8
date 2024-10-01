// Seleccionar el campo de entrada, el botón agregar y la lista de tareas
var nuevaTareaInput = document.getElementById("nuevaTarea");
var agregarbtn = document.getElementById("agregarbtn");
var listarTareas = document.getElementById("listaTareas");

// Agregar un evento al botón de agregar para escuchar los clics
agregarbtn.addEventListener("click", function () {
    // Obtener el texto ingresado en el campo de nueva tarea
    var textoTarea = nuevaTareaInput.value;

    // Verificamos que el campo no esté vacío
    if (textoTarea !== "") {
        // Creamos un elemento 'li' para la tarea
        var nuevaTarea = document.createElement("li");
        nuevaTarea.classList.add("tarea");

        // Creamos un span para contener el texto de la tarea
        var spanTexto = document.createElement("span");
        spanTexto.textContent = textoTarea;
        nuevaTarea.appendChild(spanTexto);

        // Creamos un div para los botones
        var divBotones = document.createElement("div");

        // Creamos un botón para eliminar la tarea
        var eliminarbtn = document.createElement("button");
        eliminarbtn.classList.add("eliminarBtn");
        eliminarbtn.textContent = "Eliminar";

        // Evento para eliminar tarea
        eliminarbtn.addEventListener("click", function () {
            listarTareas.removeChild(nuevaTarea);
        });

        // Creamos un botón para modificar la tarea
        var modificarBtn = document.createElement("button");
        modificarBtn.classList.add("modificarBtn");
        modificarBtn.textContent = "Modificar";

        // Evento para modificar la tarea
        modificarBtn.addEventListener("click", function () {
            // Verificar si la tarea está en modo edición
            if (modificarBtn.textContent === "Modificar") {
                modificarBtn.textContent = "Guardar";

                // Convertir el contenido de la tarea en un campo de texto editable
                var inputModificacion = document.createElement("input");
                inputModificacion.type = "text";
                inputModificacion.value = spanTexto.textContent;
                nuevaTarea.replaceChild(inputModificacion, spanTexto);
            } else {
                modificarBtn.textContent = "Modificar";

                // Recuperamos el valor del campo de texto editable
                var nuevoTexto = nuevaTarea.querySelector("input").value;

                // Actualizar el texto del span
                spanTexto.textContent = nuevoTexto;

                // Reemplazar el campo de entrada por el nuevo texto
                nuevaTarea.replaceChild(spanTexto, nuevaTarea.querySelector("input"));
            }
        });

        // Añadir los botones al div de botones
        divBotones.appendChild(modificarBtn);
        divBotones.appendChild(eliminarbtn);

        // Añadir el div de botones a la tarea
        nuevaTarea.appendChild(divBotones);

        // Añadir la nueva tarea a la lista de tareas
        listarTareas.appendChild(nuevaTarea);

        // Limpiar el campo de entrada después de agregar la tarea
        nuevaTareaInput.value = "";
    } else {
        // Si el campo está vacío, mostramos una alerta al usuario
        alert("Por favor ingresa una tarea");
    }
});