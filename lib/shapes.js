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

class Square{
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
















module.exports = {Triangle, Circle, Square}