'use strict';

window.onload = function() {
  var circle = document.getElementById('circle');
  var cat = document.getElementById('cat');
  var textBox = document.getElementById('text-box');
  var text = document.getElementById('text');
  var arrow = document.getElementById('arrow');
  
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
    left: -100,
    delay: 0.2
  });

};