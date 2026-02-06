import {Component, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-erprobungsspiel1',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './erprobungsspiel1.html',
  styleUrl: './erprobungsspiel1.css',
})

export class Erprobungsspiel1 {
  // Alle Fragen, Antwortmöglichkeiten und die Lösungen
  fragen = signal([
    "Wie heißt der Feuerwehrgruß?",
    "Warum musst du bei allen Zusammenkünften und Tätigkeiten die Bekleidung der Feuerwehrjugend tragen?",
    "Wozu dient der Schlauchträger?",
    "Welche Länge hat ein genormter B-Druckschlauch?",
    "Was zählt zur Bekleidung der Feuerwehrjugend?",
    "Dürfen Mitglieder der Feuerwehrjugend zu Einsätzen ausrücken?",
    "Wozu dient der Kupplungsschlüssel?",
    "Wie viele Ausgänge hat ein Verteiler?"
  ])
  antworten = signal([
    ["Gut Wehr","Grüß Gott","Griaß di"],
    ["Damit es schöner aussieht","Weil jederzeit der Kommandant kommen kann","Zum persönlichen Schutz vor allgemeinen Gefahren"],
    ["Zum Tragen von doppelt gerollten Druckschläuchen","Zum Zusammenbinden verschiedener Gegenstände","Zum Verlegen von A-Saugschläuchen"],
    ["15m","10m","20m"],
    ["Dienstbluse/Dienstblouson, Jeans, Hosengürtel, Diensthemd grau/PoloShirt dunkelblau, Kälte- und Nässeschutzjacke, schwarze Socken/Stutzen, bunte Turnschuhe, Schirmmütze/Schutzhelm","Dienstbluse/Dienstblouson, Diensthose Hosengürtel, Diensthemd grau/PoloShirt dunkelblau, Kälte- und Nässeschutzjacke, schwarze Socken/Stutzen, dunkle Schuhe, Schirmmütze/Schutzhelm","Dienstbluse / Dienstblouson, Diensthose Hosengürtel, Freizeitshirt, Kälte- und Nässeschutzjacke schwarze Socken / Stutzen, Turnschuhe, Barett / Schirmmütze / Schutzhelm"],
    ["Ja, zu Menschen- oder Tierrettung","Mitglieder der Feuerwehrjugend dürfen nicht zu Einsätzen ausrücken","Nur zu Kleinbränden"],
    ["Zum Aufsperren der Feuerwehrhauses","Zum Kuppeln von Saug- und Druckschläuchen","Zum Versperren der Geräteräume in denen die Schläuche gelagert sind."],
    ["2","3","4"]
  ]);
  richtig  = signal(["A","C","A","C","B","B","B","B"])

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
  }

  // Antworten für Text fragen
  spezialantworten = signal(["Hannes", ["Nico", "Anika", "Tobias", "Katharina"]])
  // Speichert antworten aus den Text Fragen
  textAnt = signal("");
  textAnt2 = signal("");
  // Speichert welche Frage richtig beantwortet und welche falsche beantwortet wurde
  style2:boolean[] = [];
  // Überprüft die Textfragen
  fertig2(){
    if(this.textAnt() === "Hannes"){
      this.endErg.set(this.endErg() +1);
      this.style2[0] = true;
    }else {
      this.style2[0] = false;
    }
    if(this.spezialantworten()[1].includes(this.textAnt2())){
      this.endErg.set(this.endErg() +1);
      this.style2[1] = true;
    } else {
      this.style2[1] = false;
    }
  }
}
