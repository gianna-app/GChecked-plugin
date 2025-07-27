function GChecked(g) {
let methods = {
    checkOn(selector) {
      this.dom(selector).forEach((data,index) => {
data.checked = true;
      });
    },
    checkOff(selector) {
      this.dom(selector).forEach((data,index) => {
data.checked = false;
      });
    }
};
return methods;
}
$g.addPlugin("GChecked",GChecked);