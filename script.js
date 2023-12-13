const guide = document.getElementById('guide');
const lh = document.querySelector('.lh');
const rh = document.querySelector('.rh');
const ex = document.querySelector('.ex');
const chordName = document.querySelector('.chordName');
const buttons = document.querySelectorAll('button');

// Add event listener for each button and show Polychord when clicked
buttons.forEach(button => {
    button.addEventListener("click", () => {  showPolyChord(button) });
});

function showPolyChord(e) {

    //Store id of chord to use in switch statement
    const chord = e.id;

    switch (chord) {
        case '11-chord': 
            guide.classList.add('active');
            chordName.innerHTML = '<h3>11th Chord</h3>';
            lh.innerHTML = '<strong>LEFT HAND:</strong><span>Root chord</span>';
            rh.innerHTML = '<strong>RIGHT HAND:</strong><span>Major chord 1 whole step below root</span>';
            ex.innerHTML = 'Ex: Bb/C, F/G, Db/Eb, etc';
            break;
        case '#11b9-chord':
            guide.classList.add('active');
            chordName.innerHTML = '<h3>#11th b9 Chord</h3>';
            lh.innerHTML = '<strong>LEFT HAND:</strong><span>Root chord</span>';
            rh.innerHTML = '<strong>RIGHT HAND:</strong><span>Major chord built on the flatted 5th</span>';
            ex.innerHTML = 'Ex: F#/C, A/Eb, Db/G, etc';
            break;
        case '13#11-chord':
            guide.classList.add('active');
            chordName.innerHTML = '<h3>13th #11 Chord</h3>';
            lh.innerHTML = '<strong>LEFT HAND:</strong><span>Root 7th chord</span>';
            rh.innerHTML = '<strong>RIGHT HAND:</strong><span>Major chord 1 whole step above</span>';
            ex.innerHTML = 'Ex: D/C7, G/F7, C/Bb7, etc';
            break;
        case '13b9-chord':
            guide.classList.add('active');
            chordName.innerHTML = '<h3>13th b9 Chord</h3>';
            lh.innerHTML = '<strong>LEFT HAND:</strong><span>Root chord</span>';
            rh.innerHTML = '<strong>RIGHT HAND:</strong><span>Major chord built on the 6th</span>';
            ex.innerHTML = 'Ex: A/C7, E/G7, C/Eb7, etc';
            break;
        default:
            break;
     }
}
