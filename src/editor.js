var Editor = function(initialVocabulary) {
  this.vocabulary = initialVocabulary || [];
};

Editor.prototype.extendVocabulary = function(vocabulary) {
  this.vocabulary = this.vocabulary.concat(vocabulary);
};
