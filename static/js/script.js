document.addEventListener('DOMContentLoaded', function(){

    const chars = {
        '_seven': '7',
        '_eight': '8',
        '_nine': '9',
        '_four': '4',
        '_five': '5',
        '_six': '6',
        '_one': '1',
        '_two': '2',
        '_three': '3',
        '_zero': '0',
        '_plus': '+',
        '_minus': '-',
        '_multiply': '*',
        '_division': '/',
    }

    const tablet = document.querySelector('.tablet div');

    let eq = '';

    function showTablet(){
        (!eq) ? eq = '0' : (eq === 'Infinity') ? eq = 'ERROR' : eq;
        tablet.innerHTML = eq;

        // масштабирование размера на табло
        (!tablet.classList.contains('font_size48px') && tablet.clientWidth >= 260) ?
         tablet.classList.add('font_size48px') : 
        (tablet.classList.contains('font_size48px') && tablet.clientWidth >= 260) ?
         tablet.classList.add('font_size36px') : tablet;

        (tablet.classList.contains('font_size36px') && tablet.clientWidth < 220) ?
         tablet.classList.remove('font_size36px') : 
        (tablet.classList.contains('font_size48px') && tablet.clientWidth < 220) ?
         tablet.classList.remove('font_size48px') : tablet;
    }

    function _eq(value) {
        return eval(value);
    }

    function clickEvent(event){
        if (event.target.closest('.key_digit')) {
            (eq === '0') ? eq = '' : eq;

            let digitKey = event.target.closest('.key_digit').classList;
            let digitKeyChar = digitKey[digitKey.length - 1];
            let resChar = chars[digitKeyChar];

            eq += resChar;
        }
        if (event.target.closest('._plus')) {
            let opKey = event.target.closest('._plus').classList;
            let opKeyChar = opKey[opKey.length - 1];
            let resChar = chars[opKeyChar];
            
            eq += resChar;
        }
        if (event.target.closest('._minus')) {
            let opKey = event.target.closest('._minus').classList;
            let opKeyChar = opKey[opKey.length - 1];
            let resChar = chars[opKeyChar];
            
            eq += resChar;
        }
        if (event.target.closest('._multiply')) {
            let opKey = event.target.closest('._multiply').classList;
            let opKeyChar = opKey[opKey.length - 1];
            let resChar = chars[opKeyChar];
            
            eq += resChar;
        }
        if (event.target.closest('._division')) {
            let opKey = event.target.closest('._division').classList;
            let opKeyChar = opKey[opKey.length - 1];
            let resChar = chars[opKeyChar];
            
            eq += resChar;
        }
        if (event.target.closest('._c')) {
            eq = '0';
        }
        if (event.target.closest('._backspace')) {
            eq = (eq + '').slice(0, eq.length - 1);
        }
        if (event.target.closest('._eq')) {
            eq = _eq(eq) + '';
        }

        showTablet();
    }

    document.addEventListener('click', clickEvent);


});