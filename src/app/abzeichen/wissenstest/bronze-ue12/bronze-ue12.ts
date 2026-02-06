import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-bronze-ue12',
  imports: [
    ReactiveFormsModule,
    NgClass,
    FormsModule
  ],
  templateUrl: './bronze-ue12.html',
  styleUrl: './bronze-ue12.css',
})

export class BronzeUe12 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Aus wie vielen Personen besteht eine Feuerwehrjugendbewerbsgruppe?",
    "Wie erfolgt die schnellste Blutstillung?",
    "Wie ist die richtige Reihenfolge der Verhaltensmaßnahmen im Brandfall?",
    "Wie weit musst du im Ortsgebiet absichern?",
    "Wozu dient die Winkerkelle?",
    "Wie groß ist der Durchmesser eines genormten C-Druckschlauches?",
    "In welche Gruppen werden Kupplungen eingeteilt?",
    "Welcher Knoten dient zum Verbinden von gleich oder unterschiedlich starken Leinen?",
    "Welche Taste muss am Funkgerät beim Senden gedrückt werden?",
    "Wo musst du – außer bei Verkehrsunfällen – noch absichern?",
    "Wer hat für die fachliche Aufsicht, die Betreuung und die Ausbildung der Feuerwehrjugend zu sorgen?",
    "Wodurch kannst du Unfälle mit Einsatzgeräten vermeiden?",
    "Eine Person atmet, reagiert aber nicht! Was ist die erste Maßnahme?",
    "Wie groß ist der Durchmesser eines genormten B-Druckschlauch?",
    "Welche Reihenfolge der Hilfeleistung muss die Feuerwehr grundsätzlich beachten?",
    "Wodurch kann der Feuerwehr das Erreichen der Einsatzstelle erleichtert werden?",
    "Wie oft ist eine Rettungsleine zu überprüfen?",
    "Wozu dient ein Schlauchhalter?",
    "Wer darf bei der Feuerwehr Funkgeräte bedienen?",
    "Wie erfolgt die Bestellung des Jugendbetreuers?"
  ])
  antworten = signal([
    ["12 bzw. 13 (inkl. Gruppenkommandant)", "6 bzw. 7 (inkl. Maschinist)", "9 bzw. 10 (inkl. Reservemann)"],
    ["Abbinden oberhalb der Verletzung", "Mit Finger auf die Wunde drücken", "Arztbesuch"],
    ["Alarmieren, Retten, Löschen", "Es ist keine Reihenfolge einzuhalten", "Löschen, Alarmieren, Retten"],
    ["15 m", "50 m", "75 m"],
    ["Sie dient zum Beenden des Feuerwehreinsatzes", "Sie dient zur Verkehrsregelung", "Sie dient zur Übergabe an den Einsatzleiter"],
    ["24 mm bzw. 25 mm", "52 mm bzw. 42 mm", "57 mm bzw. 75 mm"],
    ["Schlauchkupplungen, Festkupplungen, Blindkupplungen", "Schlauchkupplung, Gerätekupplung", "Schraubenkupplung, Steckkupplung, Festkupplung"],
    ["Weberknoten", "Rettungsschlinge", "Einfacher Ring"],
    ["Die Sprechtaste", "Die Ruftaste", "Die Anhörtaste"],
    ["Nur bei ausgeflossenem Treibstoff bzw. Öl", "Bei einer Tierrettung", "Wenn Gefahr für die Einsatzkräfte besteht"],
    ["Der Jugendbetreuer", "Der Feuerwehrkommandant, der sich des von ihm ernannten Jugendbetreuers bedient", "Der Ausbilder in der Feuerwehr"],
    ["Durch kurze Einsatzzeiten", "Durch Nichtbeachten der Sicherheitshinweise", "Durch richtige Bedienung, Handhabung und durch Einschulungen"],
    ["Person in die stabile Seitenlage bringen", "Schocklagerung", "Herzdruckmassage"],
    ["57 mm", "75 mm", "110 mm"],
    ["Wertvolles vor Wertlosem", "Menschenrettung, Tierrettung, Sachwerte bergen", "Alles gleichzeitig beginnen"],
    ["Durch Aufstellen von Wegweisern, Pfeilen, usw.", "Durch Aufhalten aller herankommenden Fahrzeuge", "Durch Einweisung"],
    ["Nach jeder Verwendung bzw. einmal jährlich ist eine Sichtprüfung durchzuführen", "Überprüfung ist nicht notwendig", "Nach jedem Feuerwehreinsatz"],
    ["Damit hält man den Schlauch am Straßenrand fest", "Zum Befestigen einer Schlauchleitung am Stiegengeländer, an Leitern usw. sowie zur Gewichtsentlastung", "Damit kann das Feuerwehrmitglied den Schlauch leichter halten"],
    ["Nur ausgebildete Funker", "Alle Feuerwehrmitglieder", "Nur der Melder"],
    ["Durch Wahl der Feuerwehrjugendgruppe", "Durch Wahl in der Mitgliederversammlung", "Ernennung durch den Feuerwehrkommandanten"]

  ]);
  richtig  = signal(["C","B","A","B","B","B","A","A","A","C","B","C","A","B","B","C","A","B","A","C"])
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
