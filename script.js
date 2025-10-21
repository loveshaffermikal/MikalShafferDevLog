//practice
let username = "Mikal ";
let number = 5;
console.log(username + number);
let numbers = 6;
let x = number + numbers;
console.log(x);
let one = 1;
let z = numbers + one;
console.log(z);

function add(a, b) {
    let sum = a + b;
    console.log(sum);
}
add(22, 33);

//dynamize Da log
let entryCounter = 2; // Starting at 2 since i have 2 entries already

// DOM to load(document object model )
document.addEventListener('DOMContentLoaded', function() {
    
    //button elements
    const addEntryBtn = document.getElementById('add-entry-btn');
    const toggleViewBtn = document.getElementById('toggle-view-btn');
    const devlogContainer = document.getElementById('devlog');
    
    //new entry button thing
    addEntryBtn.addEventListener('click', function() {
        entryCounter++;
        
        //make new entry
        const newEntry = document.createElement('article');
        newEntry.className = 'log-entry';
        
        //current date
        const today = new Date();
        const dateString = today.getFullYear() + '-' + 
                          String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                          String(today.getDate()).padStart(2, '0');
        
        //new entry content
        newEntry.innerHTML = `
            <h3>Entry #${entryCounter}</h3>
            <p class="date">Date: ${dateString}</p>
            <p class="author">Author: ${username}</p>
            <div class="entry-content">
                <h4>New Development Entry</h4>
                <p>I cant figure how to add my own journaling section so im over this for now.</p>
                <p>Entry number: ${entryCounter}</p>
            </div>
        `;
        
        //add to its own container container
        devlogContainer.appendChild(newEntry);
        
        //scroll to new entry
        newEntry.scrollIntoView({ behavior: 'smooth' });
        
        console.log(`Added new entry #${entryCounter}`);
    });
    
    //view Button
    let isCompactView = false;
    
    toggleViewBtn.addEventListener('click', function() {
        const entries = document.querySelectorAll('.log-entry');
        
        if (!isCompactView) {
            //compact view
            entries.forEach(entry => {
                const content = entry.querySelector('.entry-content');
                if (content) {
                    content.style.display = 'none';
                }
                entry.style.padding = '1rem';
            });
            toggleViewBtn.textContent = 'Expand View';
            isCompactView = true;
            console.log('Switched to compact view');
        } else {
            //full view
            entries.forEach(entry => {
                const content = entry.querySelector('.entry-content');
                if (content) {
                    content.style.display = 'block';
                }
                entry.style.padding = '1.5rem';
            });
            toggleViewBtn.textContent = 'Toggle View';
            isCompactView = false;
            console.log('Switched to full view');
        }
    });
    
    //hover effects
    const entries = document.querySelectorAll('.log-entry');
    entries.forEach(entry => {
        entry.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        });
        
        entry.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        });
    });

    //Plans to add more functions and design features.
    //add anitmated & interactive loading screens.
    //add live editing and commenting
    //add upload feature
    //add live stream for progress observation
    //add persistence


    console.log('GG');
});