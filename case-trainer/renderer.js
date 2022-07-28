//////////////////////////////////

const mainText = document.getElementById('mainText');
const helperText = document.getElementById('helperText');

const menuTutorial = document.getElementById('menuTutorial');
const menuTrainer = document.getElementById('menuTrainer');
const menuHome = document.getElementById('menuHome');
const menuStems = document.getElementById('menuStems');
const menuEndings = document.getElementById('menuEndings');
const menuVocal = document.getElementById('menuVocal');
const menuConsonant = document.getElementById('menuConsonant');
const nextButton = document.getElementById('nextButton');
const backButton = document.getElementById('backButton');

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const remindButton = document.getElementById('remindButton');

const breadcrumbs = document.getElementById('breadcrumbs');

const menuIntro = document.getElementById('menuIntro');
const menuStep1 = document.getElementById('menuStep1');
const menuStep2 = document.getElementById('menuStep2');
const menuStep3 = document.getElementById('menuStep3');
const menuStep4 = document.getElementById('menuStep4');
const menuStep5 = document.getElementById('menuStep5');

const tableStems = document.getElementById('tableStems');
const tableCaseEndings = document.getElementById('tableCaseEndings');
const tableVocal1 = document.getElementById('tableVocal1');
const tableVocal2 = document.getElementById('tableVocal2');
const tableCons = document.getElementById('tableCons');

const rowEndByVowel = document.getElementById('rowEndByVowel');
const rowAdessive = document.getElementById('rowAdessive');
const rowTT = document.getElementById('rowTT');

const gridTutorial = document.getElementById('gridTutorial');
const gridTrainer = document.getElementById('gridTrainer');
const trainerText = document.getElementById('trainerText');
const recapStemType = document.getElementById('recapStemType');
const recapStem = document.getElementById('recapStem');
const recapCase = document.getElementById('recapCase');
const recapEnding = document.getElementById('recapEnding');
const recapGradationType = document.getElementById('recapGradationType');
const recapResult = document.getElementById('recapResult');
const recapWord = document.getElementById('recapWord');

const helpCase = document.getElementById('helpCase');
const helpStemType = document.getElementById('helpStemType');
const helpStems = document.getElementById('helpStems');
const helpChooseStem = document.getElementById('helpChooseStem');
const helpEnding = document.getElementById('helpEnding');
const helpEndingVariant = document.getElementById('helpEndingVariant');
const helpGradationType = document.getElementById('helpGradationType');
const helpGradation = document.getElementById('helpGradation');
const helpLost = document.getElementById('helpLost');

const inputField = document.getElementById('inputField');
const trainerButton = document.getElementById('trainerButton');


const stepAnswer1 = document.getElementById('stepAnswer1');
const stepPrompt1 = document.getElementById('stepPrompt1');
const stepInput1 = document.getElementById('stepInput1');
var stepHelpButton1 = document.getElementById('stepHelpButton1');
const stepExplanation1 = document.getElementById('stepExplanation1');
const stepConfirmButton1 = document.getElementById('stepConfirmButton1');

const stepAnswer2 = document.getElementById('stepAnswer2');
const stepPrompt2 = document.getElementById('stepPrompt2');
const stepInput2 = document.getElementById('stepInput2');
const stepHelpButton2 = document.getElementById('stepHelpButton2');
const stepExplanation2 = document.getElementById('stepExplanation2');
const stepReveal2 = document.getElementById('stepReveal2');
const stepConfirmButton2 = document.getElementById('stepConfirmButton2');

const stepHide1 = document.getElementById('stepHide1');
const stepHide1a = document.getElementById('stepHide1a');
const stepHide2 = document.getElementById('stepHide2');
const stepHide2a = document.getElementById('stepHide2a');

const stepAnswer3 = document.getElementById('stepAnswer3');
const stepPrompt3 = document.getElementById('stepPrompt3');
const stepInput3a = document.getElementById('stepInput3a');
const stepInput3b = document.getElementById('stepInput3b');
const stepHelpButton3 = document.getElementById('stepHelpButton3');
const stepExplanation3 = document.getElementById('stepExplanation3');
const stepReveal3 = document.getElementById('stepReveal3');
const stepHide3 = document.getElementById('stepHide3');
const stepConfirmButton3 = document.getElementById('stepConfirmButton3');
const stepHide3a = document.getElementById('stepHide3a');

const stepAnswer4 = document.getElementById('stepAnswer4');
const stepPrompt4 = document.getElementById('stepPrompt4');
const stepInput4 = document.getElementById('stepInput4');
const stepHelpButton4 = document.getElementById('stepHelpButton4');
const stepExplanation4 = document.getElementById('stepExplanation4');
const stepReveal4 = document.getElementById('stepReveal4');
const stepHide4 = document.getElementById('stepHide4');
const stepConfirmButton4 = document.getElementById('stepConfirmButton4');
const stepHide4a = document.getElementById('stepHide4a');

const stepAnswer5 = document.getElementById('stepAnswer5');
const stepPrompt5 = document.getElementById('stepPrompt5');
const stepInput5 = document.getElementById('stepInput5');
const stepHelpButton5 = document.getElementById('stepHelpButton5');
const stepExplanation5 = document.getElementById('stepExplanation5');
const stepReveal5 = document.getElementById('stepReveal5');
const stepHide5 = document.getElementById('stepHide5');
const stepConfirmButton5 = document.getElementById('stepConfirmButton5');
const stepHide5a = document.getElementById('stepHide5a');

