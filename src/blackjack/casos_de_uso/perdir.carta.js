/**
 * 
// Esta función me permite tomar una carta
 * @param {Array<String>} deck 
 * @returns {String} Devuelve una carta Ej: '3H'
 */
export const pedirCarta = (deck) => {

    if (deck.length === 0) {
        throw Error('No hay cartas en el deck');
    }

    return deck.pop();;
}