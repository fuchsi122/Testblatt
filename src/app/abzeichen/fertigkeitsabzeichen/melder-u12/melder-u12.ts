import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-melder-u12',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './melder-u12.html',
  styleUrl: './melder-u12.css',
})
export class MelderU12 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Wann findet der jährliche österreichweite Zivilschutz-Probealarm statt?",
    "Wie lautet die Notrufnummer der Feuerwehr?",
    "Wie ist das Signal für Zivilschutz - Alarm?",
    "Welche Taste muss am Funkgerät beim Senden gedrückt werden?",
    "Wie lautet die Notrufnummer der Polizei?",
    "Wie lautet der Funkrufname für eine Alarmzentrale?",
    "Wie ist das Signal für den Feuerwehreinsatz?",
    "Wie ist das Signal für Zivilschutz - Warnung?",
    "Wann findet in NÖ die wöchentliche Sirenenprobe statt?",
    "Wie ist das Signal für die Sirenenprobe?",
    "Wie lautet der Funkrufname für das erste Handfunkgerät der Feuerwehr?",
    "Wie lautet die Notrufnummer der Rettung?",
    "Dürfen Privatgespräche im Feuerwehrfunkverkehr geführt werden?",
    "Wie ist das Signal für Zivilschutz - Entwarnung?",
    "Welches Bild zeigt ein Handfunkgerät?"])
  antworten = signal([
    ["Am 2. Samstag im September zwischen 11:45 Uhr und 12:30 Uhr","Am letzten Samstag im Jahr zwischen 22 Uhr und 23:30 Uhr","Am 1.Samstag im Oktober zwischen 12 Uhr und 13 Uhr"],
    ["122","133","120"],
    ["","",""],
    ["Die Sprechtaste","Die Ruftaste","Die Anhörtaste"],
    ["129","137","133"],
    ["Betriebsfeuerwehr","Florian","Freiwillige Feuerwehr"],
    ["","",""],
    ["","",""],
    ["Jede Samstag in der Zeit von 11:45 Uhr bis 12:30 Uhr","Jeden Samstag in der Zeit von 19:00 Uhr bis 21:00 Uhr","Jeden Montag in der Zeit von 12:45 Uhr bis 13:30 Uhr"],
    ["","",""],
    ["Anton","Heinrich","Franziska"],
    ["164","224","144"],
    ["Ja, dazu sind Funkgeräte da","Nur, wenn niemand mithört","Nein"],
    ["","",""],
    ["","",""]
  ])
  richtig = signal(["C","A","B","A","C","B","A","C","A","B","A","C","C","C","B"])

  // Zeigt bei welcher Frage ein Bild der Sirenensignale eingeblendet werden muss
  bild = signal([2,6,7,9,13,14])
  // Bilder die angezeigt werden sollen
  links = signal(["","","3.png","","","","7.png","8.png","","10.png","","","","14.png","15.png"])

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
    this.color = true;
  }
  // Funktion zum Zurücksetzen von den Antworten
  reset(){
    this.endErg.set(0)
    this.antwort = [];
    this.style = [];
    this.color = false;
  }
}
