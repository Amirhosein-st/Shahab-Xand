// Menu Btns
const Btn_1_Exprience = document.querySelector(".Expriences-top-button-1");
const Btn_2_Exprience = document.querySelector(".Expriences-top-button-2");

// Pages
const Page_FullTime = document.querySelector(".Full-Time-container");
const Page_Projects = document.querySelector(".Projects-container");

// 

Btn_1_Exprience.addEventListener('click', () => {
    Page_FullTime.style.display = 'flex';
    Page_Projects.style.display = 'none';

    Btn_1_Exprience.style.backgroundColor = '#B26D1E';
    Btn_1_Exprience.style.color = 'white';

    Btn_2_Exprience.style.backgroundColor = 'transparent';
    Btn_2_Exprience.style.color = 'black';
});
Btn_2_Exprience.addEventListener('click', () => {
    Page_FullTime.style.display = 'none';
    Page_Projects.style.display = 'flex';

    Btn_1_Exprience.style.backgroundColor = 'transparent';
    Btn_1_Exprience.style.color = 'black';

    Btn_2_Exprience.style.backgroundColor = '#B26D1E';
    Btn_2_Exprience.style.color = 'white';
});