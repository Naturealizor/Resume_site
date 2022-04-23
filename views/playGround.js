// I think I should convert this into an array called trips or something

        // const button = document.querySelector('input');
        // const orgStart = document.getElementById('startingPoint');
        // const destination = document.getElementById('destination');
        // const orgMiles = document.getElementById('startingMiles');
        // const endMiles = document.getElementById('endingMiles');
        // const gasAmt = document.getElementById('gas');
        // const buyer = document.getElementById('whoPaid');
        // const misc = document.getElementById('otherExpenses');

function saveStaticDataToFile() {
    var blob = new Blob()
}

function saveDynamicDataToFile() {
    var userInput = document.getElementById(elementId)
}





// Pulled from  https://www.websparrow.org/web/how-to-create-and-save-text-file-in-javascript 

// <!doctype html>
// <html lang="en">
// <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>How to Create and Save text file in JavaScript</title>
//     <script src="js/FileSaver.js"></script>
//     <script>

// 		function saveDynamicDataToFile() {

//             var userInput = document.getElementById("myText").value;
			
//             var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
//             saveAs(blob, "dynamic.txt");
//         }

//     </script>
// </head> 
// <body>

//     <textarea id="myText" rows="4" cols="50">
//  We love to share our experiments, ideas, and knowledge with everyone by writing articles on the latest technology trends.
//     </textarea>

//     <button type="button" onclick="saveDynamicDataToFile();">Click to Save</button>
	
// </body>
// </html>