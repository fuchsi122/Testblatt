import {Component, inject, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wissenstest',
  imports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './wissenstest.html',
  styleUrl: './wissenstest.css',
})
export class Wissenstest {
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
    if (this.art() == "Bronze-Spiel") {
      this.router.navigate(['/abzeichen/wissenstest/UBronze']);
    } else if (this.art() == "Silber-Spiel") {
      this.router.navigate(['/abzeichen/wissenstest/USilber']);
    } else if (this.art() == "Bronze") {
      this.router.navigate(['/abzeichen/wissenstest/UEBronze']);
    } else if (this.art() == "Silber") {
      this.router.navigate(['/abzeichen/wissenstest/UESilber']);
    } else if (this.art() == "Gold/Doppel Gold") {
      this.router.navigate(['/abzeichen/wissenstest/UEGold']);
    } else {
      this.erorr = true;
    }
  }

  // um zurück in das Hauptmenü zu kommen
  zurueck() {
    this.art.set("");
    this.ausgewaehlt.set("");
    this.router.navigate(['']);
  }
}
