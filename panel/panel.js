(function () {
  'use strict';

  // Menu lateral en movil
  var btn = document.querySelector('.panel-menu-btn');
  var nav = document.querySelector('.panel-nav');
  var overlay = document.querySelector('.panel-nav-overlay');
  if (btn && nav && overlay) {
    btn.addEventListener('click', function () {
      nav.classList.add('abierto');
      overlay.classList.add('activo');
    });
    overlay.addEventListener('click', function () {
      nav.classList.remove('abierto');
      overlay.classList.remove('activo');
    });
  }

  // Acordeones (Historial de consumo, Mis cuentas, etc.)
  document.querySelectorAll('.acordeon-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      b.closest('.acordeon-item').classList.toggle('abierto');
    });
  });

  // Selector de cuenta: muestra el bloque .datos-cuenta que corresponda
  var selCuenta = document.getElementById('selector-cuenta');
  if (selCuenta) {
    function pintarCuenta(id) {
      document.querySelectorAll('.datos-cuenta').forEach(function (d) {
        d.classList.toggle('activo', d.dataset.cuenta === id);
      });
    }
    selCuenta.addEventListener('change', function () { pintarCuenta(this.value); });
    pintarCuenta(selCuenta.value);
  }

})();
