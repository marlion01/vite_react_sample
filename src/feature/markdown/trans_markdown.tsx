import fs from 'fs'
import path from 'path'
import {marked} from 'marked'

export const markdownFileToHtml = (filePath: string): string => {
  const markdown = fs.readFileSync(path.resolve(filePath), 'utf-8')
  const html = marked(markdown) as string
  return html
}