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
const tab_contents = document.querySelectorAll('.tab_content')

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

