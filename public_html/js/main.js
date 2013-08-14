// alert( "Handler for .click() called.");

$(document).ready(function () {
    $('#tablaPequena').dataTable();
    $("#carnita").hide();

    $("#pequenaEmpresaAccion").click(function () {
        $('#pequenaEmpresaAccion').css({ 'opacity': '1.0','filter':'alpha(opacity=100)' });
        $('#medianaEmpresaAccion').css({ 'opacity': '0.5','filter':'alpha(opacity=50)' });
        $('#granEmpresaAccion').css({ 'opacity': '0.5', 'filter': 'alpha(opacity=50)' });
        $("#carnita").hide().show('slow');
        $('#contenidoMediana').addClass('hidden');
        $('#contenidoGrande').addClass('hidden');
        $('#contenidoPequena').removeClass();
    });

    $("#medianaEmpresaAccion").click(function () {
        $('#medianaEmpresaAccion').css({ 'opacity': '1.0', 'filter': 'alpha(opacity=100)' });
        $('#pequenaEmpresaAccion').css({ 'opacity': '0.5', 'filter': 'alpha(opacity=50)' });
        $('#granEmpresaAccion').css({ 'opacity': '0.5', 'filter': 'alpha(opacity=50)' });
        $("#carnita").hide().show('slow');
        $('#contenidoPequena').addClass('hidden');
        $('#contenidoGrande').addClass('hidden');
        $('#contenidoMediana').removeClass();
    });

    $("#granEmpresaAccion").click(function () {
        $('#granEmpresaAccion').css({ 'opacity': '1.0', 'filter': 'alpha(opacity=100)' });
        $('#pequenaEmpresaAccion').css({ 'opacity': '0.5', 'filter': 'alpha(opacity=50)' });
        $('#medianaEmpresaAccion').css({ 'opacity': '0.5', 'filter': 'alpha(opacity=50)' });

        $("#carnita").hide().show('slow');
        $('#contenidoMediana').addClass('hidden');
        $('#contenidoPequena').addClass('hidden');
        $('#contenidoGrande').removeClass();
    });

});





