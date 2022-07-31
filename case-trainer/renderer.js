//////////////////////////////////

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


function trainer1() {



    $('#inputField').show();
    $('#trainerButton').show();
    $('#accordion').show();



    $('#trainerText').html("How would you say <b>" + dataPhrase + "</b> in Finnish?");
    $('#inputField').focus();

    /// WORD

    $('#stepAnswer1').html(dataWordFinnish);
    $('#stepPrompt1').html("Do you know the Finnish word that means <b><i>" + dataWordEnglish + "</i></b>? If you do, try to type it here. If you need help, use the button.");

    /// CASE

    $('#stepAnswer2').html(dataCase);
    $('#stepPrompt2').html("So we are trying to say <i><b>" + dataPhrase + "</b></i> in Finnish.<br/><br/> What case should you use to translate <i>" + dataCaseTranslation + "</i>?<br/><br/>If you need help, use the button.");

    /// STEMS

    $('#stepAnswer3').html(dataStem1 + " / " + dataStem2);
    $('#stepPrompt3').html("What are the stems for the word we're working with? If you know them, type them below. If not, you can always use the help button.<br/><br/>");

    /// RIGHT STEM

    var rightStem = "";
    if (dataCase == "partitive") {
        $('#stepAnswer4').html(dataStem2);
        rightStem = dataStem2;
    } else {
        $('#stepAnswer4').html(dataStem1);
        rightStem = dataStem1;
    };

    $('#stepPrompt4').html("Now an easy part: which of the two stems should you use in this case?");

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

    $('#stepAnswer5').html(rightEnding);
    $('#stepPrompt5').html("Let's now choose the right endings for that word in that case. As always, help is only one click away.");

    /// VOCAL HARMONY

    $('#stepAnswer6').html(dataEndingsFinal);
    $('#stepPrompt6').html("By now you should know what set of ending you're going to use, but this set may contain 2 different versions or a vowel that needs to be define. Try to type the actual ending:<br/><br/>");

    /// FINDING CONSONANT GRADATION

    $('#stepAnswer7').html(dataGradation);
    $('#stepPrompt7').html("So you have a stem and and ending. Combined together they give <b>*" + $('#stepAnswer4').html().slice(0, -1) + $('#stepAnswer6').html().slice(1) + "</b><br/><br/>I put a little * before to remind you this word might not exist like that.<br/><br/>What consonant gradation (if any) applies here?<br/><br/>");

};


$('#stepInput1').keypress(function (e) {
    if (e.which == 13) {
        stepConfirmButton1_clicked();
    }
});

$('#stepInput3b').keypress(function (e) {
    if (e.which == 13) {
        stepConfirmButton3_clicked();
    }
});

$('#stepInput4').keypress(function (e) {
    if (e.which == 13) {
        stepConfirmButton4_clicked();
    }
});

$('#stepInput6').keypress(function (e) {
    if (e.which == 13) {
        stepConfirmButton6_clicked();
    }
});

$('#stepConfirmButton1').click(function () {
    stepConfirmButton1_clicked();
});

$('#stepConfirmButton2').click(function () {
    stepConfirmButton2_clicked();
});

$('#stepConfirmButton3').click(function () {
    stepConfirmButton3_clicked();
});

$('#stepConfirmButton4').click(function () {
    stepConfirmButton4_clicked();
});

$('#stepConfirmButton5').click(function () {
    stepConfirmButton5_clicked();
});

$('#stepConfirmButton6').click(function () {
    stepConfirmButton6_clicked();
});

$('#stepConfirmButton7').click(function () {
    stepConfirmButton7_clicked();
});


function stepConfirmButton1_clicked() {

    if ($('#stepInput1').val() == dataWordFinnish) {
        $('#stepHide1').hide();
        $('#stepHide1a').hide();
        $('#stepAnswer1').show();
        $('#stepExplanation1').show();
        $('#stepExplanation1').html("You're absolutely right! The Finnish word that means <b><i>" + dataWordEnglish + "</i></b> is <b>" + dataWordFinnish + "</b><br/><br/>You can continue with the next steps.");
        $('#stepConfirmButton1').hide();

    } else {

        $('#stepHide1').hide();
        $('#stepHide1a').hide();
        $('#stepAnswer1').show();
        $('#stepExplanation1').show();
        $('#stepExplanation1').html("Oops, that's not the word I was expecting. I was thinking of <b>" + dataWordFinnish + "</b>. We'll use this one, ok?<br/><br/> You can continue with the next steps.");
        $('#stepConfirmButton1').hide();
    };

};

