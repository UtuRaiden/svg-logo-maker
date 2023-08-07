//creates Triangles with the information provided
class Triangle{
    constructor(point1,point2,point3,point4){
        this.point1=point1;
        this.point2=point2;
        this.point3=point3;
        this.point4=point4;
    }
    render(){
        return `<polygon points="${this.point1}, ${this.point2}, ${this.point3}, ${this.point4}"`
    }
}
//creates Circle with the information provided
class Circle{
    constructor(cx,cy,r){
        this.cx = cx;
        this.cy = cy;
        this.r=r;
        
    }
    render(){
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}"`
    }
}
//creates Square with the information provided
class Square{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
    }
    render(){
        return `<rect x="${this.x}" y="${this.y}" width="${this.w}" height="${this.h}" `
    }
}

module.exports = {Triangle, Circle, Square}