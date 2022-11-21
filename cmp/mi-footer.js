class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2022
        Herrera Rodriguez Mariana.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
