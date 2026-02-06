import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-erprobung1',
  imports: [
    ReactiveFormsModule,
    NgClass,
    FormsModule
  ],
  templateUrl: './erprobung1.html',
  styleUrl: './erprobung1.css',
})

export class Erprobung1 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Wobei handelt es sich um ein Kleinlöschgerät?",
    "Aus welchen Teilen besteht ein „Kommando“?",
    "Wozu dient die Schlauchreserve bei der Löschleitung",
    "Mit welchem tragbaren Feuerlöscher kann man Feststoffbrände (Brandklasse A) NICHT löschen?",
    "Wie viele Personen benötigt man für die Bedienung eines C-Mehrzweckstrahlrohres?",
    "Bei welchem Ausgang am Verteiler wird die erste Löschleitung angeschlossen?"
  ]);
  antworten = signal([
    ["Hydroschild","C-Druckschlauch","Feuerpatsche"],
    ["Ankündiguns- und Ausführungsteil","Befehls- und Aktionsteil","Sammel- und Durchführungsteil"],
    ["Um die für den Einsatz des Angriffstrupp (Schlauchtrupp) notwendige Bewegungsfreiheit (wie z.B. beim Ortswechsel) sicher zu stellen","Damit alle Schläuche Verwendung finden","Die Schlauchreserve darf nur vom Schlauchtrupp ausgelegt werden, und darf keine Knoten aufweisen"],
    ["Schaumlöscher","Pulverlöscher","CO2 Löscher"],
    ["2 Personen","Soll man alleine bedienen","3 Personen"],
    ["Beim linken Ausgang des Verteilers","Bei dem Ausgang, der dem Brandherd näher ist","Beim mittleren Ausgang des Verteilers"],
  ]);
  richtig  = signal(["C", "A", "A", "C", "A", "A"]);

  // speichert die Antworten
  antwort:string[] = []
  // Speichert welche Frage richtig beantwortet und welche falsche beantwortet wurde
  style:boolean[] = []
  // Speichert die Punkte
  endErg = signal(0);
  // ob Ergebnis schon ausgewertet wurde, zeigt an, ob richtig oder falsch beantwortet wurde
  color = false
  // Speichert die Antwortmöglichkeiten
  buchstaben = ["A","B","C"]

  // Funktion, die die antworten mit den Lösungen überprüft
  fertig(){
    let erg = 0;
    let ind = 0;
    for(let s of this.richtig()){
      if(s==this.antwort[ind]){
        erg++;
        this.style[ind] = true
      } else {
        this.style[ind] = false
      }
      ind++;
    }
    this.endErg.set(erg);
    this.fertig2();
    this.color = true;
  }
  // Funktion zum Zurücksetzen von den Antworten
  reset(){
    this.endErg.set(0)
    this.antwort = [];
    this.style = [];
    this.color = false;

    this.textAnt.set("");
    this.textAnt2.set("");
    this.style2 = []
  }

  // Antworten für Text fragen
  spezialantworten = signal([["Blaulicht", "Martinshorn", "Faltsignal", "Verkehrsleitkegel", "Absperrband", "Verkehrsleiteinrichtung", "Winkerkelle"], ["Hohlstrahlrohr", "Mehrzweckstrahlrohr", "Pistolenstrahlrohr"]])
  // Speichert antworten aus den Text Fragen
  textAnt = signal("");
  textAnt2 = signal("");
  // Speichert welche Frage richtig beantwortet und welche falsche beantwortet wurde
  style2:boolean[] = [];
  // Überprüft die Textfragen
  fertig2() {
    let ant1 = this.textAnt().split(",");
    let ant2 = this.textAnt2().split(",");

    let sum1 = 0;
    for (let s of ant1) {
      if (this.spezialantworten()[0].includes(s.trim())) {
        sum1++;
      }
    }
    if (sum1 >= 3) {
      this.endErg.set(this.endErg() + 1)
      this.style2[0] = true;
    } else {
      this.style2[0] = false;
    }

    let sum2 = 0;
    for (let s of ant2) {
      if (this.spezialantworten()[1].includes(s.trim())) {
        sum2++;
      }
    }
    if (sum2 >= 3) {
      this.endErg.set(this.endErg() + 1)
      this.style2[1] = true;
    } else {
      this.style2[1] = false;
    }
  }
}
