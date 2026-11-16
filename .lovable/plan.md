# Club-Stil B

- Nur den Look aller Seiten unter `.noob-theme` ändern. Texte, Links, Formulare, Funktionen und bestehende Weiterleitungen bleiben erhalten. Nichts veröffentlichen.
- Poppins Black und Caveat Brush lokal laden, alte Schriftimporte und Pakete behalten. Club-Überschriften, Script-Zeilen, Karten und Pillen gemäß Vorgabe gestalten.
- Den Club-Introbereich auf Grapefruit umstellen, weiße H1 über eine eigene Variable steuern, das unveränderte Label darunter setzen und das bestehende Logo auf Creme rahmen.
- Datenschutz und Widerruf behalten Überschriften in Satzschreibung. Das vorhandene sprachabhängige Dokumentattribut bleibt erhalten.
- Beide Sprachen auf allen genannten Seiten bei 390, 768 und 1280 px prüfen, inklusive Sonderzeichen, Textkontrast und unverändertem HUMINT-Vorher-Nachher-Vergleich. Weiterleitende Seiten werden an ihrem bestehenden Ziel geprüft.
- Geänderte Dateien, längere Script-Zeilen und den berechneten Kontrast der weißen H1 auf Grapefruit berichten.

## Technische Umsetzung

- Club-Schriftrollen über `--noob-font-headline` und `--noob-font-script` kapseln, einschließlich einer Club-spezifischen Überschreibung von `font-headline`.
- Bestehende Retro-Utilities nur innerhalb `.noob-theme` umgestalten, sodass HUMINT und dessen Anton-Regel unverändert bleiben.
- Tape-Hintergrundklassen an den vorhandenen JSX-Stellen entfernen. Keine Änderungen an Bildern, Metadaten oder E-Mail-Vorlagen.
- Die ausdrücklich gewünschten variablen Größen und negativen Buchstabenabstände werden für diesen Stil verwendet.