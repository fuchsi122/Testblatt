import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-silber-ue12',
  imports: [
    ReactiveFormsModule,
    NgClass,
    FormsModule,
  ],
  templateUrl: './silber-ue12.html',
  styleUrl: './silber-ue12.css',
})

export class SilberUe12 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Wie lang ist eine Rettungsleine?",
    "Was soll jeder Feuerwehrangehörige in seinem Kfz mitführen, um im Brandfall erste Löschhilfe leisten zu können?r",
    "Welchen Dienstgrad bekommt ein Feuerwehrmitglied nach der Überstellung von der Feuerwehrjugend in den Aktivdienst?",
    "Bei welchem Kleinlöschgerät wird ein D-Druckschlauch verwendet?",
    "Wie oft muss eine Mitgliederversammlung abgehalten werden?",
    "Wozu dient ein Stützkrümmer?",
    "Welche Bekleidung ist bei Übungen zu tragen?",
    "Was ist zu tun, wenn du vom Brand in einem Raum eingeschlossen bist und eine Flucht nicht mehr möglich ist?",
    "Wie kann die Brandausbreitung verhindert werden?",
    "Wie wird das Bewusstsein einer Person überprüft?",
    "Wie und womit löscht man Fettbrände in einer Küche?",
    "Womit werden Kabelbrände in einem Kfz gelöscht?",
    "Welchen Knoten verwendet man zum schnellen Aufziehen von Gegenständen oder Werkzeugen?",
    "Wie kann eine starke Blutung schnellstmöglich versorgt werden?",
    "Welche Ausrüstung ist beim Verkehr regeln einer Einsatzstelle zu verwenden?",
    "Welches Kleinlöschgerät wird bei Wiesen- und Waldbränden eingesetzt?",
    "Welche nach DIN genormten Übergangsstücke gibt es?",
    "Welchen Dienstgrad trägt der Bezirksfeuerwehrkommandantstellvertreter?",
    "Wie weit sicherst du auf Freilandstraßen ab?",
    "Wie wird der Feuerwehrkommandant einer Freiwilligen Feuerwehr ermittelt?",
    "Welche Mitglieder gibt es bei der Freiwilligen Feuerwehr?",
    "Welche Stoffgruppe bezeichnet die Brandklasse A?",
    "Wann muss eine Nachricht im Feuerwehrfunk wörtlich mitgeschrieben werden?",
    "Welche Maßnahmen sind beim Austritt von Flüssigkeiten zu treffen?",
    "Welche Maßnahmen sind durchzuführen, sobald die Person in der stabilen Seitenlage ist?",
    "Wie nennt man das für einen Feuerwehreinsatz verantwortliche Feuerwehrmitglied?",
    "Was ist bei Verkehrsunfällen mit Verletzten sofort zu tun?",
    "Wie nennt man Fahrzeuge für spezielle Aufgaben wie Kranfahrzeug / Atemluftfahrzeug / Schadstofffahrzeug / Drehleiter?",
    "Wer ist für die Einsatzbereitschaft von Funkgeräten verantwortlich?",
    "Welche Bedeutung hat dieses Piktogramm?"
  ])
  antworten = signal([
    ["25 m – 45 m", "20 m bzw. 30 m", "60 m bzw. 70 m"],
    ["Eine Kübelspritze", "Einen Löscheimer", "Einen tragbaren Feuerlöscher"],
    ["Probefeuerwehrmann (PFM)", "Jugendfeuerwehrmann (JFM)", "Feuerwehrmann (FM)"],
    ["Beim Löscheimer", "Bei der Kübelspritze", "Beim tragbaren Feuerlöscher"],
    ["Alle zwei Jahre", "Alle zwei Monate", "Mindestens 1-mal jährlich"],
    ["Die Wasserleistung am Strahlrohr erhöhen", "Den Wasserverbrauch reduzieren", "Die Bedienung eines B-Strahlrohres durch lediglich zwei Feuerwehrmitglieder"],
    ["Möglichst bequeme Freizeitbekleidung", "Einsatzbekleidung", "Paradedienstbekleidung"],
    ["Unter einem Tisch verstecken", "Den Brand selbst löschen", "Vom Brand soweit wie möglich entfernen, Türen schließen und abdichten, Fenster öffnen und Aufmerksamkeit erwecken"],
    ["Nur die Feuerwehr kann die Brandausbreitung verhindern", "Türen schließen, Lüftungsanlagen und Energieleitungen abstellen, gefährliche Stoffe entfernen, Umgebung beobachten", "Alle Wasserhähne aufdrehen"],
    ["Durch lautes Ansprechen und sanftes Schütteln an den Schultern", "Schmerzreiz an beiden Füßen setzen", "Das Bewusstsein kann durch den Ersthelfer nicht überprüft werden"],
    ["Durch Abdecken mit einem passenden Deckel oder mit einer Löschdecke", "Möglichst schnell Wasser in die Pfanne gießen", "Mit der Pfanne ins Freie laufen"],
    ["Mit einem Kübel Wasser", "Mit Leichtschaum", "Mittels tragbaren Feuerlöschers"],
    ["Zimmermannsklank", "Einfacher Ring", "Spirenstich"],
    ["Ein Pflaster auf die Wunde kleben", "Stabile Seitenlage", "Fingerdruck bzw. Druckverband"],
    ["Pressluftatmer, Verkehrsleitkegel", "Einsatzbekleidung, Warnweste, Winkerkelle, bei Bedarf Handfunkgerät", "Schirmmütze, reflektierende Schutzkleidung, Einsatzleiterüberwurf"],
    ["Die Feuerpatsche", "Die Löschdecke", "Der tragbare Feuerlöscher"],
    ["Schraub- auf Drehgewinde", "42-52 mm, 75-110 mm", "A125-A, A-B, B-C, C-D"],
    ["Verwaltungsrat (VR)", "Brandrat (BR)", "Hauptbrandinspektor (HBI)"],
    ["150 m – 250 m", "100 m – 150 m", "50 m – 100 m"],
    ["Durch Handzeichen in der Mitgliederversammlung", "Durch Wahl in der Mitgliederversammlung", "Der Bürgermeister bestimmt den Feuerwehrkommandanten"],
    ["Feuerwehrjugend, aktive Mitglieder, Reservisten und Ehrenmitglieder", "Gewählte Mitglieder, Chargen und Funktionäre", "Freiwillige Mitglieder, verpflichtete Mitglieder und zahlende Mitglieder"],
    ["Flüssige und flüssig werdende Stoffe", "Feste Stoffe", "Gasförmige Stoffe"],
    ["Jede Nachricht ist mitzuschreiben", "Wenn es der Einsatzleiter anordnet", "Bei der Durchsage „Achtung Spruch“"],
    ["Auffangen, Abdichten, Binden", "Ersticken, Kühlen, Entziehen", "Wegwaschen, Aufsaugen, Wegkehren"],
    ["Keine weiteren Maßnahmen", "Notruf absetzen und regelmäßige Atemkontrolle", "Anlegen eines Druckverbandes"],
    ["Melder", "Feuerwehrkommandantstellvertreter", "Einsatzleiter"],
    ["Unfallstelle absichern, Zündquellen fernhalten, Verletzte betreuen und Rettungsmaßnahmen einleiten", "Die Wertgegenstände aus dem Unfallfahrzeug bergen", "Den Verletzten unter allen Umständen aus dem Fahrzeug ziehen"],
    ["Großfahrzeuge", "Sonderfahrzeuge", "Kombinationsfahrzeuge"],
    ["Der Zeugmeister", "Der Gruppenkommandant", "Der Sachbearbeiter Nachrichtendienst"],
    ["Gesundheitsgefahr", "Herzinfarktrisiko", "Achtung Defibrillator"]

  ]);
  richtig  = signal(["B","C","A","B","C","C","B","C","B","A","A","C","A","C","B","A","C","B","A","B","A","B","C","A","B","C","A","B","C","A"])
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
