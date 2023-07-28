window.addEventListener('DOMContentLoaded', ()=>{
    const tabHeaderItem = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabHeader = document.querySelector('.tabheader');
    
    function hideTabContent(){
        tabsContent.forEach(item =>{
            item.style.display = 'none';
        });
        tabHeaderItem.forEach(item =>{
            item.classList.remove('tabheader__item_active');
        })
    }
    function showTabContent(i = 0){
        tabsContent[i].style.display = 'block';
        tabHeaderItem[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();  

    tabHeader.addEventListener('click', (event)=>{
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')){
            tabHeaderItem.forEach((item, i)=>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
})