function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich wth: ".concat(items.join(","), "."));
}
make_sandwich("hum", "cheese");
make_sandwich("tukey", "lettuce", "tomato");
make_sandwich("avacado", "mayo", "sprouts", "mustard");
