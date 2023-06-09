(() => {
  // CemJS.ts
  var setDataElement = function(data, $el) {
    if (!data) {
      return;
    }
    Object.entries(data).forEach(([name, value]) => {
      $el.setAttribute(name, value);
    });
    return;
  };
  var createElement = function(node) {
    console.log("=7f44ef=", node);
    if (typeof node != "object") {
      return document.createTextNode(node);
    }
    let $el = document.createElement(node.tag);
    setDataElement(node.data, $el);
    if (typeof node.children == "object") {
      node.children.map(createElement).forEach($el.appendChild.bind($el));
    } else {
      return document.createTextNode(node.tag);
    }
    return $el;
  };
  var display = (node) => {
    const $app = document.getElementById("app");
    const newDom = createElement(node);
    console.log("=56714b=", newDom);
    $app.appendChild(newDom);
  };
  var Cemjsx = (tag, data, ...children) => {
    console.log("=c8622d=", tag, data, children);
    return { tag, data, children };
  };
  var load = async function(micro2) {
    await micro2.loader();
    const tmp = await micro2.display();
    display(tmp);
  };

  // src/loader.ts
  var loader = function() {
    console.log("=9e86d2=", "Loader");
  };

  // src/display.tsx
  var display2 = function() {
    console.log("=259a1c=", "Display");
    return /* @__PURE__ */ Cemjsx("div", { class: "test" }, /* @__PURE__ */ Cemjsx("div", { class: "test__container" }, /* @__PURE__ */ Cemjsx("div", { class: "test__content" }, "\u041F\u0440\u0438\u0432\u0435\u0442 CemJS!")));
  };

  // src/index.ts
  var micro = {
    name: "MicroTest",
    loader,
    display: display2
  };

  // app.ts
  load(micro);
})();
