const linkPage = (id, page) => {
  const link = document.querySelector(id);
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const app = document.querySelector("#app");
    app.innerHTML = page();
  });
};

export default linkPage;
