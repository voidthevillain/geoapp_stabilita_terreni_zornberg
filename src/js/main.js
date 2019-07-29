import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import '../css/bootstrap.min.css'
import '../css/normalize.css'
import '../css/main.css'

const { btn_new, btn_open, btn_save, btn_print, btn_help, btn_calculate } = require('./utils/dom.util')
const { newFile, showFileDialog, saveFile, printFile, calculate } = require('./utils/dom.util')

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