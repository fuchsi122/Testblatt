import {Component, inject, signal} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-fjla-fragen',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './fjla-gold.html',
  styleUrl: './fjla-gold.css',
})
export class FjlaGoldFragen {
  // routing
  router = inject(Router);
  // Fragen
  fragen = signal([
    "Woraus besteht das Feuerwehrkommando?",
    "Bei Kohlenstoffdioxid handelt es sich um ein ... ?",
    "Mit welchem Kommando wird bei einem Einsatz ein Rückzug angeordnet?",
    "Welche Voraussetzungen sind für eine Verbrennung erforderlich?",
    "Was muss die Alarmmeldung zu einem Notrufträger enthalten?",
    "Aus welchen Teilen besteht die Einsatzbekleidung eines Feuerwehrmitglieds?",
    "Nenne die Voraussetzungen zum Lenken eines Feuerwehrfahrzeugs?",
    "Wie muss kontaminiertes Bindemittel entsorgt werden?",
    "Wodurch kann Kohlenstoffmonoxid(CO) entstehen?",
    "Welchen Durchmesser kann ein A-Saugschlauch haben?",
    "Wer ist bei der Freiwilligen Feuerwehr aktiv wahlberechtigt?",
    "Ist Erdgas leichter als Luft",
    "Wie weit muss auf Freilandstraßen abgesichert werden?",
    "Welche Informationen benötigt die Feuerwehr bei der Ankunft?",
    "Welche zusätzlichen Zeichen kann bei dem Kommando \"Alle Mann - zurück\" durch den Maschinisten abgegeben werden?",
    "Durch welches Dreieck kann eine Verbrennung grafisch dargestellt werden?",
    "Nenne den Funkrufnamen des zweiten Handfunkgerätes in der Feuerwehr?",
    "Was ist am Einsatzende nach dem Einrücken ins Feuerwehrhaus zu tun?",
    "Wie werden Schläuche bei der Feuerwehr grundsätzlich unterteilt?",
    "Wozu dient die Winkerkelle?",
    "Welche Brandklassen gibt es?",
    "Wo treten vermehrt Gärgas- unf Faulgasunfälle auf?",
    "Nenne die Verhaltensregeln beim Einsatz eines tragbaren Feuerlöschers?",
    "Wer darf in deiner Feuerwehr Funkgeräte bedienen?",
    "Welche Verhaltensregeln sollten grundsätzlich bei einem Verkehrsunfall immer eingehalten werden?",
    "Welche Arten von Schaum gibt es?",
    "Wie können Wiederholungen beim Funken gefordert werden?",
    "Welche Kleinlöschgeräte gibt es?",
    "Wie wird die Bekleidung bei der Feuerwehr unterteilt?",
    "Wo befindet sich der Sammelplatz bei dem Kommando \"Alle Mann - zurück\"?",
    "Welches Löschmittel verwendest du bei der Brandklasse D",
    "Wie werden beim Funken Fehler bei der Durchgabe von Nachrichten korrigiert?",
    "Wozu dient ein B-Mehrzweckstrahlrohr?",
    "Ist Flüssiggas schwerer als Luft?",
    "Um welche Brandklasse handelt es sich bei festen Stoffen?",
    "Wozu dienen Druckschläuche?",
    "Für welche Brandklasse kann Wasser als Löschmittel verwendet werden?",
    "Wann dürfen laufende Funkgespräche unterbrochen werden?",
    "Nenne das richtige Verhalten bei Gasgeruch?",
    "Nenne die wichtigsten Regeln zur Unfallverhütung",
  ]);
  // antworten für Falsch beantwortete Fragen
  richtig = signal([
    "Feuerwehrkommandant, Feuerwehrkommandantstellvertreter, Leiter des Verwaltungsdienst",
    "farb und geruchloses Gas",
    "Alle Mann zurück",
    "Brennbarer Stoff, Sauerstoff, Wärme, Reaktionsbereitschaft, richtiges Mischverhältnis",
    "Wer spricht? Was ist passiert?, Wo wird Hilfe benötigt, Wie",
    "Feuerwehrhelm, Schutzjacke, Schutzhose, Feuerwehrschutzhandschuhe, Feuerwehrstiefel",
    "Gültige Lenkberechtigung, Fahrtauglichkeit, Fahrberechtigung, Fahrerlaubnis",
    "fachgerechte Entsorgung",
    "unvollständige Verbrennung",
    "110mm, 125mm",
    "alle Feuerwehrmitglieder, ab dem vollendeten 15.Lebensjahr",
    "Ja",
    "150m-250m",
    "Wo brennt es? Wird jemand vermisst? Besonderer Gefahren? Alternative Angriffswege",
    "Betätigen der Fahrzeughupe",
    "Verbrennungsdreieck",
    "Berta",
    "Einsatzbereitschaft herstellen",
    "Druck- und Saugschläuche",
    "Verkehrsregelung",
    "A,B,C,D,F",
    "Wein- und Mostkeller, Silos",
    "Windrichtung, vorne nach hinten und von unten nach oben, mehrere Feuerlöscher gleichzeitig, tote Winkel achten, gebrauchte Feuerlöscher neu befüllen lassen",
    "Nur ausgebildete Funker",
    "Notruf absetzen, Absichern der Unfallstelle, Auslaufende Betriebsmittel beachten/eindämmen, Verletzte betreuen, Erste Hilfe leisten",
    "Leichtschaum, Mittelschaum, Schwerschaum",
    "Wiederholen, kommen",
    "Feuerpatsche, Kübelspritze, Löschdecke, Tragbarer Feuerlöscher",
    "Dienstbekleidung und Einsatzbekleidung",
    "Beim Fahrzeug mit dem man ausgerückt ist",
    "Metallbrandpulver",
    "Ich berichtige",
    "Brandbekämpfung mit großer Brandlast",
    "Ja",
    "Brandklasse A",
    "Zur Förderung von Löschwasser",
    "Brandklasse A",
    "Bei Gefahr in Verzug",
    "Räume lüften, keine offenen Flammen, keine Funken, nicht telefonieren, keine Schalter betätigen, Gaszufuhr unterbrechen, Nachbarn warnen, Gefahrenbereich verlassen, Gasnotruf 128",
    "persönliche Schutzausrüstung tragen, Sicherheit vor Schnelligkeit, ausreichend Sicherungen, Gefahrenbereiche beachten"]);
  // zeigt, welche Fragen überprüft wurden
  style = <boolean[]>[];
  // Speichert eingegebene Antworten
  antworten = <string[]>["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  // Punkte die erreicht werden
  punkte = 0;

  // zeigt Buttons zur überprüfung an
  kontrollieren(index: number) {
    this.style[index] = !this.style[index];
  }

  // Speichert Index der richtig/falsch beantworteten Fragen
  richtigeFragen = <number[]>[];
  falscheFragen = <number[]>[];
  richtigeAnt(index: number) {
    if (this.falscheFragen.includes(index)) {
      this.falscheFragen = this.falscheFragen.filter(f => f !== index);
      this.richtigeFragen.push(index);
    }
    if (!this.richtigeFragen.includes(index)) {
      this.richtigeFragen.push(index);
    }
    this.punkte = this.richtigeFragen.length;
  }
  falscheAnt(index: number) {
    if (this.richtigeFragen.includes(index)) {
      this.richtigeFragen = this.richtigeFragen.filter(f => f !== index);
      this.falscheFragen.push(index);
    }
    if (!this.falscheFragen.includes(index)) {
      this.falscheFragen.push(index);
    }
    this.punkte = this.richtigeFragen.length;
  }

  // Funktion zum Zurücksetzen von den Antworten
  reset() {
    this.antworten = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    this.style = [];
    this.richtigeFragen = [];
    this.falscheFragen = [];
    this.punkte = 0;
  }
  // Zurück ins Hauptmenü
  menue() {
    this.router.navigate(['']);
  }
  // Zurück zur Erprobungsauswahl
  back() {
    this.router.navigate(['/abzeichen/fjlaGold']);
  }
}
