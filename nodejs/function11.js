let i;
for(i = 1; i <= 10; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        },100);
    })(i);
}