var friends = ['Jay', 'Fish', 'Josh', 'Bri', 'Billy'];

document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('sing-btn');

    btn.addEventListener('click', function(){
        for (var i = 0; i < friends.length; i++) {
            var friendDiv = document.createElement('div');
            friendDiv.className ='friend';
            
            var friendName = document.createElement('h3');
            friendName.innerText = friends[i];

            friendDiv.appendChild(friendName);

            document.body.appendChild(friendDiv);
            
            for (var j = 99; j > 0; j--) {
                var songLine = document.createElement('p');

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