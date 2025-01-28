// articles sections
function addArticles(articles) {
  const articleDiv = document.createElement("div");
  articleDiv.classList.add("col-md-4");
  articleDiv.setAttribute("data-category", `${articles.category}`);
  articleDiv.innerHTML = `
        <div class="card mb-4 shadow-sm" >
          <div class="card-header text-center" style="font-weight:bold;>
            <h5 class="my-0">${articles.title}</h5>
            
          </div>
          <div class="card-body d-flex flex-column align-items-center">
          ${
            articles.image
              ? `<img src="${articles.image}" alt="${articles.title}">`
              : ""
          }
            <p class="card-text text-center">${articles.content}</p>
            <a href="${
              articles.href
            }" target="_blank" class="btn btn-primary text-center" style="max-width:200px;" >Подробнее</a>
          </div>
        </div>
      `;

  document.querySelector(".article__items").appendChild(articleDiv);
  document.querySelector(".article__items").style.display = "flex";
  document.querySelector(".article__items").style.flexWrap = "wrap";
  document.querySelector(".article__items").style.justifyContent =
    "space-evenly";
  document.querySelector(".article__items").style.alignItems = "center";
  document.querySelector(".article__items").style.gap = 10 + "px";
}

export default addArticles;


