// Menu Btns
const Btn_1_SkillsAbilities = document.querySelector(".Skills-Abilities-top-button-1");
const Btn_2_SkillsAbilities = document.querySelector(".Skills-Abilities-top-button-2");
const Btn_3_SkillsAbilities = document.querySelector(".Skills-Abilities-top-button-3");

// Pages
const Page_Skills = document.querySelector(".Skills-container");
const Page_Softwares = document.querySelector(".Softwares-container");
const Page_Abilities = document.querySelector(".Abilities-container");

// 

Btn_1_SkillsAbilities.addEventListener('click', () => {
    Page_Skills.style.display = 'flex';
    Page_Softwares.style.display = 'none';
    Page_Abilities.style.display = 'none';

    Btn_1_SkillsAbilities.style.backgroundColor = '#B26D1E';
    Btn_1_SkillsAbilities.style.color = 'white';

    Btn_2_SkillsAbilities.style.backgroundColor = 'transparent';
    Btn_2_SkillsAbilities.style.color = 'black';
    
    Btn_3_SkillsAbilities.style.backgroundColor = 'transparent';
    Btn_3_SkillsAbilities.style.color = 'black';
});
Btn_2_SkillsAbilities.addEventListener('click', () => {
    Page_Skills.style.display = 'none';
    Page_Softwares.style.display = 'flex';
    Page_Abilities.style.display = 'none';

    Btn_1_SkillsAbilities.style.backgroundColor = 'transparent';
    Btn_1_SkillsAbilities.style.color = 'black';

    Btn_2_SkillsAbilities.style.backgroundColor = '#B26D1E';
    Btn_2_SkillsAbilities.style.color = 'white';
    
    Btn_3_SkillsAbilities.style.backgroundColor = 'transparent';
    Btn_3_SkillsAbilities.style.color = 'black';
});
Btn_3_SkillsAbilities.addEventListener('click', () => {
    Page_Skills.style.display = 'none';
    Page_Softwares.style.display = 'none';
    Page_Abilities.style.display = 'flex';

    Btn_1_SkillsAbilities.style.backgroundColor = 'transparent';
    Btn_1_SkillsAbilities.style.color = 'black';

    Btn_2_SkillsAbilities.style.backgroundColor = 'transparent';
    Btn_2_SkillsAbilities.style.color = 'black';
    
    Btn_3_SkillsAbilities.style.backgroundColor = '#B26D1E';
    Btn_3_SkillsAbilities.style.color = 'white';
});