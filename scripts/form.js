window.addEventListener("load", function() {
    const form = document.getElementById('form');
    let defaultConfig = {
        // class of the parent element where the error/success class is added
        classTo: 'form_fieldset',
        errorClass: 'has-danger',
        successClass: 'has-success',
        // class of the parent element where error text element is appended
        errorTextParent: 'form_fieldset',
        // type of element to create for the error text
        errorTextTag: 'div',
        // class of the error text element
        errorTextClass: 'text-help'
    };

    var pristine = new Pristine(form, defaultConfig);

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        var valid = pristine.validate();
        if (valid) {
            const data = new FormData(form);
            const action = e.target.action;

            fetch(action, {
                    method: 'POST',
                    body: data,
                })
                .then(() => {
                    window.open("https://ftp.kyonet.fr/public/file/SGEshd-6Q0eswNQ2t1kbUw/KYO_Production_printing_FR_BD.pdf", "_blank")
                })
        }
    });
});