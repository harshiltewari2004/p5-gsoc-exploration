export class Tooltip {
  constructor(element) {
    this.element = element;
  }

  show() {
    this.element.classList.remove("hidden");
  }

  hide() {
    this.element.classList.add("hidden");
  }

  move(clientX, clientY) {
    this.element.style.left = `${clientX + 14}px`;
    this.element.style.top = `${clientY + 14}px`;
  }

  update(data) {
    const { x, y, r, g, b, a, enabled } = data;

    this.element.innerHTML = `
      <div><strong>Eyedropper:</strong> ${enabled ? "ON" : "OFF"}</div>
      <div>x: ${x}, y: ${y}</div>
      <div>r: ${r}</div>
      <div>g: ${g}</div>
      <div>b: ${b}</div>
      <div>a: ${a}</div>
    `;
  }
}