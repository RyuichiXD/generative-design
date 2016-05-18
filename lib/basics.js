


var Basics = {};



/*
* calculate length of 2d vector
*/
Basics.len = function (v) {
  return Math.sqrt (v.x*v.x + v.y*v.y);
}


/*
* Random rounded Integer between min and max
*/
Basics.randInt = function (min,max)
{
	return Math.round(Math.random()*(max-min) + min);
}

/*
* get random value between min and max
*/
Basics.rand = function (min, max) {
	return Math.random()*(max-min) + min;
}


/*
* distance between two points
*/
Basics.dist = function (v0, v1) {
  d = {x: (v0.x - v1.x), y: (v0.y - v1.y)};
  return Basics.len(d);
}

/*
* quantize input value 0..1 in n steps
*/
Basics.quantize = function (x, n) {
  if (n==0) return 0;
  return Math.floor(x*n)/n;
}


/*
* based on chance for the same numbers (like chance 100 --> 1:100)
*/
Basics.luckyNumber = function (chance) {
	var luckyNumber=Basics.randInt(0,chance);
	var draw = Basics.randInt(0,chance);
	
	if(luckyNumber == draw)
		return true;
	else
		return false;
}



/*
* generate a random color
*/
Basics.randomRGBComponent = function () {
	return Math.round(Math.random() * 255);
}
 

/*
* generate a random rgba fillstyle
*/
Basics.randomRGBAColor = function () {
	return 'rgba(' + Basics.randomRGBComponent() + ', ' + Basics.randomRGBComponent() + ', ' + Basics.randomRGBComponent() + ','+ Math.random() + ')';
}