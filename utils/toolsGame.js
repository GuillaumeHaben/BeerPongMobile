/**
 * Return successRate of the current game
 * @param {*} hit Number of hit
 * @param {*} miss Number of miss
 * return a percentage
 */

export function successRate(hit, miss) {
    if (hit == 0 && miss == 0) return 0;
    return Math.floor(100 * hit / (hit + miss));
}

/**
 * Find game by id
 * @param {*} games List of games
 * @param {*} id id of game you're looking for
 * return a game
 */
export function getGame(games, id) {
    return games.find((game) => game.id === id)
}

/**
 * Return last score of a game
 * @param {*} game A game
 */
export function getGameLastScore(game) {
    return game.history[game.history.length - 1];
}

/**
 * Return game status
 * @param {*} game A game
 */
export function getGameStatus(game) {
    return game.status >= 0 ? true : false;
}


