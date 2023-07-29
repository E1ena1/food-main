window.addEventListener('DOMContentLoaded', ()=>{
    //tabs
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


    //timer
    const timeEnd = '2023-8-20';
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60)% 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000 ) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }
    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
            days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock(){
            const t = getTimeRemaining(endtime);
            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
            if(t.total<=0){
                clearInterval(timeInterval);
            }
        }

    }
    setClock('.timer', timeEnd);
    //modal
    const modalTriger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('[data-close]');

        modalTriger.forEach(btn => {
            btn.addEventListener('click', ()=>{
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow = 'hidden';
            } );

        });
        modalClose.addEventListener('click', ()=>{
            closeModal();
            // modal.classList.add('hide');
            // modal.classList.remove('show');
            // document.body.style.overflow = '';
        });
        modal.addEventListener('click', (e)=>{
            if(e.target === modal){
                closeModal();
                // modal.classList.add('hide');
                // modal.classList.remove('show');
                // document.body.style.overflow = '';
            }
        });
        document.addEventListener('keydown', (e)=>{
            if(e.code === 'Escape') {
                closeModal();
                // modal.classList.add('hide');
                // modal.classList.remove('show');
                // document.body.style.overflow = '';
            }
        })
        function closeModal() {
                modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow = '';
        }
});
