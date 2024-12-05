const button = document.getElementById('changeColor'); 
const paragraph = document.getElementById('text'); 
    
button.addEventListener('click', function() {
    if (paragraph.style.color === 'blue') {
        paragraph.style.color = 'black'; 
    } else {
        paragraph.style.color = 'blue'; 
    }
}); 



const buttonHover = document.getElementById('hoverButton'); // Ambil tombol dengan ID 'hoverButton'
const hoverMessage = document.getElementById('hoverMessage'); // Ambil paragraf dengan ID 'hoverMessage'

// Tambahkan event listener untuk 'mouseover'
buttonHover.addEventListener('mouseover', function() {
    hoverMessage.textContent = 'Mouse is over the button!'; // Tampilkan pesan
});

// Tambahkan event listener untuk 'mouseout' agar menghapus pesan setelah mouse keluar
buttonHover.addEventListener('mouseout', function() {
    hoverMessage.textContent = ''; // Bersihkan pesan
});



const inputField = document.getElementById('textInput'); 
const message = document.getElementById('keyMessage');   

inputField.addEventListener('keydown', function(event) {
    message.textContent = `Last key pressed: ${event.key}`; 
});


const inputElement = document.getElementById('itemInput');  
const addButton = document.getElementById('addItemBtn');   
const listContainer = document.getElementById('listContainer');  

addButton.addEventListener('click', function() {
    const itemText = inputElement.value.trim();  
    if (itemText !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = itemText;  
        listContainer.appendChild(newItem);
        inputElement.value = '';
    } else {
        alert("Please enter a valid item!");
    }
});