const tablePartitive = document.getElementById('tablePartitive');
const tableIllative = document.getElementById('tableIllative');

const stepAnswer6 = document.getElementById('stepAnswer6');
const stepPrompt6 = document.getElementById('stepPrompt6');
const stepInput6 = document.getElementById('stepInput6');
const stepHelpButton6 = document.getElementById('stepHelpButton6');
const stepExplanation6 = document.getElementById('stepExplanation6');
const stepReveal6 = document.getElementById('stepReveal6');
const stepHide6 = document.getElementById('stepHide6');
const stepConfirmButton6 = document.getElementById('stepConfirmButton6');
const stepHide6a = document.getElementById('stepHide6a');

const stepAnswer7 = document.getElementById('stepAnswer7');
const stepPrompt7 = document.getElementById('stepPrompt7');
const stepInput7 = document.getElementById('stepInput7');
const stepHelpButton7 = document.getElementById('stepHelpButton7');
const stepExplanation7 = document.getElementById('stepExplanation7');
const stepReveal7 = document.getElementById('stepReveal7');
const stepHide7 = document.getElementById('stepHide7');
const stepConfirmButton7 = document.getElementById('stepConfirmButton7');
const stepHide7a = document.getElementById('stepHide7a');

const accordion = document.getElementById('accordion');
const tableCaseMeaning = document.getElementById('tableCaseMeaning');
///Initialisation

console.log(datajson);

var number = getRandomInt(0, 4);

console.log(number);
console.log(datajson[number]);
console.log(datajson[number]["dataEndingsFinal"]);


var dataPhrase = datajson[number]["dataPhrase"];
var dataResult = datajson[number]["dataResult"];
var dataResultNoGradation = datajson[number]["dataResultNoGradation"];
var dataWordEnglish = datajson[number]["dataWordEnglish"];
var dataWordFinnish = datajson[number]["dataWordFinnish"];
var dataWordFinnishHighlighted = datajson[number]["dataWordFinnishHighlighted"];
var dataCase = datajson[number]["dataCase"];
var dataCaseTranslation = datajson[number]["dataCaseTranslation"];
var dataStem1 = datajson[number]["dataStem1"];
var dataStem2 = datajson[number]["dataStem2"];
var dataTypeReason = datajson[number]["dataTypeReason"];
var dataType = datajson[number]["dataType"];
var dataTypeExplanation = datajson[number]["dataTypeExplanation"];
var dataEndings = datajson[number]["dataEndings"];
var dataReason = datajson[number]["dataReason"];
var dataStemHighlighted = datajson[number]["dataStemHighlighted"];
var dataEndingsFinal = datajson[number]["dataEndingsFinal"];
var dataGradation = datajson[number]["dataGradation"];
var dataStemCut = datajson[number]["dataStemCut"];
var dataBeforeGradationCut = datajson[number]["dataBeforeGradationCut"];
var dataStemCutUnderlined = datajson[number]["dataStemCutUnderlined"];
var dataBeforeGradationCutUnderlined = datajson[number]["dataBeforeGradationCutUnderlined"];
var dataStemSyllable = datajson[number]["dataStemSyllable"];
var dataStemSyllableStatus = datajson[number]["dataStemSyllableStatus"];
var dataBeforeGradationSyllable = datajson[number]["dataBeforeGradationSyllable"];
var dataBeforeGradationSyllableStatus = datajson[number]["dataBeforeGradationSyllableStatus"];
var dataConsonantBefore = datajson[number]["dataConsonantBefore"];
var dataConsonantAfter = datajson[number]["dataConsonantAfter"];

var dataWordFinnish = get_dataWordFinnish_from_dataWordFinnishHighlighted(dataWordFinnishHighlighted);


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



$('.ui.dropdown')
    .dropdown();

$('#helpMenu')
    .dropdown({
        action: 'hide'
    });

$(document).ready(function () {
    $('.ui .item').on('click', function () {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
    });
});

$('.ui.accordion')
    .accordion();



function get_dataWordFinnish_from_dataWordFinnishHighlighted(text) {

    return text.replace(/<b>/g, '').replace(/<\/b>/g, '');

};


function show(element) {

    element.style.display = "";

};

function hide(element) {

    element.style.display = 'none';

};

