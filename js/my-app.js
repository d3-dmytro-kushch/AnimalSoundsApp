// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1');
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3');
var view4 = myApp.addView('#view-4');

if( window.plugins && window.plugins.NativeAudio ) {

    // Preload audio resources
    window.plugins.NativeAudio.preloadComplex( 'music', 'audio/music.mp3', 1, 1, 0, function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });

    window.plugins.NativeAudio.preloadSimple( 'click', 'audio/click.mp3', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });


    // Play
    window.plugins.NativeAudio.play( 'click' );
    window.plugins.NativeAudio.loop( 'music' );


    // Stop multichannel clip after 60 seconds
    window.setTimeout( function(){

        window.plugins.NativeAudio.stop( 'music' );

        window.plugins.NativeAudio.unload( 'music' );
        window.plugins.NativeAudio.unload( 'click' );

    }, 1000 * 60 );
}