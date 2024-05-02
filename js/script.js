var galleryPhotos = [
    {type: "img", src: "'gallery/Flava Fest-09.png'", href: "#somelink", title: "Lorem Ipsum"},
    {type: "img", src: "'gallery/Flava Fest-10.png'", href: "#somelink", title: "Lorem Ipsum"},
    {type: "img", src: "'gallery/Flava Fest-11.png'", href: "#somelink", title: "Lorem Ipsum"},
    {type: "img", src: "'gallery/Flava Fest-15.png'", href: "#somelink", title: "Lorem Ipsum"},
    {type: "img", src: "'gallery/Flava Fest-17.png'", href: "#somelink", title: "Lorem Ipsum"},
    {type: "img", src: "'gallery/Flava Fest-17.png'", href: "#somelink", title: "Lorem Ipsum"},
    {type: "img", src: "'gallery/Flava Fest-17.png'", href: "#somelink", title: "Lorem Ipsum"},
    {type: "img", src: "'gallery/Flava Fest-17.png'", href: "#somelink", title: "Lorem Ipsum"},
    {type: "img", src: "'gallery/Flava Fest-17.png'", href: "#somelink", title: "Lorem Ipsum"},
]

var galleryCreateImg = '<a href="%href%" class="gallery galleryImg" style="background-image: url(%src%);>'
        + '<img src="%src%" alt="%title%">'
        + '<div><span>%title%</span></div>'
        + '</a>';

var galleryCreateText = '<a href="%href%" class"gallery galleryText">'
        + '<div><span>%title%</span><span>%text%</span></div>'
        + '</a>';


var cs = "";

for(var i=0; i<galleryPhotos.length; i++) {
    var gallery = galleryPhotos[i].type =="img" ? galleryCreateImg : galleryCreateText;
    for(var k in galleryPhotos[i])
    gallery = gallery.replace(eval("/%"+k+"%/g"), galleryPhotos[i][k]);

    cs += gallery;
}

function loadGallery() {
    var galleryID = document.getElementById("gallery");
    galleryID.innerHTML = cs;
}

window.onload = loadGallery;

/*-------------INSTRUCTIONS------------------*/

const firstButton = document.getElementById('appearFirst');
const firstHidden = document.getElementById('firstAppear');

function loadFirst() {
    firstHidden.style.display = 'block';
}

firstButton.addEventListener('click', loadFirst);


