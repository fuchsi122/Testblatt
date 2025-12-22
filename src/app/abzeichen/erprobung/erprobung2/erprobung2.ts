import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-erprobung2',
  imports: [
    ReactiveFormsModule,
    NgClass,
    FormsModule
  ],
  templateUrl: './erprobung2.html',
  styleUrl: './erprobung2.css',
})

export class Erprobung2 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Welcher Hauptlöscheffekt trifft bei der Anwendung der Löschdecke zu?",
    "Wie verwendet man eine Löschdecke, um sich damit nicht zu verletzen?",
    "Wozu dient der Unterflurhydrantenschlüssel?",
    "Wozu dient ein Löschwasserteich?",
    "Was ist vor dem Verwenden des Wassers aus dem Hydranten zu tun?",
    "Wie lautet das Kommando um die Formation einer Einheit aufzulösen?",
    "Welche Leinen werden an der Saugleitung angebracht?",
    "Wozu dient der Karabiner am Feuerwehrgurt?",
    "Welche Brände kann man mit einer Löschdecke löschen?",
    "Welche Arten von Wasserentnahmestellen gibt es?",
    "Welche Ausgänge hat ein Standrohr?",
    "Welche Geräte benötigt man beim Ansaugen von Löschwasser aus einem offenen Gewässer mit der Tragkraftspritze?",
    "Wie lautet das Kommando um eine Einheit auszurichten?",
    "Wozu dient ein Schlauchhalter?",
    "Was bildet die Enden einer Saugschlauch-, Ventil- oder Halteleine?"
  ])
  antworten = signal([
    ["Erstickungseffekt", "Kühlungseffekt", "Entzugseffekt"],
    ["Löschdecke als Schutzschild vor den Körper halten und vorsichtig dem Brandherd nähern", "Löschdecke schnell über den Brandherd legen", "Die Löschdecke um mich legen und dem Brandherd nähern"],
    ["zum Öffnen der Abdeckung sowie zum Öffnen und Schließen des Leitungsschiebers", "zum Öffnen eines Verteilers", "zum Kuppeln von A-Saugschläuchen"],
    ["Schwimmteich", "Aquarium", "Löschwasserreserve"],
    ["Gurgeln", "Spülen", "Putzen"],
    ["An das Gerät!", "Auf der Stelle - Abtreten!", "Einheit rechts - schaut!"],
    ["Kupplungsleine, Ventilleine", "Ventilleine, Halteleine, Saugschlauchleine", "Ventilleine, Fixierleine, Steuerleine"],
    ["Zum Tragen von Geräten", "Zur Eigensicherung", "Zum Aufziehen von Lasten"],
    ["Großbrände", "Entstehungsbrände", "Kleinbrände"],
    ["Wasserhahn, Duschkopf, Badewanne", "Überflurhydrant, Unterflurhydrant, Löschwasserbehälter, offene Gewässer", "nur Hydranten"],
    ["2 C und 1 B", "2 B", "1 C und 1 B"],
    ["Saugkorb, B-Druckschläuche", "Saugkorb, Saugschläuche", "Tragkraftspritze, Saugkorb, Schutzkorb für Saugkorb, Saugschläuche, Leinenbeutel, Kupplungsschlüssel"],
    ["Einheit rechts - schaut", "Habt - acht", "Rechts richt - euch"],
    ["Zum Tragen von Schläuchen", "Zum Befestigen einer Schlauchleitung am Stiegengeländer, an Leitern usw. sowie zur Gewichtsentlastung", "Zum Fixieren der Schlauchleitung am Feuerwehrgurt"],
    ["Beutel und Karabiner", "Beutel und Schäkel", "Beutel und Knoten"]
  ]);
  richtig  = signal(["A","A","A","C","B","B","B","B","B","B","B","C","C","B","A"])

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
    this.textAnt3.set("");
    this.style2 = []
  }

  // Antworten für Text fragen
  spezialantworten = signal([["Feuerpatsche", "Feuerlöscher", "Kübelspritze", "Löschdecke", "Löscheimer"], ["Holz", "Leder", "Leinengewebe", "verzinkter Stahl", "Stahl"], ["Arbeitsleine", "Rettungsleine","Halteleine", "Ventilleine"]])
  // Speichert antworten aus den Text Fragen
  textAnt = signal("");
  textAnt2 = signal("");
  textAnt3 = signal("");
  // Speichert welche Frage richtig beantwortet und welche falsche beantwortet wurde
  style2:boolean[] = [];
  // Überprüft die Textfragen
  fertig2() {
    let ant1 = this.textAnt().split(",");
    let ant2 = this.textAnt2().split(",");
    let ant3 = this.textAnt3().split(",");

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
    if (sum2 >= 2) {
      this.endErg.set(this.endErg() + 1)
      this.style2[1] = true;
    } else {
      this.style2[1] = false;
    }

    let sum3 = 0;
    for (let s of ant3) {
      if (this.spezialantworten()[2].includes(s.trim())) {
        sum3++;
      }
    }
    if (sum3 >= 2) {
      this.endErg.set(this.endErg() + 1)
      this.style2[2] = true;
    } else {
      this.style2[2] = false;
    }
  }
}