function trainer1() {


    show(inputField);
    show(trainerButton);
    show(accordion);

    hide(gridTutorial);
    show(gridTrainer);

    trainerText.innerHTML = "How would you say <b>" + dataPhrase + "</b> in Finnish?";
    inputField.focus();

    /// WORD

    stepAnswer1.innerHTML = dataWordFinnish;
    stepPrompt1.innerHTML = "Do you know the Finnish word that means <b><i>" + dataWordEnglish + "</i></b>? If you do, try to type it here. If you need help, use the button.";

    /// CASE

    stepAnswer2.innerHTML = dataCase;
    stepPrompt2.innerHTML = "So we are trying to say <i><b>" + dataPhrase + "</b></i> in Finnish.<br/><br/> What case should you use to translate <i>" + dataCaseTranslation + "</i>?<br/><br/>If you need help, use the button.";

    /// STEMS

    stepAnswer3.innerHTML = dataStem1 + " / " + dataStem2;
    stepPrompt3.innerHTML = "What are the stems for the word we're working with? If you know them, type them below. If not, you can always use the help button.<br/><br/>"

    /// RIGHT STEM
    var rightStem = "";
    if (dataCase == "partitive") {
        stepAnswer4.innerHTML = dataStem2;
        rightStem = dataStem2;
    } else {
        stepAnswer4.innerHTML = dataStem1;
        rightStem = dataStem1;
    };

    stepPrompt4.innerHTML = "Now an easy part: which of the two stems should you use in this case?";

    /// ENDINGS

    const caseEndings = [["nominative", "-"], ["accusative", "-n"], ["genitive", "-n"], ["inessive", "-ssa/ssä"], ["elative", "-sta/stä"], ["adessive", "-lla/llä"], ["ablative", "-lta/ltä"], ["allative", "-lle"], ["essive", "-na/nä"], ["translative", "-ksi"]];
    var rightEnding = "";

    if (dataCase == "partitive" || dataCase == "illative") {

        rightEnding = dataEndings;

    } else {

        for (let i = 0; i < caseEndings.length; i++) {
            if (caseEndings[i][0] == dataCase) {
                rightEnding = caseEndings[i][1];
            }
        }

    };


    stepAnswer5.innerHTML = rightEnding;
    stepPrompt5.innerHTML = "Let's now choose the right endings for that word in that case. As always, help is only one click away.";

    /// VOCAL HARMONY

    stepAnswer6.innerHTML = dataEndingsFinal;
    stepPrompt6.innerHTML = "By now you should know what set of ending you're going to use, but this set may contain 2 different versions or a vowel that needs to be define. Try to type the actual ending:<br/><br/>";

    /// FINDING CONSONANT GRADATION

    stepAnswer7.innerHTML = dataGradation;
    stepPrompt7.innerHTML = "So you have a stem and and ending. Combined together they give <b>*" + stepAnswer4.innerHTML.slice(0, -1) + stepAnswer6.innerHTML.slice(1) + "</b><br/><br/>I put a little * before to remind you this word might not exist like that.<br/><br/>What consonant gradation (if any) applies here?<br/><br/>";

};


stepInput1.addEventListener("keypress", function (event) {

    stepConfirmButton1_clicked();

    if (event.key === "Enter") {
        event.preventDefault();
        stepConfirmButton1_clicked();


    };

});

stepInput3b.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        event.preventDefault();
        stepConfirmButton3_clicked();
    }

});

stepInput4.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        stepConfirmButton4_clicked();

    };

});

stepInput6.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        stepConfirmButton6_clicked();

    };

});


stepConfirmButton1.onclick = function () {
    stepConfirmButton1_clicked();
};

stepConfirmButton2.onclick = function () {
    stepConfirmButton2_clicked();
};

stepConfirmButton3.onclick = function () {
    stepConfirmButton3_clicked();
};

stepConfirmButton4.onclick = function () {
    stepConfirmButton4_clicked();
};

stepConfirmButton5.onclick = function () {
    stepConfirmButton5_clicked();
};

stepConfirmButton6.onclick = function () {
    stepConfirmButton6_clicked();
};

stepConfirmButton7.onclick = function () {
    stepConfirmButton7_clicked();
};


function stepConfirmButton1_clicked() {
    if (stepInput1.value == dataWordFinnish) {
        hide(stepHide1);
        show(stepAnswer1);
        stepExplanation1.innerHTML = "You're absolutely right! The Finnish word that means <b><i>" + dataWordEnglish + "</i></b> is <b>" + dataWordFinnish + "</b><br/><br/>You can continue with the next steps.";
        hide(stepConfirmButton1);

    } else {

        hide(stepHide1);
        show(stepAnswer1);
        stepExplanation1.innerHTML = "Oops, that's not the word I was expecting. I was thinking of <b>" + dataWordFinnish + "</b>. We'll use this one, ok?<br/><br/> You can continue with the next steps.";
        hide(stepConfirmButton1);
    };

};

function stepConfirmButton2_clicked() {

    if (stepInput2.value == dataCase) {

        hide(stepHide2);
        hide(stepHide2a);
        show(stepAnswer2);
        stepExplanation2.innerHTML = "You're right! The case we need to use is the <b>" + dataCase + "</b>.";

    } else {

        stepPrompt2.innerHTML = "No... that's not the right case. You can try again or you can use the help button.<br/><br/>";
        stepInput1.value = "";
    };
};

