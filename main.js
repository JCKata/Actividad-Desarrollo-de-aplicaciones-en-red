/* =================================================================
VERTICAL · Blog de escalada
main.js — interactividad con jQuery 3
================================================================= */

$(document).ready(function () {
  /*
   * 1. Filtro de categorías
   */
  $("#filtroCategorias .btn-filtro").on("click", function () {
    var categoria = $(this).data("categoria");

    $("#filtroCategorias .btn-filtro").removeClass("active");
    $(this).addClass("active");

    $(".entrada").each(function () {
      var entrada = $(this);
      var categoriaEntrada = entrada.data("categoria");

      if (categoria === "todas" || categoriaEntrada === categoria) {
        entrada.stop(true, true).fadeIn(400);
      } else {
        entrada.stop(true, true).fadeOut(300);
      }
    });
  });

  /*
   * 2. Botones "Leer más"
   */
  $(".btn-leer-mas").on("click", function () {
    var boton = $(this);
    var contenido = boton.siblings(".entrada-completa");

    contenido.stop(true, true).slideToggle(400, function () {
      if (contenido.is(":visible")) {
        boton.text("Leer menos");
      } else {
        boton.text("Leer más");
      }
    });
  });

  /*
   * 3. Botón "Volver arriba"
   */
  var btnArriba = $("#btnVolverArriba");

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      btnArriba.addClass("visible");
    } else {
      btnArriba.removeClass("visible");
    }
  });

  btnArriba.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      600
    );

    return false;
  });

  /*
   * 4. Cerrar el menú móvil
   */
  $(".navbar-nav .nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});