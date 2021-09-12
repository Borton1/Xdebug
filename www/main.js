$(document).on("click", ".show-alert", function() {
    // место где буду запрашивать страницу
    let html;
    // xhr.open('GET' , 'form.php?' + 'ourForm_inp=' + userInput);
    // var promise = $.ajax('http://localhost:8094/content.html' );
    // html = promise.then(function(response){
    //     return response.data;});
    html = '<form name="ourForm">' +
        '<input type="text" name="ourForm_inp">' +
        '<input type="text" name="ourForm_np">' +
        '</form>';
    bootbox.confirm({
        message:html,
        title: "Custom label",
        callback: function (result) {
            var servResponse = document.querySelector('#response');
            userInput = encodeURIComponent(result);
            var xhr = new XMLHttpRequest();
            // xhr.open('GET' , 'form.php?' + 'ourForm_inp=' + userInput);
            xhr.open('POST', 'form.php');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    servResponse.textContent = xhr.responseText;
                }
            }
            xhr.send('ourForm_inp=' + userInput);
        }
    })
});