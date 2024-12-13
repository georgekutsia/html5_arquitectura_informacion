document.addEventListener("DOMContentLoaded", () => {
        const buttonSolteros$$ = document.querySelector("button:nth-child(2)");
        const buttonParejas$$ = document.querySelector("button:nth-child(3)");
        const buttonFormula$$ = document.querySelector("button:nth-child(4)");
        const buttonLogin$$ = document.querySelector(".loader2"); // Corregido
        const solterosBox$$ = document.getElementById("solteros-box");
        const historiasFelicesBox$$ = document.getElementById("historias-felices-box");
        const formulariosBox$$ = document.getElementById("formularios-box");
        const loginBox$$ = document.getElementById("login-box");
      
        buttonSolteros$$.addEventListener("click", () => {
          solterosBox$$.style.display = "block"; 
          historiasFelicesBox$$.style.display = "none";
          formulariosBox$$.style.display = "none"; 
          loginBox$$.style.display = "none"; 
        });
      
        buttonParejas$$.addEventListener("click", () => {
          historiasFelicesBox$$.style.display = "block"; 
          formulariosBox$$.style.display = "none"; 
          solterosBox$$.style.display = "none"; 
          loginBox$$.style.display = "none"; 
        });
      
        buttonFormula$$.addEventListener("click", () => {
          formulariosBox$$.style.display = "flex"; 
          historiasFelicesBox$$.style.display = "none"; 
          solterosBox$$.style.display = "none"; 
          loginBox$$.style.display = "none"; 
        });
      
        buttonLogin$$.addEventListener("click", () => {
          loginBox$$.style.display = "block"; 
          historiasFelicesBox$$.style.display = "none"; 
          solterosBox$$.style.display = "none"; 
          formulariosBox$$.style.display = "none";
        });
      });
      

document.addEventListener("DOMContentLoaded", () => {
        const formulario = document.getElementById("miFormulario");
      
        formulario.addEventListener("submit", (event) => {
          event.preventDefault(); 
          alert("¡Buen intento! Me gusta que seas curioso... "); 
        });
      });
      