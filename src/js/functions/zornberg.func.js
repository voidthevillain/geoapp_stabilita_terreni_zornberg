import { rad, sen, cos, tan } from '../utils/ang.util'

export const calcoloW = (y_terr, L, t_terr) => y_terr * L * t_terr
export const calcoloFSTot = (fs1, fs2, fs3, fs4) => fs1 * fs2 * fs3 * fs4
export const calcoloTamm = (t_nom, fs_tot) => t_nom / fs_tot
export const calcoloTp = (t_amm, Lt) => t_amm / Lt
export const calcoloN = (W, B) => W * cos(rad(B))
export const calcoloS = (W, B, tp, L) => W * sen(rad(B)) - tp * L
export const calcoloFSr = (c_terr, y_terr, t_terr, B, delta, tp) => ((c_terr / y_terr * t_terr * sen(rad(B))) + tan(rad(delta)) / tan(rad(B))) / (1 - (tp / (y_terr * t_terr * sen(rad(B))))) 