function stepConfirmButton2_clicked() {

    if ($('#stepInput2').val() == dataCase) {

        $('#stepHide2').hide();
        $('#stepHide2a').hide();
        $('#stepAnswer2').show();
        $('#stepExplanation1').show();
        $('#stepExplanation1').html("You're right! The case we need to use is the <b>" + dataCase + "</b>.");

    } else {

        $('#stepPrompt2').html("No... that's not the right case. You can try again or you can use the help button.<br/><br/>");
        $('#stepInput2').val("none").change();
    };
};

function stepConfirmButton3_clicked() {


    // Cases to deal with final hyphen

    var step1input_clean = "";
    var step2input_clean = "";
    var dataStem1_clean = dataStem1.slice(0, -1);
    var dataStem2_clean = dataStem2.slice(0, -1);

    if ($('#stepInput3a').val().slice(-1) == "-") {
        step1input_clean = $('#stepInput3a').val().slice(0, -1);
    } else {
        step1input_clean = $('#stepInput3a').val();
    };


    if ($('#stepInput3b').val().slice(-1) == "-") {
        step2input_clean = $('#stepInput3b').val().slice(0, -1);
    } else {
        step2input_clean = $('#stepInput3b').val();
    };


    if (step1input_clean == dataStem1_clean && step2input_clean == dataStem2_clean) {

        $('#stepHide3').hide();
        $('#stepHide3a').hide();
        $('#stepAnswer3').show();
        $('#stepExplanation3').show();
        $('#stepExplanation1').html("Exactly! The stems for <i>" + dataWordFinnish + "</i> are <b>" + dataStem1 + " / " + dataStem2 + "</b>.");

    } else if (step1input_clean == dataStem1_clean) {

        $('#stepPrompt3').html("The first stem is right, but something is off with Stem 2. You can try again or use the help button.<br/><br/>");
        $('#stepInput3b').val("").change();
        $('#stepInput3b').focus();

    } else if (step2input_clean == dataStem2_clean) {

        $('#stepPrompt3').html("The second stem is right, but something is off with Stem 1. You can try again or use the help button.<br/><br/>");
        $('#stepInput3a').val("").change();
        $('#stepInput3a').focus();

    } else {

        $('#stepPrompt3').html("Oops, not what I was expecting... You can try again or use the help button.<br/><br/>");
        $('#stepInput3a').val("").change();
        $('#stepInput3b').val("").change();
        $('#stepInput3a').focus();

    };

};

