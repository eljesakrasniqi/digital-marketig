const form = document.getElementById("form")

function toLocalStorage(e) {
    e.preventDefault();
    const fd = new FormData(form)
    console.log(fd);
}

form.addEventListener("submit", toLocalStorage)