// Instance data belongs to each widget; behavior lives on the prototype.
export function Widget(name) {
  if (typeof name !== 'string' || !name.trim()) throw new TypeError('A name is required.');
  this.name = name.trim();
}
Widget.prototype.describe = function () {
  if (!(this instanceof Widget)) throw new TypeError('describe needs a Widget receiver.');
  return `Widget: ${this.name}`;
};
export function inspect(widget) {
  return {
    name: widget.name,
    ownsName: Object.hasOwn(widget, 'name'),
    ownsDescribe: Object.hasOwn(widget, 'describe'),
    description: widget.describe(),
  };
}