function stepConfirmButton3_clicked() {


    // Cases to deal with final hyphen

    var step1input_clean = "";
    var step2input_clean = "";
    var dataStem1_clean = dataStem1.slice(0, -1);
    var dataStem2_clean = dataStem2.slice(0, -1);

    if (stepInput3a.value.slice(-1) == "-") {
        step1input_clean = stepInput3a.value.slice(0, -1);
    } else {
        step1input_clean = stepInput3a.value;
    };


    if (stepInput3b.value.slice(-1) == "-") {
        step2input_clean = stepInput3b.value.slice(0, -1);
    } else {
        step2input_clean = stepInput3b.value;
    };


    if (step1input_clean == dataStem1_clean && step2input_clean == dataStem2_clean) {

        hide(stepHide3);
        hide(stepHide3a);
        show(stepAnswer3);
        stepExplanation3.innerHTML = "Exactly! The stems for <i>" + dataWordFinnish + "</i> are <b>" + dataStem1 + " / " + dataStem2 + "</b>.";

    } else if (step1input_clean == dataStem1_clean) {

        stepPrompt3.innerHTML = "The first stem is right, but something is off with Stem 2. You can try again or use the help button.<br/><br/>";
        stepInput3b.value = "";
        stepInput3b.focus();
    } else if (step2input_clean == dataStem2_clean) {

        stepPrompt3.innerHTML = "The second stem is right, but something is off with Stem 1. You can try again or use the help button.<br/><br/>";
        stepInput3a.value = "";
        stepInput3a.focus();
    } else {

        stepPrompt3.innerHTML = "Oops, not what I was expecting... You can try again or use the help button.<br/><br/>";

        stepInput3a.value = "";
        stepInput3b.value = "";
        stepInput3a.focus();
    };

};

function stepConfirmButton4_clicked() {
    var rightStem = "";
    if (dataCase == "partitive") {
        stepAnswer4.innerHTML = dataStem2;
        rightStem = dataStem2;
    } else {
        stepAnswer4.innerHTML = dataStem1;
        rightStem = dataStem1;
    };


    var stepinput_clean = "";
    var answer_clean = rightStem.slice(0, -1);
    var dataStem1_clean = dataStem1.slice(0, -1);
    var dataStem2_clean = dataStem2.slice(0, -1);

    if (stepInput4.value.slice(-1) == "-") {
        stepinput_clean = stepInput4.value.slice(0, -1);
    } else {
        stepinput_clean = stepInput4.value;
    };

    if (stepinput_clean == answer_clean) {

        hide(stepHide4);
        hide(stepHide4a);
        show(stepAnswer4);
        stepExplanation4.innerHTML = "Yes! The right stem to use here is <b>" + rightStem + "</b>."

    } else if (stepinput_clean == dataStem1_clean || stepinput_clean == dataStem2_clean) {

        if (dataCase == "partitive") {
            var explanationText = "It looks like you chose the wrong stem.<br/><br/>For the <i>partitive<i/> you always use stem 2: <b>" + dataStem2 + "</b>.";
        } else {
            var explanationText = "<i class='exclamation triangle icon'></i> It looks like you chose the wrong stem.<br/><br/>Stem 2 is only used for the <i>partitive</i>. For all other cases, including the <i>" + dataCase + "</i> you need to use stem 1: <b>" + dataStem1 + "</b>.";

            hide(stepHide4);
            hide(stepHide4a);
            show(stepAnswer4);
        };

        stepExplanation4.innerHTML = explanationText;

    } else {
        stepExplanation4.innerHTML = "Oops, that doesn't seem to be a valid root for this word. Maybe you should check the previous Step?";
    };

};

function stepConfirmButton5_clicked() {

    const caseEndings = [["nominative", "-"], ["accusative", "-n"], ["genitive", "-n"], ["inessive", "-ssa/ssä"], ["elative", "-sta/stä"], ["adessive", "-lla/llä"], ["ablative", "-lta/ltä"], ["allative", "-lle"], ["essive", "-na/nä"], ["translative", "-ksi"]];
    var rightEnding = "";

    if (dataCase == "partitive" || dataCase == "illative") {

        rightEnding = dataEndings;

    } else {

        for (let i = 0; i < caseEndings.length; i++) {
            if (caseEndings[i][0] == dataCase) {
                rightEnding = caseEndings[i][1];
            }
        }

    };


    if (stepInput5.value == rightEnding) {


        hide(stepHide5);
        hide(stepHide5a);
        show(stepAnswer5);
        stepExplanation5.innerHTML = "Yes! The ending for the <i>" + dataCase + "</i> of the word <i>" + dataWordFinnish + "</i> is <b>" + rightEnding + "</b>.";

    } else {

        stepPrompt5.innerHTML = "That's not the right case. If you need help, use the help button.";

    };

};

function stepConfirmButton6_clicked() {

    var stepinput_clean = "";
    var dataEndingsFinal_clean = dataEndingsFinal.slice(1);

    if (stepInput6.value.slice(0, 1) == "-") {
        stepinput_clean = stepInput6.value.slice(1);
    } else {
        stepinput_clean = stepInput6.value;
    };

    if (stepinput_clean == dataEndingsFinal_clean) {


        hide(stepHide6);
        hide(stepHide6a);
        show(stepAnswer6);
        stepExplanation6.innerHTML = "Exact! The ending after applying the <i>vowel harmony</i> is <b>" + dataEndingsFinal + "</b>.";

    } else {

        stepPrompt6.innerHTML = "That's not it... Try again or use the help.";

    };


};

function stepConfirmButton7_clicked() {

    if (stepInput7.value == dataGradation) {


        hide(stepHide7);
        hide(stepHide7a);
        show(stepAnswer7);

        var explanationText = "";
        if (dataGradation == "none") {
            explanationText = "You're absolutely right! This word will <i>not</i> undergo any gradation at all.<br/><br/>You can try and type the result at the top of the page";
        } else {
            explanationText = "You're absolutely right! This word will undergo the <b>" + dataGradation + "</b> gradation.";
        };

        stepExplanation7.innerHTML = explanationText;

    } else {

        stepPrompt7.innerHTML = "So you have a stem and and ending. Combined together they give <b>*" + stepAnswer4.innerHTML.slice(0, -1) + stepAnswer6.innerHTML.slice(1) + "</b><br/><br/>I put a little * before to remind you this word might not exist like that.<br/><br/>That's not correct... try again or use the help button<br/><br/>";
    };


};


