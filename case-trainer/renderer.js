//////////////////////////////////

///Initialisation

const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
const vowels = ["a", "ä", "e", "i", "o", "ö", "u", "y"];

var data = [];
var index_number = 0;
var countSyllable = 0;

$.getJSON('data.json', function (jsonData) {


    jsonData.data.forEach(function (current_item) {

        /// GETTING .RightStem

        if (current_item.Case == "partitive") {
            current_item.RightStem = current_item.Stem2;
        } else {
            current_item.RightStem = current_item.Stem1;
        }

        /// GETTING .TextBefore

        let possibleTextBefore = /(.+)<b>/.exec(current_item.Result);
        if (possibleTextBefore != null) {
            current_item.TextBefore = possibleTextBefore[1];

        } else {
            current_item.TextBefore = "";;
        };

        /// GETTING .TextAfter

        let possibleTextAfter = /<\/b>(.+)/.exec(current_item.Result);
        if (possibleTextAfter != null) {
            current_item.TextAfter = possibleTextAfter[1];

        } else {
            current_item.TextAfter = "";;
        };

        /// GETTING .Result

        let possibleResult = /<b>(.+)<\/b>/.exec(current_item.Result);
        if (possibleResult != null) {
            current_item.Result = possibleResult[1];

        };

        /// GETTING .WordFinnish

        current_item.WordFinnish = get_dataWordFinnish_from_dataWordFinnishHighlighted(current_item.WordFinnishHighlighted);

        /// GETTING .StemCut & .StemCutUnderlined & .StemSyllable & .StemSyllableStatus

        current_item.StemCut = get_dataStemCut_from_dataRightStem(current_item.RightStem)[0];
        current_item.StemCutUnderlined = get_dataStemCut_from_dataRightStem(current_item.RightStem)[1];
        current_item.StemSyllable = get_dataStemCut_from_dataRightStem(current_item.RightStem)[2];
        current_item.StemSyllableStatus = get_dataStemCut_from_dataRightStem(current_item.RightStem)[3];


        /// GETTING .BeforeGradationCut & .BeforeGradationCutUnderlined & .BeforeGradationSyllable & .BeforeGradationSyllableStatus

        current_item.BeforeGradationCut = get_dataBeforeGradationCut_from_dataRightStem_and_dataEndingsFinal(current_item.RightStem, current_item.EndingsFinal)[0];
        current_item.BeforeGradationCutUnderlined = get_dataBeforeGradationCut_from_dataRightStem_and_dataEndingsFinal(current_item.RightStem, current_item.EndingsFinal)[1];
        current_item.BeforeGradationSyllable = get_dataBeforeGradationCut_from_dataRightStem_and_dataEndingsFinal(current_item.RightStem, current_item.EndingsFinal)[2];
        current_item.BeforeGradationSyllableStatus = get_dataBeforeGradationCut_from_dataRightStem_and_dataEndingsFinal(current_item.RightStem, current_item.EndingsFinal)[3];

        /// GETTING .ConsonantBefore & .ConsonantAfter

        if (current_item.Gradation != "none") {
            current_item.ConsonantBefore = get_dataConsonantBefore_and_After_from_Gradation(current_item.Gradation)[0];
            current_item.ConsonantAfter = get_dataConsonantBefore_and_After_from_Gradation(current_item.Gradation)[1];
        } else {
            current_item.ConsonantBefore = "";
            current_item.ConsonantAfter = "";
        };

        data.push(current_item);

    });

    console.log(data);

    index_number = getRandomInt(0, data.length - 1);

});



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

