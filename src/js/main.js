import { btn_new, btn_open, btn_save, btn_print, btn_help, btn_calculate } from './utils/dom.util'
import { newFile, showFileDialog, saveFile, printFile, calculate } from './utils/dom.util'

function bindEventHandlers() {
  btn_new.onclick = newFile
  btn_open.onclick = showFileDialog
  btn_save.onclick = saveFile
  btn_print.onclick = printFile
  // btn_help.onclick = helpModal
  btn_calculate.onclick = calculate
}

function initApp() {
  bindEventHandlers()
}

initApp()