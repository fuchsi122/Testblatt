import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-fertigkeitsabzeichen',
  imports: [
    FormsModule,
  ],
  templateUrl: './fertigkeitsabzeichen.html',
  styleUrl: './fertigkeitsabzeichen.css',
})

export class Fertigkeitsabzeichen {
  router = inject(Router);
  // Zugriff auf Dropdown element
  art = signal("")
  // Ausgewählte kategorie nach dem der Button gedrückt wurde
  ausgewaehlt = signal("")
  // Ob Dropdown element leer ist
  erorr = false;

  // um die Kategorie auszuwählen
  auswahl(){
  if (this.art() == "Melder") {
      this.router.navigate(['/abzeichen/fertigkeitsabzeichen/UEMelder']);
    } else if (this.art() == "Melderspiel") {
    this.router.navigate(['/abzeichen/fertigkeitsabzeichen/UMelder']);
    } else if (this.art() == "Feuerwehrtechnik") {
    this.router.navigate(['/abzeichen/fertigkeitsabzeichen/UETechnik']);
    } else if (this.art() == "Feuerwehrtechnikspiel") {
    this.router.navigate(['/abzeichen/fertigkeitsabzeichen/UTechnik']);
    } else if (this.art() == "Sicher zu Wasser und am Land") {
    this.router.navigate(['/abzeichen/fertigkeitsabzeichen/UEWasser']);
    } else if (this.art() == "Sicher zu Wasser und am Land-Spiel") {
    this.router.navigate(['/abzeichen/fertigkeitsabzeichen/UWasser']);
    } else{
      this.erorr = true;
    }
  }
  // um zurück in das Hauptmenü zu kommen
  zurueck(){
    this.art.set("");
    this.ausgewaehlt.set("");
    this.router.navigate(['']);
  }
}
