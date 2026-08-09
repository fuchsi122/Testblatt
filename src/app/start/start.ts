import {Component, inject, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Quellen} from '../quellen/quellen';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start',
  imports: [
    ReactiveFormsModule,
    Quellen,
    FormsModule
  ],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start {
// Routing
  router = inject(Router);
  // Zugriff auf Dropdown element
  art = signal("");
  // Ob Dropdown element leer ist
  erorr = false;
  // zeigt an ob Quellen angezeigt werden sollen oder nicht
  que = false;

  // um die Kategorie auszuwählen
  auswahl() {
    if (this.art() == "Erprobung") {
      console.log("Erprobung");
      this.router.navigate(['/abzeichen/erprobung']);
    } else if (this.art() == "Fertigkeitsabzeichen") {
      console.log("Fertigkeitsabzeichen");
      this.router.navigate(['/abzeichen/fertigkeitsabzeichen']);
    } else if (this.art() == "Wissenstest") {
      console.log("Wissenstest");
      this.router.navigate(['/abzeichen/wissenstest']);
    } else if (this.art() == "FJLA Gold") {
      console.log("Fertigkeitsabzeichen");
      this.router.navigate(['/abzeichen/fjlaGold']);
    } else {
      this.erorr = true;
    }
  }

  // um bei Click die Quellen anzuzeigen und wieder zu verstecken
  quellen() {
    this.que = !this.que
  }
}
