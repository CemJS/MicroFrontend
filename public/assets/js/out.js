(() => {
  // CemJS.ts
  var display = ({ tag, data, children }) => {
    const $app = document.getElementById("app");
    const $el = document.createElement(tag);
    const $children = document.createTextNode(children);
    $el.appendChild($children);
    $app.appendChild($el);
  };
  var Cemjsx = (tag, data, children) => {
    console.log("=d014e9=", tag, data, children);
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
    return /* @__PURE__ */ Cemjsx("div", null, "\u041F\u0440\u0438\u0432\u0435\u0442 CemJS!");
  };

  // src/index.ts
  var micro = {
    name: "MicroTest",
    loader,
    display: display2
  };

  // app.tsx
  load(micro);
})();
