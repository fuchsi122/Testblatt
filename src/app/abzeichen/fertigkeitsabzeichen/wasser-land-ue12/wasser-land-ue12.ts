import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-wasser-land-ue12',
  imports: [
    ReactiveFormsModule,
    NgClass,
    FormsModule
  ],
  templateUrl: './wasser-land-ue12.html',
  styleUrl: './wasser-land-ue12.css',
})

export class WasserLandUe12 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Wie nennt man den vorderen und den hinteren Teil der Feuerwehrzille?",
    "Du hast eine reglose Person aus dem Wasser gerettet, welche Maßnahmen musst du als erstes setzen?",
    "Was tragen wiederkehrende Prüfungen und festgelegte Lebensdauer von Geräten zur Unfallverhütung bei?",
    "Wie nennt man die begehbare Fläche in der Feuerwehrzille?",
    "Was versteht man unter Sößstelle?",
    "Was ist bei Verätzungen im Auge zu tun?",
    "Was ist das Kommando für den Rückzug und was ist zu tun?",
    "Worauf ist nach Benützung einer Feuerwehrzille besonders zu achten?",
    "Welches Rettungsmittel muss die Zillenbesatzung unbedingt tragen?",
    "Was ist bei Verkehrsunfällen mit Verletzten sofort zu tun?",
    "Dürfen in der Feuerwehrzille Feuerwehrhelme getragen werden?",
    "Wann muss die stabile Seitenlagerung durchgeführt werden?",
    "Dein Zillenpartner stürzt beim Zillen fahren auf den Kopf, er ist bei Bewusstsein. Welche Lagerung musst du durchführen?",
    "Wie lang ist eine Feuerwehrzille?",
    "Ich habe kein sauberes Tuch für einen Druckverband. Was kann ich tun?",
    "Welchen Griff kann man anwenden, um eine Person aus dem Auto zu retten?",
    "Wie nennt man das Fahren gegen und mit dem Strom?",
    "Was dient als Notzeichen bei Gefahr im Verzug in einer Zille?",
    "Welcher Ausrüstungsgegenstand wird bei Arbeiten im bis zu hüfttiefen Wasser verwendet?",
    "Wie wird die Atemkontrolle durchgeführt?",
    "Eine gerettete Person ist bewusstlos. Wie musst du die Person lagern?",
    "Wodurch können sich die Helfer bei der Rettung von Verschütteten schützen?",
    "Wer bildet die Besatzung der Feuerwehrzille?",
    "Aus welchem Holz besteht die Feuerwehrzille?",
    "Welche Maßnahmen musst du bei einem Hitzeschlag bzw. Sonnenstich setzen?",
    "Wie verhält man sich richtig bei Gasgeruch?",
    "Wie nennt man die Gegenstände, welche zur Fortbewegung der Feuerwehrzille dienen?",
    "Welches Rettungsgerät ist in einer Zille mitzuführen?",
    "Was ist zu tun, wenn sich ein Fremdkörper in einer Wunde befindet?",
    "Was ist wegen der Schadstoffe an der Einsatzstelle nach dem Einsatz zu tun?",
    "Was ist die Strömung?",
    "Was ist die maximal zulässige Belastung einer Zille?",
    "Welcher Verband ist bei einer stark blutenden Wunde anzulegen?",
    "Wie heißt die linke und die rechte Seite der Feuerwehrzille vom Steuer zum Kranzl gesehen?",
    "Welche Farben haben die Bojen, die die Schifffahrtsrinnen kennzeichnen?",
    "Wie erfolgt die schnellste Blutstillung?",
    "Welche Maßnahmen sind bei einer stark unterkühlten Person zu setzen?",
    "Welche Arten von Wasserfahrzeugen, außer der Zille, gibt es bei der Feuerwehr?",
    "Welche Gefahren gibt es im offenen Gewässer?",
    "Warum kann eine allergische Reaktion gefährlich sein?"
  ])
  antworten = signal([
    ["Hansl & Hinterteil", "Kranzl & Steuer", "Deck & Bug"],
    ["Laut ansprechen, an den Schultern rütteln, Atemwege kontrollieren", "Laut ansprechen, Druckverband am Kopf anlegen", "Laut ansprechen, an den Schultern rütteln, Beine hochlagern"],
    ["Wiederkehrende Prüfungen tragen nichts zur Unfallverhütung bei", "Damit Schäden am Gerät, die zu Verletzungen und Unfällen führen, verhindert werden", "Einsatzgeräte dürfen ewig verwendet werden"],
    ["Brücke", "Fußboden", "Bodenstreu"],
    ["Raum zwischen vorderer und hinterer Bodenstreu", "Zwischenraum einer Zille", "Loch im Kranzl für die Heftleine"],
    ["Das verätzte Auge 10–15 Minuten mit klarem Wasser spülen", "Augen schließen und auf die Rettung warten", "Auge mit Desinfektionsmittel spülen und einen Verband anlegen"],
    ["„Rückzug – jetzt“, Folgetonhorn – alle rücken zum Feuerwehrhaus ein", "„Alle Mann – zurück“, Hupe Dauerton – alle sammeln sich beim Fahrzeug", "„Alles – halt“, Warnblinkanlage – alle Geräte werden abgebaut"],
    ["Man muss die Ruder entfernen und mit einem Kreuzklank zusammenbinden", "Man muss die Zille mit einem Spülmittel reinigen und mit einer Schnur befestigen", "Man muss sie mit der Heftleine mit einem einfachen Ring an Land verheften"],
    ["Rettungsweste", "Rettungsleine", "Feuerwehrhelm"],
    ["Den Verletzten unter allen Umständen aus dem Fahrzeug ziehen", "Die Wertgegenstände aus dem Unfallfahrzeug bergen", "Unfallstelle absichern, Zündquellen fernhalten, Verletzte betreuen und Rettungsmaßnahmen einleiten"],
    ["Ja", "Nein, außer es dient der Erhöhung der Sicherheit", "Entscheidet der Kommandant"],
    ["Bei Bewusstlosigkeit", "Bei einer Beinverletzung", "Bei starken Schmerzen"],
    ["Bauchlage und unverzüglich an Land bringen", "Keine spezielle Lagerung erforderlich", "Oberkörper leicht erhöht lagern und unverzüglich an Land bringen"],
    ["7,0 m", "10,0 m", "12,0 m"],
    ["Verletzten Körperteil tieflagern", "Mit den Fingern auf die Wunde drücken", "Wunde ausspülen"],
    ["Rettungsgriff", "Heimlich-Handgriff", "Rautekgriff"],
    ["Bergwärts & Nauwärts", "Aufwärts & Abwärts", "Bergauf & Bergab"],
    ["Ein nach Möglichkeit roter Gegenstand wird im Kreis geschwenkt", "Ein weißes Licht wird aufgedreht", "Die Ruder werden in der Luft gekreuzt"],
    ["Feuerwehrhelm", "Wathose", "Schnittschutzhandschuhe"],
    ["Durch Spiegel vor den Mund halten", "Durch Sehen, Hören, Fühlen", "Durch Zwicken des Patienten"],
    ["Beine hochlagern", "Bauchlage", "Stabile Seitenlage"],
    ["Auf nachrutschende Teile achten, Sichern der Einsatzstelle durch Pölzen", "Einen dreifachen Brandschutz und Beleuchtung aufbauen", "Einsatzstelle mit Absperrband kennzeichnen"],
    ["Vordermann (Kommandant) & Hintermann", "Kranzlmann & Steuermann (Kommandant)", "Steuermann & Kranzlmann (Kommandant)"],
    ["Aus Fichtenholz", "Aus Buchenholz", "Aus Pappelholz"],
    ["Es gibt keine besonderen Maßnahmen", "Betroffenen in der Sonne sitzen lassen, mit Sonnencreme eincremen und warten bis es besser wird", "Betroffenen an einen schattigen Platz bringen, hinsetzen, kalte Umschläge auflegen und Betroffenem Wasser zu trinken geben"],
    ["Räume lüften, keine Flammen oder Funken, Gaszufuhr unterbrechen, Gefahrenbereich verlassen", "Keller aufsuchen, Radio aufdrehen, Strom abschalten, Kerze zur Beleuchtung verwenden", "In Bodennähe vorgehen, Türen abdichten, Fenster schließen, Erwachsenen rufen"],
    ["Zillenzubehör", "Fahrbehelfe", "Ausrüstung"],
    ["Motorsäge", "Kübelspritze", "Rettungsring"],
    ["Der Fremdkörper muss vom Ersthelfer entfernt werden, wenn kein Verband angelegt werden kann", "Der Fremdkörper darf nicht entfernt werden", "Der Fremdkörper muss immer entfernt werden"],
    ["Einsatzjacke im Spind aufhängen, Helm und Stiefel abwischen", "Essen und Trinken, danach Hände waschen und Bekleidung ausziehen", "Bekleidung ablegen und reinigen, duschen bzw. Hände und Gesicht waschen"],
    ["Wassergeschwindigkeit in Flussläufen", "Ein Leitwerk", "Absenken des Wasserspiegels"],
    ["ca. 600 kg", "ca. 300 kg", "ca. 900 kg"],
    ["Deckverband", "Druckverband", "Festhalteverband"],
    ["Ruderbord & Stangenbord", "Heckbord & Vorderbord", "Backbord & Steuerbord"],
    ["Rot und grün", "Blau und gelb", "Schwarz und weiß"],
    ["Abwarten bis es zu bluten aufhört", "Blutstillung durch Fingerdruck (keimfreie Wundauflage)", "So schnell wie möglich ins Krankenhaus fahren"],
    ["Den Unterkühlten sofort zu einem warmen Ofen setzen", "Unterkühlten abtrocknen und massieren", "Betroffenen nasse Kleidung entfernen, warme Kleidung anziehen und zudecken"],
    ["Flachwasserboot, Feuerwehrrettungsboot, Arbeitsboot", "Floß, Segelboot, Motorboot, Feuerwehrschiff", "Die Feuerwehr hat keine genormten Wasserfahrzeuge"],
    ["Gegensteuern", "Strömung, Kehren, Wirbel, Untiefen, Wellenschlag", "Erhöhte Brandgefahr"],
    ["Kann zur Schwellung der Atemwege und somit zu Atembeschwerden führen", "Der Betroffene kann starke Schmerzen im Hals- und Rachenbereich haben", "Der Betroffene hat großen Durst und Hunger"]
  ])
  richtig  = signal(["B", "A", "B", "C", "A", "A", "B", "C", "A", "C", "B", "A", "C", "A", "B", "C", "A", "A", "B", "B", "C", "A", "B", "A", "C", "A", "B", "C", "B", "C", "A", "A", "B", "C", "A", "B","C", "A", "B", "A"])

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
