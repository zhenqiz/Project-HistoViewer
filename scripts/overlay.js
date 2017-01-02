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
