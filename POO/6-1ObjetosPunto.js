function Punto(x,y){
    this.x = x;
    this.y= y;

    this.cambiar=(x,y)=>{
        this.x=x;
        this.y=y;
    };

    this.copia=()=>(new Punto (this.x, this.y));

    this.suma = (p2)=>(new Punto(this.x+p2.x, this.y+p2.y));

    this.toString =()=>`(${this.x},${this.y})`;

    this.obtenerDistancia=function(p2){
        return Math.sqrt(
            Math.pow(Math.abs(this.x-p2.x), 2) + 
            Math.pow(Math.abs(this.y-p2.y),2)
        )
    };
}

var p = new Punto(1,2);
var q = new Punto(6,-3);
p.cambiar(-5,2);

var r = p.copia();
r.x=9;

console.log("p: " + p.toString());
console.log("q: " + r.toString());

var s=p.suma(r);
console.log("s: " + s.toString());

console.log("Distancia entre p y q: " + p.obtenerDistancia(q));
