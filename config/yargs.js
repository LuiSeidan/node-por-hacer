const descripcion = {
    demand: true,
    desc: 'descripcion de la tarea por hacer',
    alias: 'd'
}

const completado = {
    default: true,
    desc: 'Marca como completado o pendiente la tarea',
    alias: 'c'
}


const argv = require('yargs')
    .command('crear','Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;


    module.exports = {
        argv
    }