function get_dataStemCut_from_dataRightStem(text) {

    let stemSyllable = "";
    let stemSyllableStatus = "";

    let toCut = text.slice(0, -1);
    var syllables = [];
    var lastIndex = toCut.length + 1;
    for (let i = toCut.length - 1; i > 0; i--) {


        if (/[aäeioöuy]/.test(toCut[i]) == true && /[bcdfghjklmnpqrstvwxz]/.test(toCut[i - 1]) == true) {

            syllables.push(toCut.slice(i - 1, lastIndex));
            lastIndex = i - 1;

        } else if (/[aäeioöuy]/.test(toCut[i]) == true && /[aäeioöuy]/.test(toCut[i - 1]) == true) {

            if (checkForDiphthong(toCut[i], toCut[i - 1])) {

            } else {
                syllables.push(toCut.slice(i, lastIndex));
                lastIndex = i;
            };
        };

    };

    var wordCut1 = "|";
    for (let i = syllables.length - 1; i >= 0; i--) {
        wordCut1 += syllables[i] + "|";
    };

    wordCut1 += "-";

    var wordCut2 = "|";
    countSyllable = syllables.length - 1;
    for (let i = syllables.length - 1; i >= 0; i--) {

        if (i == 0) {
            wordCut2 += "<u>" + syllables[i] + "</u>|";
            stemSyllable = syllables[i];
        } else {
            wordCut2 += syllables[i] + "|";
        };
    };

    wordCut2 += "-";
    if (/[aäeioöuy]/.test(stemSyllable.slice(-1)) == true) {
        stemSyllableStatus = "open";
    } else {
        stemSyllableStatus = "closed";
    };

    stemSyllable = "|" + stemSyllable + "|";

    let returnValue = [wordCut1, wordCut2, stemSyllable, stemSyllableStatus];


    return (returnValue);

};


function get_dataBeforeGradationCut_from_dataRightStem_and_dataEndingsFinal(stem, ending) {

    let beforeGradationSyllable = "";
    let beforeGradationSyllableStatus = "";

    let toCut = stem.slice(0, -1) + ending.slice(1);
    var syllables = [];
    var lastIndex = toCut.length + 1;
    for (let i = toCut.length - 1; i > 0; i--) {

        if (/[aäeioöuy]/.test(toCut[i]) == true && /[bcdfghjklmnpqrstvwxz]/.test(toCut[i - 1]) == true) {

            syllables.push(toCut.slice(i - 1, lastIndex));
            lastIndex = i - 1;

        } else if (/[aäeioöuy]/.test(toCut[i]) == true && /[aäeioöuy]/.test(toCut[i - 1]) == true) {

            if (checkForDiphthong(toCut[i], toCut[i - 1])) {

            } else {
                syllables.push(toCut.slice(i, lastIndex));
                lastIndex = i;
            };

        };

    };

    var wordCut1 = "|";
    for (let i = syllables.length - 1; i >= 0; i--) {

        wordCut1 += syllables[i] + "|";

    };

    var count = 0
    var wordCut2 = "|";
    for (let i = syllables.length - 1; i >= 0; i--) {

        if (count == countSyllable) {
            wordCut2 += "<u>" + syllables[i] + "</u>|";
            count++;
            beforeGradationSyllable = syllables[i];
        } else {
            wordCut2 += syllables[i] + "|";
            count++;
        };
    };

    wordCut2 = "*" + wordCut2 + "-";

    if (/[aäeioöuy]/.test(beforeGradationSyllable.slice(-1)) == true) {
        beforeGradationSyllableStatus = "open";
    } else {
        beforeGradationSyllableStatus = "closed";
    };

    beforeGradationSyllable = "|" + beforeGradationSyllable + "|";

    let returnValue = [wordCut1, wordCut2, beforeGradationSyllable, beforeGradationSyllableStatus];

    return (returnValue);

};

function checkForDiphthong(vowel1, vowel2) {

    let diph = vowel2 + vowel1;
    if (diph == "uo" || diph == "ai" || diph == "äi" || diph == "oi" || diph == "ei" || diph == "öi" || diph == "ui" || diph == "yi" || diph == "au" || diph == "ou" || diph == "eu" || diph == "iu" || diph == "äy" || diph == "ey" || diph == "öy" || diph == "iu" || diph == "ie" || diph == "yö" || diph == "aa" || diph == "ää" || diph == "ee" || diph == "ii" || diph == "oo" || diph == "öö" || diph == "uu" || diph == "yy") {
        return (true);
    } else {
        return (false);
    };

};

function get_dataConsonantBefore_and_After_from_Gradation(gradation) {

    let consonantBefore = /(.*) →/.exec(gradation);
    let consonantAfter = /→ (.*)/.exec(gradation);

    return ([consonantBefore[1], consonantAfter[1]]);

};

