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
    "Wie wird die hörbarkeit im Feuerwehrsprechfunk beurteilt?",
    "Welche Taste muss am Funkgerät beim Senden gedrückt werden?",
    "Welche Punkte muss eine Alarmmeldung enthalten?",
    "Wie ist das Signal für die Sirenenprobe?",
    "Wie ist das Signal für Zivilschutz - Warnung?",
    "Wie ist das Signal für Zivilschutz - Entwarnung?",
    "Womit beginnt ein Funkgespräch beim erstmaligen Anruf?",
    "Wen unterstützt der Melder mit seiner Tätigkeit?",
    "Nach welchem System arbeiten die Feuerwehrfunkgeräte?",
    "Wie lautet die Polizei-Notrufnummer?",
    "An wen ist die Ausrückemeldung abzusetzen?",
    "Welche organisationsübergreifenden Sprechgruppen stehen mir in meinem Bezirk zur Verfügung? ",
    "Auf welcher Sprechgruppe werden im Regelfall Funkgespräche im Einsatzfall geführt?",
    "Dürfen Privatgespräche im Feuerwehrfunk geführt werden?",
    "Wie lautet der Funkrufname für eine Alarmzentrale? ",
    "Wie lautet der Funkrufname für ein Kommandofahrzeug? ",
    "Wie lautet der Funkrufname für das erste Handfunkgerät der Feuerwehr?",
    "Wo sind die rechtlichen und organisatorischen Bestimmungen verankert?",
    "Was bedeutet das Funkgeheimnis? ",
    "Wann dürfen laufende Gespräche unterbrochen werden? ",
    "Wer darf Funkgeräte in der Feuerwehr bedienen? ",
    "Wer ist für die Einsatzbereitschaft von Funkgeräten verantwortlich? ",
    "Wie ist das Signal für den Feuerwehreinsatz? ",
    "Wie ist das Signal für „Zivilschutz“ - Alarm?",
    "Warum müssen wir uns im Feuerwehrfunk an die Vorschriften der Funkordnung halten?",
    "Was benötigt der Melder für seine Tätigkeit? ",
    "Wie lautet die FeuerwehrNotrufnummer? ",
    "Wie lautet die Rettung-Notrufnummer?",
    "Wann findet in NÖ die wöchentliche Sirenenprobe statt? ",
    "Wann muss eine Nachricht mitgeschrieben werden?",
    "Was ist Funk?",
    "Wozu dient die Heimattaste?",
    "Was bedeutet der Begriff „Wechselsprechverkehr“ im Feuerwehrfunk?",
    "Woraus setzt sich das Funkrufzeichen zusammen?",
    "Wie lautet der Funkrufname für eine fallweise besetzte Funkfixstation? ",
    "Wie lautet der Funkrufname für ein HLF1?",
    "Wie lautet der Funkrufname für das zweite Handfunkgerät der Feuerwehr? ",
    "Wie wird ein Funkgespräch abgeschlossen? ",
    "Wie werden Fehler bei der Durchgabe von Nachrichten korrigiert? ",
    "Wann sind Funkgeräte ständig besetzt zu halten? "
  ])
  antworten = signal([
    ["verständlich/unverständlich", "Sehr gut/befriedigend/nicht genügend", "Sehr gut/brauchbar/unbrauchbar"],
    ["Die Sprechtaste", "Die Ruftaste", "Die Anhörtaste"],
    ["Wer spricht? – Was ist passiert? – Wo wird die Feuerwehr gebraucht? – Hinweise auf besondere Umstände (z. B. eingeschlossene Personen)", "Wer spricht? – Wie viele Einsatzkräfte werden benötigt? – Welche Einsatzgeräte sind erforderlich?", "Wo brennt es? – Wer zahlt? – Wo ist der nächste Hydrant?"],
    ["Dauerton 5¼ Sekunden", "Dauerton 15 Sekunden", "Dauerton 65 Sekunden"],
    ["¾ Minute langer Heulton", "6 Minuten kurzer Heulton", "3 Minuten langer Dauerton"],
    ["9 Minuten langer Heulton", "1 Minute langer Dauerton", "4½ Minuten langer Dauerton"],
    ["Mit Anruf und Anrufantwort", "Mit einer telefonischen Anmeldung", "Mit einer freundlichen Begrüßung"],
    ["Den Leiter des Verwaltungsdienstes", "Den Abschnittsfeuerwehrkommandanten", "Den Einsatzleiter"],
    ["Miteinandersprechen", "Wechselsprechen (Simplex)", "Gegenübersprechen"],
    ["129", "137", "133"],
    ["Die zuständige Bezirks- oder Bereichsalarmzentrale", "Die zuständige Bezirkshauptmannschaft", "Den Bezirksfeuerwehrkommandanten"],
    ["Ausweichgruppe 1–5", "Je eine VERA-, Hubschrauber- und BOS-Gruppe", "Hauptgruppe des Bezirks"],
    ["„Bezirkskennung“ Haupt", "„Bezirkskennung“ VERA", "Polizei 01"],
    ["Ja, dazu sind ja Funkgeräte da", "Nur wenn niemand mithört", "Nein"],
    ["Betriebsfeuerwehr", "Florian", "Freiwillige Feuerwehr"],
    ["Kommando", "Mannschaftswagen", "Feuerwehrbus"],
    ["Anton", "Heinrich", "Franziska"],
    ["Im Verzeichnis der Postleitzahlen", "Im Bundesfeuerwehrgesetz", "Im Telekommunikationsgesetz, im Fernmeldegebührengesetz, im Fachschriftenheft 5 „Feuerwehrfunk“ des ÖBFV und in den Dienstvorschriften der Landesfeuerwehrverbände"],
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
    ["Bei „Achtung Spruch“", "Bei „Schreiben Sie mit“", "Bei „Kommen Sie bei mir vorbei“"],
    ["Ein Kommandofahrzeug", "Das Einsatztagebuch", "Die Nutzbarmachung elektromagnetischer Wellen zur Nachrichtenübermittlung"],
    ["Durch Drücken wird der Eigentümer des Funkgerätes angezeigt", "Durch Drücken wird eine SMS nach Hause versandt", "Durch Drücken erfolgt automatischer Wechsel in die Bezirks-Hauptgruppe im Bezirksordner"],
    ["Jeder kann sprechen, was er will", "Alle sprechen gleichzeitig", "Es kann nur einer sprechen"],
    ["Funkrufname und Name der Feuerwehr", "Name des Feuerwehrkommandanten", "Orts- und Gemeindenamen"],
    ["Freiwillige Feuerwehr", "Betriebsfeuerwehr", "Feuerwehr"],
    ["Kraftfahrzeug", "Pumpe", "Löschwagen"],
    ["Berta", "Konrad", "Andrea"],
    ["Mit einer Bestätigung und dem Abschluss", "Mit „Ich mach jetzt Schluss“", "Mit „Ich beende jetzt das Funkgespräch“"],
    ["Mit „Ich muss mich leider korrigieren“", "Mit „Ich korrigiere meinen Fehler“", "Mit „Ich berichtige“"],
    ["Im Einsatzfalle", "Während der Mitgliederversammlung", "Bei Wartungsarbeiten"]
  ]);
  richtig  = signal(["C", "A", "A", "B", "C", "B", "A", "C", "B", "C", "A", "B", "A", "C", "B", "A", "A", "C", "B", "C", "A", "C", "B", "C", "A", "B", "A", "C", "A", "A", "C", "C", "C", "A", "C", "B", "A","A", "C", "A"])

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
