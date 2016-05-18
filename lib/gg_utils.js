var Util = {};


/*
* calculate length of 2d vector
*/
Util.len = function (v) {
  return Math.sqrt (v.x*v.x + v.y*v.y);
}

/*
* distance between two points
*/
Util.dist = function (v0, v1) {
  d = {x: (v0.x - v1.x), y: (v0.y - v1.y)};
  return Util.len(d);
}

/*
* linear interpolate between x0 and x1 t=0..1
*/
Util.blend = function (x0, x1, t) {
	return x0*(1-t) + x1*t;
}

Util.blend2d = function (v0, v1, t) {
  return {x: blend(v0.x, v1.x, t),
          y: blend(v0.y, v1.y, t)}
}

/*
* clamp input value between min and max
*/
Util.constrain = function (v, min, max) {
  if (v<min) return min;
  if (v>max) return max;
  return v;
}

/*
* get random value between min and max
*/
Util.rand = function (min, max) {
	return Math.random()*(max-min) + min;
}

/*
* rounded integer value
*/
Util.randI = function (min, max) {
  return Math.round(Math.random()*(max-min) + min);
}


/*
* quantize input value 0..1 in n steps
*/
var quantize = function (x, n) {
  if (n==0) return 0;
  return Math.floor(x*n)/n;
}


/*
* force of attractor
*/
Util.calcAttraction = function (pos0, pos1, m) {
	var force = {x: (pos0.x - pos1.x), y: (pos0.y - pos1.y)};
  	var dist = Util.len(force);
  	force.x = -force.x / (Math.pow(dist,2)) * m;
  	force.y = -force.y / (Math.pow(dist,2)) * m;

  	return force;
}

