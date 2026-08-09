import {Component, inject, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-Erprobung',
  imports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './erprobungen.html',
  styleUrl: './erprobungen.css',
})

export class Erprobungen {
  // routing
  router = inject(Router);
  // Zugriff auf Dropdown element
  art = signal("")
  // Ausgewählte kategorie nach dem der Button gedrückt wurde
  ausgewaehlt = signal("")
  // Ob Dropdown element leer ist
  erorr = false;

  // um die Kategorie auszuwählen
  auswahl() {
    if (this.art() == "1.Erprobungsspiel") {
      this.router.navigate(['/abzeichen/erprobung/U1']);
    } else if (this.art() == "2.Erprobungsspiel") {
      this.router.navigate(['/abzeichen/erprobung/U2']);
    } else if (this.art() == "1.Erprobung") {
      this.router.navigate(['/abzeichen/erprobung/UE1']);
    } else if (this.art() == "2.Erprobung") {
      this.router.navigate(['/abzeichen/erprobung/UE2']);
    } else if (this.art() == "3.Erprobung") {
      this.router.navigate(['/abzeichen/erprobung/UE3']);
    } else {
      this.erorr = true;
    }
  }

  // um zurück in das Hauptmenü zu kommen
  zurueck() {
    this.art.set("");
    this.ausgewaehlt.set("");
    this.router.navigate(['/']);
  }
}
