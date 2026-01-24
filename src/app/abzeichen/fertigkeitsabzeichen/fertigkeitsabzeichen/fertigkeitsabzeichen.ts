import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MelderUe12} from '../melder-ue12/melder-ue12';
import {MelderU12} from '../melder-u12/melder-u12';
import {TechnikUe12} from '../technik-ue12/technik-ue12';
import {TechnikU12} from '../technik-u12/technik-u12';
import {WasserLandUe12} from '../wasser-land-ue12/wasser-land-ue12';
import {WasserLandU12} from '../wasser-land-u12/wasser-land-u12';


@Component({
  selector: 'app-fertigkeitsabzeichen',
  imports: [
    FormsModule,
    MelderUe12,
    MelderU12,
    TechnikUe12,
    WasserLandUe12,
    TechnikU12,
    WasserLandU12,
  ],
  templateUrl: './fertigkeitsabzeichen.html',
  styleUrl: './fertigkeitsabzeichen.css',
})

export class Fertigkeitsabzeichen {
  // Zugriff auf Dropdown element
  art = signal("")
  // Ausgewählte kategorie nach dem der Button gedrückt wurde
  ausgewaehlt = signal("")
  // Soll die Auswahl der Kategorie angezeigt werden
  anzeigen = true;

  // Ob Dropdown element leer ist
  erorr = false;

  // um die Kategorie auszuwählen
  auswahl(){
    if(this.art() != "") {
      this.ausgewaehlt.set(this.art());
      this.anzeigen = false;
      this.erorr = false;
    } else{
      this.erorr = true;
    }
  }
  // um zurück in das Hauptmenü zu kommen
  zurueck(){
    this.anzeigen = true
    this.art.set("");
    this.ausgewaehlt.set("");
  }
}
