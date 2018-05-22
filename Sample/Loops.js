let a = 4;
let b = 5;

// Can compare multiple conditions too with '&&' and '||'
if (a < b) {
	console.log("None");
} else if (a === b) {
	console.log("None");
} else {
	console.log("None");
}


// Swifch 
let viewType = 'grid';

switch(viewType) {
	case 'grid':
		console.log("Grid View");
		break;
	case 'list':
		console.log("List view");
		break
	default:
		console.log("None");		
}

// While
let count = 5;

while(count > 0) {
	console.log(count--)
}

// Do While block
count = 5;

do {
	console.log(count--)
} while ( count > 0)


// For Loop
for (count = 5; count > 0; count--) {
	console.log(count)
}	