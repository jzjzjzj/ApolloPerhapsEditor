var PerhapsEditor = function() {
  Editor.call(this, [
    'iespējams',
    'droši vien',
    'laikam',
    'varbūt',
    'domājams',
    'bezmaz',
    'kaut vai',
    'teju',
    'gandrīz',
    'gan jau',
    'puslīdz',
    'daudzmaz'
  ]);

  this.brain = /[^-,;:\.](\s)[^-0]/g;
};

PerhapsEditor.prototype.contemplateBlankWall = function() {};

PerhapsEditor.prototype.getRevelation = function() {
  this.contemplateBlankWall();

  return this.vocabulary[Math.floor((Math.random() * this.vocabulary.length))];
};

PerhapsEditor.prototype.readText = function(text) {
  var notes = [];
  var confusion;

  while(confusion = this.brain.exec(text)) {
    notes.push(confusion.index);
  }

  return notes;
};

PerhapsEditor.prototype.rewriteText = function(text, notes, revelation) {
  var randomNote = notes[Math.floor((Math.random() * notes.length))]+1;
  var begining = text.substr(0, randomNote) + ', ';
  var ending = ',' + text.substr(randomNote);

  return begining + revelation + ending;
};

PerhapsEditor.prototype.improveText = function(text) {
  var notes = this.readText(text);
  var revelation = this.getRevelation();

  return (notes.length && revelation)
    ? this.rewriteText(text, notes, revelation)
    : text;
};
