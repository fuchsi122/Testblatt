import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Erprobungen} from './abzeichen/erprobung/Erprobung/erprobungen';
import {Wissenstest} from './abzeichen/wissenstest/wissenstest/wissenstest';
import {Fertigkeitsabzeichen} from './abzeichen/fertigkeitsabzeichen/fertigkeitsabzeichen/fertigkeitsabzeichen';
import {Quellen} from './quellen/quellen';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    Erprobungen,
    Wissenstest,
    Fertigkeitsabzeichen,
    Quellen,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  // Zugriff auf Dropdown element
  art = signal("");
  // Ausgewählte kategorie nach dem der Button gedrückt wurde
  ausgewaehlt = signal("");
  // Soll die Auswahl der Kategorie angezeigt werden
  anzeigen = true
  // Ob Dropdown element leer ist
  erorr = false;
  // zeigt an ob Quellen angezeigt werden sollen oder nicht
  que = false;

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
  // um bei Click die Quellen anzuzeigen und wieder zu verstecken
  quellen() {
    this.que = !this.que
  }
}
