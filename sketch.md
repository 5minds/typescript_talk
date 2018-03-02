# Sketch

* Präsentation in Google Presentation
* Code-Beispiele hier im Repo
* Talk auf 20 Minuten inklusive Code-Beispielen planen
  * Fragen erst am Ende zulassen

* Gleiches Beispiel für alle Fälle im Talk
  * Jede Etappe als NPM Paket publishen und via package die Verwendung demonstrieren

## Themen

* Einführung in TypeScript ---> 9 Minuten
  * 01_1/2 Anfangen mit Code in JavaScript und an dem Beispiel migrieren zu TypeScript (2 Minuten)
  * 01_3 Benefits:
    * Typsicherheit (1 Minute)
    * IntelliSense (1 Minute)
  * 01_4 Transpilierung (1 Minute)
    * tsconfig
    * Übergang zum Thema Modulsystem
  * 01_4 Unterschiede package.json -> Überleitung zu Modulsystem
    * typings (2 Minute)
    * Auflösealgorithmus (3 Minuten)
* Austauschbarkeit ---> 5 Minuten
  * Beispiele mit addict-ioc vorbereiten aber nur am Rande erwähnen
  * Beispiel mit Klasse, die im Constructor Dependencies erwartet (1 Minute)
    * 02_1 Beispiel anfangen mit Klassenreferenzen (keine Interfaces)
      * daran zeigen, dass Austauschbarkeit nicht funktioniert ohne den Code zu ändern (1 Minute)
      * 02_2 anschließend harte Referenz auf Klasse gegen Interface tauschen (3 Minuten)
* Contracts (sollte hinter Austauschbarkeit kommen, da Contracts als eigene Pakete erst mit zergliederten Repositories Sinn machen [siehe @essential-projects]) (REST Minuten)
  * 02_3 Zergliederung in Implementierung und Schnittstelle (als eigene Repositories)
  * Ermöglicht die Versionierung von Schnittstellen unabhängig von der Implementierung
* Gulptraum
  * Nutzung mehrerer Modulsystem parallel
  * Generieren von Typings
  * Generieren von JSON Schemas