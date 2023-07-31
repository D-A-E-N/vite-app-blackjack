/**
 * 
 * @param {String} carta Recive la carta 
 * @returns {HTMLImageElement} retorna el elemento carta
 */
export const crearCartaHTML = (carta) => {

    if (!carta) throw Error('el argumento carta es obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}