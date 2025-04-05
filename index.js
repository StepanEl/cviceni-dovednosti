console.log('funguju!');

// Funkce, která aktualizuje hodnotu dovednosti
const updateSkill = (id, value) => {
    const skillElement = document.querySelector(`#${id}`); // Najde celý prvek dovednosti
    const progressBar = skillElement.querySelector('.skill__progress'); // Najde v něm posuvník
    const valueText = skillElement.querySelector('.skill__value'); // Najde text s hodnotou

    // Nastaví šířku posuvníku podle hodnoty
    progressBar.style.width = value + "%";

    // Změní text na uživatelem zadanou hodnotu
    valueText.textContent = value + " / 100";
};

// Požádáme uživatele o hodnocení a aktualizujeme stránku
const htmlSkill = Number(prompt("Jak se hodnotíš v HTML? (0-100)"));
const cssSkill = Number(prompt("Jak se hodnotíš v CSS? (0-100)"));
const jsSkill = Number(prompt("Jak se hodnotíš v JavaScriptu? (0-100)"));

// Zavoláme funkci updateSkill pro každou dovednost
updateSkill("skill1", htmlSkill);
updateSkill("skill2", cssSkill);
updateSkill("skill3", jsSkill);