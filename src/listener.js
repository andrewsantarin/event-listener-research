export function getListenerElement(id = "") {
  return document.getElementById(id);
}

/**
 * @param {TouchEvent | MouseEvent} event
 */
const defaultHandler = event => {};

/**
 * @param {string} id
 * @param {(event: TouchEvent | MouseEvent) => void} handler
 */
export function listen(id = "", handler = defaultHandler) {
  const element = getListenerElement(id);
  element.addEventListener("touchstart", handler);
  element.addEventListener("touchmove", handler);
  element.addEventListener("touchend", handler);
  element.addEventListener("mousemove", handler);
  element.addEventListener("mousedown", handler);
  element.addEventListener("mouseup", handler);
  element.addEventListener("click", handler);
  element.addEventListener("contextmenu", handler);
  element.addEventListener("focus", handler, {
    capture: true
  });
}

/**
 * @param {string} id
 * @param {(event: TouchEvent | MouseEvent) => void} handler
 */
export function unlisten(id = "", handler = defaultHandler) {
  const element = getListenerElement(id);
  element.removeEventListener("touchstart", handler);
  element.removeEventListener("touchmove", handler);
  element.removeEventListener("touchend", handler);
  element.removeEventListener("mousemove", handler);
  element.removeEventListener("mousedown", handler);
  element.removeEventListener("mouseup", handler);
  element.removeEventListener("click", handler);
  element.removeEventListener("contextmenu", handler);
  element.removeEventListener("focus", handler, {
    capture: true
  });
}
