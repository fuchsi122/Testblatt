import {Component, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-technik-u12',
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './technik-u12.html',
  styleUrl: './technik-u12.css',
})

export class TechnikU12 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Womit musst du kleinere Mengen von ausgelaufenem Treibstoff abdecken?",
    "Was ist bei Verkehrsunfällen mit Verletzten sofort zu tun?",
    "Wie kann die Zugkraft eines Greifzugs erhöht werden?",
    "Wozu kann ein Greifzug verwendet werden?",
    "Nenne die Sicherheitsabstände bei Arbeiten mit Seilen?",
    "Welche Persönliche Schutzausrüstung muss bei Arbeiten mit Seilen verwendet werden?",
    "Wo schauen die Personen, welche den Greifzug bedienen, vorwiegend hin?",
    "Was ist eine feste Rolle?",
    "Wie stellst du bei Brandgefahr den Brandschutz sicher?",
    "Wo musst du - außer bei Verkehrsunfällen - noch absichern?",
    "Womit kann ein Fahrzeug gegen Wegrollen bzw. Erschütterung gesichert werden?",
    "nenne die Bestandteile eines hebels?",
    "Was muss man tun, um mehr last bei gleicher Kraft zu heben wenn ein ein- oder zweiseitiger Hebel verwendet wird?",
    "Wie viele Personen arbeiten mit dem Greifzug?",
    "Welche Hebelart wird beim herkömmlichen Nussknacker verwendet?"])
  antworten = signal([
    ["Mit einem Putzlappen","Mit Ölbindemittel","Mit Schaummittel"],
    ["Unfallstelle absichern, Zündquellen fernhalten, Verletzte betreuen und Rettungsmaßnahmen einleiten","Die Wertgegenstände aus dem Unfallfahrzeug bergen","Den Verletzten unter allen Umständen aus dem Fahrzeug ziehen"],
    ["Durch ein stärkeres Seil","Durch Serienschaltung","Durch Einscheren einer losen Rolle"],
    ["Zur Instandsetzung von Gleisanlagen nach Unfällen ","Zum Heben, Senken und Ziehen von Lasten","Für Servicearbeiten an einem Feuerwehrfahrzeug "],
    ["Jeweils die Seillänge als Radius und den Anschlagpunkt als Mittelpunkt, inkl. möglichen Seildreieck ","Es gibt keine Sicherheitsabstände ","Es ist ausreichend hinter dem Einsatzleiter Schutz zu suchen"],
    ["Ein heruntergeklapptes Schutzvisier ist ausreichend","Vollständige Einsatzbekleidung, insbesondere Feuerwehrschutzhandschuhe ","Vollständige Einsatzbekleidung, hierbei genügen die aufgrund des leicht öligen Seiles die Infektionsschutzhandschuhe "],
    ["Zum Einsatzleiter","Zu den Schaulustigen und anwesenden Reportern","Einer beobachtet die Last und deren Verankerung, der Andere die Verankerung des Greifzuges "],
    ["Eine Rolle die sich nicht dreht, damit das Seil nicht durch schlupft. ","Eine Rolle die ortsfest angebracht ist um ein Seil umzulenken. ","Eine sehr große schwere Rolle. "],
    ["Ich rufe mindestens drei Feuerwehren zur Unterstützung ","Ich stelle ein Pulverlöschgerät bereit","Mindestens zweifach: mit Wasser und Pulver "],
    ["Nur bei ausgeflossenem Treibstoff bzw. Öl ","Bei der Tierrettung","Wenn Gefahr für Einsatzkräfte besteht"],
    ["Durch ablassen der Luft aus den Reifen","Radkeil, Unterlegshölzer, Stufenkeil","Ein Fahrzeug kann nicht gegen Erschütterungen gesichert werden"],
    ["Last, HLF2, Umlenkrolle","Kraftarm, Lastarm, Drehpunkt","Druckpunkt, Zugseil, Freischalthebe"],
    ["Das Verhältnis zu Kraft- und Lastarm verändern, in dem man den Lastarm verlängert oder den Kraftarm verkürzt","Das Verhältnis zu Kraft- und Lastarm verändern , in dem man den Lastarm verkürzt oder den Kraftarm verlängert ","Das ist unmöglich"],
    ["Mindestens 2 Personen","So viele Personen damit die Last gezogen werden kann","1 Person ist ausreichend"],
    ["Kein Hebel","Einseitiger Hebel","Zweiseitiger Hebel"]])
  richtig = signal(["B","A","C","B","A","B","C","B","C","C","B","B","B","A","B"])

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
