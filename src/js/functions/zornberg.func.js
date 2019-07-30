const { rad, sen, cos, tan } = require('../utils/ang.util')

/**
 * Calcola il peso del volume di controllo
 * @param {number} y_terr peso specifico del terreno
 * @param {number} L lunghezza del volume di controllo
 * @param {number} t_terr spessore del terreno
 * @returns {number} W = y_terr * L * t_terr
 */
function calcoloW(y_terr, L, t_terr) {
  return y_terr * L * t_terr
}

/**
 * Calcola il fattore di sicurezza totale
 * @param {number} fs1 fattore di sicurezza sul danneggiamento in fase di installazione
 * @param {number} fs2 fattore di sicurezza sul creep
 * @param {number} fs3 fattore di sicurezza sui fattori chimici
 * @param {number} fs4 fattore di sicurezza sui fattori biologici
 * @returns {number} FS_tot = FS1 * FS2 * FS3 * FS4
 */
function calcoloFSTot(fs1, fs2, fs3, fs4) {
  return fs1 * fs2 * fs3 * fs4
}

/**
 * Calcola la resistenza a trazione ammissibile
 * @param {number} t_nom resistenza a trazione nominale
 * @param {number} fs_tot fattore di sicurezza totale
 * @returns {number} T_amm = t_nom / FS_tot
 */
function calcoloTamm(t_nom, fs_tot) {
  return t_nom / fs_tot
}

/**
 * Calcola tp
 * @param {number} t_amm resistenza a trazione ammissibile
 * @param {number} Lt lunghezza della scarpata
 * @returns {number} tp = t_amm / Lt
 */
function calcoloTp(t_amm, Lt) {
  return t_amm / Lt
}

/**
 * Calcola N
 * @param {number} W peso del volume di controllo
 * @param {number} B angolo di inclinazione del pendio
 * @returns {number} N = W * cos(B)
 */
function calcoloN(W, B) {
  return W * cos(rad(B))
}

/**
 * Calcola S
 * @param {number} W peso di volume di controllo
 * @param {number} B angolo di inclinazione del pendio
 * @param {number} tp 
 * @param {number} L lunghezza del volume di controllo
 * @returns {number} S = W * sen(B) - tp * L
 */
function calcoloS(W, B, tp, L) {
  return W * sen(rad(B)) - tp * L
}

/**
 * Calcolo del fattore di sicurezza
 * @param {number} c_terr coesione del terreno
 * @param {number} y_terr peso specifico del terreno
 * @param {number} t_terr spessore del terreno
 * @param {number} B ancolo di inclinazione del pendio
 * @param {number} delta angolo di attrito del rinforzo
 * @param {number} tp resistenza a trazione ammissibile
 * @returns {number} FSr
 */
function calcoloFSr(c_terr, y_terr, t_terr, B, delta, tp) {
  return ((c_terr / y_terr * t_terr * sen(rad(B))) + tan(rad(delta)) / tan(rad(B))) / (1 - (tp / (y_terr * t_terr * sen(rad(B)))))
}

exports.calcoloW = calcoloW
exports.calcoloFSTot = calcoloFSTot
exports.calcoloTamm = calcoloTamm
exports.calcoloTp = calcoloTp
exports.calcoloN = calcoloN
exports.calcoloS = calcoloS
exports.calcoloFSr = calcoloFSr