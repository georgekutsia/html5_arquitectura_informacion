document.addEventListener("DOMContentLoaded", () => {
  const buttonSolteros$$ = document.querySelector("button:nth-child(2)");
  const buttonParejas$$ = document.querySelector("button:nth-child(3)");
  const buttonFormula$$ = document.querySelector("button:nth-child(4)");
  const solterosBox$$ = document.getElementById("solteros-box");
  const historiasFelicesBox$$ = document.getElementById("historias-felices-box");
  const formulariosBox$$ = document.getElementById("formularios-box");

  buttonSolteros$$.addEventListener("click", () => {
          solterosBox$$.style.display = "block"; 
          historiasFelicesBox$$.style.display = "none";
          formulariosBox$$.style.display = "none"; 
  });
  buttonParejas$$.addEventListener("click", () => {
          historiasFelicesBox$$.style.display = "block"; 
          formulariosBox$$.style.display = "none"; 
          solterosBox$$.style.display = "none"; 
  });
  buttonFormula$$.addEventListener("click", () => {
          formulariosBox$$.style.display = "block"; 
          historiasFelicesBox$$.style.display = "none"; 
          solterosBox$$.style.display = "none"; 

  });
});
