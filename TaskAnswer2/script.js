document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("vehicle-form");

    const saveFormData = () => {
        const formData = {
            licensePlate: document.getElementById("license-plate").value,
            vehicleDescription: document.getElementById("vehicle-description").value,
            date: document.getElementById("date").value,
            fullName: document.getElementById("full-name").value,
            passportSeries: document.getElementById("passport-series").value,
            passportNumber: document.getElementById("passport-number").value,
            issuedBy: document.getElementById("issued-by").value,
            issuedDate: document.getElementById("issued-date").value
        };
        localStorage.setItem("formData", JSON.stringify(formData));
    }
    const loadFormData = () =>  {
        const storedData = JSON.parse(localStorage.getItem("formData"));
        if (storedData) {
            document.getElementById("license-plate").value = storedData.licensePlate || "";
            document.getElementById("vehicle-description").value = storedData.vehicleDescription || "";
            document.getElementById("date").value = storedData.date || "";
            document.getElementById("full-name").value = storedData.fullName || "";
            document.getElementById("passport-series").value = storedData.passportSeries || "";
            document.getElementById("passport-number").value = storedData.passportNumber || "";
            document.getElementById("issued-by").value = storedData.issuedBy || "";
            document.getElementById("issued-date").value = storedData.issuedDate || "";
        }
    }

    loadFormData();


    form.addEventListener("input", function () {
        saveFormData();
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const licensePlateField = document.getElementById("license-plate");
        const passportSeriesField = document.getElementById("passport-series");
        const passportNumberField = document.getElementById("passport-number");
        const dateInput = document.getElementById("date");
        const dateIssued = document.getElementById("issued-date");
        const licensePlate = document.getElementById("license-plate").value;
        const passportSeries = document.getElementById("passport-series").value;
        const passportNumber = document.getElementById("passport-number").value;
        const passportSeriesPattern = /^\d{4}$/;
        const passportNumberPattern = /^\d{6}$/;
        const licensePlatePattern = /^[АРСКЕНОВМТABEKMHOPCTYX]{1}\d{3}[АРСКЕНОВМТABEKMHOPCTYX]{2}\d{2,3}$/i;
        const datePattern = /^(0[1-9]|[12][0-9]|3[01])[\/\.](0[1-9]|1[0-2])[\/\.](\d{4})$/;
        const modalSubmit = document.getElementById('modal-submit');


        if (!licensePlate.match(licensePlatePattern)) {
            licensePlateField.classList.add("error");
            return;
        } else {
            licensePlateField.classList.remove("error");
        }

        if (!dateInput.value.match(datePattern)) {
            dateInput.classList.add("error");
            return;
        } else {
            dateInput.classList.remove("error");
        }

        if (!dateIssued.value.match(datePattern)) {
            dateIssued.classList.add("error");
            return;
        } else {
            dateIssued.classList.remove("error");
        }

        if (!passportSeries.match(passportSeriesPattern)) {
            passportSeriesField.classList.add("error");
            return;
        } else {
            passportSeriesField.classList.remove("error");
        }

        if (!passportNumber.match(passportNumberPattern)) {
            passportNumberField.classList.add("error");
            return;
        } else {
            passportNumberField.classList.remove("error");
        }

        modalSubmit.style.display = 'block';
        setTimeout(function() {
            modalSubmit.style.display = 'none';
        }, 3000);

        form.reset();
        localStorage.removeItem("formData");
    });


    const cancelButton = document.getElementById("cancel-button");

    cancelButton.addEventListener("click", function () {
        localStorage.removeItem("formData");
        form.reset();
    });

});
