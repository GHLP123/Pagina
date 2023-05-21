var lvlPerAll = [];

class lvl_mejora{
	constructor(lvl_1,lvl_2,lvl_3,lvl_4,lvl_5,lvl_6,lvl_7,lvl_8,lvl_9,lvl_10,lvl_11,lvl_12,lvl_max,numMjr,num){
		this.lvl_1 = lvl_1;
		this.lvl_2 = lvl_2;
		this.lvl_3 = lvl_3;
		this.lvl_4 = lvl_4;
		this.lvl_5 = lvl_5;
		this.lvl_6 = lvl_6;
		this.lvl_7 = lvl_7;
		this.lvl_8 = lvl_8;
		this.lvl_9 = lvl_9;
		this.lvl_10 = lvl_10;
		this.lvl_11 = lvl_11;
		this.lvl_12 = lvl_12;
		this.lvl_max = lvl_max;
		this.numMjr = numMjr;
		this.num = num;
	}
}

//													nivel maximo	nivel actual	numero de personaje
var vida_lvl = new lvl_mejora(112,148,180,206,240,298,339,362,437,487,532,687,12,0,0);
var p_dmg_lvl = new lvl_mejora(112,148,180,206,240,298,339,362,437,487,532,687,12,0,0);

lvlPerAll.push(vida_lvl,p_dmg_lvl);