fetch("article.html")
  .then(function (response) {
    return response.text()
  })
  .then(function (html) {
    const parser = new DOMParser();
    const article = parser.parseFromString(html, "text/html");
    const contents = Array.from(article.body.children);
    const doc = document.getElementById("article");

    contents.forEach(content => {
      doc.appendChild(content);
    })
  })
