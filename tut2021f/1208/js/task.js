function SearchBooks() {
  let type = document.querySelector("#searchType").value;
  let word = document.querySelector("#searchWord").value;

  // Google Books APIで検索
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${type}${word}`).then(
      function (response) {
        return response.json();
      }
  ).then(
      function (json) {
        let query = document.querySelector("#showArea");
        query.innerHTML = "";

        console.log(json);

        json.items.forEach(function(object) {
          query.innerHTML += SetBookDataBlock(object.volumeInfo);
        });
      }
  )
}

function SetBookDataBlock(data) {
  let html = `<div class="block">
                <img src="${SetThumbnail(data)}">
                <div>
                  <p>書籍名: ${data.title}</p>
                  <p>著者: ${SetAuthors(data)}</p>
                  <p>概要: ${data.description}</p>
                  <p>ISBN: ${SetISBN(data)}</p>
                </div>
              </div>
              <hr>`;
  return html;
}

// サムネイルデータの存在確認及びHTMLの作成
function SetThumbnail(data) {
  let html = "";
  if(data.imageLinks != null) {
    if(data.imageLinks.thumbnail != null) {
      html = data.imageLinks.thumbnail;
    }
  }

  return html;
}

// 著者データの存在確認及びHTMLの作成
function SetAuthors(data) {
  let html = "";
  let count = 0;
  if(data.authors != null)
  {
    data.authors.forEach(function(author) {
      if(count > 0)
        html += ",　";
      html += author;
      count++;
    });
  }
  else {
    html = "著者の情報が登録されていません。";
  }
  return html;
}

// ISBNデータの存在確認及びHTMLの作成
function SetISBN(data) {
  let html = "";
  if(data.industryIdentifiers != null) {
    data.industryIdentifiers.forEach(function(object) {
      if(object.type === "ISBN_13")
        html += object.identifier;
    });
  }
  if(html === "")
    html += "ISBN_13が登録されていません。";
  return html;
}