function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase("Hello"));
}
function logWhisper(string){
    console.log(string.toLowerCase("Hello"));
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        console.log(string.toLowerCase());
        return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
        console.log(string.toUpperCase());
        return "YES INDEED!";
    } else {
        console.log(string.toLowerCase());
        return "I would love to!";
    }
}

