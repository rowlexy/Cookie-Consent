const modal = document.getElementById("modal")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const modalInner =  document.getElementById("modal-inner")
const closeBtn = document.getElementById("modal-close-btn")
const declineBtn = document.getElementById("decline-btn")
const choiceBtn = document.getElementById("modal-choice-btns")

setTimeout(function() {
    modal.style.display = "inline"
}, 1500)

declineBtn.addEventListener("mouseover", function() {
    choiceBtn.classList.toggle("reverse")
})

consentForm.addEventListener("submit", function(e) {
    e.preventDefault()

    const consentFormInput = new FormData(consentForm)
    const fullName = consentFormInput.get("fullName")

    setTimeout(function() {
        modalText.innerHTML = `<div class="modal-inner-loading">
                                <img src="images/loading.svg" class="loading">
                                <p id="uploadText">
                                    Uploading your data to the dark web....
                                </p>
                                </div>`
    }, 1500)

    setTimeout(function() {

        document.getElementById("uploadText").innerText = "Making the exchange....."
    
    }, 3000)

    setTimeout(function() {
        modalInner.innerHTML =    `
                                    <h2>Thanks <span class="modal-display-name">${fullName}</span>, you Sucker!</h2>
                                    <p>You have sold the rights to your eternal soul.</p>
                                    <div class="idiot-gif">
                                        <img src="images/pirate.gif">
                                    </div>`
                    closeBtn.disabled = false
    }, 4500)
})

closeBtn.addEventListener("click", function() {
    modal.style.display = "none"
})
