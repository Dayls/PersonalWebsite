initProjects();
localize(window.navigator.language);

function localize (language)
{
  if (['ru', 'en'].includes(language)) {
    let lang = ':lang(' + language + ')';
    let hide = '[lang]:not(' + lang + ')';
    document.querySelectorAll(hide).forEach(function (node) {
      node.style.display = 'none';
    });
    let show = '[lang]' + lang;
    document.querySelectorAll(show).forEach(function (node) {
      node.style.display = 'block';
    });
  }
}
