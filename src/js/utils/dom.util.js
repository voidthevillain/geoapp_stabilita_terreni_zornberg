import { saveAs } from 'file-saver'
import { calcoloW, calcoloFSTot, calcoloTamm, calcoloTp, calcoloN, calcoloS, calcoloFSr } from '../functions/zornberg.func'
import { rad, sen, cos, tan } from './ang.util'
import { createDocument } from './print.util'
 
// Buttons 
export const btn_new = document.querySelector('#btn-new')
export const btn_open = document.querySelector('#btn-open')
export const btn_save = document.querySelector('#btn-save')
export const btn_print = document.querySelector('#btn-print')
export const btn_help = document.querySelector('#btn-help')
export const btn_calculate = document.querySelector('#btn-calculate')
const buttons = document.querySelectorAll('button')

// File
const input_file = document.querySelector('#file-input')

// Inputs
const input_y_terr = document.querySelector('#y_terr')
const input_c_terr = document.querySelector('#c_terr')
const input_phi = document.querySelector('#phi')
const input_b = document.querySelector('#b')
const input_t_terr = document.querySelector('#t_terr')
const input_l = document.querySelector('#l')
const input_lt = document.querySelector('#lt')
const input_delta = document.querySelector('#delta')
const input_t_nom = document.querySelector('#t_nom')
const input_fs_1 = document.querySelector('#fs_1')
const input_fs_2 = document.querySelector('#fs_2')
const input_fs_3 = document.querySelector('#fs_3')
const input_fs_4 = document.querySelector('#fs_4')
const inputs = document.querySelectorAll('.input-value')

// Outputs
const output_tan_phi = document.querySelector('#tan_phi')
const output_w = document.querySelector('#w')
const output_sen_b = document.querySelector('#sen_b')
const output_cos_b = document.querySelector('#cos_b')
const output_tan_b = document.querySelector('#tan_b')
const output_tan_delta = document.querySelector('#tan_delta')
const output_fs_tot = document.querySelector('#fs_tot')
const output_t_amm = document.querySelector('#t_amm')
const output_tp = document.querySelector('#tp')
const output_n = document.querySelector('#n')
const output_s = document.querySelector('#s')
const output_fsr = document.querySelector('#fsr')
const outputs = document.querySelectorAll('.output-value')

// Modals
const btn_save_modal = document.querySelector('#btn-save-modal')
const btn_close_save_modal = document.querySelector('#btn-close-save-modal')
const btn_confirm_save_modal = document.querySelector('#btn-confirm-save-modal')
const btn_ext_txt = document.querySelector('#btn-ext-txt')
const btn_ext_gap = document.querySelector('#btn-ext-gap')
const file_name = document.querySelector('#file-name')
const file_ext = document.querySelector('#file-ext')

// Values
let y_terr, c_terr, phi, b, t_terr, l, lt, delta, t_nom, fs1, fs2, fs3, fs4
let tan_phi, w, sen_b, cos_b, tan_b, tan_delta, fs_tot, t_amm, tp, n, s, fsr

function initData() {
  y_terr = parseFloat(input_y_terr.value)
  c_terr = parseFloat(input_c_terr.value)
  phi = parseFloat(input_phi.value)
  b = parseFloat(input_b.value)
  t_terr = parseFloat(input_t_terr.value)
  l = parseFloat(input_l.value)
  lt = parseFloat(input_lt.value)
  delta = parseFloat(input_delta.value)
  t_nom = parseFloat(input_t_nom.value)
  fs1 = parseFloat(input_fs_1.value)
  fs2 = parseFloat(input_fs_2.value)
  fs3 = parseFloat(input_fs_3.value)
  fs4 = parseFloat(input_fs_4.value)
}

// Event handlers
export function newFile() {
  return inputs.forEach(e => e.value = '') && outputs.forEach(e => e.value = '')
}

export function showFileDialog() {
  return (() => {
    input_file.click()

    input_file.onchange = e => {
      openFile(e)
    }
  })()
}

function openFile(e) {
  return (e => {
    let file = e.target.files[0]

    if (!file) return

    let reader = new FileReader()
    reader.onload = e => {
      let contents = e.target.result
      loadInput(contents)
    }
    reader.readAsText(file)

    function loadInput(contents) {
      let arr = contents.split(';')
      arr.pop()

      for (let i = 0; i < arr.length; i++) {
        inputs[i].value = arr[i]
      }
    }
  })(e)
}

export function saveFile() {
  return (() => {
    btn_save_modal.click()

    btn_close_save_modal.onclick = () => {
      return
    }

    btn_ext_txt.onclick = () => {
      file_ext.innerHTML = '.txt'
    }

    btn_ext_gap.onclick = () => {
      file_ext.innerHTML = '.gap'
    }

    btn_confirm_save_modal.onclick = () => {
      let fileName = file_name.value
      let fileExt = file_ext.innerHTML

      let str = ''

      if (fileName === '') {
        file_name.focus()
      } else {
        inputs.forEach(e => {
          str += e.value + ';'
        })
      }

      let blob = new Blob([str], {
        type: 'text/plain; charset=utf-8'
      })
      saveAs(blob, fileName + fileExt)
    }
  })()
}

export function printFile() {
  return (() => {
    createDocument()
  })()
}

export function calculate() {
  return (() => {
    initData()

    w = calcoloW(y_terr, l, t_terr)
    fs_tot = calcoloFSTot(fs1, fs2, fs3, fs4)
    t_amm = calcoloTamm(t_nom, fs_tot)
    tp = calcoloTp(t_amm, lt)
    n = calcoloN(w, b)
    s = calcoloS(w, b, tp, l)
    fsr = calcoloFSr(c_terr, y_terr, t_terr, b, delta, tp)

    // out
    output_tan_phi.value = tan(rad(phi)).toFixed(2)
    output_sen_b.value = sen(rad(b)).toFixed(2)
    output_cos_b.value = cos(rad(b)).toFixed(2)
    output_tan_b.value = tan(rad(b)).toFixed(2)
    output_tan_delta.value = tan(rad(delta)).toFixed(2)
    output_w.value = w.toFixed(2)
    output_fs_tot.value = fs_tot.toFixed(1)
    output_t_amm.value = t_amm.toFixed(2)
    output_tp.value = tp.toFixed(1)
    output_n.value = n.toFixed(2)
    output_s.value = s.toFixed(2)
    output_fsr.value = fsr.toFixed(2)
  })()
}

// Exports
// exports.btn_new = btn_new
// exports.btn_open = btn_open
// exports.btn_save = btn_save
// exports.btn_print = btn_print
// exports.btn_help = btn_new
// exports.btn_calculate = btn_calculate
// exports.newFile = newFile
// exports.showFileDialog = showFileDialog
// exports.openFile = openFile
// exports.saveFile = saveFile
// exports.printFile = printFile
// exports.calculate = calculate