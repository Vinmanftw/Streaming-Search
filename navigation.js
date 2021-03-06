let curIndex = 1;

// creates an eventlistener at a given location
function navigation() {
  document.querySelector("#next").addEventListener("click", () => {
    curIndex++;

    console.log("right");
    fetchAndRender({
      provider: "netflix",
      page: curIndex,
    });
  });

  document.querySelector("#back").addEventListener("click", () => {
    if (curIndex > 1) {
      curIndex--;
      console.log("left");
      fetchAndRender({
        provider: "netflix",
        page: curIndex,
      });
    }
  });

  document.querySelector("#search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const value = document.querySelector("#search-input").value;
    console.log(value);
    curIndex = 1;
    fetchAndRender({
      provider: "netflix",
      page: curIndex,
      keyword: value,
    });
  });

  document.querySelector("#home").addEventListener("click", () => {
    (curIndex = 1),
      fetchAndRender({
        provider: "netflix",
        page: curIndex,
      });
  });

  document.querySelector("#random").addEventListener("click", () => {
    let shuffle = Math.floor(Math.random() * 84 + 1);
    if(shuffle!= curIndex){
      fetchAndRender({
        provider: "netflix",
        page: shuffle,
      });
    }
  });
}
