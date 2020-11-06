const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'crea una tarea', {
        descripcion
    })
    .command('actualizar', 'actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}