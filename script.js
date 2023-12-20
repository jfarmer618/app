const guide = document.getElementById('guide');
const lh = document.querySelector('.lh');
const rh = document.querySelector('.rh');
const ex = document.querySelector('.ex');
const chordName = document.querySelector('.chordName');
const notation = document.getElementById('notation');
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
            notation.innerHTML = '';
            showNotation('11-chord');
            break;
        case '#11b9-chord':
            guide.classList.add('active');
            chordName.innerHTML = '<h3>#11th b9 Chord</h3>';
            lh.innerHTML = '<strong>LEFT HAND:</strong><span>Root chord</span>';
            rh.innerHTML = '<strong>RIGHT HAND:</strong><span>Major chord built on the flatted 5th</span>';
            ex.innerHTML = 'Ex: F#/C, A/Eb, Db/G, etc';
            notation.innerHTML = '';
            showNotation('#11b9-chord');
            break;
        case '13#11-chord':
            guide.classList.add('active');
            chordName.innerHTML = '<h3>13th #11 Chord</h3>';
            lh.innerHTML = '<strong>LEFT HAND:</strong><span>Root 7th chord</span>';
            rh.innerHTML = '<strong>RIGHT HAND:</strong><span>Major chord 1 whole step above</span>';
            ex.innerHTML = 'Ex: D/C7, G/F7, C/Bb7, etc';
            notation.innerHTML = '';
            showNotation('13#11-chord');
            break;
        case '13b9-chord':
            guide.classList.add('active');
            chordName.innerHTML = '<h3>13th b9 Chord</h3>';
            lh.innerHTML = '<strong>LEFT HAND:</strong><span>Root 7th chord</span>';
            rh.innerHTML = '<strong>RIGHT HAND:</strong><span>Major chord built on the 6th</span>';
            ex.innerHTML = 'Ex: A/C7, E/G7, C/Eb7, etc';
            notation.innerHTML = '';
            showNotation('13b9-chord');
            break;
        default:
            break;
     }

// Draw chord on staves
function showNotation(chord) {
    const { Factory, EasyScore, System } = Vex.Flow;

    const vf = new Factory({
    renderer: { elementId: 'notation', width: 220, height: 240 },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    switch (chord) {
        case '11-chord':     
            system.addStave({
            voices: [
            score.voice(score.notes('F5/w')),
            score.voice(score.notes('D5/w')),
            score.voice(score.notes('Bb4/w'))
            ]
            }).addClef('treble').addTimeSignature('4/4');
        
        system.addStave({
            voices: [
            score.voice(score.notes('G3/w', {clef: 'bass', stem: 'down'})),
            score.voice(score.notes('E3/w', {clef: 'bass', stem: 'down'})),
            score.voice(score.notes('C3/w', {clef: 'bass', stem: 'down'}))
            ]
        }).addClef('bass').addTimeSignature('4/4');
    
        system.addConnector()
        vf.draw();
        break;

       case '#11b9-chord':     
        system.addStave({
            voices: [
            score.voice(score.notes('F#5/w')),
            score.voice(score.notes('C#5/w')),
            score.voice(score.notes('A#4/w'))
            ]
            }).addClef('treble').addTimeSignature('4/4');
        
            system.addStave({
                voices: [
                score.voice(score.notes('G3/w', {clef: 'bass', stem: 'down'})),
                score.voice(score.notes('E3/w', {clef: 'bass', stem: 'down'})),
                score.voice(score.notes('C3/w', {clef: 'bass', stem: 'down'}))
                ]
            }).addClef('bass').addTimeSignature('4/4');

            system.addConnector()
            vf.draw();
            break;

        case '13#11-chord':     
         system.addStave({
            voices: [
            score.voice(score.notes('A5/w')),
            score.voice(score.notes('F#5/w')),
            score.voice(score.notes('D5/w'))
            ]
            }).addClef('treble').addTimeSignature('4/4');
        
            system.addStave({
            voices: [
            score.voice(score.notes('Bb3/w', {clef: 'bass', stem: 'down'})),
            score.voice(score.notes('E3/w', {clef: 'bass', stem: 'down'})),
            score.voice(score.notes('C3/w', {clef: 'bass', stem: 'down'}))
            ]
            }).addClef('bass').addTimeSignature('4/4');

            system.addConnector()
            vf.draw();
            break;

        case '13b9-chord':     
             system.addStave({
                voices: [
                score.voice(score.notes('E5/w')),
                score.voice(score.notes('C#5/w')),
                score.voice(score.notes('A4/w'))
                ]
            }).addClef('treble').addTimeSignature('4/4');
            
            system.addStave({
                voices: [
                score.voice(score.notes('Bb3/w', {clef: 'bass', stem: 'down'})),
                score.voice(score.notes('E3/w', {clef: 'bass', stem: 'down'})),
                score.voice(score.notes('C3/w', {clef: 'bass', stem: 'down'}))
                ]
            }).addClef('bass').addTimeSignature('4/4');
      
            system.addConnector()
            vf.draw();
            break;
        }
 }
}
