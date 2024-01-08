# Code Assessment

## Anmerkungen
Ich habe zur Bearbeitung des Assessments JavaScript benutzt.
Da ich mit der Programmierung dieser Art von Applikationen mittels JS gut vertraut bin, stellt es meine Fähigkeiten deutlich besser dar. Gerne freue ich mich jedoch, auch meine Python Kentnisse auszubauen, die im LLM-Bereich wahrscheinlich eher gefragt sind.

Das Passwort wird durch bcrypt verschlüsselt bevor ich es hinterlege. Ebenfalls mounte ich eine Partition, damit die Daten auch bei Container Neustart erhalten bleiben.

Server-seitig benutze ich Express.js (Port: 3000) für den Webserver und MongoDB (Mapped auf Port: 27018) als Database. Beide Prozesse werden über `docker compose up --build` gebaut und gestartet und können daraufhin genutzt werden.

Für das Testen benutze ich die Assertion Library chai mit Mocha als Test Runner. Integration von API-Tests waren die größten Schwerpunkte, da es auch hier einige Fehlermeldungen gab. Diese konnte ich allerdings gut überwinden und habe angefangen, entsprechende Tests zu schreiben. 
Aktuell bin ich dabei, das Readme.md zu überarbeiten und werde nicht alle Tests fertigstellen können.
Dir vorhanden Tests können im root directory über `npm test` gestartet werden und erfüllen aktuell den Anforderungen. Die übrigen API-Tests würde ich in einem ähnlichen Schema schreiben. Ich möchte aber vermeiden, dass ich eventuell doch die Zeit vergesse.

Ich war anfangs etwas über die Fehlermeldung von `docker-compose` verwundert. Es stellte sich heraus, dass mit Docker Compose V2 der Bindestrich wegfällt und ich meine Zeit für die Aufgaben nutzen wollte, statt meine Version downzugraden.

Die .env Datei, die das JWT_SECRET enthält ist für die Tokenübermittlung beim Login notwendig, habe diese aber aus dem öffentlichen Repo mittels .gitignore weggelassen. Sie befindet sich aber in der .zip Datei.

Ansonsten habe ich alle Routen mittels `curl` Befehl und auch durch die VSCode Extension Thunder Client getestet und sie funktionieren wie erwartet. Auch die entsprechend gesicherten Routen funktionieren nur bei Nutzung des JWTs.