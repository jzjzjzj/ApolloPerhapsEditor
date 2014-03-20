var apolloEditor = new PerhapsEditor();
var suspicious = [
  'h1.article-title > span',
  'h2.article-title > a:first-child'
];

$(suspicious.toString()).text(function(i, suspiciousText) {
  return apolloEditor.improveText(suspiciousText);
});

$('#header-logo > a').css(
  'background-image',
  'url("' + chrome.extension.getURL('img/apolol-header-lolgo.png') + '")'
);
