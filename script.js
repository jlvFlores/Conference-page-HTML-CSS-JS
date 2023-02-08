const screenSize = window.matchMedia('(max-width: 767px)');
const navMenuListItems = document.querySelectorAll('nav > *');
const header = document.querySelector('header');

const guestContainer = document.querySelector('.guest-container');
const guestArray = [
  {
    name: 'Jim Carrey',
    job: 'World\'s funniest person',
    description: 'My favorite actor and in my totally biased opinion the funniest one, and most sophisticated one.',
    image: 'https://cdn.britannica.com/84/200584-050-7EC3F3F6/Jim-Carrey-2012.jpg',
  },
  {
    name: 'Will Smith',
    job: 'Once rapper, now slapper',
    description: 'Outside the movies where he\'s a cop, or he\'s killing aliens, or he\'s a cop killing aliens, he also kills zombies and robots.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/220px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg',
  },
  {
    name: 'Leonardo DiCaprio',
    job: 'Pretty white boy',
    description: 'Always plays the role of a poor or rich charismatic, failed romantic.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg',
  },
  {
    name: 'Johnny Depp',
    job: 'Will always be Captain Jack Sparrow',
    description: 'He\'s the first man to win an argument against a woman.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Johnny_Depp_2020.jpg/640px-Johnny_Depp_2020.jpg',
  },
  {
    name: 'Robert Downey Jr.',
    job: 'Philanthropist millionaire playboy',
    description: 'The best avenger in the MCU.',
    image: 'https://pbs.twimg.com/media/EuyEg43XEAQsE7y.jpg',
  },
  {
    name: 'Danny Devito',
    job: 'Short king',
    description: 'It\'s Danny Devido he doesn\'t need any other explinations.',
    image: 'https://faroutmagazine.co.uk/static/uploads/1/2022/12/How-Danny-DeVito-joined-Its-Always-Sunny-in-Philadelphia.jpeg',
  },
];

function toggleMenu() {
  if (screenSize.matches) {
    header.classList.toggle('drawer');
    navMenuListItems.forEach((element) => element.classList.toggle('hide'));
  }
}

if (guestContainer) {
  guestArray.forEach((guest) => {
    guestContainer.insertAdjacentHTML('beforeend', `
      <div class="guest-card">
        <div class="guest-image">
          <img src="${guest.image}" alt="${guest.name}">
        </div>
        <div class="guest-info">
          <h3>${guest.name}</h3>
          <p class="job-desc orange">${guest.job}</p>
          <p class="guest-desc gray">${guest.description}</p>
        </div>
      </div>`);
  });
}

navMenuListItems.forEach((element) => element.addEventListener('click', toggleMenu));
