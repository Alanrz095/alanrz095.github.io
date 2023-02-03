
const conocimientosEnhtml = function html(){
    alert("Conocimientos en: 1-Titulos 2-Párrafos 3-Listas 4-Tablas 5-Enlaces 6-Atributos y estilos 7-Estructura básica")
};


const conocimientosEncss = function css(){
    alert("Conocimientos en: 1-Estructura 2-Selectores 3-Propiedades de Texto 4-Padding 5-Width y Height 6-Margin 7-Bordes")
};

const conocimientosEnjs = function javaScript(){
    alert("Conocimientos en: 1-Sintaxis 2-Formas de incluir javascript 3-Métodos de selección de elementos 4-Eventos")
};

const experienciaEnServicio = function servicio(){
    alert("Mi tarea principal en el area de servicio era la limpieza de salas y atención al cliente.")
}

const experienciaEnFacturacion = function facturacion(){
alert("Actualmente me dedico a la facturación de remitos, atención al cliente y al armado de hojas de rutas.")
};

document.getElementById("boton1").addEventListener("click", conocimientosEnhtml);

document.getElementById("boton2").addEventListener("click", conocimientosEncss);

document.getElementById("boton3").addEventListener("click", conocimientosEnjs);

document.getElementById("boton4").addEventListener("click", experienciaEnServicio);

document.getElementById("boton5").addEventListener("click", experienciaEnFacturacion);