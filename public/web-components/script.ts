export class ShadowElement extends HTMLElement {
  // constructor() {
  //   super();
  // }

  connectedCallback() {
    // シャドウルートを生成
    const shadow = this.attachShadow({ mode: "open" });

    // span 要素を生成
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");
    wrapper.innerText = "hoge";

    shadow.appendChild(wrapper);
  }
}

customElements.define("shadow-element", ShadowElement);
