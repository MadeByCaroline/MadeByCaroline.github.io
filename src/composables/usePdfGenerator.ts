import { ref } from 'vue'
import jsPDF from 'jspdf'
import { contactInfo, skillCategories, experiences, projects } from '../data/cv-data'

export function usePdfGenerator() {
  const isLoading = ref(false)

  async function generatePDF(): Promise<void> {
    if (isLoading.value) return
    isLoading.value = true

    try {
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

      const pageWidth = doc.internal.pageSize.getWidth()
      const margin = 18
      const contentWidth = pageWidth - margin * 2
      let y = margin

      // ─── Helpers ────────────────────────────────────────────────────────────

      function addText(
        text: string,
        x: number,
        currentY: number,
        opts: { fontSize?: number; fontStyle?: 'normal' | 'bold' | 'italic'; color?: string } = {},
      ): number {
        const { fontSize = 10, fontStyle = 'normal', color = '#111111' } = opts
        doc.setFont('helvetica', fontStyle)
        doc.setFontSize(fontSize)
        const rgb = hexToRgb(color)
        doc.setTextColor(rgb.r, rgb.g, rgb.b)
        doc.text(text, x, currentY)
        return currentY + fontSize * 0.353 + 1.5
      }

      function addWrappedText(
        text: string,
        x: number,
        currentY: number,
        maxWidth: number,
        opts: { fontSize?: number; fontStyle?: 'normal' | 'bold' | 'italic'; color?: string; lineHeight?: number } = {},
      ): number {
        const { fontSize = 9, fontStyle = 'normal', color = '#555555', lineHeight = 4.5 } = opts
        doc.setFont('helvetica', fontStyle)
        doc.setFontSize(fontSize)
        const rgb = hexToRgb(color)
        doc.setTextColor(rgb.r, rgb.g, rgb.b)
        const lines = doc.splitTextToSize(text, maxWidth) as string[]
        doc.text(lines, x, currentY)
        return currentY + lines.length * lineHeight
      }

      function addSectionTitle(title: string, currentY: number): number {
        // Separator line
        doc.setDrawColor(17, 17, 17)
        doc.setLineWidth(0.3)
        doc.line(margin, currentY, pageWidth - margin, currentY)
        currentY += 4

        doc.setFont('helvetica', 'bold')
        doc.setFontSize(11)
        doc.setTextColor(17, 17, 17)
        doc.text(title.toUpperCase(), margin, currentY)
        return currentY + 6
      }

      function checkPageBreak(currentY: number, needed = 12): number {
        if (currentY + needed > doc.internal.pageSize.getHeight() - margin) {
          doc.addPage()
          return margin
        }
        return currentY
      }

      function hexToRgb(hex: string): { r: number; g: number; b: number } {
        const cleaned = hex.replace('#', '')
        return {
          r: parseInt(cleaned.substring(0, 2), 16),
          g: parseInt(cleaned.substring(2, 4), 16),
          b: parseInt(cleaned.substring(4, 6), 16),
        }
      }

      // ─── Header ─────────────────────────────────────────────────────────────

      doc.setFont('helvetica', 'bold')
      doc.setFontSize(22)
      doc.setTextColor(17, 17, 17)
      doc.text('Caroline Robillard', margin, y)
      y += 8

      doc.setFont('helvetica', 'normal')
      doc.setFontSize(12)
      doc.setTextColor(80, 80, 80)
      doc.text('Développeuse Full-Stack Senior — Conception de socles applicatifs', margin, y)
      y += 6

      doc.setFontSize(9)
      doc.setTextColor(100, 100, 100)
      doc.text(
        `${contactInfo.location}  ·  ${contactInfo.email}  ·  ${contactInfo.experience}`,
        margin,
        y,
      )
      y += 8

      // ─── Profil ─────────────────────────────────────────────────────────────

      y = addSectionTitle('Profil', y)
      y = addWrappedText(
        'Développeuse Full-Stack spécialisée dans la conception et la construction de produits numériques complexes au sein de systèmes publics critiques. Expérience en architecture front-end, structuration de socles applicatifs et développement de produits à forte contrainte (accessibilité, sécurité, volumétrie).',
        margin,
        y,
        contentWidth,
      )
      y += 2

      // ─── Compétences ────────────────────────────────────────────────────────

      y = checkPageBreak(y, 20)
      y = addSectionTitle('Compétences', y)

      for (const category of skillCategories) {
        y = checkPageBreak(y, 10)
        y = addText(category.title, margin, y, { fontSize: 10, fontStyle: 'bold' })

        for (const skill of category.skills) {
          y = checkPageBreak(y, 6)
          doc.setFont('helvetica', 'normal')
          doc.setFontSize(9)
          doc.setTextColor(80, 80, 80)
          doc.text('•', margin + 2, y)
          const lines = doc.splitTextToSize(skill.label, contentWidth - 8) as string[]
          doc.text(lines, margin + 6, y)
          y += lines.length * 4.5
        }

        if (category.note) {
          y = addWrappedText(`→ ${category.note}`, margin + 2, y, contentWidth - 4, {
            fontSize: 8,
            color: '#777777',
          })
        }
        y += 2
      }

      // ─── Expériences ────────────────────────────────────────────────────────

      y = checkPageBreak(y, 20)
      y = addSectionTitle('Expériences professionnelles', y)

      for (const exp of experiences) {
        y = checkPageBreak(y, 16)

        // Role + dates on same line
        const dateRange = exp.endDate ? `${exp.startDate} – ${exp.endDate}` : `${exp.startDate} – aujourd'hui`
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(10)
        doc.setTextColor(17, 17, 17)
        doc.text(exp.role, margin, y)

        doc.setFont('helvetica', 'normal')
        doc.setFontSize(9)
        doc.setTextColor(120, 120, 120)
        const dateWidth = doc.getTextWidth(dateRange)
        doc.text(dateRange, pageWidth - margin - dateWidth, y)
        y += 4.5

        doc.setFont('helvetica', 'italic')
        doc.setFontSize(9)
        doc.setTextColor(80, 80, 80)
        doc.text(exp.organization, margin, y)
        y += 5

        y = addWrappedText(exp.description, margin, y, contentWidth)

        if (exp.details) {
          y = addWrappedText(exp.details, margin, y, contentWidth, { color: '#777777', fontSize: 8 })
        }
        y += 3
      }

      // ─── Projets ────────────────────────────────────────────────────────────

      y = checkPageBreak(y, 20)
      y = addSectionTitle('Projets', y)

      for (const project of projects) {
        y = checkPageBreak(y, 14)

        y = addText(project.title, margin, y, { fontSize: 10, fontStyle: 'bold' })

        y = addWrappedText(project.description, margin, y, contentWidth)

        if (project.details) {
          y = addWrappedText(project.details, margin, y, contentWidth, { color: '#777777', fontSize: 8 })
        }

        if (project.tags.length > 0) {
          const tagLine = project.tags.join(' · ')
          y = addWrappedText(tagLine, margin, y, contentWidth, { fontSize: 8, color: '#888888', fontStyle: 'italic' })
        }
        y += 3
      }

      // ─── Save ────────────────────────────────────────────────────────────────

      doc.save('CV_Caroline_Robillard.pdf')
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, generatePDF }
}
