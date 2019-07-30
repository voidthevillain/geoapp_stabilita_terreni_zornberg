const { rad, sen, cos, tan } = require('../utils/ang.util')

const calcoloW = (y_terr, L, t_terr) => y_terr * L * t_terr
const calcoloFSTot = (fs1, fs2, fs3, fs4) => fs1 * fs2 * fs3 * fs4
const calcoloTamm = (t_nom, fs_tot) => t_nom / fs_tot
const calcoloTp = (t_amm, Lt) => t_amm / Lt
const calcoloN = (W, B) => W * cos(rad(B))
const calcoloS = (W, B, tp, L) => W * sen(rad(B)) - tp * L
const calcoloFSr = (c_terr, y_terr, t_terr, B, delta, tp) => ((c_terr / y_terr * t_terr * sen(rad(B))) + tan(rad(delta)) / tan(rad(B))) / (1 - (tp / (y_terr * t_terr * sen(rad(B))))) 

exports.calcoloW = calcoloW
exports.calcoloFSTot = calcoloFSTot
exports.calcoloTamm = calcoloTamm
exports.calcoloTp = calcoloTp
exports.calcoloN = calcoloN
exports.calcoloS = calcoloS
exports.calcoloFSr = calcoloFSr