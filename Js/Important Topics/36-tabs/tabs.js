const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));   // converting from nodelist to arraylist.


function handleTabClick(event)
{
    // hide all tab panels.
    tabPanels.forEach(panel => {panel.hidden = true;});

    // mark all tab as unselected.
    tabButtons.forEach(tab => {
        
        tab.setAttribute('aria-selected',false);
    });

    // mark this tab as selected.
    event.currentTarget.setAttribute('aria-selected',true);
    
    // find the associated tabpanel and display it.
    const {id} = event.currentTarget;
    //Method 1
    /*
    
    const tabpanel = tabs.querySelector(`[aria-label="${id}"`);
    console.log(tabpanel);
    tabpanel.hidden = false;
    */


    //Method 2 -find the arrays of tabPanels.   But tabPanels is a nodeList.
    const tabpa = tabPanels.find(panel => panel.getAttribute('aria-label') === id);
    tabpa.hidden = false;
}

// adding event listener to all the tabs.
tabButtons.forEach(button => button.addEventListener('click',handleTabClick))