let showElemnet = () => {
  let myChildren = document.querySelectorAll(".child");
  myChildren.forEach((child) => {
    let flag = true;
    let draw = () => {
      myChildren.forEach((child) => {
        child.children[1].classList.remove("show");
        child.children[0].children[1].innerHTML = "+";
      });
      if (flag) {
        child.children[1].classList.add("show");
        child.children[0].children[1].innerHTML = "-";
      } else {
        child.children[1].classList.remove("show");
        child.children[0].children[1].innerHTML = "+";
      }

      flag = !flag;
    };
    child.addEventListener("click", draw);
  });
};

showElemnet();
