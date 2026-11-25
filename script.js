function checkLover() {
    // console.log(you.value, yourCrush.value);
    if (you.value.trim() === '' || yourCrush.value.trim() === '') {
        // alert('You need to input something')
        showError.style.display = 'block';
        setTimeout(() => {
            showError.style.display = 'none';
        }, 3000);
    } else {
        const loveValue = Math.round(Math.random()*100);
        console.log(loveValue);
        if(loveValue === 100) {
            show.innerHTML = `<p class="alert alert-success p-2 text-center fw-bold my-2">${loveValue}%! Sensational, get married now</p>`;
        } else if(loveValue>=50 && loveValue<100) {
            show.innerHTML = `<p class="alert alert-warning p-2 text-center fw-bold my-2">${loveValue}%! Get to know each other more and you might work out</p>`;
        } else {
            show.innerHTML = `<p class="alert alert-danger p-2 text-center fw-bold my-2">${loveValue}%! It is a pity for you! You go just dey... just dey... just dey...</p>`;
        }
        you.value = ''
        yourCrush.value = ''
    }
};