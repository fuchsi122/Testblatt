import {Component, inject, signal} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-fjla-allgemein',
  imports: [
    FormsModule
  ],
  templateUrl: './fjla-allgemein.html',
  styleUrl: './fjla-allgemein.css',
})
export class FjlaAllgemein {
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
    if (this.art() == "Alle Fragen") {
      this.router.navigate(['/abzeichen/fjlaGold/alleFragen']);
    } else if (this.art() == "Prüfung") {
      this.router.navigate(['/abzeichen/fjlaGold/pruefung']);
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
