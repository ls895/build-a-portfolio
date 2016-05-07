function enlarge(id) {
  id.parentElement.style.position="relative";
  id.style.width="100%";
  id.style.position="absolute";
  id.style.left="0";
  id.style.top="0";
}

function reset(id) {
  id.parentElement.style.position="static";
  id.style.width="50%";
  id.style.position="static";
}