stepHelpButton1.onclick = function () {

    hide(stepHide1);
    show(stepAnswer1);
    hide(stepHide1a);
    stepExplanation1.innerHTML = "The Finnish word that means <b><i>" + dataWordEnglish + "</i></b> is <b>" + dataWordFinnish + "</b><br/><br/>You can continue with the next steps.";

};

stepHelpButton2.onclick = function () {

    hide(stepHelpButton2);
    hideAllTables();
    show(tableCaseMeaning);
    stepExplanation2.innerHTML = "I have opened a list of cases with their basic meanings on the right. Try to choose the right one with the help of the table.<br/><br/> If you're still having issues, the reveal <i class='eye slash icon'></i> button is there for you.";

};

stepHelpButton3.onclick = function () {

    if (stepHelpButton3.name == "status 2") {

        stepExplanation3.innerHTML = "Because <i>" + dataWordFinnishHighlighted + "</i> " + dataTypeReason + ", it belongs to group " + dataType + ". I have highlighted it in the table. Does that help?"
        document.getElementById("type" + dataType).className = "warning";
        stepHelpButton3.innerHTML = "I still need help";
        stepHelpButton3.name = "status 3";

    } else if (stepHelpButton3.name == "status 3") {

        stepExplanation3.innerHTML = "So for this type, " + dataTypeExplanation + ".<br/><br/>Try again typing the stems or use the reveal <i class='eye slash icon'></i> button.";
        hide(stepHelpButton3);

    } else {
        stepExplanation3.innerHTML = "On the right you can have a look at the different types of words and try to find the one that matches here. Then, try to type the stems again.<br/><br/>If you need more help, press the help button again.";
        stepHelpButton3.innerHTML = "I need more help";
        stepHelpButton3.name = "status 2";
        hideAllTables();
        show(tableStems);

    };


};

stepHelpButton4.onclick = function () {

    if (dataCase == "partitive") {

        stepExplanation4.innerHTML = "The partitive is the only case that uses stem 2... That should help!";
        hide(stepHelpButton4);

    } else {

        stepExplanation4.innerHTML = "All cases except the partitive use stem 1. Does that help?";
        hide(stepHelpButton4);

    };

};

stepHelpButton5.onclick = function () {

    if (dataCase == "partitive") {
        partitiveHelp();
    } else if (dataCase == "illative") {
        illativeHelp();
    } else {
        otherCasesHelp();
    };
};

stepHelpButton6.onclick = function () {

    hideAllTables();
    show(tableVocal1);
    show(tableVocal2);
    stepExplanation6.innerHTML = "Look at the <i>vowel harmony</i> table and remember to use the right vowel for the ending."
    hide(stepHelpButton6);
};

stepHelpButton7.onclick = function () {

    if (stepHelpButton7.name == "status 2") {

        stepExplanation7.innerHTML = "First, check the status of the last syllable of the stem. Does it goes open > closed, closed > open or remains the same?<br/><br/>If it changes, the consonant(s) right before that syllable change from one column to the other in the same order."
        stepHelpButton7.innerHTML = "I'm still not sure";
        stepHelpButton7.name = "status 3";

    } else if (stepHelpButton7.name == "status 3") {

        stepExplanation7.innerHTML = "Ok, so the stem is <i>" + stepAnswer4.innerHTML + "</i> and the stem+ending is <i>" + stepAnswer4.innerHTML.slice(0, -1) + stepAnswer6.innerHTML.slice(1) + "</i>.<br/><br/>We cut them in syllables:<br/><br/>" + dataStemCut + " and " + dataBeforeGradationCut + "<br/><br/>Then we look at the last syllable from the stem:<br/><br/> " + dataStemCutUnderlined + " and " + dataBeforeGradationCutUnderlined + "<br/><br/>The first one is <b>" + dataStemSyllable + "</b> and is <i>" + dataStemSyllableStatus + "</i> and the second one is <b>" + dataBeforeGradationSyllable + "</b> and is <i>" + dataBeforeGradationSyllableStatus + "</i>.<br/><br/>So from Stem > Word the syllable goes <i>" + dataStemSyllableStatus + " > " + dataBeforeGradationSyllableStatus + "</i><br/><br/>The consonant(s) right before that syllable is <b>" + dataConsonantBefore + "</b> and it needs to also change from <i>" + dataStemSyllableStatus + " > " + dataBeforeGradationSyllableStatus + "</i><br/><br/>In the table you can see that a <b>" + dataConsonantBefore + "</b> in an <i>" + dataStemSyllableStatus + " syllable</i> corresponds to a <b>" + dataConsonantAfter + "</b> in a <i>" + dataBeforeGradationSyllableStatus + " syllable</i><br/><br/>So in this case you need to apply <b>" + dataGradation + "</b>";

        hide(stepHelpButton7);

    } else {

        hideAllTables();
        show(tableCons);
        stepExplanation7.innerHTML = "The table on the right lists the different types of consonant gradation. Doesn't that help you?";
        stepHelpButton7.name = "status 2";
        stepHelpButton7.innerHTML = "I need more help!";

    };


};


