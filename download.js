var links= []; //set up array to get links to follow
attachments = document.getElementsByClassName("attachment").length;
console.log(attachments);

for( var i= 0; i < document.getElementsByClassName("attachment").length ; i++)
{
	test = document.getElementsByClassName("attachment")[i]
        links.push(test.querySelector("a").href) //push links onto the array
}

console.log("quit for loop");


var str = "test";

for( var i= 0; i < attachments - 1; i++)
{
 	xmlhttp=new XMLHttpRequest(); 			//create new request
	xmlhttp.open("GET", links[i], false);		//set up request using links array 
	xmlhttp.send();					//send the reqeust
	str = xmlhttp.responseText;			//store in a string :P
	var orgPosition = str.search(/download?/);		//search string for download link
	
	
							//Traverse download link

	var char = 'f';
	var endPosition = 2; 
	var position = orgPosition;					
	while (char != '"')				//loop to end of string (until quotation)
	{
		position++;
		char = str.charAt(position);
		endPosition = position;
	}

	char = 'f';
	var startPosition = 2;
	position = orgPosition;
	while (char != '"')				//loop to end of string (until quotation)
	{
		position--;
		char = str.charAt(position);
		startPosition = position;
	}

	var len = endPosition - startPosition;
	startPosition++;
	endPosition--;
	var downloadString = str.substr(startPosition, len);
	var url = "https://champlain.instructure.com" + downloadString

	//links[i] = links[i].replace("modules/items", "files")
	window.open(url, "_blank");
}
