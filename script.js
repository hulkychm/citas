document.addEventListener("DOMContentLoaded", function() {
    const citas = [
        "Cita 1: Noche de peliculas en casa",
        "Cita 2: Ir al cine juntos",
        "Cita 3: Paseo romántico por el parque",
        "Cita 4: Cocinar juntos en casa",
        "Cita 5: Noche de juegos de mesa",
        "Cita 6: Visitar un museo o galería de arte",
        "Cita 7: Ir a un concierto o espectáculo en vivo",
        "Cita 8: Hacer un picnic en el parque",
        "Cita 9: Día de spa y relajación",
        "Cita 10: Viaje de fin de semana",
        "Cita 11: Ir a jugar Bowling, PingPong o Billar",
        "Cita 12: Noche de karaoke en casa",
        "Cita 13: Leer un libro juntos",
        "Cita 14: Pasear en Bici juntos / Patinar juntos",
        "Cita 15: Dia de Playa",
        "Cita 16: Salir a comer helado y caminar",
        "Cita 17: Noche de Bar",
        "Cita 18: Dia dedicado para practicar baile en casa",
        "Cita 19: Ir a los colchones inflables",
        "Cita 20: Ir a un buffet",
    ];

    const citasContainer = document.getElementById("citas");

    citas.forEach(function(cita, index) {
        const citaDiv = document.createElement("div");
        citaDiv.className = "cita";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "cita" + index;
        const label = document.createElement("label");
        label.htmlFor = "cita" + index;
        label.textContent = cita;

        // Verificar y establecer el estado del checkbox desde el almacenamiento local
        const isChecked = localStorage.getItem("cita" + index) === "true";
        checkbox.checked = isChecked;
        if (isChecked) {
            label.classList.add("completed");
        }

        citaDiv.appendChild(checkbox);
        citaDiv.appendChild(label);
        citasContainer.appendChild(citaDiv);

        checkbox.addEventListener("change", function() {
            // Guardar el estado del checkbox en el almacenamiento local
            localStorage.setItem("cita" + index, checkbox.checked);
            
            if (checkbox.checked) {
                label.classList.add("completed");
            } else {
                label.classList.remove("completed");
            }
        });
    });
});



