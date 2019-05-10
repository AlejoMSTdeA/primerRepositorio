const {obtenerPromedio, argv} = require("./datos.js");

console.log(argv);
if (argv._[0] == 'promedio') {
	console.log('El promedio de ' + argv.n + ' es ' + obtenerPromedio(argv.i,argv.m,argv.p))
}
else{
	console.log('El Promedio no fue calculado');
}