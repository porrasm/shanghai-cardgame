"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullPlayer = exports.getPlayerTurn = exports.cardOrderIndex = exports.CSuitIcon = exports.CSuit = exports.ctool = void 0;
const cardTool_1 = __importDefault(require("./src/cardTool"));
exports.ctool = cardTool_1.default;
var CSuit;
(function (CSuit) {
    CSuit[CSuit["club"] = 0] = "club";
    CSuit[CSuit["heart"] = 1] = "heart";
    CSuit[CSuit["spade"] = 2] = "spade";
    CSuit[CSuit["diamond"] = 3] = "diamond";
})(CSuit = exports.CSuit || (exports.CSuit = {}));
var CSuitIcon;
(function (CSuitIcon) {
    CSuitIcon[CSuitIcon["\u2663"] = 0] = "\u2663";
    CSuitIcon[CSuitIcon["\u2665"] = 1] = "\u2665";
    CSuitIcon[CSuitIcon["\u2660"] = 2] = "\u2660";
    CSuitIcon[CSuitIcon["\u2666"] = 3] = "\u2666";
})(CSuitIcon = exports.CSuitIcon || (exports.CSuitIcon = {}));
const cardOrderIndex = (card) => card.suit * 1000 + card.rank * 10 + card.deck;
exports.cardOrderIndex = cardOrderIndex;
const getPlayerTurn = (state, turnIndex) => turnIndex % state.players.length;
exports.getPlayerTurn = getPlayerTurn;
const getFullPlayer = (player, state) => {
    return Object.assign(Object.assign({}, player), state.players[player.id]);
};
exports.getFullPlayer = getFullPlayer;
//# sourceMappingURL=index.js.map