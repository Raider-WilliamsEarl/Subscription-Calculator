//**Select Elements**//
//Global Variables//
const subTypeElement = document.querySelector("#subscription");
const subDurationElement = document.querySelector("#months");
const result = document.querySelector(".result");
let subType = "basic";
let subDuration = 1;

//**Event Listeners**//
subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv()
});
subDurationElement.addEventListener("change", function (e) {
    subDuration = Number(e.target.value);
    updateSubscriptionDiv()
});

//**Calculation Function**//
const updateSubscriptionDiv = function() {
    let monthlyCost = 5;
    if (subType === "standard") {
        monthlyCost = 7;
    } else if (subDurationElement === "premium") {
        monthlyCost = 10;
    }
    const total = subDuration * monthlyCost;
    result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}`;
};