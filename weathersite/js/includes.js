function include() {
    let file, xhttp;
    let allElements = document.getElementsByTagName('*'); //get all elements on the page

    for (let i = 0; i < allElements.length; i++) { // process all the elements looking for the custom attribute 'includefile'
        file = allElements[i].getAttribute("includefile");
        if (file) {

            console.log(file); // if the attribute is found, process an AJAX XMLHttpRequest
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {

                console.log("hello?");
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        console.log('200');
                        allElements[i].innerHTML = this.responseText;
                    }
                    if (this.status == 400) {
                        console.log('400');
                        allElements[i].innerHTML = "Page not found!";
                    }
                    allElements[i].removeAttribute('includefile');
                    include();
                }
                xhttp.open('GET', 'includes/' + file, true); // matching file names in includes folder
                xhttp.send();
                return;
            }
        }
    }
}

include(); // initial function call