stepReveal2.onclick = function () {

    hide(stepHide2);
    hide(stepHide2a);
    show(stepAnswer2);
    stepExplanation2.innerHTML = "The case we need to use is the <b>" + dataCase + "</b>.";

};

stepReveal3.onclick = function () {

    hide(stepHide3);
    hide(stepHide3a);
    show(stepAnswer3);
    stepExplanation3.innerHTML = "The stems for the words are <b>" + dataStem1 + " / " + dataStem2 + "</b>."

};

stepReveal4.onclick = function () {

    var rightStem = "";
    if (dataCase == "partitive") {
        rightStem = dataStem2;
    } else {
        rightStem = dataStem1;
    };

    hide(stepHide4);
    hide(stepHide4a);
    show(stepAnswer4);
    stepExplanation4.innerHTML = "The stem for the <i>" + dataCase + "</i> is <b>" + rightStem + "</b>.";

};

stepReveal5.onclick = function () {

    const caseEndings = [["nominative", "-"], ["accusative", "-n"], ["genitive", "-n"], ["inessive", "-ssa/ssä"], ["elative", "-sta/stä"], ["adessive", "-lla/llä"], ["ablative", "-lta/ltä"], ["allative", "-lle"], ["essive", "-na/nä"], ["translative", "-ksi"]];
    var rightEnding = "";

    if (dataCase == "partitive" || dataCase == "illative") {

        rightEnding = dataEndings;
    } else {

        for (let i = 0; i < caseEndings.length; i++) {
            if (caseEndings[i][0] == dataCase) {
                rightEnding = caseEndings[i][1];
            }
        }

    };

    hide(stepHide5);
    hide(stepHide5a);
    show(stepAnswer5);
    stepExplanation5.innerHTML = "The ending for the <i>" + dataCase + "</i> of <i>" + dataWordFinnish + "</i> is <b>" + rightEnding + "</b>";

};

stepReveal6.onclick = function () {

    hide(stepHide6);
    hide(stepHide6a);
    show(stepAnswer6);
    stepExplanation6.innerHTML = "The right version of the ending in this case is <b>" + dataEndingsFinal + "</b>";

};

stepReveal7.onclick = function () {
    hide(stepHide7);
    hide(stepHide7a);
    show(stepAnswer7);

    var explanationText = "";
    if (dataGradation == "none") {
        explanationText = "This word will <i>not</i> undergo any gradation at all.<br/><br/>You can try and type the result at the top of the page";
    } else {
        explanationText = "This word will undergo the <b>" + dataGradation + "</b> gradation.";
    };

    stepExplanation7.innerHTML = explanationText;


};


function partitiveHelp() {

    if (stepHelpButton5.name == "status 2") {

        document.getElementById("ending-" + dataCase).className = "warning";
        stepExplanation5.innerHTML = "The row with the right ending for the <i>" + dataCase + "</i> is highlighted is the table. If you need more help, use the help button again.";
        stepHelpButton5.name = "status 3";

    } else if (stepHelpButton5.name == "status 3") {
        hideAllTables();
        show(tableCaseEndings);
        show(tablePartitive);
        stepExplanation5.innerHTML = "It's a little tricky when it comes to the <i>partitive</i> endings. The rules are now on the right side. Try to see if you can find the right ending."
        stepHelpButton5.innerHTML = "No, more help needed!";
        stepHelpButton5.name = "status 4";

    } else if (stepHelpButton5.name == "status 4") {

        hide(stepHelpButton5);
        hide(stepHide5);
        hide(stepHide5a);
        show(stepAnswer5);
        stepExplanation5.innerHTML = "The endings for the <i>partitive</i> for " + dataStemHighlighted + " is <b>" + dataEndings + "</b> because " + dataReason + ".";

    } else {

        hideAllTables();
        show(tableCaseEndings);
        stepExplanation5.innerHTML = "On the right you can see a list of the different cases with their endings. This should help.";
        stepHelpButton5.name = "status 2";

    };

};

function illativeHelp() {

    if (stepHelpButton5.name == "status 2") {

        document.getElementById("ending-" + dataCase).className = "warning";
        stepExplanation5.innerHTML = "The row with the right ending for the <i>" + dataCase + "</i> is highlighted is the table. If you need more help, use the help button again.";
        stepHelpButton5.name = "status 3";

    } else if (stepHelpButton5.name == "status 3") {
        hideAllTables();
        show(tableCaseEndings);
        show(tableIllative);
        stepExplanation5.innerHTML = "It's a little tricky when it comes to the <i>illative</i> endings. The rules are now on the right side. Try to see if you can find the right ending."
        stepHelpButton5.innerHTML = "No, more help needed!";
        stepHelpButton5.name = "status 4";

    } else if (stepHelpButton5.name == "status 4") {

        hide(stepHelpButton5);
        hide(stepHide5);
        hide(stepHide5a);
        show(stepAnswer5);
        stepExplanation5.innerHTML = "The endings for the <i>illative</i> for " + dataStemHighlighted + " is <b>" + dataEndings + "</b> because " + dataReason + ".";

    } else {
        hideAllTables();
        show(tableCaseEndings);
        stepExplanation5.innerHTML = "On the right you can see a list of the different cases with their endings. This should help.";
        stepHelpButton5.name = "status 2";

    };


};

