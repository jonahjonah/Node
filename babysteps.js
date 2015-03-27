//console.log(process.argv);

num = 0;

for (i=2; i < process.argv.length; i++) {
	num += +process.argv[i];

};

console.log(num);