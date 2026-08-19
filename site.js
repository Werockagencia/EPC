(function () {
  'use strict';
  document.querySelectorAll('.acordeon-pub-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      b.closest('.acordeon-pub').classList.toggle('abierto');
    });
  });
})();
