(function(){
  var t=document.querySelector('.nav-toggle'),n=document.querySelector('.nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});}
  document.querySelectorAll('[data-expand]').forEach(function(b){
    b.addEventListener('click',function(){var open=b.dataset.expand==='all';
      document.querySelectorAll('details.unit').forEach(function(d){d.open=open});});
  });
  function openHash(){var id=decodeURIComponent(location.hash.slice(1));if(!id)return;
    var el=document.getElementById(id);if(el&&el.tagName==='DETAILS'){el.open=true;}}
  window.addEventListener('hashchange',openHash);openHash();
})();
