import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-gold-ue12',
  imports: [
    ReactiveFormsModule,
    NgClass,
    FormsModule
  ],
  templateUrl: './gold-ue12.html',
  styleUrl: './gold-ue12.css',
})

export class GoldUe12 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Welche Schutzausrüstung verwendest du im Wasserdienst?",
    "Wie wird eine Person mit einem Herz-Kreislauf-Stillstand richtig versorgt?",
    "Wie werden Entstehungsbrände in Räumen bekämpft?",
    "Was ist bei einem Gebäudeeinsturz nach dem Absichern und Alarmieren zu tun?",
    "Wie werden Personen über Leitern gerettet?",
    "Welche Brände bezeichnen die Brände der Klasse F?",
    "Wie lautet der Feuerwehrgruß?",
    "Bei welchem Temperaturpunkt entwickeln brennbare Flüssigkeiten brennbare Dämpfe?",
    "Was ist bei Einsätzen auf Verkehrsflächen zu tragen?",
    "Welche Gefahren können durch nicht gewartete Gasthermen entstehen?",
    "Wodurch kannst du Unfälle mit Einsatzgeräten vermeiden?",
    "Welche Schutzstufen kennst du im Schadstoffeinsatz?",
    "Wie ist die Einsatzleitstelle gekennzeichnet?",
    "Woraus besteht das Feuerwehrkommando?",
    "Wie wird eine Arbeitsleine gekennzeichnet?",
    "Wie bewegt man sich in verqualmten Räumen?",
    "Welche Erscheinungsformen einer schnellen Oxidation sehen wir?",
    "Können beim Löschen für das Feuerwehrmitglied durch das Löschmittel Wasser Gefahren entstehen?",
    "Für welche Brandklasse wird ein Nasslöscher eingesetzt?",
    "Wie oft ist eine Rettungsleine zu überprüfen?",
    "Wo wird die erste Löschleitung am Verteiler angeschlossen?",
    "Warum musst du bei Einsätzen und Übungen eine Einsatzbekleidung tragen?",
    "Was ist bei einem Gärgasunfall zu beachten?",
    "Wie funktioniert ein Zumischer?",
    "Was ist eine Oxidation?",
    "Wie kann man die Voraussetzung Wärme (in Bezug auf das Verbrennungsdreieck) beim Löschen beeinflussen?",
    "Welche Hauptlöschwirkung hat CO2?",
    "Was ist bei einem Stromunfall im Niederspannungsbereich (230 V, 400 V) zu tun?",
    "Welche Knoten finden beim Fixieren einer Schiebeleiter Anwendung?",
    "An welcher Armatur endet im Regelfall die Zubringerleitung?",
    "Welche Gefahr tritt bei einem Atem-Kreislauf-Stillstand auf?",
    "Wie sind brennbare Stoffe eingeteilt?",
    "Welcher Hauptlöscheffekt wird bei Flüssigkeitsbränden angewendet?",
    "Für welche Brandklassen wird ein Schaumlöscher eingesetzt?",
    "Wie kann man die Voraussetzung Sauerstoff (in Bezug auf das Verbrennungsdreieck) beim Löschen beeinflussen?",
    "Wie weit musst du auf Autobahnen absichern?",
    "Welche Durchmesser kann ein A-Schlauch haben?",
    "Wo wird die Rettungsschlinge an der zu rettenden Person angelegt?",
    "Welche Sofortmaßnahmen sind bei Ertrunkenen durchzuführen?",
    "Was ist die Zündtemperatur?"
  ])
  antworten = signal([
    ["Schwimmflossen", "Rettungsweste", "Anker"],
    ["Stabile Seitenlage", "Oberkörper-Hochlagerung", "Herzdruckmassage und Beatmung"],
    ["Vorsichtig", "Von außen durch das Fenster", "Durch Innenangriff"],
    ["Sonderdienste anfordern", "Laut um Hilfe schreien", "Zuerst freiliegende Verletzte wegbringen, dann Räume durchsuchen, Verschüttete orten und betreuen"],
    ["So schnell wie möglich, ohne Rücksicht auf die Sicherung der Personen", "Durch Sicherung mit der Rettungsleine von oben", "Freihändig, mit dem Kopf nach unten"],
    ["Brände von Fetten", "Brände von flüssigen Stoffen", "Brände von festen Stoffen"],
    ["Glück auf!", "Einer für Alle!", "Gut Wehr!"],
    ["Siedepunkt", "Flammpunkt", "Zündzeitpunkt"],
    ["Warnweste", "Regenjacke", "Flammschutzhaube"],
    ["CO2-Vergiftung", "CO-Vergiftung", "CH4-Vergiftung"],
    ["Durch kurze Einsatzzeiten", "Durch Nichtbeachten der Sicherheitshinweise", "Durch richtige Bedienung, Handhabung und durch Einschulungen"],
    ["1 / 2 / 3 / 4", "A / B / C", "leicht / mittel / schwer"],
    ["Durch eine gelbe Rundumkennleuchte", "Durch eine rote Rundumkennleuchte", "Durch eine grüne Rundumkennleuchte"],
    ["Feuerwehrkommandant, Zugskommandant, Truppführer", "Zugskommandant, Zugtruppkommandant, Gruppenkommandant", "Feuerwehrkommandant, Feuerwehrkommandantstellvertreter, Leiter des Verwaltungsdiensts"],
    ["Keine Kennzeichnung erforderlich", "Durch leichte Einkerbungen", "Bei einer Arbeitsleine müssen die Enden und der Karabiner rot eingefärbt sein"],
    ["Möglichst schnell", "In Bodennähe", "Aufrecht gehend"],
    ["Wärme, Stickoxide", "Keine", "Flammen, Rauch"],
    ["Ja, z. B. Verbrühen beim Verdampfen von Wasser", "Nein", "Ja, aber nur bei Verwendung des Strahlrohres ohne Mundstück"],
    ["Brandklasse B und C", "Brandklasse A", "Brandklasse G"],
    ["Nach jeder Verwendung bzw. einmal jährlich ist eine Sichtprüfung durchzuführen", "Überprüfung ist nicht notwendig", "Nach jedem Feuerwehreinsatz"],
    ["Linker Druckausgang", "Mittlerer Druckausgang", "Rechter Druckausgang"],
    ["Es muss nicht bei allen Einsätzen eine Einsatzbekleidung getragen werden", "Zum persönlichen Schutz vor allgemeinen Gefahren an Übungs- und Einsatzstelle", "Um die Privatkleidung nicht zu verunreinigen"],
    ["die Tageszeit und Windrichtung besonders beachten", "Einsatz nur mit umluftunabhängigem Atemschutzgerät", "niemals ohne Leiter in den Schacht / Silo / Keller einsteigen"],
    ["der Zumischer arbeitet nach dem Injektorprinzip", "der Zumischer arbeitet nach dem Projektorprinzip", "der Zumischer arbeitet nach dem Luft/Wasser-Prinzip"],
    ["Auflösung eines wasserlöslichen Stoffes in H2O", "schneller Austritt des Löschmittels aus dem tragbaren Feuerlöscher", "Verbindung eines brennbaren Stoffes mit Sauerstoff"],
    ["Durch Abkühlen unter den Flamm- bzw. Zündpunkt", "Verdrängen, Abdecken", "Entzug des Löschmittels"],
    ["Ersticken", "Entzug des Brennstoffs", "Abkühlen"],
    ["Fernsehapparat abschalten", "Leitung spannungsfrei schalten und Verunglückten aus Gefahrenbereich retten", "Hausapotheke bereitstellen"],
    ["Kreuzklank und Zimmermannsklank", "Kreuzklank und einfacher Ring", "Kreuzknoten und einfacher Ring"],
    ["Tauchpumpe", "Strahlrohr", "Verteiler"],
    ["Keine Gefahr", "Der Atem-Kreislauf-Stillstand führt, wenn nicht innerhalb weniger Minuten Beatmung und Herzdruckmassage einsetzen, zum Tod", "Der Atem-Kreislauf-Stillstand führt, wenn nicht innerhalb weniger Minuten die Person erwärmt wird, zur Erfrierung"],
    ["In Brandklassen (A, B, C, D, F)", "In Stoffgruppen (A, B, C, D)", "In Löschklassen (A, B, C, D)"],
    ["Ausblasen", "Ersticken", "Aufheizen"],
    ["Brandklassen A und B", "Brandklassen C und F", "Brandklassen D und G"],
    ["Durch Abkühlen", "Verdrängen, Abdecken", "Entzug des Löschmittels"],
    ["150 m - 250 m", "150 m - 400 m", "250 m und 400 m"],
    ["110 oder 125mm", "100 oder 115mm", "90 oder 105mm"],
    ["an der Taille", "in der Höhe der Brust", "an den Beinen"],
    ["Mund säubern, mit der Wiederbelebung beginnen", "In die stabile Seitenlage bringen", "Feuerwehrtaucher alarmieren"],
    ["Temperatur bei welcher sich brennbare Dämpfe entwickeln", "Temperatur unter welcher ein Stoff in die gasförmige Phase übergeht", "die niedrigste, unter festgelegten Bedingungen ermittelte Temperatur, bei der sich ein brennbarer Stoff in Luft selbst (ohne Zündquelle) entzündet"]
  ]);
  richtig  = signal(["B","C","C","C","B","A","C","B","A","B","C","A","B","C","C","B","C","A","B","A","A","B","B","A","C","A","A","B","B","C","B","A","B","A","B","C","A","B","A","C"])
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
