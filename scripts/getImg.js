const loadFirst = document.getElementById("load-img-first");

loadFirst.addEventListener(`click`, () => {
  const endpoint = "https://api.pexels.com/v1/search?query=hamsters";

  fetch(endpoint, {
    headers: {
      Authorization: "qgnWuWcAde1Msu9kcQemIkpsAnuxaqjx5GWxCNcAR3iuaxh7fbsluHaX",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("ERRORE", err);
      }
    })
    .then((getImage) => {
      const row = document.getElementById("load-row");
      row.innerHTML += `<div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  src="${getImage.photos[0].url}"
                  class="bd-placeholder-img card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            `;
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
});

const loadSecondary = document.getElementById("load-img-secondary");

loadSecondary.addEventListener(`click`, () => {
  const endpoint = "https://api.pexels.com/v1/search?query=tigers";

  fetch(endpoint, {
    headers: {
      Authorization: "qgnWuWcAde1Msu9kcQemIkpsAnuxaqjx5GWxCNcAR3iuaxh7fbsluHaX",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("ERRORE", err);
      }
    })
    .then((getImage) => {
      const row = document.getElementById("load-row");
      row.innerHTML += `<div class="col-md-4 hideCard">
              <div class="card mb-4 shadow-sm">
                <img
                  src="${getImage.photos[0].url}"
                  class="bd-placeholder-img card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary editButton"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">${getImage.photos[0].id}</small>
                  </div>
                </div>
              </div>
            </div>
            `;
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
});

const edit = document.querySelectorAll(".editButton");

edit.forEach((btn) => {
  btn.innerText = `Hide`;
});

// edit.forEach((btn) => {
//   btn.addEventListener(`click`, (event) => {
//     const hideCard = event.target.closest(".hideCard");
//     hideCard.classlist.add("d-none");
//   });
// });
