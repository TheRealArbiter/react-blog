const fs = require('fs')
const path = require('path')

let tableName

try {

    //resolves args of the command line
    tableName = process.argv.find(
        (arg) => arg.includes('--tableName=')
        ).split('=')[1]
} catch (error) {
    return console.error('--tableName parámetro no encontrado. Especifique el nombre de la tabla')
}

const fileName = new Date().getTime() +  `_${tableName}.sql`

fs.writeFile(path.resolve(__dirname, `../migrations/${fileName}`), '', (err) => {
    if(err) throw new Error(err)
    console.log('Nueva migración creada en el folde de migraciones.')
})