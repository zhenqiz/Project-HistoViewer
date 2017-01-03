/**
 * Created by zhenqiz on 11/11/2016.
 */

var viewer = OpenSeadragon({
    id: 'openseadragon1',
    prefixUrl: "scripts/images/",
    showNavigator:  true,
    tileSources: {
        Image: {
            xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
            Url: './maple0002_files/',
            Format: 'jpg',
            Overlap: '1',
            TileSize: '254',
            ServerFormat: 'Default',
            Size: {
                Height: '768',
                Width: '1291'
            }
        }
    }
});

viewer.initializeAnnotations();

function showAnnotation(){
  document.write(JSON.stringify(viewer.annotations.get()));
};

(function() {
    "use strict";
    var JsonCsv = {
      init: function() {
        var downloadButton = document.getElementsByClassName('download')[0];
        downloadButton.addEventListener('click', function() {
          var data = viewer.annotations.get();
          if (data === '') {
            return;
          }
          JsonCsv.JSONToCSVConvertor(data, false);
        });
      },
      JSONToCSVConvertor: function(JSONData, ShowLabel) {
        var CSV = JSON.stringify(JSONData) + '\r\n';
        if (ShowLabel) {
          var row = "";
          for (var index in arrData[0]) {
            row += index + ',';
          }
          row = row.slice(0, -1);
          CSV += row + '\r\n';
        }
        /*for (var i = 0; i < arrData.length; i=i+2) {
          var row =  JSON.stringify(arrData[i]) + ',' + JSON.stringify(arrData[i+1]) ;
          CSV += row + '\r\n';
        }*/

        if (CSV == '') {
          console.log("Invalid data");
          return;
        }
        var fileName = "Result";
        if (JsonCsv.VersionCheck()) {
          var DWindow = window.open();
          DWindow.document.write('sep=,\r\n' + CSV);
          DWindow.document.close();
          DWindow.document.execCommand('SaveAs', true, fileName + ".csv");
          DWindow.close();
        } else {
          var uri = 'data:application/csv;charset=utf-8,' + encodeURI(CSV);
          var link = document.createElement("a");
          link.href = uri;
          link.style = "visibility:hidden";
          link.download = fileName + ".csv";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      },
      VersionCheck: function() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
        {
          return true;
        } else { // If another browser,
          return false;
        }
        return false;
      },
      main: function() {
        JsonCsv.init();
      }
    };
    JsonCsv.main();
})();

