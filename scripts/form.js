window.addEventListener("load", function() {
    console.log("here")
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
    var honey = document.querySelector('[name="contact_me_by_fax_only"]').value;
    console.log(honey, "honey");
    form.addEventListener("submit", function(e) {
        console.log("submit")
        console.log("e", e)

        e.preventDefault();
        var valid = pristine.validate();
        console.log("valid", valid)
        console.log("honey", honey, typeof(honey))

        if (valid && honey === '1') {
            const data = new FormData(form);
            const action = e.target.action;
            console.log("data", "action")

            fetch(action, {
                    method: 'POST',
                    body: data,
                })
                .then(() => {
                    console.log("then")
                    form.reset();
                    window.open("https://timserckn.github.io/01_Kyocera_LP/integrations/tk.html")
                    window.open("https://ftp.kyonet.fr/public/file/SGEshd-6Q0eswNQ2t1kbUw/KYO_Production_printing_FR_BD.pdf", "_blank")
                })
        }
    });
});