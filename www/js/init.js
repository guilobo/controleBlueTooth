  M.AutoInit();
  var modalDosBT = M.Modal.getInstance(document.querySelector("#menu-bt"));
  var tabs = M.Tabs.getInstance(document.querySelector(".tabs"));

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
}

$("#terminal").attr("style", "height:"+(screen.height-175)+"px");
