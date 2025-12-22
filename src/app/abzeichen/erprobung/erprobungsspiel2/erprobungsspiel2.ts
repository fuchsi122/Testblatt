import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-erprobungsspiel2',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './erprobungsspiel2.html',
  styleUrl: './erprobungsspiel2.css',
})

export class Erprobungsspiel2 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Wie viele Personen bedienen eine Kübelspritze?",
    "Wozu dient einen Rettungsleine?",
    "Wozu dient das Faltsignal Feuerwehr?",
    "Welchen Zweck haben Handscheinwerfer?",
    "Welche Gegenstände zählen zum Schanzzeug?",
    "Welches Strahlrohr verwendet man an der Kübelspritze?",
    "Wozu verwendet man Verkehrsleitkegel?",
    "Wozu dient die Winkerkelle?",
    "Wozu benötigen wir Leitern im Feuerwehrdienst?",
    "Was ist der wesentliche Unterschied zwischen Rettungsleine und Arbeitsleine?"
  ]);
  antworten = signal([
    ["2 Personen","Soll man allein bedienen","3 Personen"],
    ["Zum Retten und Sichern von Menschen","Zum Abschleppen","Zur Zugentlastung der Kupplung der Saugleitung"],
    ["Dient zum Absichern von Einsatz- und Übungsflächen auf Verkehrswegen","Damit die Schaulustigen wissen wo ein Einsatz der Feuerwehr ist","Dient zum Markieren des Feuerwehrfestes"],
    ["Zur eingeschränkten Beleuchtung von Einsatz- und Übungsflächen","Zum kompletten Ausleuchten aller Flächen","Zum Geben von Lichtzeichen"],
    ["Schaufeln, Spaten, Krampen, Handbeil","Winkelschleifer, Motorkettensäge, Akkuschrauber","C-Hohlstrahlrohr, C-Schlauch, Verteiler"],
    ["D-Strahlrohr","HD-Strahlrohr","B-Strahlrohr"],
    ["Zur Absicherung von Einsatz- und Übungsflächen auf Verkehrswegen","Zum Slalomlaufen der Einsatzkräfte","Damit der Einsatzleiter/Einheitskommandant weiß wohin er gehen darf "],
    ["Sie dient zur Verkehrsregelung","Damit winkt sich der Sicherungstrupp zu","Damit gibt man dem Einsatzleiter besondere Zeichen"],
    ["Zum Überwinden von Höhenunterschieden","Zum Auflegen als Übungsfläche bei Leinen und Knoten","Damit pflücken wir die Kirschen vom Baum"],
    ["Mit der Arbeitsleine dürfen keine Personen oder Tiere gesichert oder gerettet werden!","Es gibt keinen Unterschied.","Die Arbeitsleine ist länger"],
  ]);
  richtig  = signal(["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]);

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