function stepConfirmButton4_clicked() {
    var rightStem = "";
    if (dataCase == "partitive") {
        $('#stepAnswer4').html(dataStem2);
        rightStem = dataStem2;
    } else {
        $('#stepAnswer4').html(dataStem1);
        rightStem = dataStem1;
    };

    var stepinput_clean = "";
    var answer_clean = rightStem.slice(0, -1);
    var dataStem1_clean = dataStem1.slice(0, -1);
    var dataStem2_clean = dataStem2.slice(0, -1);

    if ($('#stepInput4').val().slice(-1) == "-") {
        stepinput_clean = $('#stepInput4').val().slice(0, -1);
    } else {
        stepinput_clean = $('#stepInput4').val();
    };

    if (stepinput_clean == answer_clean) {

        $('#stepHide4').hide();
        $('#stepHide4a').hide();
        $('#stepAnswer4').show();
        $('#stepExplanation4').show();
        $('#stepExplanation1').html("Yes! The right stem to use here is <b>" + rightStem + "</b>.");

    } else if (stepinput_clean == dataStem1_clean || stepinput_clean == dataStem2_clean) {

        if (dataCase == "partitive") {

            var explanationText = "It looks like you chose the wrong stem.<br/><br/>For the <i>partitive<i/> you always use stem 2: <b>" + dataStem2 + "</b>.";

        } else {

            var explanationText = "<i class='exclamation triangle icon'></i> It looks like you chose the wrong stem.<br/><br/>Stem 2 is only used for the <i>partitive</i>. For all other cases, including the <i>" + dataCase + "</i> you need to use stem 1: <b>" + dataStem1 + "</b>.";

            $('#stepHide4').hide();
            $('#stepHide4a').hide();
            $('#stepAnswer4').show();
        };

        $('#stepExplanation4').show();
        $('#stepExplanation4').html(explanationText);

    } else {

        $('#stepExplanation4').show();
        $('#stepExplanation4').html("Oops, that doesn't seem to be a valid root for this word. Maybe you should check the previous Step?");

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


    if ($('#stepInput5').val() == rightEnding) {

        $('#stepHide5').hide();
        $('#stepHide5a').hide();
        $('#stepAnswer5').show();
        $('#stepExplanation5').show();
        $('#stepExplanation5').html("Yes! The ending for the <i>" + dataCase + "</i> of the word <i>" + dataWordFinnish + "</i> is <b>" + rightEnding + "</b>.");

    } else {

        $('#stepPrompt5').html("That's not the right case. If you need help, use the help button.");

    };

};

function stepConfirmButton6_clicked() {

    var stepinput_clean = "";
    var dataEndingsFinal_clean = dataEndingsFinal.slice(1);

    if ($('#stepInput6').val().slice(0, 1) == "-") {
        stepinput_clean = $('#stepInput6').val().slice(1);
    } else {
        stepinput_clean = $('#stepInput6').val();
    };

    if (stepinput_clean == dataEndingsFinal_clean) {

        $('#stepHide6').hide();
        $('#stepHide6a').hide();
        $('#stepAnswer6').show();
        $('#stepExplanation6').show();
        $('#stepExplanation6').html("Exact! The ending after applying the <i>vowel harmony</i> is <b>" + dataEndingsFinal + "</b>.");

    } else {

        $('#stepPrompt6').html("That's not it... Try again or use the help.");

    };


};

function stepConfirmButton7_clicked() {

    if ($('#stepInput7').val() == dataGradation) {

        $('#stepHide7').hide();
        $('#stepHide7a').hide();
        $('#stepAnswer7').show();


        var explanationText = "";
        if (dataGradation == "none") {
            explanationText = "You're absolutely right! This word will <i>not</i> undergo any gradation at all.<br/><br/>You can try and type the result at the top of the page";
        } else {
            explanationText = "You're absolutely right! This word will undergo the <b>" + dataGradation + "</b> gradation.";
        };

        $('#stepExplanation7').show();
        $('#stepExplanation7').html(explanationText);

    } else {

        $('#stepPrompt7').html("So you have a stem and and ending. Combined together they give <b>*" + stepAnswer4.innerHTML.slice(0, -1) + stepAnswer6.innerHTML.slice(1) + "</b><br/><br/>I put a little * before to remind you this word might not exist like that.<br/><br/>That's not correct... try again or use the help button<br/><br/>");
    };


};


$('#stepHelpButton1').click(function () {

    $('#stepHide1').hide();
    $('#stepAnswer1').show();
    $('#stepHide1a').hide();
    $('#stepExplanation1').show();
    $('#stepExplanation1').html("The Finnish word that means <b><i>" + dataWordEnglish + "</i></b> is <b>" + dataWordFinnish + "</b><br/><br/>You can continue with the next steps.");

});

$('#stepHelpButton2').click(function () {

    hideAllTables();
    $('#tableCaseMeaning').show();
    $('#stepExplanation2').html("I have opened a list of cases with their basic meanings on the right. Try to choose the right one with the help of the table.<br/><br/> If you're still having issues, the reveal <i class='eye slash icon'></i> button is there for you.");
    $('#stepHelpButton2').hide();
});

$('#stepHelpButton3').click(function () {

    console.log($('#stepHelpButton3').name);

    if ($('#stepHelpButton3').attr('name') == "status 2") {

        $('#stepExplanation3').html("Because <i>" + dataWordFinnishHighlighted + "</i> " + dataTypeReason + ", it belongs to group " + dataType + ". I have highlighted it in the table. Does that help?)");
        document.getElementById("type" + dataType).className = "warning";
        $('#stepHelpButton3').html("I still need help");
        $('#stepHelpButton3').attr('name', "status 3");

    } else if ($('#stepHelpButton3').attr('name') == "status 3") {

        $('#stepExplanation3').html("So for this type, " + dataTypeExplanation + ".<br/><br/>Try again typing the stems or use the reveal <i class='eye slash icon'></i> button.");
        $('#stepHelpButton3').hide();

    } else {

        $('#stepExplanation3').html("On the right you can have a look at the different types of words and try to find the one that matches here. Then, try to type the stems again.<br/><br/>If you need more help, press the help button again.");
        $('#stepHelpButton3').html("I need more help");
        $('#stepHelpButton3').attr('name', "status 2");
        hideAllTables();
        $('#tableStems').show();

    };

});

$('#stepHelpButton4').click(function () {

    if (dataCase == "partitive") {

        $('#stepExplanation4').html("The partitive is the only case that uses stem 2... That should help!");
        $('#stepHelpButton4').hide();

    } else {

        $('#stepExplanation4').html("All cases except the partitive use stem 1. Does that help?");
        $('#stepHelpButton4').hide();

    };
});

$('#stepHelpButton5').click(function () {

    console.log(dataCase);

    if (dataCase == "partitive") {
        partitiveHelp();
    } else if (dataCase == "illative") {
        illativeHelp();
    } else {
        otherCasesHelp();
    };
});

$('#stepHelpButton6').click(function () {

    hideAllTables();
    $('#tableVocal1').show();
    $('#tableVocal2').show();
    $('#stepExplanation6').show();
    $('#stepExplanation6').html("Look at the <i>vowel harmony</i> table and remember to use the right vowel for the ending.");
    $('#stepHelpButton6').hide();

});

$('#stepHelpButton7').click(function () {


    if ($('#stepHelpButton7').attr('name') == "status 2") {


        $('#stepExplanation7').html("First, check the status of the last syllable of the stem. Does it goes open > closed, closed > open or remains the same?<br/><br/>If it changes, the consonant(s) right before that syllable change from one column to the other in the same order.");
        $('#stepHelpButton7').html("I'm still not sure");
        $('#stepHelpButton7').attr('name', "status 3");

    } else if ($('#stepHelpButton7').attr('name') == "status 3") {

        $('#stepExplanation7').html("Ok, so the stem is <i>" + $('#stepAnswer4').html() + "</i> and the stem+ending is *<i>" + $('#stepAnswer4').html().slice(0, -1) + $('#stepAnswer6').html().slice(1) + "</i>.<br/><br/>We cut them in syllables:<br/><br/>" + dataStemCut + " and " + dataBeforeGradationCut + "<br/><br/>Then we look at the last syllable from the stem:<br/><br/> " + dataStemCutUnderlined + " and " + dataBeforeGradationCutUnderlined + "<br/><br/>The first one is <b>" + dataStemSyllable + "</b> and is <i>" + dataStemSyllableStatus + "</i> and the second one is <b>" + dataBeforeGradationSyllable + "</b> and is <i>" + dataBeforeGradationSyllableStatus + "</i>.<br/><br/>So from Stem > Word the syllable goes <i>" + dataStemSyllableStatus + " > " + dataBeforeGradationSyllableStatus + "</i><br/><br/>The consonant(s) right before that syllable is <b>" + dataConsonantBefore + "</b> and it needs to also change from <i>" + dataStemSyllableStatus + " > " + dataBeforeGradationSyllableStatus + "</i><br/><br/>In the table you can see that a <b>" + dataConsonantBefore + "</b> in an <i>" + dataStemSyllableStatus + " syllable</i> corresponds to a <b>" + dataConsonantAfter + "</b> in a <i>" + dataBeforeGradationSyllableStatus + " syllable</i><br/><br/>So in this case you need to apply <b>" + dataGradation + "</b>");
        $('#stepHelpButton7').hide();

    } else {

        hideAllTables();
        $('#tableCons').show();
        $('#stepExplanation7').html("The table on the right lists the different types of consonant gradation. Doesn't that help you?");
        $('#stepHelpButton7').attr('name', "status 2");
        $('#stepHelpButton7').html("I need more help!");

    };

});


$('#stepReveal2').click(function () {

    $('#stepHide2').hide();
    $('#stepHide2a').hide();
    $('#stepAnswer2').show();
    $('#stepExplanation2').show();
    $('#stepExplanation2').html("The case we need to use is the <b>" + dataCase + "</b>.");

});

$('#stepReveal3').click(function () {

    $('#stepHide3').hide();
    $('#stepHide3a').hide();
    $('#stepAnswer3').show();
    $('#stepExplanation3').show();
    $('#stepExplanation3').html("The stems for the words are <b>" + dataStem1 + " / " + dataStem2 + "</b>.");

});

$('#stepReveal4').click(function () {

    var rightStem = "";
    if (dataCase == "partitive") {
        rightStem = dataStem2;
    } else {
        rightStem = dataStem1;
    };

    $('#stepHide4').hide();
    $('#stepHide4a').hide();
    $('#stepAnswer4').show();
    $('#stepExplanation4').show();
    $('#stepExplanation4').html("The stem for the <i>" + dataCase + "</i> is <b>" + rightStem + "</b>.");

});

$('#stepReveal5').click(function () {

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
    $('#stepHide5').hide();
    $('#stepHide5a').hide();
    $('#stepAnswer5').show();
    $('#stepExplanation5').show();
    $('#stepExplanation5').html("The ending for the <i>" + dataCase + "</i> of <i>" + dataWordFinnish + "</i> is <b>" + rightEnding + "</b>");

});

$('#stepReveal6').click(function () {

    $('#stepHide6').hide();
    $('#stepHide6a').hide();
    $('#stepAnswer6').show();
    $('#stepExplanation6').show();
    $('#stepExplanation6').html("The right version of the ending in this case is <b>" + dataEndingsFinal + "</b>");

});

$('#stepReveal7').click(function () {

    var explanationText = "";
    if (dataGradation == "none") {
        explanationText = "This word will <i>not</i> undergo any gradation at all.<br/><br/>You can try and type the result at the top of the page";
    } else {
        explanationText = "This word will undergo the <b>" + dataGradation + "</b> gradation.";
    };

    $('#stepHide7').hide();
    $('#stepHide7a').hide();
    $('#stepAnswer7').show();
    $('#stepExplanation7').show();
    $('#stepExplanation7').html(explanationText);

});


function partitiveHelp() {

    if ($('#stepHelpButton5').attr('name') == "status 2") {

        document.getElementById("ending-" + dataCase).className = "warning";
        $('#stepExplanation5').html("The row with the right ending for the <i>" + dataCase + "</i> is highlighted is the table. If you need more help, use the help button again.");
        $('#stepHelpButton5').attr('name', "status 3");

    } else if ($('#stepHelpButton5').attr('name') == "status 3") {
        hideAllTables();
        $('#tableCaseEndings').show();
        $('#tablePartitive').show();
        $('#stepExplanation5').html("It's a little tricky when it comes to the <i>partitive</i> endings. The rules are now on the right side. Try to see if you can find the right ending.");
        $('#stepHelpButton5').html("No, more help needed!");
        $('#stepHelpButton5').attr('name', "status 4");

    } else if ($('#stepHelpButton5').attr('name') == "status 4") {

        $('#stepHelpButton5').hide();
        $('#stepHide5').hide();
        $('#stepHide5a').hide();
        $('#stepAnswer5').show();
        $('#stepExplanation5').html("The endings for the <i>partitive</i> for " + dataStemHighlighted + " is <b>" + dataEndings + "</b> because " + dataReason + ".");

    } else {

        hideAllTables();
        $('#tableCaseEndings').show();
        $('#stepExplanation5').html("On the right you can see a list of the different cases with their endings. This should help.");
        $('#stepHelpButton5').attr('name', "status 2");

    };

};

function illativeHelp() {

    if ($('#stepHelpButton5').attr('name') == "status 2") {

        document.getElementById("ending-" + dataCase).className = "warning";
        $('#stepExplanation5').html("The row with the right ending for the <i>" + dataCase + "</i> is highlighted is the table. If you need more help, use the help button again.");
        $('#stepHelpButton5').attr('name', "status 3");

    } else if ($('#stepHelpButton5').attr('name') == "status 3") {

        hideAllTables();
        $('#tableCaseEndings').show();
        $('#tableIllative').show();
        $('#stepExplanation5').html("It's a little tricky when it comes to the <i>illative</i> endings. The rules are now on the right side. Try to see if you can find the right ending.");
        $('#stepHelpButton5').html("No, more help needed!");
        $('#stepHelpButton5').attr('name', "status 4");

    } else if ($('#stepHelpButton5').attr('name') == "status 4") {

        $('#stepHelpButton5').hide();
        $('#stepHide5').hide();
        $('#stepHide5a').hide();
        $('#stepAnswer5').show();
        $('#stepExplanation5').html("The endings for the <i>illative</i> for " + dataStemHighlighted + " is <b>" + dataEndings + "</b> because " + dataReason + ".");

    } else {

        hideAllTables();
        $('#tableCaseEndings').show();
        $('#stepExplanation5').html("On the right you can see a list of the different cases with their endings. This should help.");
        $('#stepHelpButton5').attr('name', "status 2");

    };


};

function otherCasesHelp() {

    if ($('#stepHelpButton5').attr('name') == "status 2") {

        document.getElementById("ending-" + dataCase).className = "warning";
        $('#stepExplanation5').html("The row with the right ending for the <i>" + dataCase + "</i> is highlighted is the table. If that's not enough, use the reveal <i class='eye slash icon'></i> button.");
        $('#stepHelpButton5').hide();

    } else {

        hideAllTables();
        $('#tableCaseEndings').show();
        $('#stepExplanation5').html("On the right you can see a list of the different cases with their endings. This should help.");
        $('#stepHelpButton5').attr('name', "status 2");

    };

};

function hideAllTables() {

    $('#tableCaseEndings').hide();
    $('#tableCons').hide();
    $('#tableIllative').hide();
    $('#tablePartitive').hide();
    $('#tableStems').hide();
    $('#tableVocal1').hide();
    $('#tableVocal2').hide();
    $('#tableCaseMeaning').hide();

};


$('#trainerButton').click(function () {

    if ($('#inputField').val() == dataResult) {

        $('#correctModal').modal('show');

    };
});

$('#modalButton').click(function () {

    $('#correctModal').modal('hide');

});


$('#inputField').keypress(function (e) {
    if (e.which == 13) {
        $('#trainerButton').click();
    }
});

$('#menuTrainer').click(function () {

    $('gridTrainer').show();
    trainer1();

});

$('#menuHome').click(function () {

    $('gridTrainer').show();
    home();

});


function reset(element) {
    var id = "#" + element;
    $(id).html = "";
    $(id).hide();
};

function resetAll() {

    var elements = ["mainText", "helperText", "tableStems", "tableCaseEndings", "tableVocal1", "tableVocal2", "tableCons", "gridTrainer", "trainerText", "inputField", "trainerButton", "stepAnswer1", "stepPrompt1", "stepInput1", "stepExplanation1", "stepConfirmButton1", "stepAnswer2", "stepPrompt2", "stepInput2", "stepHelpButton2", "stepExplanation2", "stepReveal2", "stepConfirmButton2", "stepHide1", "stepHide1a", "stepHide2", "stepHide2a", "stepAnswer3", "stepPrompt3", "stepInput3a", "stepInput3b", "stepHelpButton3", "stepExplanation3", "stepReveal3", "stepHide3", "stepConfirmButton3", "stepHide3a", "stepAnswer4", "stepPrompt4", "stepInput4", "stepHelpButton4", "stepExplanation4", "stepReveal4", "stepHide4", "stepConfirmButton4", "stepHide4a", "stepAnswer5", "stepPrompt5", "stepInput5", "stepHelpButton5", "stepExplanation5", "stepReveal5", "stepHide5", "stepConfirmButton5", "stepHide5a", "tablePartitive", "tableIllative", "stepAnswer6", "stepPrompt6", "stepInput6", "stepHelpButton6", "stepExplanation6", "stepReveal6", "stepHide6", "stepConfirmButton6", "stepHide6a", "stepAnswer7", "stepPrompt7", "stepInput7", "stepHelpButton7", "stepExplanation7", "stepReveal7", "stepHide7", "stepConfirmButton7", "stepHide7a", "accordion", "tableCaseMeaning"];

    elements.forEach(reset);

};
