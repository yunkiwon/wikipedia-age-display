walk(document.body);

function walk(node) 
{	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}


function handleText(textNode) 
{
	var v = textNode.nodeValue;
	
    var birth = document.querySelector("span.bday").textContent
    var birthYear = birth.split('-')[0]
	var birthYear = parseInt(birthYear)
	
	//don't replace years younger than birth year, can't be more than year 3000(yet)
	for (int = birthYear+1; int<3000; int++){
		var age = int - birthYear
		v = v.replace(int, int + " (" + age + ")") ;
	
	textNode.nodeValue = v;
}}


