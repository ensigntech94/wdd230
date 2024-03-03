const select = document.querySelector('select');
const hidden = document.querySelector('#timestamp')
const benefit = document.querySelector('.benefits')

console.log(hidden.value = Date.now())

benefit.style.display = 'none';

select.addEventListener('change', ()=> {
    benefit.style.display = 'block'
    if (select.value === 'npmembership') {
        benefit.textContent = "Unlock the gateway to essential features, curated content, vibrant community interaction, timely updates, accessible pricing, trial experiences, personalized settings, exclusive offers, basic support, and a pathway to progression with our base membership."
    }

    else if (select.value === 'bronzememebership') {
        benefit.textContent = "Experience the next level with our Bronze Membership, offering expanded features, curated content, community engagement, timely updates, affordable pricing, trial experiences, personalized settings, exclusive offers, dedicated support, and a pathway to further advancement."
    }

    else if (select.value === "silvermembership") {
        benefit.textContent = "Elevate your experience with our Silver Membership, providing enhanced features, curated content, vibrant community engagement, timely updates, competitive pricing, trial opportunities, personalized settings, exclusive perks, premium support, and a clear path to elevated benefits and rewards."
    }

    else if (select.value === 'goldmembership') {
        benefit.textContent = "Indulge in the pinnacle of membership with our Gold Membership, offering unparalleled features, meticulously curated content, dynamic community engagement, timely updates, exceptional value, exclusive trial privileges, personalized customization, premium perks, VIP support, and an illustrious path to elite status and rewards."
    }

    else if (select.value === "blank") {
        benefit.style.display = 'none'
    }
})