function otherCasesHelp() {

    if (stepHelpButton5.name == "status 2") {

        document.getElementById("ending-" + dataCase).className = "warning";
        stepExplanation5.innerHTML = "The row with the right ending for the <i>" + dataCase + "</i> is highlighted is the table. If that's not enough, use the reveal <i class='eye slash icon'></i> button.";
        hide(stepHelpButton5);

    } else {
        hideAllTables();
        show(tableCaseEndings);
        stepExplanation5.innerHTML = "On the right you can see a list of the different cases with their endings. This should help.";
        stepHelpButton5.name = "status 2";

    };

};

function hideAllTables() {

    hide(tableCaseEndings);
    hide(tableCons);
    hide(tableIllative);
    hide(tablePartitive);
    hide(tableStems);
    hide(tableVocal1);
    hide(tableVocal2);
    hide(tableCaseMeaning);

};







trainerButton.onclick = function () {


    if (inputField.value == dataResult) {



        $('.ui.basic.modal')
            .modal('show');

    };




};

inputField.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        event.preventDefault();
        trainerButton.click();
    }

});

/*

menuStep1.onclick = function () {

    activateMenu("step1");
    step1();

};

menuStep2.onclick = function () {

    activateMenu("step2");
    step2();

};

menuStep3.onclick = function () {

    activateMenu("step3");
    step3();

};

menuStep4.onclick = function () {

    activateMenu("step4");
    step4();

};

menuStep5.onclick = function () {

    activateMenu("step5");
    step5();

};

menuIntro.onclick = function () {

    activateMenu("intro");
    intro();

};


function nextButtonParameters(text, destination, display) {

    nextButton.innerText = text;
    nextButton.style.display = display;
    nextButton.onclick = function () {
        window[destination]();
    };

};
*/


/*
menuTutorial.onclick = function () {

    gridTrainer.style.display = "none";
    gridTutorial.style.display = "";
    intro();

};*/

menuTrainer.onclick = function () {

    show(gridTrainer);
    hide(gridTutorial);
    trainer1();

};

menuHome.onclick = function () {

    show(gridTutorial);
    hide(gridTrainer);
    home();

};


nextButton.onclick = function () {
    console.log("bnjsq");
}

/*
function activateMenu(text) {

    if (text == "intro") {
        menuIntro.className = "active section"
    } else {
        menuIntro.className = "section"
    };
    if (text == "step1") {
        menuStep1.className = "active section"
    } else {
        menuStep1.className = "section"
    };
    if (text == "step2") {
        menuStep2.className = "active section"
    } else {
        menuStep2.className = "section"
    };
    if (text == "step3") {
        menuStep3.className = "active section"
    } else {
        menuStep3.className = "section"
    };
    if (text == "step4") {
        menuStep4.className = "active section"
    } else {
        menuStep4.className = "section"
    };
    if (text == "step5") {
        menuStep5.className = "active section"
    } else {
        menuStep5.className = "section"
    };

};*/


