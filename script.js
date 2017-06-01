// Sets an array of friends' names
var friends = ['Jay', 'Fish', 'Josh', 'Bri', 'Billy'];

//Waits for the browser to load the HTML
document.addEventListener('DOMContentLoaded', function(){
    //Targets the button already in the HTML
    var btn = document.getElementById('sing-btn');

    //Tells the button "sing" when clicked on
    btn.addEventListener('click', function(){
        //First for loop that prints out each friend's respective div
        for (var i = 0; i < friends.length; i++) {
            //Creates the div for each friend, and gives it the friend class
            var friendDiv = document.createElement('div');
            friendDiv.className ='friend';
            
            //Creates the h3 for each friend's name
            var friendName = document.createElement('h3');
            friendName.innerText = friends[i];

            //Puts the h3 tag into the friend div tag
            friendDiv.appendChild(friendName);

            //Puts the div into the body of the HTML
            document.body.appendChild(friendDiv);
            
            //Prints out each line of the song in a paragraph tag
            for (var j = 99; j > 0; j--) {
                //Creates a paragraph tag for each line of the song
                var songLine = document.createElement('p');

                //Changes each line of the song depending on how many "lines of code" are left, and puts it inside of each friend's div tag.
                if (j === 1) {
                    songLine.innerText = (j + ' line of code in the file, ' + j + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
                    friendDiv.appendChild(songLine);
                } else if (j === 2) {
                    songLine.innerText = (j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' line of code in the file');
                    friendDiv.appendChild(songLine);
                } else {
                    songLine.innerText = (j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file');
                    friendDiv.appendChild(songLine);
                }
            }
        }
    });
});