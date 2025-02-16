import fs from 'fs'
import path from 'path'

const iconsDir = path.resolve(__dirname, '../src/icons') // Путь к папке с иконками
const outputDir = path.resolve(__dirname, '../src/types') // Путь к папке для типов
const outputPath = path.join(outputDir, 'sprites.d.ts') // Путь к файлу с типами

function generateIconTypes(dir: string): string {
   const files = fs.readdirSync(dir) // Считываем все файлы в директории
   const iconNames = files
      .filter(file => path.extname(file) === '.svg') // Фильтруем только SVG файлы
      .map(file => path.basename(file, '.svg')) // Убираем расширение .svg

   return `export type IconsNameTypes = ${iconNames.map(name => `'${name}'`).join(' | ')};`
}

// Проверка и создание директории, если она не существует
if (!fs.existsSync(outputDir)) {
   fs.mkdirSync(outputDir, { recursive: true }) // Создаем директорию, если ее нет
   console.log('Директория для типов была создана!')
}

const types = generateIconTypes(iconsDir)
console.log('Generated types:', types)
fs.writeFileSync(outputPath, types) // Если файл не существует, создаем его
console.log('Типы сгенерированы и файл был создан!')