function trainer() {


    $('#gridTrainer').show();
    $('#inputFieldContainer').show();
    $('#trainerButton').show();
    $('#accordion').show();



    $('#trainerText').html("<span class='ui big black text'>How would you say <span class='ui info text'>" + data[index_number].Phrase + "</span> in Finnish?</span>");
    $('#textBefore').html(data[index_number].TextBefore);
    $('#textAfter').html(data[index_number].TextAfter);

    $('#textBefore').show();
    $('#textAfter').show();


    $('#inputField').focus();

    /// WORD

    $('#stepAnswer1').html(data[index_number].WordFinnish);
    $('#stepPrompt1').html("Do you know the Finnish word that means <b><i>" + data[index_number].WordEnglish + "</i></b>? If you do, try to type it here. If you need help, use the button.");
    $('#stepPrompt1').show();

    /// CASE

    $('#stepAnswer2').html(data[index_number].Case);
    $('#stepPrompt2').html("So we are trying to say <i><b>" + data[index_number].Phrase + "</b></i> in Finnish.<br/><br/> What case should you use to translate <i>" + data[index_number].CaseTranslation + "</i>?<br/><br/>If you need help, use the button.");
    $('#stepPrompt2').show();

    /// STEMS

    $('#stepAnswer3').html(data[index_number].Stem1 + " / " + data[index_number].Stem2);
    $('#stepPrompt3').html("What are the stems for the word we're working with? If you know them, type them below. If not, you can always use the help button.<br/><br/>");
    $('#stepPrompt3').show();

    /// RIGHT STEM

    $('#stepAnswer4').html(data[index_number].RightStem);
    $('#stepPrompt4').html("Now an easy part: which of the two stems should you use in this case?");
    $('#stepPrompt4').show();

    /// ENDINGS

    var caseEndings = [["nominative", "-"], ["accusative", "-n"], ["genitive", "-n"], ["inessive", "-ssa/ssä"], ["elative", "-sta/stä"], ["adessive", "-lla/llä"], ["ablative", "-lta/ltä"], ["allative", "-lle"], ["essive", "-na/nä"], ["translative", "-ksi"]];
    var rightEnding = "";

    if (data[index_number].Case == "partitive" || data[index_number].Case == "illative") {

        rightEnding = data[index_number].Endings;

    } else {

        for (let i = 0; i < caseEndings.length; i++) {
            if (caseEndings[i][0] == data[index_number].Case) {
                rightEnding = caseEndings[i][1];
            }
        }

    };

    $('#stepAnswer5').html(rightEnding);
    $('#stepPrompt5').html("Let's now choose the right endings for that word in that case. As always, help is only one click away.");
    $('#stepPrompt5').show();

    /// VOCAL HARMONY

    $('#stepAnswer6').html(data[index_number].EndingsFinal);
    $('#stepPrompt6').html("By now you should know what set of ending you're going to use, but this set may contain 2 different versions or a vowel that needs to be define. Try to type the actual ending:<br/><br/>");
    $('#stepPrompt6').show();

    /// FINDING CONSONANT GRADATION

    $('#stepAnswer7').html(data[index_number].Gradation);
    $('#stepPrompt7').html("So you have a stem and and ending. Combined together they give <b>*" + $('#stepAnswer4').html().slice(0, -1) + $('#stepAnswer6').html().slice(1) + "</b><br/><br/>I put a little * before to remind you this word might not exist like that.<br/><br/>What consonant gradation (if any) applies here?<br/><br/>");
    $('#stepPrompt7').show();

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

    if ($('#stepInput1').val() == data[index_number].WordFinnish) {
        $('#stepHide1').hide();
        $('#stepHide1a').hide();
        $('#stepAnswer1').show();
        $('#stepExplanation1').show();
        $('#stepExplanation1').html("You're absolutely right! The Finnish word that means <b><i>" + data[index_number].WordEnglish + "</i></b> is <b>" + data[index_number].WordFinnish + "</b><br/><br/>You can continue with the next steps.");
        $('#stepConfirmButton1').hide();

    } else {

        $('#stepHide1').hide();
        $('#stepHide1a').hide();
        $('#stepAnswer1').show();
        $('#stepExplanation1').show();
        $('#stepExplanation1').html("Oops, that's not the word I was expecting. I was thinking of <b>" + data[index_number].WordFinnish + "</b>. We'll use this one, ok?<br/><br/> You can continue with the next steps.");
        $('#stepConfirmButton1').hide();
    };

};

