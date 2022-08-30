const box = document.querySelectorAll(".box");

box.forEach((container) => {
  //double click
  container.addEventListener("dblclick", () => {
    if (container.classList.length === 2) {
      container.innerHTML = `${container.id}`;
      container.classList.remove("active");
    } else {
      container.innerHTML = `<img src="./img/x-svgrepo-com.svg" class="completed"/>`;
      container.classList.add("active");
    }
  });

  //click
  container.addEventListener("click", () => {
    getData(container.id);
  });
});

function getData(id) {
  const info = document.querySelector(".text");
  basicos.forEach((problema) => {
    if (problema.id == id) {
      info.innerHTML = `<p class="info">${problema.descripcion}</p>`;
    }
  });
}
