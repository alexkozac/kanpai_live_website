

document.addEventListener('DOMContentLoaded', function () {
    // Modal
    const modal = document.getElementById('eventModal');
    const modalContent = document.getElementById('modalContent');
    const closeModalBtn = document.getElementById('closeModalBtn');
  
    // Event cards
    const eventCards = document.querySelectorAll('.event-card');
  
    // Event listeners
    eventCards.forEach(card => {
      card.addEventListener('click', () => {
        const eventName = card.querySelector('h3').innerText;
        const eventDescription = card.querySelector('p').innerText;
  
        modalContent.innerHTML = `
          <h2>${eventName}</h2>
          <p>${eventDescription}</p>
          <button class="btn" onclick="registerForEvent('${eventName}')">Register</button>
        `;
  
        modal.style.display = 'block';
      });
    });
  
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // Gallery
    const galleryImages = document.querySelectorAll('.image-gallery img');
  
    galleryImages.forEach(image => {
      image.addEventListener('click', () => {
        const imageUrl = image.src;
        openImageModal(imageUrl);
      });
    });
  
    // Schedule
    const scheduleItems = document.querySelectorAll('.schedule-item');
  
    scheduleItems.forEach(item => {
      item.addEventListener('click', () => {
        const eventName = item.querySelector('h3').innerText;
        const eventDate = item.querySelector('p:nth-child(2)').innerText;
        const eventLocation = item.querySelector('p:nth-child(3)').innerText;
  
        modalContent.innerHTML = `
          <h2>${eventName}</h2>
          <p>Date: ${eventDate}</p>
          <p>Location: ${eventLocation}</p>
          <button class="btn" onclick="registerForEvent('${eventName}')">Register</button>
        `;
  
        modal.style.display = 'block';
      });
    });
  
    // Team
    const teamMembers = document.querySelectorAll('.team-member');
  
    teamMembers.forEach(member => {
      member.addEventListener('click', () => {
        const memberName = member.querySelector('h3').innerText;
        const memberRole = member.querySelector('p').innerText;
  
        modalContent.innerHTML = `
          <img src="${member.querySelector('img').src}" alt="${memberName}">
          <h2>${memberName}</h2>
          <p>${memberRole}</p>
        `;
  
        modal.style.display = 'block';
      });
    });
  
    // Subscribe Form
    const subscribeForm = document.getElementById('subscribeForm');
    subscribeForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      alert(`Thank you for subscribing! We will keep you updated at ${email}.`);
      subscribeForm.reset();
    });
  });
  
  function openImageModal(imageUrl) {
    modalContent.innerHTML = `
      <img src="${imageUrl}" alt="Gallery Image">
    `;
  
    modal.style.display = 'block';
  }
  
  function registerForEvent(eventName) {
    alert(`You are now registered for ${eventName}. We will send you more details soon.`);
    document.getElementById('closeModalBtn').click(); // Close the modal after registration
  }


  // Background Animation
anime({
    targets: '.background-animation',
    backgroundColor: ['#da70d6', '#92128e'],
    easing: 'easeInOutQuad',
    duration: 2000,
    loop: true
  });
  


  document.addEventListener('DOMContentLoaded', function () {
    const eventCards = document.querySelectorAll('.event-card');
    const filters = document.querySelectorAll('.filter');

    // Function to filter events based on category
    function filterEvents(category) {
        eventCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Event listener for filter links
    filters.forEach(filter => {
        filter.addEventListener('click', function (event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            filterEvents(category);

            // Highlight the active filter
            filters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Initial population of events (show all)
    filterEvents('all');


});


  
  



  
  