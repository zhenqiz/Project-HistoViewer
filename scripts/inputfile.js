var control = document.getElementById("csv_file");
control.addEventListener("change", function readAsText(){
        var file = this.files[0];
        var reader = new FileReader();
        // Read files
        reader.readAsText(file);
        reader.onload = function(){
            viewer.annotations.set(JSON.parse(this.result));
        }
}, false);
