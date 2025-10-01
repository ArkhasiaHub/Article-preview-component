const classic_share_button = document.getElementById("id-share-button");
const share_button = document.getElementById("id-share-button-2");

function update_share_button_background(desktopColor) {
    const button_img = classic_share_button.querySelector('img');

    if (desktopColor) {
        classic_share_button.style.setProperty('--before-bg', "rgba(109, 127, 151, 1)");
        button_img.style.filter = "brightness(3)";
    } else {
        classic_share_button.style.setProperty('--before-bg', "rgba(109, 127, 151, 0.2)");
        button_img.style.filter = "brightness(100)";
    }
}

classic_share_button.addEventListener('click', function() {
    let classic_footer = document.getElementById("id-classic-footer");
    let share_footer = document.getElementById("id-share-footer");

    if (window.innerWidth < 1024) {
        classic_footer.style.display = 'none';
    } else {
        share_button.style.display = 'none';
        update_share_button_background(true);
    }

    if (share_footer.style.display === 'flex') {
        share_footer.style.display = 'none';
        update_share_button_background(false);
    } else {
        share_footer.style.display = 'flex';
    }
});

share_button.addEventListener('click', function() {
    let classic_footer = document.getElementById("id-classic-footer");
    let share_footer = document.getElementById("id-share-footer");

    if (window.innerWidth < 1024) {
        classic_footer.style.display = 'flex';
    }
    share_footer.style.display = 'none';
});

