document.addEventListener("DOMContentLoaded", () => {
  const buttonSolteros$$ = document.querySelector("button:nth-child(1)");
  const solterosBox$$ = document.getElementById("solteros-box");

  buttonSolteros$$.addEventListener("click", () => {
      if (solterosBox$$.style.display === "none" || solterosBox$$.style.display === "") {
          solterosBox$$.style.display = "block"; 
      } else {
          solterosBox$$.style.display = "none"; 
      }
  });
});
