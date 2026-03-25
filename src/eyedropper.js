export class EyedropperDebugger {
  constructor(p5Instance, tooltip) {
    this.p = p5Instance;
    this.tooltip = tooltip;
    this.enabled = true;
    this.lastSampleTime = 0;
    this.sampleDelay = 50;
  }

  setEnabled(value) {
    this.enabled = value;
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  normalize(value) {
    return (value / 255).toFixed(2);
  }

  getCanvasCoordinates(event) {
    const canvas = this.p.canvas;
    const rect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const rawX = (event.clientX - rect.left) * scaleX;
    const rawY = (event.clientY - rect.top) * scaleY;

    const density = this.p.pixelDensity ? this.p.pixelDensity() : 1;

    const x = Math.floor(rawX / density);
    const y = Math.floor(rawY / density);

    return { x, y };
  }

  samplePixel(x, y) {
    const ctx = this.p.drawingContext;

    if (
      x < 0 ||
      y < 0 ||
      x >= this.p.width ||
      y >= this.p.height
    ) {
      return null;
    }

    const pixel = ctx.getImageData(x, y, 1, 1).data;

    return {
      x,
      y,
      r: this.normalize(pixel[0]),
      g: this.normalize(pixel[1]),
      b: this.normalize(pixel[2]),
      a: this.normalize(pixel[3]),
      enabled: this.enabled
    };
  }

  handleMouseMove(event) {
    this.tooltip.move(event.clientX, event.clientY);

    if (!this.enabled) {
      this.tooltip.update({
        x: "-",
        y: "-",
        r: "-",
        g: "-",
        b: "-",
        a: "-",
        enabled: false
      });
      this.tooltip.show();
      return;
    }

    const now = performance.now();
    if (now - this.lastSampleTime < this.sampleDelay) {
      return;
    }
    this.lastSampleTime = now;

    const { x, y } = this.getCanvasCoordinates(event);
    const pixelData = this.samplePixel(x, y);

    if (!pixelData) {
      this.tooltip.hide();
      return;
    }

    this.tooltip.update(pixelData);
    this.tooltip.show();
  }

  handleMouseLeave() {
    this.tooltip.hide();
  }
}