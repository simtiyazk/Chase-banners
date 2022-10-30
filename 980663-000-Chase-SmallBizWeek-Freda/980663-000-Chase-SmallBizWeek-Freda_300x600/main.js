var tl = new TimelineMax();

window.onload = function() {
    initAd();
}

function initAd() {
    
    //---------- START ANIMATION ------------
    tl.set("#banner", { opacity: 1, display: "block" });

    tl
      
      .from('#text1', 0.5, { alpha: 0, x: -300, ease:Quad.easeOut }, 0.5)
      .from('#text1_1', 0.5, { alpha: 0, x: -300, ease:Quad.easeOut }, 1.5)

      .from([logo, cta], 0.5, { alpha: 0, y: 600, ease:Quad.easeOut }, 2)
      .to([text1,text1_1], 0.5, { alpha: 0, x: 300, ease:Quad.easeIn }, 3.5)

      .from('#text2', 0.5, { alpha: 0, x: -300, ease:Quad.easeOut }, 4)
      .from('#text2_1', 0.5, { alpha: 0, x: -300, ease:Quad.easeOut }, 5)
      .to([text2,text2_1], 0.5, { alpha: 0, x: 300, ease:Quad.easeIn }, 7)
      
      .from('#text3', 0.5, { alpha: 0, x: -300, ease:Quad.easeOut }, 7.5)
      .from('#text3_1', 0.5, { alpha: 0, x: -300, ease:Quad.easeOut }, 8.5)

}