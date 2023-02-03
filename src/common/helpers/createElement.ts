function createElement({
  tag,
  classList,
  text,
  id,
  attributes,
}: {
  tag: string;
  classList?: string | string[];
  text?: string;
  id?: string;
  attributes?: { [key: string]: string };
}): HTMLElement {
  const newElem = document.createElement(tag);

  if (classList) {
    if (typeof classList === 'string') {
      newElem.classList.add(classList);
    } else {
      newElem.classList.add(...classList);
    }
  }

  if (text) {
    newElem.innerText = text;
  }

  if (id) {
    newElem.id = id;
  }

  if (attributes) {
    Object.keys(attributes).forEach((key) => {
      newElem.setAttribute(key, attributes[key]);
    });
  }

  return newElem;
}

export default createElement;
