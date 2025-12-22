import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-wasser-land-u12',
  imports: [
    ReactiveFormsModule,
    NgClass,
    FormsModule
  ],
  templateUrl: './wasser-land-u12.html',
  styleUrl: './wasser-land-u12.css',
})

export class WasserLandU12 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Wie nennt man den vorderen und den hinteren Teil der Feuerwehrzille?",
    "Worauf ist nach benützung einer Feuerwehrzille besonders zu achten?",
    "Wodurch kannst du Unfälle mit Einsatzgeräten vermeiden?",
    "Was ist bei Nasenbluten zu tun?",
    "Welche Rettungsgerät ist in einer Zille mitzuführen?",
    "Welche Bekleidungsstück wird beim Zillen fahren normalerweise nicht getragen?",
    "Wo musst du - außer bei Verkehrsunfällen - noch absichern?",
    "Welche Basismaßnahmen verwendest du bei der Ersten hilfe immer an?",
    "Was ist bei einer Verbrennung der Hand zu tun?",
    "Worauf ist nach benützung einer Feuerwehrzille besonders zu achten?",
    "Welche Unfallgefahren bestehen beim Transport bzw. beim Tragen von Einsatzgeräten?",
    "Wer bildet die Besatzung der Feuerwehrzille?",
    "Welche Erste-Hilfe-Maßnahmen soll bei Insektenstichen im Mund-Rachen-Raum erfolgen?",
    "Welches Rettungsmittel muss die Zillenbesatzung unbedingt tragen?",
    "Mit welchen geräten wird eine Einsatzstelle richtig abgesichert?",
    "Wie lang ist eine Feuerwehrzille?"
  ])
  antworten = signal([
    ["Hansl & Hinterteil", "Kranzl & Steuer", "Deck & Bug"],
    ["Man muss die Ruder entfernen und mit einem Kreuzklank zusammenbinden", "Man muss die Zille mit einem Spülmittel reinigen und mit einer Schnur befestigen", "Man muss sie mit der Heftleine mit einem einfachen Ring an Land verheften"],
    ["Durch kurze Einsatzzeiten", "Durch richtige Bedienung, Handhabung und durch Einschulungen", "Durch Nichtbeachten der Sicherheitshinweise"],
    ["Kopf nach vorne beugen, Nasenflügel zusammendrücken, kaltes Tuch in den Nacken legen", "Kopf nach hinten beugen, Nasenflügel zusammendrücken, warmes Tuch in den Nacken legen", "Druckverband anlegen, kaltes Tuch auf die Stirn legen"],
    ["Motorsäge", "Kübelspritze", "Rettungsring"],
    ["Helm", "Rettungsweste", "Schutzjacke"],
    ["Nur bei ausgeflossenem Treibstoff bzw. Öl", "Wenn Gefahr für Einsatzkräfte besteht", "Bei einer Tierrettung"],
    ["Verletzten nicht beruhigen, sondern weiter laut um Hilfe rufen lassen", "Verletzten in die stabile Seitenlage bringen und Rettung rufen, dann Herzdruckmassage anwenden", "Verletzten möglichst schmerzfrei lagern, wärmen oder vor Sonne schützen, für frische Luft sorgen, Verletzten betreuen"],
    ["Die Hand darf unter keinen Umständen berührt werden", "Mit Wasser kühlen, keimfreien Verband anlegen", "Ein Pflaster kleben"],
    ["Man muss die Ruder entfernen und mit einem Kreuzklank zusammenbinden", "Man muss die Zille mit einem Spülmittel reinigen und mit einer Schnur befestigen", "Man muss sie mit der Heftleine mit einem einfachen Ring an Land verheften"],
    ["Stolpern, Ausrutschen, Quetschen", "Es gibt keine Unfallgefahren", "Die Einsatzgeräte sind zu schwer"],
    ["Kranzlmann & Steuermann (Kommandant)", "Vordermann (Kommandant) & Hintermann", "Steuermann & Kranzlmann (Kommandant)"],
    ["Heißen Tee trinken", "Eis lutschen", "Keine Erste-Hilfe-Maßnahme erforderlich"],
    ["Rettungsleine", "Feuerwehrhelm", "Rettungsweste"],
    ["Blaulicht, Winkerkelle, Warnzeichen „Feuerwehr“, Warnleuchte, Verkehrsleitkegel, Absperrbänder", "Greifzug, Kübelspritze, Motorkettensäge, Stromerzeuger, Schäkel, Schanzzeug, Fluter, Stativ", "Feuerpatsche, Handscheinwerfer, Warnleuchte, Verkehrsleitkegel, Blaulicht, Absperrbänder, Einreißhaken"],
    ["14,0 m", "7,0 m", "21,0 m"]])
  richtig = signal(["B","C","B","A","C","A","B","C","B","C","A","A","B","C","A","B"])

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
