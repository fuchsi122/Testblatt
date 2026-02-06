import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-erprobung3',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './erprobung3.html',
  styleUrl: './erprobung3.css',
})

export class Erprobung3 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Aus welchen Teilen besteht eine Kübelspritze?",
    "Wie groß ist das Fassungsvermögen einer Kübelspritze?",
    "Welche Brandklassen gibt es?",
    "Womit kann eine Unterwasserpumpe gesichert werden?",
    "Welche Schlauchart wird mit einer Unterwasserpumpe verwendet?",
    "Welches Gerät benötigt man zur Inbetriebnahme eines Überflurhydranten?",
    "Mit welchen Worten übernimmt man eine Einheit?",
    "Aus wie vielen Teilen besteht eine Steckleiter maximal?",
    "Wie viele Personen sichern eine Leiter?",
    "Wozu werden Leitern verwendet?",
    "Aus welchen Funktionen besteht das Feuerwehrkommando?",
    "Was kann passieren, wenn man mit der Feuerpatsche auf das Feuer schlägt?",
    "Welche Brände können mit einem Löscheimer gelöscht werden?",
    "Worauf muss man bei Löschwasserbehältern achten?",
    "Wie wird ein Überflurhydrant geöffnet?",
    "Welches zusätzliche Gerät ist bei einer Saugleitung bei verschmutzten Gewässern zu verwenden?",
    "Wie lautet das Kommando um eine Einheit anzuhalten?",
    "Mit welchem Knoten wird eine Schiebeleiter fixiert?",
    "Mit welcher Leine darf eine Löschleitung aufgezogen werden?",
    "Welche Trupps stellen eine Leiter auf?"
  ])
  antworten = signal([
    ["Wasserbehälter, Handpumpe, C-Druckschlauch, Strahlrohr ohne Absperrorgan", "Wasserbehälter, Handpumpe, D-Druckschlauch, Strahlrohr ohne Absperrorgan", "Wasserbehälter, Fußpumpe, D-Druckschlauch, Strahlrohr mit Absperrorgan"],
    ["6 l oder 12 l", "10 l oder 15 l", "8 l oder 14 l"],
    ["F, E, C, B, A", "A, B, C, D, F", "E, G, H, A, B"],
    ["Arbeitsleine", "Rettungsleine", "Stromkabel"],
    ["Druckschlauch", "Saugschlauch", "Formstabiler Druckschlauch"],
    ["Kupplungsschlüssel", "Unterflurhydrantenschlüssel", "Überflurhydrantenschlüssel"],
    ["Einheit auf mein Kommando!", "Einheit hört zu!", "Einheit zum Befehl!"],
    ["2", "3", "4"],
    ["keiner", "1", "2"],
    ["zum Üben der Bewerbsknoten", "Zum Überwinden von Höhenunterschieden", "zum Trocknen von C-Druckschläuchen"],
    ["Feuerwehrkommandant, Zugskommandant, Gruppenkommandant", "Feuerwehrkommandant, Leiter des Verwaltungsdienstes, Einsatzleiter", "Feuerwehrkommandant, 1. (2.) Feuerwehrkommandantstellvertreter, Leiter des Verwaltungsdienstes"],
    ["Durch das Schlagen des Feuers gelingt es die Glut leichter zu löschen", "Es könnte die Glut angeflammt werden und es könnte zu Funkenflug kommen", "Durch den entstehenden kräftigen Windstoß ersticke ich die Flammen"],
    ["Großbrände", "Entstehungsbrände", "Hochhausbrand"],
    ["begrenzte Löschwassermenge", "unbegrenzte Löschwassermenge", "nur bei Regen zu verwenden"],
    ["nach links (gegen den Uhrzeigersinn)", "nach rechts (im Uhrzeigersinn)", "hochziehen"],
    ["Schutzkorb für Saugkorb", "Verteiler", "Sammelstück"],
    ["Einheit – halt!", "Stehen – bleiben!", "Einheit – ruht!"],
    ["Kreuzklank und einfacher Ring", "Zimmermannsklank und Schlag", "Weberknoten und Rechter Knoten"],
    ["Mit allen Leinen (einschließlich der Rettungsleine)", "Mit allen Leinen (außer der Rettungsleine)", "Nur mit der Aufzugsleine"],
    ["Rettungstrupp und Sicherungstrupp", "Angriffstrupp und Wassertrupp", "Schlauchtrupp und Angriffstrupp"]
  ]);
  richtig = signal(["B", "B", "B", "A", "A", "C", "A", "C", "C", "B", "C", "B", "B", "A", "A", "A", "A", "A", "A", "B"])

  // speichert die Antworten
  antwort: string[] = []
  // Speichert welche Frage richtig beantwortet und welche falsche beantwortet wurde
  style: boolean[] = []
  // Speichert die Punkte
  endErg = signal(0);
  // ob Ergebnis schon ausgewertet wurde, zeigt an, ob richtig oder falsch beantwortet wurde
  color = false
  // Speichert die Antwortmöglichkeiten
  buchstaben = ["A","B","C"]

  // Funktion, die die antworten mit den Lösungen überprüft
  fertig() {
    let erg = 0;
    let ind = 0;
    for (let s of this.richtig()) {
      if (s == this.antwort[ind]) {
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
  reset() {
    this.endErg.set(0)
    this.antwort = [];
    this.style = [];
    this.color = false;

    this.textAnt.set("");
    this.textAnt2.set("");
    this.textAnt3.set("");
    this.textAnt4.set("");
    this.textAnt5.set("");
    this.textAnt6.set("");
    this.style2 = []
  }

  // Antworten für Text fragen
  spezialantworten = signal([["Feuerpatsche", "Feuerlöscher", "Kübelspritze", "Löschdecke", "Löscheimer"], "OV", "ausstreichen", ["Steckleiter", "Schiebeleiter", "Hackenleiter", "Strickleiter"], "OBI", ["Jürgen Pitzl", "Thomas Grasmann", "Andreas Thanner", "Tobias Fischer"]]);
  // Speichert antworten aus den Text Fragen
  textAnt = signal("");
  textAnt2 = signal("");
  textAnt3 = signal("");
  textAnt4 = signal("");
  textAnt5 = signal("");
  textAnt6 = signal("");
  // Speichert welche Frage richtig beantwortet und welche falsche beantwortet wurde
  style2: boolean[] = [];

  // Überprüft die Textfragen
  fertig2() {
    let ant1 = this.textAnt().split(",");
    let ant2 = this.textAnt2()
    let ant3 = this.textAnt3().split(" ");
    let ant4 = this.textAnt4().split(",");
    let ant5 = this.textAnt5()
    let ant6 = this.textAnt6().split(",");

    let sum1 = 0;
    for (let s of ant1) {
      if (this.spezialantworten()[0].includes(s.trim())) {
        sum1++;
      }
    }
    if (sum1 >= 2) {
      this.endErg.set(this.endErg() + 1)
      this.style2[0] = true;
    } else {
      this.style2[0] = false;
    }

    if(ant2.toUpperCase() == this.spezialantworten()[1]){
      this.endErg.set(this.endErg() + 1)
      this.style2[1] = true;
    } else {
      this.style2[1] = false;
    }

    if(ant3.includes("ausstreichen")){
      this.endErg.set(this.endErg() + 1)
      this.style2[2] = true;
    } else {
      this.style2[2] = false;
    }

    let sum4 = 0;
    for (let s of ant4) {
      if (this.spezialantworten()[3].includes(s.trim())) {
        sum4++;
      }
    }
    if (sum4 >= 3) {
      this.endErg.set(this.endErg() + 1)
      this.style2[3] = true;
    } else {
      this.style2[3] = false;
    }

    if(ant5.toUpperCase() == this.spezialantworten()[4]){
      this.endErg.set(this.endErg() + 1)
      this.style2[4] = true;
    } else {
      this.style2[4] = false;
    }

    let sum6 = 0;
    let uebergang:string[] = []
    for (let s of ant6) {
      if (this.spezialantworten()[5].includes(s.trim()) && !uebergang.includes(s.trim())) {
        sum6++;
        uebergang.push(s);
      }
    }
    if (sum6 == 4) {
      this.endErg.set(this.endErg() + 1)
      this.style2[5] = true;
    } else {
      this.style2[5] = false;
    }
  }
}
