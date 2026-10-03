import { Widget, inspect } from './core.js';
const a = new Widget('Map');
const b = new Widget('Compass');
const result = document.querySelector('#result');
function render() {
  document.querySelector('#state').textContent = JSON.stringify({ A: inspect(a), B: inspect(b), sameMethod: a.describe === b.describe }, null, 2);
}
document.querySelector('#shadow').onclick = () => {
  a.describe = function () { return `Custom: ${this.name}`; };
  result.textContent = 'A now owns a method. B still inherits the shared method.';
  render();
};
document.querySelector('#restore').onclick = () => {
  delete a.describe;
  result.textContent = 'Deleting the own method reveals the inherited method.';
  render();
};
document.querySelector('#detach').onclick = () => {
  const describe = Widget.prototype.describe;
  try { result.textContent = describe(); }
  catch (error) { result.textContent = error.message; }
};
document.querySelector('#bind').onclick = () => {
  result.textContent = Widget.prototype.describe.call(a);
};
render();
