import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-bronze-u12',
  imports: [
    ReactiveFormsModule,
    NgClass,
    FormsModule
  ],
  templateUrl: './bronze-u12.html',
  styleUrl: './bronze-u12.css',
})

export class BronzeU12 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Aus welchen Uniformstücken setzt sich die Bekleidung der Feuerwehr",
    "Dürfen Mitglieder der Feuerwehrjugend zu Einsätzen ausrücken?",
    "Wie lautete der Wahlspruch der Feuerwehrjugend?\",jugend zusammen?",
    "Wann findet der jährliche Zivilschutzalarm statt?",
    "Welche Länge hat üblicherweise ein C-Druckschlauch?",
    "Wozu dient ein Schlauchträger?",
    "Welche Kopfbedeckung ist beim Bewerb um das Feuerwehrjugendbewerbsabzeichen zu tragen?",
    "Welche Kupplungsgrößen können mit einem ABC-Kupplungsschlüssel gekuppelt werden?",
    "Wann findet in NÖ die wöchentliche Sirenenprobe statt?",
    "Welchen Namen trägt der Schutzpatron der Feuerwehr?",
  ])
  antworten = signal([
    ["Schutzjacke, Einsatzstiefel, Einsatzoverall", "Diensthose, Dienstbluse, Poloshirt, Diensthemd, Schirmmütze, Schutzhelm, Jacke, Hosengürtel", "Sportschuhe, Softshelljacke, Diensthose schwarz, Diensthemd weiß, Strickhaube"],
    ["Mitglieder der Feuerwehrjugend dürfen nicht zu Einsätzen ausrücken", "Mitglieder der Feuerwehrjugend dürfen zu Einsätzen ausrücken", "Sie dürfen nur dann zu Einsätzen ausrücken, wenn die Fahrzeuge nicht vollständig besetzt sind"],
    ["„Hilf dir selbst, so hilft dir Gott“", "„Einer für alle und alle für Einen“", "„Jeder ist sich selbst der Nächste“"],
    ["1. Samstag im Oktober", "1. Samstag im November", "15.11. jeden Jahres"],
    ["22 m bzw. 24 m", "25 m bzw. 30 m", "15 m bzw. 20 m"],
    ["Zum Tragen von doppelt gerollten Druckschläuchen", "Der Schlauchträger hat keinen bestimmten Verwendungszweck", "Er trägt das Gewicht des mit Wasser gefüllten Schlauches"],
    ["Schirmmütze", "Schutzhelm", "Strickhaube"],
    ["A-, B-, C- Kupplungen", "A-, B-, C-, D- Kupplungen", "A-, C-, E- Kupplungen"],
    ["Jeden Samstag in der Zeit von 12.45 Uhr bis 13.30 Uhr", "Jeden Samstag in der Zeit von 10.45 Uhr bis 11.30 Uhr", "Jeden Samstag in der Zeit von 11.45 Uhr bis 12.30 Uhr"],
    ["Florian", "Paul", "Martin"],
  ]);
  richtig  = signal(["B","A","B","A","C","A","B","A","C","A"])
  // speichert die Antworten
  antwort:string[] = []
  // Speichert welche Frage richtig beantwortet und welche falsche beantwortet wurde
  style:boolean[] = []
  // Speichert die Punkte
  endErg = signal(0);
  // ob Ergebnis schon ausgewertet wurde, zeigt an, ob richtig oder falsch beantwortet wurde
  color = false

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
