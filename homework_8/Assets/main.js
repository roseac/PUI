//      Fade in page

$(document).ready(function(){
$('body').css('display', 'none');
$('body').fadeIn(1000);

});

//      Instructions section - set up variable in constructor for each step

function Step(name, tools, method, img) {
    this.name = name,
    this.tools = tools,
    this.method = method,
    this.img = img
}

var dough = new Step("Dough",
    "Saucepan, Large bowl, Mixer, 1 cup milk, 1 stick (1/2 cup) butter, 1/2 cup sugar plus 2 tablespoons, 2 teaspoons salt, 1 package active dry yeast, 1/2 cup warm water, 4 beaten eggs, 5 cups flour (or more as needed)",
    "1. For the dough, heat milk almost to a boil in a small saucepan over medium-high heat; pour into large bowl. Add the butter, 1/2 cup of the sugar and salt. Set aside to cool. Stir yeast into warm water in a small bowl; stir in remaining 2 tablespoons of the sugar until dissolved. Set aside until foamy. 2. Add yeast mixture to milk mixture. Beat in eggs with a mixer. Beat in flour, 1 cup at a time, just until dough can be handled without sticking. Knead dough on a floured board until very smooth, about 20 minutes. Transfer the dough to a greased bowl; cover. Let rise in a warm place until doubled in bulk, about 2 hours. (Do not knead dough after it has risen.).",
    "Assets/Images/mixer.png");

var fill = new Step("Fill",
    "Saucepan, Medium bowl, 1 stick (1/2 cup) butter, 1/2 cup plus 2 tablespoons sugar, 1 cup each: honey, sugar, milk, 8 cups finely ground walnuts, 2 eggs, well beaten, 1 cup whipping cream, 1 tablespoon lemon juice",
    "3. Meanwhile, for filling, melt the butter in medium saucepan over medium heat. Add the honey, sugar and milk; raise heat to medium-high. Heat to a rolling boil. Meanwhile, mix walnuts, eggs, cream and lemon juice in medium bowl; pour the butter-honey mixture over the walnut mixture. Mix well.",
    "Assets/Images/bowl.jpg");

var roll = new Step("Roll",
    "Large cloth, Table",
    "4. Spread a large cloth or clean sheet on a table; sprinkle with flour. Spread dough on cloth. Roll the dough out; pull with hands from the center to the outer edge of the table until dough is very thin, similar to strudel dough. The dough should be at least 3 feet square. Cut off any thick edges. Divide the dough into four 18-inch squares. Spread the walnut filling over each square. Starting at one edge, roll up the dough tightly, as for a jellyroll. Cut each roll into 2 pieces. Pinch the dough together at the ends. Place seam-side down on 2 large greased baking sheets. Cover with cloth; let rise in a warm place until puffy, about 30 minutes. Uncover.",
    "Assets/Images/pin.png");

var bake = new Step("Bake",
    "Oven, Knife",
    "5. Heat oven to 325 degrees. Bake until nicely browned, about 1 hour. Cool; cut into slices. (Loaves will last quite a long time if tightly wrapped. They also can be frozen.)",
    "Assets/Images/oven.jpg");

//      Fun Fact - create array of facts

var facts = ["Several European countries have traditional breads similar to Slovenia's potica.",
    "When the pope asked Melania Trump about potica, American news sources misinterpreted the conversation as about pizza.",
    "Because of the time and effort involved, hand making potica is considered by some to be a dying art.",
    "Potica is eaten as a breakfast pastry as well as a decadent dessert.",
    "Slovenians typically pair sweet versions of potica with coffee or wine.",
    "Slovenians typically pair savory versions of potica with a cold beer.",
    "Potica is a delicacy that can be found in only a few parts of the United States, but is prevalent throughout Europe."
]

//      Select Step - function to show selected step, access "Step" to show corresponding info, and set random fun fact

function selectStep(element, name) {
    var names = document.getElementsByClassName("name");
        for (var i=0; i<names.length; i++){
            var elem = names[i]
            elem.style.backgroundColor = "white"
        }
    element.style.backgroundColor = "rgba(186, 141, 107, 0.3)";
    if (name == "dough") {
        document.getElementById("tools").innerHTML = dough.tools;
        document.getElementById("method").innerHTML = dough.method;
        document.getElementById("cartoon").src = dough.img;
    } else if (name == "fill") {
        document.getElementById("tools").innerHTML = fill.tools;
        document.getElementById("method").innerHTML = fill.method;
        document.getElementById("cartoon").src = fill.img;
    } else if (name == "roll") {
        document.getElementById("tools").innerHTML = roll.tools;
        document.getElementById("method").innerHTML = roll.method;
        document.getElementById("cartoon").src = roll.img;
    } else if (name == "bake") {
        document.getElementById("tools").innerHTML = bake.tools;
        document.getElementById("method").innerHTML = bake.method;
        document.getElementById("cartoon").src = bake.img;
    }
    var funfact = facts[Math.floor(Math.random()*facts.length)];
    document.getElementById("funfact").innerHTML = "Did you know? " + funfact;
}
