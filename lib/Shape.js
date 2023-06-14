// Shape.js
class Shape {
    constructor() {
      this.color = null;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // This method will be overridden by child classes
      return '';
    }
  }