
/*-------------INSTRUCTIONS------------------*/

const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');
const thirdButton = document.getElementById('thirdButton');
const fourthButton = document.getElementById('fourthButton');
const fifthButton = document.getElementById('fifthButton');

const firstHidden = document.getElementById('firstAppear');
const secondHidden = document.getElementById('secondAppear');
const thirdHidden = document.getElementById('thirdAppear');
const fourthHidden = document.getElementById('fourthAppear');
const fifthHidden = document.getElementById('fifthAppear');



firstButton.addEventListener('click', function() {
    firstHidden.style.visibility = 'visible';
    firstHidden.style.opacity = '1';
    secondButton.style.visibility = 'visible';
    secondButton.style.opacity = '1';
    if(this.checked) {
        this.disabled = true;
    }
});
secondButton.addEventListener('click', function() {
    secondHidden.style.visibility = 'visible';
    secondHidden.style.opacity = '1';
    thirdButton.style.visibility = 'visible';
    thirdButton.style.opacity = '1';

    if(this.checked) {
        this.disabled = true;
    }
});
thirdButton.addEventListener('click', function() {
    thirdHidden.style.visibility = 'visible';
    thirdHidden.style.opacity = '1';
    fourthButton.style.visibility = 'visible';
    fourthButton.style.opacity = '1';
    if(this.checked) {
        this.disabled = true;
    }
});
fourthButton.addEventListener('click', function() {
    fourthHidden.style.visibility = 'visible';
    fourthHidden.style.opacity = '1';
    fifthButton.style.visibility = 'visible';
    fifthButton.style.opacity = '1';

    if(this.checked) {
        this.disabled = true;
    }
});
fifthButton.addEventListener('click', function() {
    fifthHidden.style.visibility = 'visible';
    fifthHidden.style.opacity = '1';
    if(this.checked) {
        this.disabled = true;
    }
});


const sideBarOne = document.getElementById('sideBarbtn-1');
const sideBarTwo = document.getElementById('sideBarbtn-2');
const sideBarThree = document.getElementById('sideBarbtn-3');

const activeOne = document.getElementById('active-1');
const activeTwo = document.getElementById('active-2');
const activeThree = document.getElementById('active-3');

const instrctnSection = document.getElementById('instrctnDefault');
const instrctnPassport = document.getElementById('passportBook');
const charactersSection = document.getElementById('charBody');

sideBarOne.addEventListener('click', function() {
    instrctnPassport.style.display = 'none';
    charactersSection.style.display = 'none';
    instrctnSection.style.display = 'inline';

    activeOne.style.color = '#fbffa7';
    activeTwo.style.color = '#D7DF26';
    activeThree.style.color = '#D7DF26';
})

sideBarTwo.addEventListener('click', function() {
    instrctnPassport.style.display = 'flex';
    instrctnSection.style.display = 'none';
    charactersSection.style.display = 'none';

    activeTwo.style.color = '#fbffa7';
    activeOne.style.color = '#D7DF26';
    activeThree.style.color = '#D7DF26';
})

sideBarThree.addEventListener('click', function() {
    instrctnPassport.style.display = 'none';
    instrctnSection.style.display = 'none';
    charactersSection.style.display = 'flex';

    activeTwo.style.color = '#D7DF26';
    activeOne.style.color = '#D7DF26';
    activeThree.style.color = '#fbffa7';
})