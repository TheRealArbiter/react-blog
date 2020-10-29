const knex = require('./mysql')
const promise = require('bluebird')
const path = require('knex')
const path = require('path')
const { resolve, reject } = require('bluebird')
const db = knex.client.config.connection.database || null

function replaceAll(str, delimeter, replacement) {
    return str.split(delimeter).join(replacement)
}

fs.readdir(

    path.resolve(
        __dirname,
        '../migrations'
    ),
    'utf-8',
    (err, files) => {
        if(err) throw new Exception(err)
        //makes a promise loop of each async func, 
        return promise.each(files, (fileName) => {
            return new Promise((resolve, reject) => {
                fs.readFile(
                    path.resolve(
                        __dirname,
                        `../migrations/${fileName}`
                    ),
                    'utf8',
                    (err, sql) => {
                        if(err) reject(err)
                        return knex.raw(replaceAll(sql, '{}', db))
                        .then(resolve())
                    }
                )
            })
        })
        .then(() => console.log('Migraciones creadas satisfactoriamente.'))
        .catch(err => {
            throw new Error(err)
        })
    }
)
