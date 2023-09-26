let titre = document.getElementById('titre');
let fuse = document.querySelector('.content-fusee');
let fusee = document.getElementById('fusee');

window.addEventListener('scroll', () => {
    let value= window.scrollY;

    titre.style.marginTop = value * -1.5 +'px';
    fuse.style.marginTop= value *  -0.5 + 'px';
    fuse.style.marginRight= value *  -0.5 + 'px';
    fusee.style.marginTop = value *  -1.0 + 'px';
    fusee.style.marginRight = value *  1.5 + 'px';

})