import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-technik-ue12',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './technik-ue12.html',
  styleUrl: './technik-ue12.css',
})
export class TechnikUe12 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Erkläre den Begriff Retten!",
    "Nenne den Merksatz zum Technischen Einsatz!",
    "Wie wird eine Arbeitsleine gekennzeichnet?",
    "Wann ist eine Rettungsleine einer Sichtprüfung zu unterziehen?",
    "Welche Geräte gehören neben der Rundschlinge noch zu Anschlagmitteln?",
    "Was beinhaltet der dreifache Brandschutz?",
    "Wie kann die Zugrichtung bei Verwendung einer Seilwinde verändert werden?",
    "Nenne die Sicherheitsabstände bei Arbeiten mit Seilen!",
    "Welche Belastung wirkt mindestens auf eine feste Rolle beim Ziehen einer Last mit 1 Tonne?",
    "Was muss nach jedem Einsatz einer Rundschlinge erfolgen?",
    "Womit sind Hebekissen gefüllt?",
    "Worauf ist bei der Kombination mehrere Anschlagmittel zu achten?",
    "Erkläre den Begriff Bergen!",
    "Was ist bei einem Gebäudeeinsturz nach dem Absichern und Alarmieren zu tun?",
    "Welche Bestandteile gehören zu einem Greifzug?",
    "Auf welcher Fahrzeugseite wird auf stark befahrenen Straßen abgesessen?",
    "Was ist beim Eintreffen am Einsatzort zuerst zu machen?",
    "Wie hoch ist Kraftersparnis beim Einscheren mit einer losen Rolle",
    "Nenne die Bestandteile eines Hebels!",
    "Wie werden die Erdnägel bei einer Freilandverankerung geschlagen?",
    "Was muss man tun, um mehr Last bei gleicher Kraft zu heben wenn ein ein- oder zweiseitiger Hebel verwendet wird?",
    "Was bedeutet hydraulisch?",
    "Wie viele Hebekissen können übereinander verwendet werden?",
    "Woran erkennt man am schnellsten die zulässige Zugkraft einer Rundschlinge"
  ])
  antworten = signal([
    ["Retten heißt: warten, bis jemand helfen kommt","Retten heißt: einen lebensbedrohlichen Zustand von Menschen oder Tieren durch Befreien aus einer bedrohlichen Zwangslage abwenden","Retten heißt: die Rettung alarmieren"],
    ["Technischer Einsatz geht vor Brandeinsatz","Sichere Grundsätzlich immer zuerst die Einsatzstelle ab und kümmere dich anschließend um die Personen","Beginne mit dem technischen Einsatz erst nach den Absperrmaßnahmen der Polizei "],
    ["Keine Kennzeichnung erforderlich","Durch leichte Einkerbungen","Bei einer Arbeitsleine müssen die Enden und der Karabiner rot eingefärbt sein"],
    ["Nach jeder Verwendung ist eine Sichtprüfung durchzuführen","Überprüfung ist nicht notwendig ","Nach jedem Feuerwehreinsatz"],
    ["Feuerwehraxt, Unterlegkeil, Stufenkeil","Stahldrahtseil, Ketten, Hebebänder, Schäkel, Umlenkrolle","Seilwinde, Greifzug, hydraulisches Rettungsgerät"],
    ["Die Löschmittel Wasser, Schaum und Pulver","Löschdecke, Wasser und Pulver","Ölbindemittel, Wasser und Schaum"],
    ["Durch Nachlassen der Zugspannung an der Seilwinde","Durch die Verwendung einer losen Rolle","Durch Verwendung einer festen Rolle"],
    ["Es gibt keine Sicherheitsabstände","Jeweils die Seillänge als Radius und den Anschlagpunkt als Mittelpunkt, inkl. möglichen Seildreieck","Es ist ausreichend hinter dem Einsatzleiter Schutz zu suchen"],
    ["1 Tonne","½  Tonne","2 Tonnen"],
    ["Waschen mit Spezialmittel","Keine besondere Maßnahme","Sichtkontrolle"],
    ["Druckluft","Sauerstoff","Spezialgas"],
    ["Können ohne Bedenken kombiniert werden","Dürfen nicht kombiniert werden","Die gleiche zulässige Zugkraft, bei unterschiedlicher zulässiger Zugkraft ist die niedrigste zu beachten"],
    ["Bergen heißt: Tiere aus dem Stall retten","Bergen heißt: Person aus einem verunfallten Auto retten","Bergen heißt: leblos Personen oder leblose Tiere oder gefährdete Sachwerte einbringen"],
    ["Zuerst den Bürgermeister verständigen","Zuerst freiliegen verletzte wegbringen, dann Räume durchsuchen, Verschüttete orten und betreuen","Zuerst Arbeitskleidung anziehen"],
    ["Zugseil, Teleskop-Hebelrohr und Greifzug","Hebel, Klapprohr und Griff","Hebel, Rohr und Hammer"],
    ["Immer auf der in Fahrtrichtung rechten Seite","Auf der dem Verkehr abgewandten Seite","Die Mannschaft muss das Einsatzfahrzeug immer gleichmäßig links und rechts verlassen"],
    ["Unfallstelle absichern","Fotos zur Dokumentation der Lage anfertigen","Erkunden der Lage"],
    ["150%","Es kommt zu keiner Kraftersparnis","50%"],
    ["Last, HLF2, Umlenkrolle","Kraftarm, Lastarm, Drehpunkt","Druckpunkt, Zugseil Freischalthebel"],
    ["Alle Erdnägel senkrecht oder leicht in Zugrichtung","max. 6 Erdnägel gegen die Zugrichtung","max. 3 Erdnägel senkrecht oder leicht in Zugrichtung"],
    ["Das ist unmöglich","Das Verhältnis zu Kraft- und Lastarm verändern, in dem man den Lastarm verlängert oder den Kraftarm verkürzen","Das Verhältnis zu Kraft- und Lastarm verändern, in dem man den Lastarm verkürzt oder den Kraftarm verlängert"],
    ["Mit Strom arbeitend","Mit Druckluft arbeitend","Mit dem Druck von Wasser oder anderen Flüssigkeiten arbeitend"],
    ["Zwei","Nicht erlaubt","Beliebig viele"],
    ["Am Umfang","An der Länge","An der farblichen Kennzeichnung"],
  ])
  richtig = signal(["B", "B", "C", "A", "B", "A", "C", "B", "C", "C", "A", "C", "C", "B", "A", "B", "A", "C", "B", "A", "C", "C", "B", "C"])

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
