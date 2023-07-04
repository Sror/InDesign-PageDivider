var doc = app.activeDocument;
var docWidth = doc.documentPreferences.pageWidth;
var docHeight = doc.documentPreferences.pageHeight;

// Sla de actieve pagina op
var activePage = doc.layoutWindows[0].activePage;

// Prompt voor het invoeren van het aantal horizontale en verticale lijnen
var horizontalFolds = prompt("Door hoeveel wil je de pagina horizontaal <---> verdelen?:", "4");
var verticalFolds = prompt("Door hoeveel wil je de pagina verticaal verdelen?:", "4");

var numHorizontalFolds = parseInt(horizontalFolds);
var numVerticalFolds = parseInt(verticalFolds);

var horizontalFoldWidth = docWidth / numHorizontalFolds;
var verticalFoldHeight = docHeight / numVerticalFolds;

// Activeer de oorspronkelijk geselecteerde pagina
doc.layoutWindows[0].activePage = activePage;

// Verticale lijnen
for (var i = 1; i < numHorizontalFolds; i++) {
  var lineX = i * horizontalFoldWidth;

  var currentPage = doc.layoutWindows[0].activePage; // Gebruik de oorspronkelijk geselecteerde pagina

  var line = currentPage.rectangles.add({
    geometricBounds: [0, 0, docHeight, 1],
    fillColor: "Magenta",
    strokeColor: "None",
    strokeWeight: 0.3,
    strokeTint: 100
  });
  line.move(undefined, [lineX, 0]);
  line.name = "PageDivider";
}

// Horizontale lijnen
for (var k = 1; k < numVerticalFolds; k++) {
  var lineY = k * verticalFoldHeight;

  var currentPage = doc.layoutWindows[0].activePage; // Gebruik de oorspronkelijk geselecteerde pagina

  var line = currentPage.rectangles.add({
    geometricBounds: [0, 0, 1, docWidth],
    fillColor: "Magenta",
    strokeColor: "None",
    strokeWeight: 0.3,
    strokeTint: 100
  });
  line.move(undefined, [0, lineY]);
  line.name = "PageDivider";
}