/*yesButton.onclick = function () {

    mainText.innerHTML = "Cool!<br />You're all set and ready to use the trainer then! Just click Trainer in the menu";
    yesButton.style.display = "none";
    noButton.style.display = "none";
    remindButton.style.display = "none";

};

noButton.onclick = function () {
    launchTutorial();
};

remindButton.onclick = function () {
    launchTutorial();
};

function launchTutorial() {

    breadcrumbs.style.display = 'inline';
    intro();

};

function home() {
    activateMenu("home");
    mainText.innerHTML = "<div class='ui huge header'>WELCOME!!!</div>";

};

function intro() {
    activateMenu("intro");
    tableCaseEndings.style.display = "none";
    tableStems.style.display = "none";
    tableVocal1.style.display = "none";
    tableVocal2.style.display = "none";
    tableCons.style.display = "none";

    mainText.innerHTML = "Ok! Let's go through the steps with an example. <br />We'll start off easy:<br />Before we start, we need a word, let's take <b>katto</b>, a <i>roof</i>. <br />We also need to know what we want to do with it. We want to say <b>on the roof</b>.";
    nextButtonParameters("Step 1", "step1", "inline");

};

function step1() {
    activateMenu("step1");
    tableCaseEndings.style.display = "none";
    tableStems.style.display = "none";
    tableVocal1.style.display = "none";
    tableVocal2.style.display = "none";
    tableCons.style.display = "none";

    mainText.innerHTML = "<h1>Finding the stems</h1>Every word has 1 or 2 stems in the singular.<br />The stems depend mainly on the way the word ends in the nominative (<i>the dictionary form</i>)<br />On the right side are all the different possibilities.<br />You have to go through the table line by line until the description fits.<br /><br />So in the case of <b>katto</b>, if we go through the possibilities:<br />It doesn't end in -e<br />It doesn't end in -i<br />It ends in a vowel like type nr 5.<br /><br />The stems are also ending in a vowel, so no changes. We get:<br />=>katto <i>(nominative)</i>, katto- <i>(stem 1)</i>, katto- <i>(stem 2)</i>";
    tableStems.style.display = "";
    rowEndByVowel.className = "positive";

    nextButtonParameters("Step 2", "step2", "inline");
};

function step2() {
    activateMenu("step2");
    tableStems.style.display = "none";
    tableCaseEndings.style.display = "none";
    tableVocal1.style.display = "none";
    tableVocal2.style.display = "none";
    tableCons.style.display = "none";

    mainText.innerHTML = "<h1>Choosing the right stem</h1>We want to say <b>on the roof</b> so we need a case called <i>adessive</i>.</br /><i>A list of the different cases with their main meaning is always available through the help menu.</i><br />Stem 2 is used for the partitive and stem 1 is used for all other cases.<br />So here we need stem 1: <b>katto-</b>";
    nextButtonParameters("Step 3", "step3", "inline");
};

function step3() {
    activateMenu("step3");
    tableStems.style.display = "none";
    tableCaseEndings.style.display = "";
    rowAdessive.className = "positive";
    tableVocal1.style.display = "none";
    tableVocal2.style.display = "none";
    tableCons.style.display = "none";

    mainText.innerHTML = "<h1>Choosing the ending</h1>On the right is a list of the different endings for the different cases.<br />As you can see from the table, the adessive only has one ending (<i>but 2 versions of that ending, more on that in the next step</i>). The only cases with more than one endings are the partitive and the illative.<br /><br />So in our case the ending is <b>-lla/llä</b>";
    nextButtonParameters("Step 4", "step4", "inline");
};

function step4() {
    activateMenu("step4");
    tableStems.style.display = "none";
    tableCaseEndings.style.display = "none";
    tableVocal1.style.display = "";
    tableVocal2.style.display = "";
    tableCons.style.display = "none";

    mainText.innerHTML = "<h1>Choose the version of the ending</h1>Most endings have 2 different versions. In our case <b>-lla/llä</b> means the ending may be either <b>-lla</b> or <b>-llä</b>. In order to choose the right version, one has to use the vocal harmony rule.<br />In Finnish, vowels are divided between <b>back vowels</b> (<i>pronounced more in the back of the mouth</i>) and <b>front vowels</b> (<i>pronounced more in the front</i>). A simple Finnish word can only contain vowels from one group. The vowels i and e are considered neutral and can combine freely with the other vowels.<br />On the right are two tables: one showing the back vowels and their front vowel equivalents and one listing the neutral vowels (e and i) as a reminder.<br />In order to choose the version of the ending, we just look at the stem and choose the version with a vowel from the same group. If a word only contains neutral vowels, consider it front vowel.<br />Here our stem is k<b>a</b>tt<b>o</b>-, containing <b>a</b> and <b>o</b>, both back vowels so we choose the ending with the back vowel too: <b>-lla</b>.<br /><br />One more step and we're done!";

    nextButtonParameters("Last step", "step5", "inline");

};

function step5() {
    activateMenu("step5");
    tableStems.style.display = "none";
    tableCaseEndings.style.display = "none";
    tableVocal1.style.display = "none";
    tableVocal2.style.display = "none";
    tableCons.style.display = "";
    rowTT.className = "positive";

    mainText.innerHTML = "<h1>Consonant gradation</h1>This step might seem scary but if you follow the rules, it should all go well!<br /><br />So far, we have:<br />a stem: <b>katto-</b><br />an ending: <b>-lla</b><br /><br />Let's first combine them:<br/><br/><i>*kattolla</i><br/><br/>I put a little * before just to remind you we're not done yet and at this stage the word we got might not be right/exist.<br/><br/>Finnish has a set of rules called <i><b>Consonant gradation</b></i>. They occur when the last syllable of the stem changes its status (from open to close or from close to open).<br/><br/>An <b>open syllable</b> ends in a vowel.<br/>A <b>closed syllable</b> is closed by a consonant at the end.<br/><br/>When the status of a syllable changes, the consonant(s) at placed <b>right before it</b> may change.<br/><br/>On the right side you have the two groups, the strong grade (present in the open syllables) and the weak grade (in closed syllables).<br/><br/>Let's look at our example with the word we created and the stem in parallel:<br/><br/>*kattolla&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;katto-<br/><br/>Cut it into syllables (a syllable never starts with 2 consonants):<br/><br/>*kat|tol|la&nbsp;&nbsp;&nbsp;kat|to|-<br/><br/>Underline the last syllable from the stem:<br/><br/>*kat|<u>tol</u>|la&nbsp;&nbsp;&nbsp;kat|<u>to</u>|-<br/><br/>Check if they are open or closed by a consonant:<br/><br/>*kat|<u>to<b>l</b></u>|la&nbsp;&nbsp;&nbsp;kat|<u>to</u>|-<br/>&nbsp;&nbsp;&nbsp;&nbsp;<i>closed</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>open</i><br/><br/>The direction of the change from stem -> word is open -> closed<br/><br/>Now let's look at the consonants right before that syllable:<br/><br/>*ka<b>t|<u>t</b>ol</u>|la<br/><br/>If you look in the list, a <i><b>tt</b></i> in an open syllable becomes a <i><b>t</b></i> in a closed syllable. So here we need to change the <i><b>tt</b></i> to <i><b>t</b></i>:<br/><br/>katolla<br/><br/>There, we have it: <b>katolla</b> = <i>on the roof</i>";

    nextButtonParameters("Trainer", "step5", "inline");

};*/
