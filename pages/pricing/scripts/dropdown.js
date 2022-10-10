var Qsubtitle = document.querySelectorAll(".question-dropdown-subtitle");
let intervalId;
Qsubtitle.forEach(item => {
    item.style.display = "none";
})

document.querySelectorAll(".question-dropdown-content").forEach(e => {
    e.addEventListener("click", e => {
        const data = e.currentTarget.dataset.path;
        document.querySelectorAll(".question-dropdown-subtitle").forEach(e => {
            if (!document.querySelector(`[data-target=${data}]`).classList.contains("dropdown-item-open")) {
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${data}]`).classList.add("dropdown-item-open");
                    if (!document.querySelector(`[data-img=${data}]`).classList.contains("minus")) {
                        document.querySelector(`[data-img=${data}]`).classList.add("minus")
                        document.querySelector(`[data-img=${data}]`).attributes.src.nodeValue = "./pricing/img/minus_circle.png"
                    }
                }, 0)
            }

            if (document.querySelector(`[data-target=${data}]`).classList.contains("dropdown-item-open")) {
                clearInterval(intervalId);
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${data}]`).classList.remove("dropdown-item-open");
                    if (document.querySelector(`[data-img=${data}]`).classList.contains("minus")) {
                        document.querySelector(`[data-img=${data}]`).classList.remove("minus")
                        document.querySelector(`[data-img=${data}]`).attributes.src.nodeValue = "./pricing/img/plus_circle.png"
                    }
                }, 0)

            }
        })

    })
})
