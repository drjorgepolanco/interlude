window.onload = function() {
  var circle  = document.getElementById('circle'),
      cat     = document.getElementById('cat'),
      textBox = document.getElementById('text-box'),
      text    = document.getElementById('text'),
      arrow   = document.getElementById('arrow')
  
  TweenLite.from(circle, 0.4, {
    scale: 0
  });
  
  TweenLite.from(cat, 0.5, {
    scale: 0
  });
  
  TweenLite.from(textBox, 0.5, {
    width: 0, 
    delay: 0.2,
    borderBottom: 0,
    borderTop: 0,
    borderRight: 0
  });

  TweenLite.from(text, 0.5, {
    x: -100,
    scale: 0,
    delay: 0.2
  });

  TweenLite.from(arrow, 0.4, {
    scale: 0,
    top: 290,
    left: 440,
    delay: 0.4
  });

  TweenMax.to(arrow, 0.3, {
    delay: 1,
    top: 290,
    left: 440,
    repeat: -1,
    yoyo: true
  });

  document.getElementById('container').onclick = function() {
    TweenMax.killAll();
    TweenLite.to(this, 0.5, {opacity: 0});
  }
};