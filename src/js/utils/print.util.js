import { Document, Packer, Paragraph, TextRun } from 'docx'

export const createDocument = () => {
  return (() => {
    const doc = new Document()

    doc.creator = 'Mihai Filip (GeoStru)',
    doc.description = 'Relazione generata dall\'app Stabilità del Terreno - Pendio Indefinito con Rinforzo',
    doc.title = 'Report'

    const header = new Paragraph()
    const h_1 = new TextRun('Relazione generata dall\'app Stabilità del Terreno - Pendio Indefinito con Rinforzo')
    header.addRun(h_1)
    doc.Header.addParagraph(header)

    const title = new Paragraph()
    const t_1 = new TextRun('Stabilità del Terreno').bold()
    title.addRun(t_1)
    doc.addParagraph(title.title().center())
    
    const subtitle = new Paragraph()
    const s_1 = new TextRun('Pendio Indefinito con Rinforzo').color('#6D6D6D')
    subtitle.addRun(s_1)
    doc.addParagraph(subtitle.heading2().center())

    saveDocument(doc)
  })()
}

const saveDocument = (doc) => {
  return ((doc) => {
    const packer = new Packer()
    packer.toBlob(doc).then(blob => {
      saveAs(blob, doc.title + '.docx')
    })
  })(doc)
}