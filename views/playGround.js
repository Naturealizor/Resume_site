const button = document.querySelector('input');
const orgStart = document.getElementById('startingPoint');
const destination = document.getElementById('destination');
const orgMiles = document.getElementById('startingMiles');
const endMiles = document.getElementById('endingMiles');
const gasAmt = document.getElementById('gas');
const buyer = document.getElementById('whoPaid');
const misc = document.getElementById('otherExpenses');

function showAdded () {
    if (button.value === 'Add Date') {
        button.onclick('Added Date'); 
    } else {
        alert('try again');
    }
}