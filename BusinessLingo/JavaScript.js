'use-strict'

var process = ["Thinking outside of the box", "Giving 110%", "using Best Practices", "leveraging Synergy", "Pushing the envelope", 
"becoming a leading provider", "taking this off-line", "Bringing our 'A' game", "Maximizing leverage", 
"leveraging Six Sigma", "Multi tasking", "leveraging Teamwork", "Stepping up to the plate", "Downsizing", "raising the bar", 
"using an Integrated approach", "Moving up the value chain", "Touching base", "focusing on being Team players", "Casting a wider net", 
"Optimizing SEO", "using a Boots on the ground approach", "Taking it to the Next Level", "Going from good to great"
];

var goal = ["Win-win situation", "Paradigm Shift", "Low-hanging fruit", 
"Value-added proposition", "Maximized customer satisfaction", "Seamless integration", "Best in Breed ranking", 
"Ballpark figure", "Industry Standard", "Plus for all Stakeholders", "Improvement on ROI"
];

var adjProc = ["Going forward, ", "At the end of the day, ", "Let's hit the ground running, ", 
"In Today's Highly Competitive Marketplace, ", "Today, more than ever, ", "Let's be proactive here people, "
];

var adjGoal = ["Scalable ", "Impactful ", "Robust ", "24/7 ", "Eco-friendly ", "Client-Centered ", 
"Strategic ", "Marketing-driven ", "Actionable ", "Viral ", "Faster, Cheaper, Better ", "User-Focused ", "Benchmark "
];

var environment = ["Web 2.0", "The 80%-20% rule", "Core competency", "The bottom line", 
"Rightsizing", "Being a Change Agent", "Managing expectations"
];

var misc = ["Be a Game changer", "Be a Thought Leader", "Be an Industry Leader", "Put a stake in the ground", 
"Bring a lot of value to the table", "It is what it is"
];

var randProc = function() {
    var number = Math.random();
    var x = Math.floor(number * process.length);
    return x;
};

var randAdjProc = function() {
    var number = Math.random();
    var x = Math.floor(number * adjProc.length);
    return x;
};

var randEnviron = function() {
    var number = Math.random();
    var x = Math.floor(number * environment.length);
    return x;
};

var randAdjGoal = function() {
    var number = Math.random();
    var x = Math.floor(number * adjGoal.length);
    return x;
};

var randGoal = function() {
    var number = Math.random();
    var x = Math.floor(number * goal.length);
    return x;
};

var randMisc = function() {
    var number = Math.random();
    var x = Math.floor(number * misc.length);
    return x;
};

var procA = randProc();
var procB = randProc();
var adjProcA = randAdjProc();
var EnvironA = randEnviron();
var adjGoalA = randAdjGoal();
var adjGoalB = randAdjGoal();
var goalA = randGoal();
var miscA = randMisc();


function goForIt () {
    document.getElementById("part1").innerHTML = adjProc[adjProcA] 
    + environment[EnvironA] + " means "+ process[procA] + " and "+ process[procB] +
    " in order to create a "+ adjGoal[adjGoalA] + ", "+ adjGoal[adjGoalB] + goal[goalA] + 
    "<br><br>And always remember, " + misc[miscA];
};

goForIt();