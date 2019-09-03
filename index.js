let title = document.querySelector('h1')
title.textContent = 'Where did Egypts grass go?';
title.style.color = 'red';
title.style.fontSize = '5rem';

let image = document.querySelector('img')
image.src = "http://2.bp.blogspot.com/-q0RU7Y3n-F8/V0XCXr_cQNI/AAAAAAAAARc/-b09eccsy4g1o7vcfdofuAfaMJJmK4HeACK4B/s1600/10-PC288694-pyramid-green-f.jpg";

image.addEventListener('mouseenter', e => {
     image.src = 'https://cdn.mos.cms.futurecdn.net/YSPUz67egjpYReEhcApcii-650-80.jpg';
})
image.addEventListener('mouseleave', e => {
     image.src = "http://2.bp.blogspot.com/-q0RU7Y3n-F8/V0XCXr_cQNI/AAAAAAAAARc/-b09eccsy4g1o7vcfdofuAfaMJJmK4HeACK4B/s1600/10-PC288694-pyramid-green-f.jpg";
})

let background = document.querySelector('body')
background.style.backgroundImage = "url(https://images.vice.com/vice/images/articles/meta/2016/08/11/why-are-governments-putting-fluoride-in-our-water-sheeple-1470916125.jpg?crop=0.9996581196581197xw%3A1xh%3Bcenter%2Ccenter&resize=650%3A*&output-quality=55)";

let link = document.querySelector('a')
link.textContent = 'Did Egypt have grass at all?';
link.style.color = 'red';
link.style.fontSize = '5rem';