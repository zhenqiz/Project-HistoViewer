/**
 * Created by zhenqiz on 11/11/2016.
 */
var viewer = OpenSeadragon({
    id: "openseadragon1",
    prefixUrl: "scripts/images/",
    tileSources:{
        Image: {
            xmlns: "http://schemas.microsoft.com/deepzoom/2009",
            Url: "./maple0002_files/",
            Format: "jpg",
            Overlap: "1",
            TileSize: "256",
            Size: {
                Height: "768",
                Width:  "1291"
            }
        }
    }
});
