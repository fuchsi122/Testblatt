import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Erprobung1} from '../erprobung1/erprobung1';
import {Erprobung2} from '../erprobung2/erprobung2';
import {Erprobungsspiel1} from '../erprobungsspiel1/erprobungsspiel1';
import {Erprobungsspiel2} from '../erprobungsspiel2/erprobungsspiel2';
import {Erprobung3} from '../erprobung3/erprobung3';

@Component({
  selector: 'app-Erprobung',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    Erprobung1,
    Erprobung2,
    Erprobungsspiel1,
    Erprobungsspiel2,
    Erprobung3
  ],
  templateUrl: './erprobungen.html',
  styleUrl: './erprobungen.css',
})

export class Erprobungen {
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
