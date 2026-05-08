let price = {
    monthly:[10, 20, 30],
    yearly: [100, 200, 300]
};

let toggle = document.getElementById("toggle")
let priceElement = document.querySelector(".price")

toggle.addEventListener("change", function() {
    let type = toggle.checked ? "yearly" : "monthly"

    priceElement.forEach((el, index) => {
        el.textContent = `${prices[type][index]}`
    })
});