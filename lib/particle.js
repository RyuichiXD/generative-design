var Particle = function (lifeTime, posX, posY,size) {
  this.pos = {x:posX, y:posY};
  this.vel = {x:0,y:0};
  this.lifeTime = lifeTime;
  this.size = size;
}

Particle.prototype.update = function (forces) {
  
  for (var i=0; i<forces.length; i++) {
    this.vel.x += forces[i].x;
    this.vel.y += forces[i].y;
    
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }
  this.lifeTime -= 1;
}



Particle.prototype.setVel = function (vel) {
  
  for (var i=0; i<forces.length; i++) {
    this.vel.x = vel[i].x;
    this.vel.y = vel[i].y;
  }
  this.lifeTime -= 1;
}


Particle.prototype.getDistance = function (p0, p1) {
  var dir = { x: p0.pos.x - p1.pos.x,
              y: p0.pos.y - p1.pos.y};
  return Math.sqrt(dir.x*dir.x + dir.pos.y*dir.pos.y);
}

Particle.prototype.draw = function (context,colorRGBA) {
  context.fillStyle = colorRGBA;
  context.fillRect(this.pos.x, this.pos.y, this.size, this.size);
}



Particle.prototype.drawInColor = function (context,N) {
  
  var n = Math.round(canvas.width / this.pos.x) ;

  context.fillStyle ="rgba("+ (Basics.randInt(1,n))*50 +","+ 50*N +","+ Math.round(200/N)+ ",0.3)";
  context.fillRect(this.pos.x, this.pos.y, this.size, this.size);
}

Particle.checkBounds = function(newLifetime,newPositionX,newPositionY,particles,i) {
        if (particles[i].pos.y > canvas.height || particles[i].pos.x > canvas.width) {
            particles[i] = new Particle(Basics.rand(0,newLifetime),newPositionX, newPositionY);
        }
    }

Particle.prototype.endlessBounds = function(particles) {
        
          //top, down bouns
          if (this.pos.y > canvas.height)
          {
            this.pos.y = this.size; 
          }

          if (this.pos.y < 0)
          {
            this.pos.y = canvas.height-this.size; 
          }
         
          //left, right bounds
         if (this.pos.x > canvas.width)
          {
            this.pos.x = this.size; 
          }
         if (this.pos.x <= 0)
          {
            this.pos.x = canvas.width-this.size;
          }
        }

