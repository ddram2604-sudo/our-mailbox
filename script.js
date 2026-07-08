const openButton = document.getElementById("openButton");

openButton.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "mailbox.html";
    }, 500);

});
