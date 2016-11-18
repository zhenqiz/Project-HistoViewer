var control = document.getElementById("csv_file");
control.addEventListener("change", function readAsText(){
        var file = this.files[0];
        var reader = new FileReader();
        // Read files
        reader.readAsText(file);
        reader.onload = function(){
            var result = document.getElementById("result");
            // Show files
            result.innerHTML=this.result;
        }
}, false);
