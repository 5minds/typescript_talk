# Sketch

* Präsentation in Google Presentation
* Code-Beispiele hier im Repo
* Talk auf 20 Minuten inklusive Code-Beispielen planen
  * Fragen erst am Ende zulassen

* Gleiches Beispiel für alle Fälle im Talk
  * Jede Etappe als NPM Paket publishen und via package die Verwendung demonstrieren

## Themen

* Einführung in TypeScript ---> 9 Minuten
  * Anfangen mit Code in JavaScript und an dem Beispiel migrieren zu TypeScript (2 Minuten)
  * Benefits:
    * Typsicherheit (1 Minute)
    * IntelliSense (1 Minute)
  * Unterschiede package.json -> Überleitung zu Modulsystem
    * typings (2 Minute)
    * Auflösealgorithmus (3 Minuten)
* Austauschbarkeit ---> 5 Minuten
  * Beispiele mit addict-ioc vorbereiten aber nur am Rande erwähnen
  * Beispiel mit Klasse, die im Constructor Dependencies erwartet (1 Minute)
    * Beispiel anfangen mit Klassenreferenzen (keine Interfaces)
      * daran zeigen, dass Austauschbarkeit nicht funktioniert ohne den Code zu ändern (1 Minute)
      * anschließend harte Referenz auf Klasse gegen Interface tauschen (3 Minuten)
* Contracts (sollte hinter Austauschbarkeit kommen, da Contracts als eigene Pakete erst mit zergliederten Repositories Sinn machen [siehe @essential-projects]) (REST Minuten)
  * Zergliederung in Implementierung und Schnittstelle (als eigene Repositories)
  * Ermöglicht die Versionierung von Schnittstellen unabhängig von der Implementierung
* Gulptraum
  * Nutzung mehrerer Modulsystem parallel
  * Generieren von Typings
  * Generieren von JSON Schemas