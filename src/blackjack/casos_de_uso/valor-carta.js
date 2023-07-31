/**
 * 
 * @param {String} carta Ej: '3H' 
 * @returns {Number} Retorna el valor numerico de la carta, Ej: 3.
 */

export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}