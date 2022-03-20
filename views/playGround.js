const button = document.querySelector('input');

function showAdded () {
    if (button.value === 'Add Date') {
        button.onclick('Added Date'); 
    } else {
        alert('try again');
    }
}