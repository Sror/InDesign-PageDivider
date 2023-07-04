var doc = app.activeDocument;
var docWidth = doc.documentPreferences.pageWidth;
var docHeight = doc.documentPreferences.pageHeight;

// Prompt voor het invoeren van het aantal horizontale en verticale lijnen
var horizontalFolds = prompt("Door hoeveel wil je de pagina horizontaal <---> verdelen?:", "4");
var verticalFolds = prompt("Door hoeveel wil je de pagina verticaal verdelen?:", "4");

var numHorizontalFolds = parseInt(horizontalFolds);
var numVerticalFolds = parseInt(verticalFolds);

var horizontalFoldWidth = docWidth / numHorizontalFolds;
var verticalFoldHeight = docHeight / numVerticalFolds;

// Verticale lijnen
for (var i = 1; i < numHorizontalFolds; i++) {
  var lineX = i * horizontalFoldWidth;

  for (var j = 0; j < doc.pages.length; j++) {
    var page = doc.pages[j];
    var line = page.rectangles.add({
      geometricBounds: [0, 0, docHeight, 1],
      fillColor: "Magenta",
      strokeColor: "None",
      strokeWeight: 0.3,
      strokeTint: 100
    });
    line.move(undefined, [lineX, 0]);
    line.name = "PageDivider";
  }
}

// Horizontale lijnen
for (var k = 1; k < numVerticalFolds; k++) {
  var lineY = k * verticalFoldHeight;

  for (var l = 0; l < doc.pages.length; l++) {
    var page = doc.pages[l];
    var line = page.rectangles.add({
      geometricBounds: [0, 0, 1, docWidth],
      fillColor: "Magenta",
      strokeColor: "None",
      strokeWeight: 0.3,
      strokeTint: 100
    });
    line.move(undefined, [0, lineY]);
    line.name = "PageDivider";
  }
}
