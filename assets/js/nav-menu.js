// Menu Btns
const Btn_1_menu = document.querySelector(".Btn-1-menu");
const Btn_2_menu = document.querySelector(".Btn-2-menu");
const Btn_3_menu = document.querySelector(".Btn-3-menu");
const Btn_4_menu = document.querySelector(".Btn-4-menu");
const Btn_5_menu = document.querySelector(".Btn-5-menu");
const Btn_6_menu = document.querySelector(".Btn-6-menu");

// Pages
const Page_AboutMe = document.querySelector(".about-me-container");
const Page_Expriences = document.querySelector(".Expriences-container");
const Page_SkillsAbilities = document.querySelector(".Skills-Abilities-container");
const Page_CaseStudies = document.querySelector(".Case-Studies-cntainer");
const Page_VisualPortfolio = document.querySelector(".Visual-Portfolio-container");

// آموزشی

Btn_1_menu.addEventListener('click', () => {
    Page_AboutMe.style.display = 'flex';
    Page_Expriences.style.display = 'none';
    Page_SkillsAbilities.style.display = 'none';
    Page_CaseStudies.style.display = 'none';
    Page_VisualPortfolio.style.display = 'none';

    Btn_1_menu.style.backgroundColor = '#B26D1E';
    Btn_1_menu.style.color = 'white';

    Btn_2_menu.style.backgroundColor = 'transparent';
    Btn_2_menu.style.color = 'var(--color-xsite-1)';
    
    Btn_3_menu.style.backgroundColor = 'transparent';
    Btn_3_menu.style.color = 'var(--color-xsite-1)';

    Btn_4_menu.style.backgroundColor = 'transparent';
    Btn_4_menu.style.color = 'var(--color-xsite-1)';

    Btn_5_menu.style.backgroundColor = 'transparent';
    Btn_5_menu.style.color = 'var(--color-xsite-1)';
});
Btn_2_menu.addEventListener('click', () => {
    Page_AboutMe.style.display = 'none';
    Page_Expriences.style.display = 'flex';
    Page_SkillsAbilities.style.display = 'none';
    Page_CaseStudies.style.display = 'none';
    Page_VisualPortfolio.style.display = 'none';

    Btn_1_menu.style.backgroundColor = 'transparent';
    Btn_1_menu.style.color = 'var(--color-xsite-1)';

    Btn_2_menu.style.backgroundColor = '#B26D1E';
    Btn_2_menu.style.color = 'white';
    
    Btn_3_menu.style.backgroundColor = 'transparent';
    Btn_3_menu.style.color = 'var(--color-xsite-1)';

    Btn_4_menu.style.backgroundColor = 'transparent';
    Btn_4_menu.style.color = 'var(--color-xsite-1)';

    Btn_5_menu.style.backgroundColor = 'transparent';
    Btn_5_menu.style.color = 'var(--color-xsite-1)';
});
Btn_3_menu.addEventListener('click', () => {
    Page_AboutMe.style.display = 'none';
    Page_Expriences.style.display = 'none';
    Page_SkillsAbilities.style.display = 'flex';
    Page_CaseStudies.style.display = 'none';
    Page_VisualPortfolio.style.display = 'none';

    Btn_1_menu.style.backgroundColor = 'transparent';
    Btn_1_menu.style.color = 'var(--color-xsite-1)';

    Btn_2_menu.style.backgroundColor = 'transparent';
    Btn_2_menu.style.color = 'var(--color-xsite-1)';
    
    Btn_3_menu.style.backgroundColor = '#B26D1E';
    Btn_3_menu.style.color = 'white';

    Btn_4_menu.style.backgroundColor = 'transparent';
    Btn_4_menu.style.color = 'var(--color-xsite-1)';

    Btn_5_menu.style.backgroundColor = 'transparent';
    Btn_5_menu.style.color = 'var(--color-xsite-1)';
});
Btn_4_menu.addEventListener('click', () => {
    Page_AboutMe.style.display = 'none';
    Page_Expriences.style.display = 'none';
    Page_SkillsAbilities.style.display = 'none';
    Page_CaseStudies.style.display = 'flex';
    Page_VisualPortfolio.style.display = 'none';

    Btn_1_menu.style.backgroundColor = 'transparent';
    Btn_1_menu.style.color = 'var(--color-xsite-1)';

    Btn_2_menu.style.backgroundColor = 'transparent';
    Btn_2_menu.style.color = 'var(--color-xsite-1)';
    
    Btn_3_menu.style.backgroundColor = 'transparent';
    Btn_3_menu.style.color = 'var(--color-xsite-1)';

    Btn_4_menu.style.backgroundColor = '#B26D1E';
    Btn_4_menu.style.color = 'white';

    Btn_5_menu.style.backgroundColor = 'transparent';
    Btn_5_menu.style.color = 'var(--color-xsite-1)';
});
Btn_5_menu.addEventListener('click', () => {
    Page_AboutMe.style.display = 'none';
    Page_Expriences.style.display = 'none';
    Page_SkillsAbilities.style.display = 'none';
    Page_CaseStudies.style.display = 'none';
    Page_VisualPortfolio.style.display = 'flex';

    Btn_1_menu.style.backgroundColor = 'transparent';
    Btn_1_menu.style.color = 'var(--color-xsite-1)';

    Btn_2_menu.style.backgroundColor = 'transparent';
    Btn_2_menu.style.color = 'var(--color-xsite-1)';
    
    Btn_3_menu.style.backgroundColor = 'transparent';
    Btn_3_menu.style.color = 'var(--color-xsite-1)';

    Btn_4_menu.style.backgroundColor = 'transparent';
    Btn_4_menu.style.color = 'var(--color-xsite-1)';

    Btn_5_menu.style.backgroundColor = '#B26D1E';
    Btn_5_menu.style.color = 'white';
});


// پیشرفته

// const pages = [Page_AboutMe, Page_Expriences, Page_SkillsAbilities, Page_CaseStudies, Page_VisualPortfolio];
// const buttons = [Btn_1_menu, Btn_2_menu, Btn_3_menu, Btn_4_menu, Btn_5_menu];
  
//   function updatePage(index) {
//     pages.forEach((page, i) => {
//       page.style.display = i === index ? 'flex' : 'none';
//     });
  
//     buttons.forEach((button, i) => {
//       button.style.backgroundColor = i === index ? '#B26D1E' : 'transparent';
//       button.style.color = i === index ? 'white' : 'var(--color-xsite-1)';
//     });
//   }
  
//   buttons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//       updatePage(index);
//     });
//   });


// پیشرفته تر

// const pages = [Page_AboutMe, Page_Expriences, Page_SkillsAbilities, Page_CaseStudies, Page_VisualPortfolio];
// const buttons = [Btn_1_menu, Btn_2_menu, Btn_3_menu, Btn_4_menu, Btn_5_menu];

// buttons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     pages.forEach((page, pageIndex) => {
//       page.style.display = index === pageIndex ? 'flex' : 'none';
//     });

//     buttons.forEach((btn, btnIndex) => {
//       btn.style.backgroundColor = index === btnIndex ? '#B26D1E' : 'transparent';
//       btn.style.color = index === btnIndex ? 'white' : 'var(--color-xsite-1)';
//     });
//   });
// });