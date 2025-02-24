function full_Sentence() {
    var part_1 = "Let's look ";
    var part_2 = "at this ";
    var part_3 = "beautiful car ";
    var part_4 = "on the street. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "Work Hard,Play Hard";
    var Section = Sentence.slice(5, 9);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var X = 985;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 9585.4781324567;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}


