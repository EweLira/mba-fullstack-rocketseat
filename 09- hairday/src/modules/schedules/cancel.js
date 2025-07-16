import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// Gerar evento de clique para cada lista (manha, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado.
      const item = event.target.closest("li")
      const id = Number(item.dataset.id);
      console.log(id)

      if (id) {
      const isConfirm = confirm("Tem certeza que deseja cancelar este agendamento?")
      if (isConfirm) {
       await scheduleCancel({ id })
       await schedulesDay()
      }
}
} 
})
})
 