export default class Section {
    constructor ({items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
    
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._renderedItems.forEach(item => this._renderer(item))
    }

    addItem(element) {
        this._container.append(element);
    }

    addItemToStart(element) {
        this._container.prepend(element);
    }

    setItems(items) {
        this._renderedItems = items
    }

    setRenderer(renderer) {
        this._renderer = renderer
    }
}