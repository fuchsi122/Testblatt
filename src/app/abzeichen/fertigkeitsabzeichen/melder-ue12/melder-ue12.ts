import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-melder-ue12',
  imports: [
    ReactiveFormsModule,
    NgClass,
    FormsModule
  ],
  templateUrl: './melder-ue12.html',
  styleUrl: './melder-ue12.css',
})

export class MelderUe12 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Wie wird die Hörbarkeit im Feuerwehrsprechfunk beurteilt?",
    "Welche Taste muss am Funkgerät beim Senden gedrückt werden?",
    "Welche Punkte muss eine Alarmmeldung enthalten?",
    "Wie ist das Signal für die Sirenenprobe?",
    "Wie ist das Signal für Zivilschutz - Warnung?",
    "Wie ist das Signal für Zivilschutz - Entwarnung?",
    "Womit beginnt ein Funkgespräch beim erstmaligen Anruf?",
    "Wen unterstützt der Melder mit seiner Tätigkeit?",
    "Nach welchem System arbeiten die Feuerwehrfunkgeräte?",
    "Wie lautet die Polizei-Notrufnummer?",
    "Welche Statusmeldung ist beim Eintreffen am Einsatzort abzusetzen?",
    "Wie wird ein Funkgespräch abgeschlossen? ",
    "Auf welcher Sprechgruppe werden im Regelfall Funkgespräche im Einsatzfall geführt?",
    "Dürfen Privatgespräche im Feuerwehrfunk geführt werden?",
    "Wie lautet der Funkrufname für eine Alarmzentrale? ",
    "Wie lautet der Funkrufname für ein Kommandofahrzeug? ",
    "Wie lautet der Funkrufname für das erste Handfunkgerät der Feuerwehr?",
    "Wie kann die Einrückemeldung abgesetzt werden?",
    "Was bedeutet das Funkgeheimnis? ",
    "Wann dürfen laufende Gespräche unterbrochen werden? ",
    "Wer darf Funkgeräte in der Feuerwehr bedienen? ",
    "Wer ist für die Einsatzbereitschaft von Funkgeräten verantwortlich? ",
    "Wie ist das Signal für den Feuerwehreinsatz? ",
    "Wie ist das Signal für „Zivilschutz“ - Alarm?",
    "Warum müssen wir uns im Feuerwehrfunk an die Vorschriften der Funkordnung halten?",
    "Was benötigt der Melder für seine Tätigkeit? ",
    "Wie lautet die Feuerwehr-Notrufnummer? ",
    "Wie lautet die Rettung-Notrufnummer?",
    "Wann findet in NÖ die wöchentliche Sirenenprobe statt? ",
    "Wie lautet die wichtigste Merkregel für den Funker?",
    "Was ist Funk?",
    "Wozu dient die Heimattaste?",
    "Was bedeutet der Begriff „Wechselsprechverkehr“ im Feuerwehrfunk?",
    "Woraus setzt sich das Funkrufzeichen zusammen?",
    "Wie lautet der Funkrufname für eine fallweise besetzte Funkfixstation? ",
    "Wie lautet der Funkrufname für eine Drehleiter?",
    "Wie lautet der Funkrufname für das zweite Handfunkgerät der Feuerwehr? ",
    "Wie kann die Ausrückemeldung abgesetzt werden?",
    "Wie werden Fehler bei der Durchgabe von Nachrichten korrigiert? ",
    "Wann sind Funkgeräte ständig besetzt zu halten? "
  ])
  antworten = signal([
    ["verständlich/unverständlich", "Sehr gut/befriedigend/nicht genügend", "Sehr gut/brauchbar/unbrauchbar"],
    ["Die Sprechtaste", "Die Ruftaste", "Die Anhörtaste"],
    ["Wo wird die Feuerwehr gebraucht? - Wer spricht? – Was ist passiert? – Hinweise auf besondere Umstände z. B. eingeschlossene Personen, ...", "Wer spricht? – Wie viele Einsatzkräfte werden benötigt? – Welche Einsatzgeräte sind erforderlich?", "Wo brennt es? – Wer zahlt? – Wo ist der nächste Hydrant?"],
    ["Dauerton 5¼ Sekunden", "Dauerton 15 Sekunden", "Dauerton 65 Sekunden"],
    ["¾ Minute langer Heulton", "6 Minuten kurzer Heulton", "3 Minuten langer Dauerton"],
    ["9 Minuten langer Heulton", "1 Minute langer Dauerton", "4½ Minuten langer Dauerton"],
    ["Mit Anruf und Anrufantwort", "Mit einer telefonischen Anmeldung", "Mit einer freundlichen Begrüßung"],
    ["Den Leiter des Verwaltungsdienstes", "Den Abschnittsfeuerwehrkommandanten", "Den Einsatzleiter"],
    ["Miteinandersprechen", "Wechselsprechen (Simplex)", "Gegenübersprechen"],
    ["129", "137", "133"],
    ["Statustaste 1","Statustaste 2","Statustaste 7"],
    ["Empfangsbestätigung und Gesprächsabschluss","Mit „Ich mach jetzt Schluss“","Mit „Ich beende jetzt das Funkgespräch“"],
    ["FW„Bezirkskennung“-HAUPT", "„Bezirkskennung“-VERA", "POLIZEI 1"],
    ["Ja, dazu sind ja Funkgeräte da", "Nur wenn niemand mithört", "Nein"],
    ["Betriebsfeuerwehr", "Florian", "Freiwillige Feuerwehr"],
    ["Kommando", "Mannschaftswagen", "Feuerwehrbus"],
    ["Anton", "Heinrich", "Franziska"],
    ["Mit Statustaste 2","Mit Statustaste 3","Mit Statustaste 6"],
    ["Man darf nicht Gespräche abhören", "Nachrichten, die für die eigene Funkstelle nicht bestimmt sind, dürfen nicht weitergegeben werden", "Wenn wer spricht, darf man nicht zuhören"],
    ["Wenn es der Melder sagt", "Nie, da dies unhöflich ist", "Bei Gefahr im Verzug"],
    ["Nur ausgebildete Funker (Funkgrundausbildung)", "Alle Feuerwehrmitglieder", "Nur der Melder"],
    ["Der Zeugmeister", "Der Gruppenkommandant", "Der Sachbearbeiter Nachrichtendienst"],
    ["Dauerton 2 × 15 Sekunden, Unterbrechung 3 × 7 Sekunden", "Dauerton 3 × 15 Sekunden, Unterbrechung 2 × 7 Sekunden, im Bedarfsfall zu wiederholen", "Dauerton 4 × 10 Sekunden, Unterbrechung 2 × 10 Sekunden"],
    ["9 Minuten auf- und abschwellender Heulton", "1 Minute gleichbleibender Heulton", "1 Minute auf- und abschwellender Heulton"],
    ["Weil der Sprechfunkverkehr gesetzlichen Bestimmungen unterliegt", "Weil jemand zuhören könnte", "Weil die Meldungen mitgeschrieben werden"],
    ["Ein Strahlrohr", "Schreibgerät, Meldeblock, Funkgerät", "Die Feuerwehrkommandantenausbildung"],
    ["122", "133", "120"],
    ["164", "224", "144"],
    ["Jeden Samstag von 11.45 Uhr bis 12.30 Uhr", "Jeden Samstag von 10.45 Uhr bis 11.30 Uhr", "Jeden Samstag von 12.45 Uhr bis 13.30 Uhr"],
    ["Denken-Drücken-Schlucken-Sprechen","Drücken-Atmen-Trinken-Loslassen","Sprechen-Schlucken-Denken-Drücken"],
    ["Ein Kommandofahrzeuge", "Das Einsatztagebuch", "Die Nutzbarmachung elektromagnetischer Wellen zur Nachrichtenübertragung"],
    ["Durch Drücken wird der Eigentümer des Funkgerätes angezeigt", "Durch Drücken wird eine SMS nach Hause versandt", "Durch Drücken erfolgt automatischer Wechsel in die Bezirks-Hauptgruppe im Bezirksordner"],
    ["Jeder kann sprechen, was er will", "Alle sprechen gleichzeitig", "Es kann nur einer sprechen"],
    ["Funkrufname und Name der Feuerwehr", "Name des Feuerwehrkommandanten", "Orts- und Gemeindenamen"],
    ["Freiwillige Feuerwehr", "Betriebsfeuerwehr", "Feuerwehr"],
    ["Kraftfahrzeug", "Leiter", "Pumpe"],
    ["Berta", "Konrad", "Andrea"],
    ["Mit Statustaste 1", "Mit Statustaste 3", "Mit Statustaste 9"],
    ["Mit „Ich muss mich leider korrigieren“", "Mit „Ich korrigiere meinen Fehler“", "Mit „Ich berichtige“"],
    ["Im Einsatzfalle", "Während der Mitgliederversammlung", "Bei Wartungsarbeiten"]
  ]);
  richtig  = signal(["C", "A", "A", "B", "C", "B", "A", "C", "B", "C", "B", "A", "A", "C", "B", "A", "A", "B", "B", "C", "A", "C", "B", "C", "A", "B", "A", "C", "A", "A", "C", "C", "C", "A", "C", "B", "A", "A", "C", "A"])

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
