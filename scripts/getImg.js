const getImageAnimals = function (pet) {
  fetch(`https://api.pexels.com/v1/search?query=` + pet, {
    headers: {
      Authorization: `qgnWuWcAde1Msu9kcQemIkpsAnuxaqjx5GWxCNcAR3iuaxh7fbsluHaX`,
    },
  })
    .then((response) => {
      console.log("Response", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("ERRORE");
      }
    })
    .then((data) => {
      console.log("Foto da PEXELS", data);
      const allTheDogs = document.querySelectorAll(`.card img`);
      console.log(allTheDogs);
      for (let i = 0; i < allTheDogs.length; i++) {
        allTheDogs[i].setAttribute(`src`, data.photos[i].src.small);
      }

      const allThe9Mins = document.querySelectorAll(".card small");
      for (let i = 0; i < allThe9Mins.length; i++) {
        allThe9Mins[i].innerText = data.photos[i].id;
      }
    })
    .catch((err) => {
      console.log(`ERRORE`, err);
    });
};

const loadFirst = document.getElementById("load-img-first");
loadFirst.addEventListener(`click`, () => {
  getImageAnimals(`hamsters`);
});

const loadSecond = document.getElementById(`load-img-secondary`);
loadSecond.addEventListener(`click`, () => {
  getImageAnimals(`tigers`);
});

const myForm = document.getElementById(`search`);
const input = document.getElementById(`custom`);

myForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  getImageAnimals(input.value);
});