function stepConfirmButton2_clicked() {

    if ($('#stepInput2').val() == data[index_number].Case) {

        $('#stepHide2').hide();
        $('#stepHide2a').hide();
        $('#stepAnswer2').show();
        $('#stepExplanation1').show();
        $('#stepExplanation1').html("You're right! The case we need to use is the <b>" + data[index_number].Case + "</b>.");

    } else {

        $('#stepPrompt2').html("No... that's not the right case. You can try again or you can use the help button.<br/><br/>");
        $('#stepInput2').val("none").change();
    };
};

function stepConfirmButton3_clicked() {


    // Cases to deal with final hyphen

    var step1input_clean = "";
    var step2input_clean = "";
    var dataStem1_clean = data[index_number].Stem1.slice(0, -1);
    var dataStem2_clean = data[index_number].Stem2.slice(0, -1);

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
        $('#stepExplanation1').html("Exactly! The stems for <i>" + data[index_number].WordFinnish + "</i> are <b>" + data[index_number].Stem1 + " / " + data[index_number].Stem2 + "</b>.");

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
    $('#stepAnswer4').html(data[index_number].RightStem);
    var stepinput_clean = "";
    var answer_clean = data[index_number].RightStem.slice(0, -1);
    var dataStem1_clean = data[index_number].Stem1.slice(0, -1);
    var dataStem2_clean = data[index_number].Stem2.slice(0, -1);

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
        $('#stepExplanation1').html("Yes! The right stem to use here is <b>" + data[index_number].RightStem + "</b>.");

    } else if (stepinput_clean == dataStem1_clean || stepinput_clean == dataStem2_clean) {

        if (data[index_number].Case == "partitive") {

            var explanationText = "It looks like you chose the wrong stem.<br/><br/>For the <i>partitive<i/> you always use stem 2: <b>" + dataStem2 + "</b>.";

        } else {

            var explanationText = "<i class='exclamation triangle icon'></i> It looks like you chose the wrong stem.<br/><br/>Stem 2 is only used for the <i>partitive</i>. For all other cases, including the <i>" + data[index_number].Case + "</i> you need to use stem 1: <b>" + data[index_number].Stem1 + "</b>.";

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

    if (data[index_number].Case == "partitive" || data[index_number].Case == "illative") {

        rightEnding = data[index_number].Endings;

    } else {

        for (let i = 0; i < caseEndings.length; i++) {
            if (caseEndings[i][0] == data[index_number].Case) {
                rightEnding = caseEndings[i][1];
            }
        }

    };


    if ($('#stepInput5').val() == rightEnding) {

        $('#stepHide5').hide();
        $('#stepHide5a').hide();
        $('#stepAnswer5').show();
        $('#stepExplanation5').show();
        $('#stepExplanation5').html("Yes! The ending for the <i>" + data[index_number].Case + "</i> of the word <i>" + data[index_number].WordFinnish + "</i> is <b>" + rightEnding + "</b>.");

    } else {

        $('#stepPrompt5').html("That's not the right case. If you need help, use the help button.");

    };

};

function stepConfirmButton6_clicked() {

    var stepinput_clean = "";
    var dataEndingsFinal_clean = data[index_number].EndingsFinal.slice(1);

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
        $('#stepExplanation6').html("Exact! The ending after applying the <i>vowel harmony</i> is <b>" + data[index_number].EndingsFinal + "</b>.");

    } else {

        $('#stepPrompt6').html("That's not it... Try again or use the help.");

    };


};

