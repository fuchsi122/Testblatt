import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-silber-u12',
  imports: [
    ReactiveFormsModule,
    NgClass,
    FormsModule
  ],
  templateUrl: './silber-u12.html',
  styleUrl: './silber-u12.css',
})

export class SilberU12 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Welche Voraussetzungen müssen für eine Verbrennung gegeben sein?",
    "Dürfen Mitglieder der Feuerwehrjugend zu Einsätzen ausrücken?",
    "Womit können kleine Löcher in Druckschläuchen provisorisch abgedichtet werden?",
    "Was ist bei einer Verbrennung der Hand zu tun?",
    "Welche Länge hat üblicherweise ein genormter C-Druckschlauch?",
    "Welche Druckausgänge hat ein Verteiler?",
    "Welche Kupplungsgrößen können mit einem ABC-Kupplungsschlüssel gekuppelt werden?",
    "Welche Möglichkeiten gibt es um sich vor Infektionen zu schützen?",
    "Wie lautet der Wahlspruch der Feuerwehrjugend?",
    "Wozu dient ein Schlauchträger?",
    "Aus welchen Uniformstücken setzt sich die Bekleidung der FJ zusammen?",
    "Welche Erste-Hilfe-Maßnahme soll bei Insektenstichen im Mund-Rachen-Raum erfolgen?",
    "Welchen Namen trägt der Schutzpatron der Feuerwehr?",
    "Welche Kopfbedeckung ist beim Bewerb um das Feuerwehrjugendbewerbsabzeichen zu tragen?",
    "Welchen Dienstgrad gibt es in der Feuerwehrjugend?"
  ])
  antworten = signal([
    ["Brennbarer Stoff, Stickstoff und Wärme", "Genügend Raum zur Ausbreitung der Flammen", "Brennbarer Stoff, Sauerstoff, Wärme, richtiges Mischungsverhältnis"],
    ["Mitglieder der Feuerwehrjugend dürfen nicht zu Einsätzen ausrücken", "Mitglieder der Feuerwehrjugend dürfen zu Einsätzen ausrücken", "Sie dürfen nur dann zu Einsätzen ausrücken, wenn die Fahrzeuge nicht vollständig besetzt sind"],
    ["Mullbinde", "Bindeleine", "Schlauchbinde"],
    ["Die Hand darf unter keinen Umständen berührt werden", "Mit Wasser kühlen, keimfreien Verband anlegen", "Ein Pflaster aufkleben"],
    ["22 m bzw. 24 m", "25 m bzw. 30 m", "15 m bzw. 20 m"],
    ["2B und 1C", "D, C und B", "2C und 1B"],
    ["A-, B-, C- Kupplungen", "A-, B-, C-, D- Kupplungen", "A-, C-, E- Kupplungen"],
    ["Einsatzbekleidung", "Warnweste", "Einweghandschuhe und Beatmungstuch"],
    ["„Einer für alle und alle für Einen“", "„Hilf dir selbst, so hilft dir Gott“", "„Jeder ist sich selbst der Nächste“"],
    ["Zum Tragen von doppelt gerollten Druckschläuchen", "Der Schlauchträger hat keinen bestimmten Verwendungszweck", "Er trägt das Gewicht des mit Wasser gefüllten Schlauches"],
    ["Schutzjacke, Einsatzstiefel, Einsatzoverall", "Diensthose, Dienstbluse, Poloshirt, Diensthemd, Schirmmütze, Schutzhelm, Jacke, Hosengürtel", "Sportschuhe, Softshelljacke, Diensthose schwarz, Diensthemd weiß, Strickhaube"],
    ["Heißen Tee trinken", "Eis lutschen", "Keine Erste-Hilfe-Maßnahme"],
    ["Thomas", "Christian", "Florian"],
    ["Schutzhelm", "Schirmmütze", "Strickhaube"],
    ["Probefeuerwehrmann (PFM)", "Feuerwehrmann (FM)", "Jugendfeuerwehrmann (JFM)"]
  ]);
  richtig  = signal(["C","A","C","B","C","C","A","C","A","A","B","B","C","A","C"])
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
