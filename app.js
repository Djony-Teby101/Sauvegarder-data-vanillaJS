const form=document.getElementById("registration-form");
const nameInput= document.getElementById("name");
const emailInput= document.getElementById("email");
const imageInput= document.getElementById("image");

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const formData=new FormData(form);
    
    const data={
        name:nameInput.value,
        email:emailInput.value,
        // image: URL.createObjectURL(formData.get("image")),
    };
    saveDataToJsonFile(data);
});

// vider les Champs du formulaire.
nameInput.value="";
emailInput.value="";
imageInput.value="";


// Fonction de sauvegarde des données.
function saveDataToJsonFile(data){

    const jsonData=JSON.stringify(data, null, 2);
    const blob=new Blob([jsonData], {type: "application/json"});
    const url= URL.createObjectURL(blob);


    // Télecharger le fichier `data.json`.
    const a= document.createElement("a");
    a.href=url;
    a.download="data.json";
    a.click();

}