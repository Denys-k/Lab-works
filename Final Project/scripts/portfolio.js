function readMore(project) {
    let dots = document.querySelector(`.card[data-project="${project}"] .dots`);
    let moreText = document.querySelector(`.card[data-project="${project}"] .more`);
    let btnText = document.querySelector(`.card[data-project="${project}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less";
        moreText.style.display = "inline";
    }
}

//document query selector