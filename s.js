// Scroll Navbar Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  const data = {
    weekly: {
        mealsSaved: "1,245",
        mealsDesc: "Equivalent to 622 kg of food",
        co2Prevented: "2.8",
        co2Desc: "Equivalent to 12 trees planted",
        peopleFed: "415",
        peopleDesc: "Across 18 participating NGOs",
        activeDonors: "98",
        donorsDesc: "Including 32 restaurants and caterers"
    },
    monthly: {
        mealsSaved: "5,890",
        mealsDesc: "Equivalent to 2,945 kg of food",
        co2Prevented: "11.5",
        co2Desc: "Equivalent to 48 trees planted",
        peopleFed: "2,300",
        peopleDesc: "Across 50 participating NGOs",
        activeDonors: "150",
        donorsDesc: "Including 70 restaurants and caterers"
    },
    yearly: {
        mealsSaved: "72,450",
        mealsDesc: "Equivalent to 36,225 kg of food",
        co2Prevented: "140",
        co2Desc: "Equivalent to 580 trees planted",
        peopleFed: "27,000",
        peopleDesc: "Across 120 participating NGOs",
        activeDonors: "600",
        donorsDesc: "Including 250 restaurants and caterers"
    }
};

function switchTab(period) {
    document.getElementById('meals-saved').innerText = data[period].mealsSaved;
    document.getElementById('meals-desc').innerText = data[period].mealsDesc;
    document.getElementById('co2-prevented').innerText = data[period].co2Prevented;
    document.getElementById('co2-desc').innerText = data[period].co2Desc;
    document.getElementById('people-fed').innerText = data[period].peopleFed;
    document.getElementById('people-desc').innerText = data[period].peopleDesc;
    document.getElementById('active-donors').innerText = data[period].activeDonors;
    document.getElementById('donors-desc').innerText = data[period].donorsDesc;

    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

  