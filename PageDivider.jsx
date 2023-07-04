var doc = app.activeDocument;
var docWidth = doc.documentPreferences.pageWidth;
var docHeight = doc.documentPreferences.pageHeight;

var horizontalFolds = prompt("Door hoeveel wil je de pagina horizontaal <---> verdelen?:", "4");
var verticalFolds = prompt("Door hoeveel wil je de pagina verticaal verdelen?:", "4");

var numHorizontalFolds = parseInt(horizontalFolds);
var numVerticalFolds = parseInt(verticalFolds);

var horizontalFoldWidth = docWidth / numHorizontalFolds;
var verticalFoldHeight = docHeight / numVerticalFolds;

for (var i = 1; i < numHorizontalFolds; i++) {
  var lineX = i * horizontalFoldWidth;

  var currentPage = doc.pages[doc.layoutWindows[0].activePage.index]; // Gebruik de huidige actieve pagina

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

for (var k = 1; k < numVerticalFolds; k++) {
  var lineY = k * verticalFoldHeight;

  var currentPage = doc.pages[doc.layoutWindows[0].activePage.index]; // Gebruik de huidige actieve pagina

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
