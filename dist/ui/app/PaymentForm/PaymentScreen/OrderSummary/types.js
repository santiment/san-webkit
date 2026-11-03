export var State;
(function (State) {
    State[State["EMPTY"] = 0] = "EMPTY";
    State[State["LOADING"] = 1] = "LOADING";
    State[State["VALID"] = 2] = "VALID";
    State[State["INVALID"] = 3] = "INVALID";
})(State || (State = {}));
