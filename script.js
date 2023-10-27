var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
for(var i = 0; i < navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);

        console.log(targetSection);
        
        interval = setInterval(function(){
            scrollVertically(targetSection);
        },10);

        // interval = setInterval(scrollVertically,30,targetSection);
    });
}

function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    console.log(targetSectionCoordinates);
    if(targetSectionCoordinates.top <=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);  
}   