$(document).ready(function(){

    let upperSlider = $('#upperSliderContainer .upperSlider');
    let lowerSlider = $('#lowerSliderContainer .lowerSlider');

    let upperSliderImages = $('#upperSliderContainer .upperSlider li').children();
    let lowerSliderImages = $('#lowerSliderContainer .lowerSlider li').children();

    const slideUpperNumber = upperSliderImages.length;
    const slideLowerNumber = lowerSliderImages.length; 
    const margin = 10;

    let upperIndex = slideUpperNumber - 3;
    let lowerIndex = slideLowerNumber - 3;

    let upperAppendIndex = 0;
    let lowerAppendIndex = 0;

    let arrowsEnabled = true;

    $('#leftArrow').click(function() {
        if (!arrowsEnabled) return;
        arrowsEnabled = false;

        let imageUpperWidth = upperSliderImages[upperIndex+1].width;
        let imageLowerWidth = lowerSliderImages[lowerIndex+1].width;

        console.log(imageUpperWidth);

        upperSlider.animate({'left': '-=' + (imageUpperWidth + margin)}, 600, function(){
            upperSlider.append(upperSliderImages[upperAppendIndex]);
            upperSlider.css({'left': '+=' + (imageUpperWidth + margin + 25)});
        });
    
        lowerSlider.animate({'left': '-=' + (imageLowerWidth + margin)}, 600, function(){
            lowerSlider.append(lowerSliderImages[lowerAppendIndex]); 
            lowerSlider.css({'left': '0px'});
        });

        upperIndex++;
        lowerIndex++;

        upperAppendIndex++;
        lowerAppendIndex++;

        if(upperIndex == slideUpperNumber - 1){
            upperIndex = 0;
        }

        if(lowerIndex == slideLowerNumber - 1){
            lowerIndex = 0;
        }

        if(upperAppendIndex == slideUpperNumber - 1){
            upperAppendIndex = 0;
        }

        if(lowerAppendIndex == slideLowerNumber - 1){
            lowerAppendIndex = 0;
        }

        console.log(upperIndex);
        console.log(lowerIndex);

        setTimeout(() => {
            arrowsEnabled = true;
        }, 500);
    });

    $('#rightArrow').click(function() {
        if (!arrowsEnabled) return;
        arrowsEnabled = false;

        let imageUpperWidth = upperSliderImages[upperIndex+1].width;
        let imageLowerWidth = lowerSliderImages[lowerIndex+1].width;

        console.log(imageUpperWidth);

        upperSlider.animate({'left': '+=' + (imageUpperWidth + margin)}, 600, function(){
            upperSlider.prepend(upperSliderImages[upperAppendIndex]);
            upperSlider.css({'left': '-=' + (imageUpperWidth + margin + 25)});
        });
    
        lowerSlider.animate({'left': '+=' + (imageLowerWidth + margin)}, 600, function(){
            lowerSlider.prepend(lowerSliderImages[lowerAppendIndex]); 
            lowerSlider.css({'left': '0px'});
        });

        upperIndex++;
        lowerIndex++;

        upperAppendIndex++;
        lowerAppendIndex++;

        if(upperIndex == slideUpperNumber - 1){
            upperIndex = 0;
        }

        if(lowerIndex == slideLowerNumber - 1){
            lowerIndex = 0;
        }

        if(upperAppendIndex == slideUpperNumber - 1){
            upperAppendIndex = 0;
        }

        if(lowerAppendIndex == slideLowerNumber - 1){
            lowerAppendIndex = 0;
        }

        console.log(upperIndex);
        console.log(lowerIndex);

        setTimeout(() => {
            arrowsEnabled = true;
        }, 500);
    }); 
    
});