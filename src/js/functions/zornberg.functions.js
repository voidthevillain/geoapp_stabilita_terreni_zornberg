const { rad, sen, cos, tan} = require('../utils/ang.util')

exports.calcoloW = (y_terr, L, t_terr) => y_terr * L * t_terr
exports.calcoloFSTot = (fs1, fs2, fs3, fs4) => fs1 * fs2 * fs3 * fs4
exports.calcoloTamm = (t_nom, fs_tot) => t_nom / fs_tot
exports.calcoloTp = (t_amm, Lt) => t_amm / Lt
exports.calcoloN = (W, B) => W * cos(rad(B))
exports.calcoloS = (W, B, tp, L) => W * sen(rad(B)) - tp * L
exports.calcoloFSr = (c_terr, y_terr, t_terr, B, delta, tp) => ((c_terr / y_terr * t_terr * sen(rad(B))) + tan(rad(delta)) / tan(rad(B))) / (1 - (tp / (y_terr * t_terr * sen(rad(B))))) 