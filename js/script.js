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

const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');
const thirdButton = document.getElementById('thirdButton');
const fourthButton = document.getElementById('fourthButton');
const fifthButton = document.getElementById('fifthButton');

const firstHidden = document.getElementById('firstAppear');
const secondHidden = document.getElementById('secondAppear');
const thirdHidden = document.getElementById('thirdAppear');
const fourthHidden = document.getElementById('fourthAppear');
const fifthHidden = document.getElementById('fifthAppear');



firstButton.addEventListener('click', function() {
    firstHidden.style.display = 'block';
    secondButton.style.visibility = 'visible';
    if(this.checked) {
        this.disabled = true;
    }
});
secondButton.addEventListener('click', function() {
    secondHidden.style.display = 'block';
    thirdButton.style.visibility = 'visible';
    if(this.checked) {
        this.disabled = true;
    }
});
thirdButton.addEventListener('click', function() {
    thirdHidden.style.display = 'block';
    fourthButton.style.visibility = 'visible';
    if(this.checked) {
        this.disabled = true;
    }
});
fourthButton.addEventListener('click', function() {
    fourthHidden.style.display = 'block';
    fifthButton.style.visibility = 'visible';
    if(this.checked) {
        this.disabled = true;
    }
});
fifthButton.addEventListener('click', function() {
    fifthHidden.style.display = 'block';
    if(this.checked) {
        this.disabled = true;
    }
});

const testCheck = document.getElementById('testCheck');

testCheck.addEventListener('change', function() {
    if(this.checked) {
        this.disabled = true;
    }
    alert("check");
});




