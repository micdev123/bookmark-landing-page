// Mobile_Navigation
const menu__bar = document.querySelector('.menu__bar');
const close__bar = document.querySelector('.close__bar');
const nav__list = document.querySelector('.nav__lists')

menu__bar.addEventListener('click', () => {
    console.log('text');
    nav__list.classList.add('visible')
})

close__bar.addEventListener('click', () => {
    nav__list.classList.remove('visible')
})


// Tabs
const tabs = document.querySelectorAll('.tab')
const tab_contents = document.querySelectorAll('.tab_content');
const accordion_arrow1 = document.querySelectorAll('.arrow1_btn')
const accordion_arrow2 = document.querySelectorAll('.arrow2_btn')
const accordion_contents = document.querySelectorAll('.accordion_content')

const tabs_Accordion =  document.querySelectorAll('.accordion_tab')

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        let target_tab = e.target;
        // Calling changeActiveTab
        changeActiveTab(target_tab)

        tab_contents.forEach((tab_content) => {
            if (tab_content.classList.contains(target_tab.attributes.id.value)) {
                tab_content.classList.add('active');
                // console.log('nope');
            }
            else {
                tab_content.classList.remove('active');
                // console.log('yeah');
            }
        })
    })
})

function changeActiveTab(tab) {
    // Removing active class from all tabs
    for (const tab of tabs) {
        tab.classList.remove('active')
    }

    // Only add active to target tab
    tab.classList.add('active');
}


accordion_arrow1.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        let target_tab = e.target
        let parent = target_tab.parentElement.parentElement.parentElement
        // console.log(parent);
        changeVisibleTab(parent)
        accordion_contents.forEach((content) => {
            if (content.classList.contains(parent.id)) {
               content.classList.add('visible')
            }
            else {
                content.classList.remove('visible')
            }
        })
        
    })
})

function changeVisibleTab(parent) {
    // Removing active class from all tabs
    for (const tab_ of tabs_Accordion) {
        tab_.classList.remove('active')
    }

    parent.classList.add('active')
    tabs_Accordion.forEach((tab) => {
        if (tab.classList.contains('active')) {
            tab.querySelector('.arrow1').classList.add('hidden')
            tab.querySelector('.arrow2').classList.add('visible')
        }
        else {
            tab.querySelector('.arrow1').classList.remove('hidden')
            tab.querySelector('.arrow2').classList.remove('visible')
        }
    })
    
}



accordion_arrow2.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        let target_tab = e.target
        let parent = target_tab.parentElement.parentElement.parentElement
        // console.log(parent);
        changeVisibleArrow2(parent)
        accordion_contents.forEach((content) => {
            if (content.classList.contains(parent.id)) {
               content.classList.remove('visible')
            }
            else {
                // content.classList.add('visible')
            }
        })
        
    })
})

function changeVisibleArrow2(parent) {
    // Removing active class from all tabs
    for (const tab_ of tabs_Accordion) {
        tab_.classList.remove('active')
    }

    parent.classList.add('active')
    tabs_Accordion.forEach((tab) => {
        if (tab.classList.contains('active')) {
            tab.querySelector('.arrow1').classList.remove('hidden')
            tab.querySelector('.arrow2').classList.remove('visible')
        }
        // else {
        //     tab.querySelector('.arrow1').classList.add('hidden')
        //     tab.querySelector('.arrow2').classList.add('visible')
        // }
    })
    
}


const form = document.querySelector("form");
const eInput = form.querySelector(".input");
const text = form.querySelector(".text");
const error_icon = form.querySelector('.error_icon');
const form_btn = form.querySelector('.form_btn')


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 

    if(eInput.value == ""){
        text.innerText = "Email can't be blank";
        text.classList.add('visible')
        eInput.classList.add('error')
        error_icon.style.visibility = 'visible'
        form_btn.style.marginTop = '20px'
    }
    else if (!eInput.value.match(pattern)) {
        text.innerText = "whoops, make sure it's an email";
        text.classList.add('visible')
        error_icon.style.visibility = 'visible'
        eInput.classList.add('error')
        form_btn.style.marginTop = '20px'
    }
    else {
        text.innerText = "";
        text.classList.remove('visible')
        error_icon.classList.remove('.visible')
        eInput.classList.remove('error')
        eInput.value = ""
    }
    
});