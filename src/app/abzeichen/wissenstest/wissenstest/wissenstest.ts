import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BronzeU12} from '../bronze-u12/bronze-u12';
import {SilberU12} from '../silber-u12/silber-u12';
import {BronzeUe12} from '../bronze-ue12/bronze-ue12';
import {SilberUe12} from '../silber-ue12/silber-ue12';
import {GoldUe12} from '../gold-ue12/gold-ue12';

@Component({
  selector: 'app-wissenstest',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BronzeU12,
    SilberU12,
    BronzeUe12,
    SilberUe12,
    GoldUe12
  ],
  templateUrl: './wissenstest.html',
  styleUrl: './wissenstest.css',
})
export class Wissenstest {
  // Zugriff auf Dropdown element
  art = signal("")
  // Ausgewählte kategorie nach dem der Button gedrückt wurde
  ausgewaehlt = signal("")
  // Soll die Auswahl der Kategorie angezeigt werden
  anzeigen = true;

  // Ob Dropdown element leer ist
  error = false;

  // um die Kategorie auszuwählen
  auswahl(){
    if(this.art() != "") {
      this.ausgewaehlt.set(this.art());
      this.anzeigen = false;
      this.error = false;
    } else{
      this.error = true;
    }
  }
  // um zurück in das Hauptmenü zu kommen
  zurueck(){
    this.anzeigen = true
    this.art.set("");
    this.ausgewaehlt.set("");
  }
}