function stepConfirmButton7_clicked() {

    if ($('#stepInput7').val() == data[index_number].Gradation) {

        $('#stepHide7').hide();
        $('#stepHide7a').hide();
        $('#stepAnswer7').show();


        var explanationText = "";
        if (data[index_number].Gradation == "none") {
            explanationText = "You're absolutely right! This word will <i>not</i> undergo any gradation at all.<br/><br/>You can try and type the result at the top of the page";
        } else {
            explanationText = "You're absolutely right! This word will undergo the <b>" + data[index_number].Gradation + "</b> gradation.";
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
    $('#stepExplanation1').html("The Finnish word that means <b><i>" + data[index_number].WordEnglish + "</i></b> is <b>" + data[index_number].WordFinnish + "</b><br/><br/>You can continue with the next steps.");

});

$('#stepHelpButton2').click(function () {

    hideAllTables();
    $('#tableCaseMeaning').show();
    $('#stepExplanation2').show();
    $('#stepExplanation2').html("I have opened a list of cases with their basic meanings on the right. Try to choose the right one with the help of the table.<br/><br/> If you're still having issues, the reveal <i class='eye slash icon'></i> button is there for you.");
    $('#stepHelpButton2').hide();
});

$('#stepHelpButton3').click(function () {


    if ($('#stepHelpButton3').attr('name') == "status 2") {

        $('#stepExplanation3').show();
        $('#stepExplanation3').html("Because <i>" + data[index_number].WordFinnishHighlighted + "</i> " + data[index_number].TypeReason + ", it belongs to group " + data[index_number].Type + ". I have highlighted it in the table. Does that help?)");
        document.getElementById("type" + data[index_number].Type).className = "warning";
        $('#stepHelpButton3').html("I still need help");
        $('#stepHelpButton3').attr('name', "status 3");

    } else if ($('#stepHelpButton3').attr('name') == "status 3") {

        $('#stepExplanation3').show();
        $('#stepExplanation3').html("So for this type, " + data[index_number].TypeExplanation + ".<br/><br/>Try again typing the stems or use the reveal <i class='eye slash icon'></i> button.");
        $('#stepHelpButton3').hide();

    } else {

        $('#stepExplanation3').show();
        $('#stepExplanation3').html("On the right you can have a look at the different types of words and try to find the one that matches here. Then, try to type the stems again.<br/><br/>If you need more help, press the help button again.");
        $('#stepHelpButton3').html("I need more help");
        $('#stepHelpButton3').attr('name', "status 2");
        hideAllTables();
        $('#tableStems').show();

    };

});

$('#stepHelpButton4').click(function () {

    if (data[index_number].Case == "partitive") {

        $('#stepExplanation4').show();
        $('#stepExplanation4').html("The partitive is the only case that uses stem 2... That should help!");
        $('#stepHelpButton4').hide();

    } else {

        $('#stepExplanation4').show();
        $('#stepExplanation4').html("All cases except the partitive use stem 1. Does that help?");
        $('#stepHelpButton4').hide();

    };
});

$('#stepHelpButton5').click(function () {


    if (data[index_number].Case == "partitive") {
        partitiveHelp();
    } else if (data[index_number].Case == "illative") {
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

    let pattern_vowels = /[aeiouäöy][aeiouäöy]$/;
    let pattern_consonant = /[bcdfghjklmnpqrstvwz]$/;
    var noGradationText = "";
    var is_gradation = true;




    if (pattern_vowels.test(data[index_number].RightStem.slice(0, -1)) == true) {

        noGradationText = "There is no gradation here because the stem ends in two vowels: " + data[index_number].RightStem.slice(0, -3) + "<b>" + data[index_number].RightStem.slice(-3) + "</b>";
        is_gradation = false;

    } else if (pattern_consonant.test(data[index_number].RightStem.slice(0, -1)) == true) {

        noGradationText = "There is no gradation here because the stem ends in a consonant: " + data[index_number].RightStem.slice(0, -2) + "<b>" + data[index_number].RightStem.slice(-2) + "</b>";
        is_gradation = false;

    };

    if ($('#stepHelpButton7').attr('name') == "status 2") {

        $('#stepExplanation7').show();
        $('#stepExplanation7').html("First, check the status of the last syllable of the stem. Does it goes open > closed, closed > open or remains the same?<br/><br/>If it changes, the consonant(s) right before that syllable change from one column to the other in the same order.");
        $('#stepHelpButton7').html("I'm still not sure");
        $('#stepHelpButton7').attr('name', "status 3");

    } else if ($('#stepHelpButton7').attr('name') == "status 3") {

        if (data[index_number].Gradation == "none") {

            $('#stepExplanation7').show();
            $('#stepExplanation7').html("Ok, so the stem is <i>" + $('#stepAnswer4').html() + "</i> and the stem+ending is *<i>" + $('#stepAnswer4').html().slice(0, -1) + $('#stepAnswer6').html().slice(1) + "</i>.<br/><br/>We cut them in syllables:<br/><br/>" + data[index_number].StemCut + " and " + data[index_number].BeforeGradationCut + "<br/><br/>Then we look at the last syllable from the stem:<br/><br/> " + data[index_number].StemCutUnderlined + " and " + data[index_number].BeforeGradationCutUnderlined + "<br/><br/>The first one is <b>" + data[index_number].StemSyllable + "</b> and is <i>" + data[index_number].StemSyllableStatus + "</i> and the second one is <b>" + data[index_number].BeforeGradationSyllable + "</b> and is <b><i>ALSO</i></b> <i>" + data[index_number].BeforeGradationSyllableStatus + "</i>.<br/><br/>So there is no need for any gradation here since the status of the syllable didn't change.");
            $('#stepHelpButton7').hide();


        } else {

            $('#stepExplanation7').show();
            $('#stepExplanation7').html("Ok, so the stem is <i>" + $('#stepAnswer4').html() + "</i> and the stem+ending is *<i>" + $('#stepAnswer4').html().slice(0, -1) + $('#stepAnswer6').html().slice(1) + "</i>.<br/><br/>We cut them in syllables:<br/><br/>" + data[index_number].StemCut + " and " + data[index_number].BeforeGradationCut + "<br/><br/>Then we look at the last syllable from the stem:<br/><br/> " + data[index_number].StemCutUnderlined + " and " + data[index_number].BeforeGradationCutUnderlined + "<br/><br/>The first one is <b>" + data[index_number].StemSyllable + "</b> and is <i>" + data[index_number].StemSyllableStatus + "</i> and the second one is <b>" + data[index_number].BeforeGradationSyllable + "</b> and is <i>" + data[index_number].BeforeGradationSyllableStatus + "</i>.<br/><br/>So from Stem > Word the syllable goes <i>" + data[index_number].StemSyllableStatus + " > " + data[index_number].BeforeGradationSyllableStatus + "</i><br/><br/>The consonant(s) right before that syllable is <b>" + data[index_number].ConsonantBefore + "</b> and it needs to also change from <i>" + data[index_number].StemSyllableStatus + " > " + data[index_number].BeforeGradationSyllableStatus + "</i><br/><br/>In the table you can see that a <b>" + data[index_number].ConsonantBefore + "</b> in an <i>" + data[index_number].StemSyllableStatus + " syllable</i> corresponds to a <b>" + data[index_number].ConsonantAfter + "</b> in a <i>" + data[index_number].BeforeGradationSyllableStatus + " syllable</i><br/><br/>So in this case you need to apply <b>" + data[index_number].Gradation + "</b>");
            $('#stepHelpButton7').hide();


        };


    } else {

        if (is_gradation == false) {

            $('#stepExplanation7').show();
            $('#stepExplanation7').html(noGradationText);
            $('#stepHelpButton7').hide();

        } else {

            hideAllTables();
            $('#tableCons').show();
            $('#stepExplanation7').show();
            $('#stepExplanation7').html("The table on the right lists the different types of consonant gradation. Doesn't that help you?");
            $('#stepHelpButton7').attr('name', "status 2");
            $('#stepHelpButton7').html("I need more help!");

        };


    };

});


$('#stepReveal2').click(function () {

    $('#stepHide2').hide();
    $('#stepHide2a').hide();
    $('#stepAnswer2').show();
    $('#stepExplanation2').show();
    $('#stepExplanation2').html("The case we need to use is the <b>" + data[index_number].Case + "</b>.");

});

$('#stepReveal3').click(function () {

    $('#stepHide3').hide();
    $('#stepHide3a').hide();
    $('#stepAnswer3').show();
    $('#stepExplanation3').show();
    $('#stepExplanation3').html("The stems for the words are <b>" + data[index_number].Stem1 + " / " + data[index_number].Stem2 + "</b>.");

});

$('#stepReveal4').click(function () {

    $('#stepHide4').hide();
    $('#stepHide4a').hide();
    $('#stepAnswer4').show();
    $('#stepExplanation4').show();
    $('#stepExplanation4').html("The stem for the <i>" + data[index_number].Case + "</i> is <b>" + data[index_number].RightStem + "</b>.");

});

$('#stepReveal5').click(function () {

    const caseEndings = [["nominative", "-"], ["accusative", "-n"], ["genitive", "-n"], ["inessive", "-ssa/ssä"], ["elative", "-sta/stä"], ["adessive", "-lla/llä"], ["ablative", "-lta/ltä"], ["allative", "-lle"], ["essive", "-na/nä"], ["translative", "-ksi"]];
    var rightEnding = "";

    if (data[index_number].Case == "partitive" || data[index_number].Case == "illative") {

        rightEnding = data[index_number].Endings;
    } else {

        for (let i = 0; i < caseEndings.length; i++) {
            if (caseEndings[i][0] == data[index_number].Case) {
                rightEnding = caseEndings[i][1];
            }
        }

    };
    $('#stepHide5').hide();
    $('#stepHide5a').hide();
    $('#stepAnswer5').show();
    $('#stepExplanation5').show();
    $('#stepExplanation5').html("The ending for the <i>" + data[index_number].Case + "</i> of <i>" + data[index_number].WordFinnish + "</i> is <b>" + rightEnding + "</b>");

});

$('#stepReveal6').click(function () {

    $('#stepHide6').hide();
    $('#stepHide6a').hide();
    $('#stepAnswer6').show();
    $('#stepExplanation6').show();
    $('#stepExplanation6').html("The right version of the ending in this case is <b>" + data[index_number].EndingsFinal + "</b>");

});

$('#stepReveal7').click(function () {

    var explanationText = "";
    if (data[index_number].Gradation == "none") {
        explanationText = "This word will <i>not</i> undergo any gradation at all.<br/><br/>You can try and type the result at the top of the page";
    } else {
        explanationText = "This word will undergo the <b>" + data[index_number].Gradation + "</b> gradation.";
    };

    $('#stepHide7').hide();
    $('#stepHide7a').hide();
    $('#stepAnswer7').show();
    $('#stepExplanation7').show();
    $('#stepExplanation7').html(explanationText);

});


function partitiveHelp() {

    if ($('#stepHelpButton5').attr('name') == "status 2") {

        document.getElementById("ending-" + data[index_number].Case).className = "warning";
        $('#stepExplanation5').show();
        $('#stepExplanation5').html("The row with the right ending for the <i>" + data[index_number].Case + "</i> is highlighted is the table. If you need more help, use the help button again.");
        $('#stepHelpButton5').attr('name', "status 3");

    } else if ($('#stepHelpButton5').attr('name') == "status 3") {
        hideAllTables();
        $('#tableCaseEndings').show();
        $('#tablePartitive').show();
        $('#stepExplanation5').show();
        $('#stepExplanation5').html("It's a little tricky when it comes to the <i>partitive</i> endings. The rules are now on the right side. Try to see if you can find the right ending.");
        $('#stepHelpButton5').html("No, more help needed!");
        $('#stepHelpButton5').attr('name', "status 4");

    } else if ($('#stepHelpButton5').attr('name') == "status 4") {

        $('#stepHelpButton5').hide();
        $('#stepHide5').hide();
        $('#stepHide5a').hide();
        $('#stepAnswer5').show();
        $('#stepExplanation5').show();
        $('#stepExplanation5').html("The endings for the <i>partitive</i> for " + data[index_number].StemHighlighted + " is <b>" + data[index_number].Endings + "</b> because " + data[index_number].Reason + ".");

    } else {

        hideAllTables();
        $('#tableCaseEndings').show();
        $('#stepExplanation5').show();
        $('#stepExplanation5').html("On the right you can see a list of the different cases with their endings. This should help.");
        $('#stepHelpButton5').attr('name', "status 2");

    };

};

function illativeHelp() {

    if ($('#stepHelpButton5').attr('name') == "status 2") {

        document.getElementById("ending-" + data[index_number].Case).className = "warning";
        $('#stepExplanation5').show();
        $('#stepExplanation5').html("The row with the right ending for the <i>" + data[index_number].Case + "</i> is highlighted is the table. If you need more help, use the help button again.");
        $('#stepHelpButton5').attr('name', "status 3");

    } else if ($('#stepHelpButton5').attr('name') == "status 3") {

        hideAllTables();
        $('#tableCaseEndings').show();
        $('#tableIllative').show();
        $('#stepExplanation5').show();
        $('#stepExplanation5').html("It's a little tricky when it comes to the <i>illative</i> endings. The rules are now on the right side. Try to see if you can find the right ending.");
        $('#stepHelpButton5').html("No, more help needed!");
        $('#stepHelpButton5').attr('name', "status 4");

    } else if ($('#stepHelpButton5').attr('name') == "status 4") {

        $('#stepHelpButton5').hide();
        $('#stepHide5').hide();
        $('#stepHide5a').hide();
        $('#stepAnswer5').show();
        $('#stepExplanation5').show();
        $('#stepExplanation5').html("The endings for the <i>illative</i> for " + data[index_number].StemHighlighted + " is <b>" + data[index_number].Endings + "</b> because " + data[index_number].Reason + ".");

    } else {

        hideAllTables();
        $('#tableCaseEndings').show();
        $('#stepExplanation5').show();
        $('#stepExplanation5').html("On the right you can see a list of the different cases with their endings. This should help.");
        $('#stepHelpButton5').attr('name', "status 2");

    };


};

function otherCasesHelp() {

    if ($('#stepHelpButton5').attr('name') == "status 2") {

        document.getElementById("ending-" + data[index_number].Case).className = "warning";
        $('#stepExplanation5').show();
        $('#stepExplanation5').html("The row with the right ending for the <i>" + data[index_number].Case + "</i> is highlighted is the table. If that's not enough, use the reveal <i class='eye slash icon'></i> button.");
        $('#stepHelpButton5').hide();

    } else {

        hideAllTables();
        $('#tableCaseEndings').show();
        $('#stepExplanation5').show();
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

    /// RIGHT ANSWER

    if ($('#inputField').val() == data[index_number].Result) {

        $('#correctModal').modal('show');

    } else {

        // WRONG ANSWER


    };
});

$('#modalButton').click(function () {

    $('#correctModal').modal('hide');
    resetTrainerData();
    index_number = getRandomInt(0, data.length - 1);
    trainer();

});


$('#inputField').keypress(function (e) {
    if (e.which == 13) {
        $('#trainerButton').click();
    }
});

$('#menuTrainer').click(function () {

    $('gridTrainer').show();
    trainer();

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

function resetTrainerData() {

    hideAllTables();

    $('#trainerText').html("");
    $('#inputField').val("").change();

    $('#stepAnswer1').hide();
    $('#stepAnswer2').hide();
    $('#stepAnswer3').hide();
    $('#stepAnswer4').hide();
    $('#stepAnswer5').hide();
    $('#stepAnswer6').hide();
    $('#stepAnswer7').hide();

    $('#stepHide1').show();
    $('#stepHide1a').show();
    $('#stepHide2').show();
    $('#stepHide2a').show();
    $('#stepHide3').show();
    $('#stepHide3a').show();
    $('#stepHide4').show();
    $('#stepHide41a').show();
    $('#stepHide5').show();
    $('#stepHide5a').show();
    $('#stepHide6').show();
    $('#stepHide6a').show();
    $('#stepHide7').show();
    $('#stepHide7a').show();

    $('#stepExplanation1').hide();
    $('#stepExplanation2').hide();
    $('#stepExplanation3').hide();
    $('#stepExplanation4').hide();
    $('#stepExplanation5').hide();
    $('#stepExplanation6').hide();
    $('#stepExplanation7').hide();

    $('#stepHelpButton1').html("I don't know the word");
    $('#stepHelpButton2').html("Help me with the cases");
    $('#stepHelpButton3').html("Help with the stems");
    $('#stepHelpButton4').html("Help with the stems");
    $('#stepHelpButton5').html("Help me with the cases");
    $('#stepHelpButton6').html("Help with the stems");
    $('#stepHelpButton7').html("Help me with the gradation");

    $('#stepHelpButton1').show();
    $('#stepHelpButton2').show();
    $('#stepHelpButton3').show();
    $('#stepHelpButton4').show();
    $('#stepHelpButton5').show();
    $('#stepHelpButton6').show();
    $('#stepHelpButton7').show();

    $('#stepHelpButton1').attr('name', "status 1");
    $('#stepHelpButton2').attr('name', "status 1");
    $('#stepHelpButton3').attr('name', "status 1");
    $('#stepHelpButton4').attr('name', "status 1");
    $('#stepHelpButton5').attr('name', "status 1");
    $('#stepHelpButton6').attr('name', "status 1");
    $('#stepHelpButton7').attr('name', "status 1");

    $('.ui.accordion').accordion('close', 1);
    $('.ui.accordion').accordion('close', 2);
    $('.ui.accordion').accordion('close', 3);
    $('.ui.accordion').accordion('close', 4);
    $('.ui.accordion').accordion('close', 5);
    $('.ui.accordion').accordion('close', 6);
    $('.ui.accordion').accordion('close', 7);

    $('.warning').removeClass("warning");

};
