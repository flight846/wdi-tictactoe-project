function init()
{
	console.log("loaded JS");

	var currentPlayer = "x";
	var instruction;
	var xChoices = [];
	var oChoices =[];
	var xPossibly = [];
	var oPossibly = [];
	var xDrop = 0;
	var oDrop = 0;
	var turns = 0;
	var winningCom = [
					[1,2,3], 
					[1,4,7], 
					[1,5,9],	
					[2,5,8],	
					[3,5,7],
					[3,6,9],
					[4,5,6],
					[7,8,9]
					];

					

	newGame();

	function runPossibly(player)
	{
		var numbers = [];
		if(player == "o")
		{
			xPossibly.forEach(function(com)
			{
					numbers.push(com);	
			});
			
			return numbers;
		}
		else if(player == "x")
		{
			oPossibly.forEach(function(com)
			{		
					numbers.push(com);
			})
		
			return numbers;
		}
		
	}

	function checkPossiblyFor(player)
	{		
		if(player == "o")
		{
			if(oChoices.length > 0)
			{
				oChoices.forEach(function(choice)
				{
					xPossibly.forEach(function(single, j)
					{
						for(i=0; i < single.length; i++)
						{
							if(single[i] == choice)
							{
								xDrop++
								delete xPossibly[j];
								break;
							}
						}
					})
				})
			}
			var xPercentage = ((8-xDrop)/8)*100;
			console.log("x :"+xPercentage);
		}
		else if(player == "x")
		{
			if(xChoices.length > 0)
			{
				xChoices.forEach(function(choice)
				{
					oPossibly.forEach(function(single, j)
					{
						for(i=0; i < single.length; i++)
						{
							if(single[i] == choice)
							{
								oDrop++
								delete oPossibly[j];
								break;
							}
						}
					})
				});
			}
			var oPercentage = ((8-oDrop)/8)*100;
			console.log("o :"+oPercentage);
		}	
	}

	function resetButton()
	{
		var button = document.getElementsByTagName("button");
		button[0].addEventListener("click", newGame);		
	}

	function newGame()
	{
		removeAllListener();
		addListenerToBoxes();
		clearBoard();
		currentPlayer = "x";
		xChoices = [];
		oChoices =[];
		xDrop = 0;
		oDrop = 0;
		xPossibly = [
					[1,2,3], 
					[1,4,7], 
					[1,5,9],	
					[2,5,8],	
					[3,5,7],
					[3,6,9],
					[4,5,6],
					[7,8,9]
					];
		oPossibly = [
					[1,2,3], 
					[1,4,7], 
					[1,5,9],	
					[2,5,8],	
					[3,5,7],
					[3,6,9],
					[4,5,6],
					[7,8,9]
					];
		turns = 0;
		changeInstruction("x");
		resetButton();

	}

	function changeInstruction(player)
	{
		if(player == 'x')
		{
			document.querySelector("#instructions p").innerText = "It's X's turn";
		}
		else if (player == 'o') 
		{
			document.querySelector("#instructions p").innerText = "It's O's turn";
		}	
	}

	function clearBoard()
	{
		var boxes = document.getElementsByClassName("box");
		for(i=0; i < boxes.length; i++)
		{
			boxes[i].className = "box";
			if(boxes[i].firstChild)
			{
				boxes[i].firstChild.data = "";
			}	
		}	
	}

	function choice(box)
	{
		console.log(currentPlayer);
		if(currentPlayer == "o")
		{
			xChoices.push(box);
			checkPossiblyFor("x");
			console.log(runPossibly("x"));
			if(checkWin(xChoices))
			{
				alert("We got a winner! X wins!");
				newGame();
			}
		}
		else if(currentPlayer == "x")
		{
			oChoices.push(box);
			checkPossiblyFor("o");
			console.log(runPossibly("o"));
			if(checkWin(oChoices))
			{
				alert("We got a winner! O wins!");
				newGame();
			}
		}
	}


	function checkWin(playerCom)
	{
		for(i=0; i < winningCom.length; i++)
		{	
			if(comparePlayerComWithSingleInt(playerCom,winningCom[i]) == true)
			{
				return true;
			}
		}
	}

	function comparePlayerComWithSingleInt(playerChoices,singleCom)
	{
		var first = false;
		var second = false;
		var third = false;
		singleCom.forEach(function(choice,i)
		{
			playerChoices.forEach(function(no)
			{
				if(choice == no)
				{
					if(i == 0 )
					{
						first = true;
					}
					else if(i == 1)
					{
						second = true;
					}
					else if(i == 2) 
					{
						third = true;
					}
					return;	
				}
			});
		});

		return first && second && third;
		
	}

	function listener(event)
	{
		turns++;
		if(turns>8)
		{
			alert("Its a Draw!!");
			newGame();
		}
		else
		{
			item = event.target.getElementsByClassName("box");
			var nextPlayer = changePlayer();
			event.target.className += " " +nextPlayer[0]; 
			document.getElementById(event.toElement.id).innerText = nextPlayer[1];
			document.getElementById(event.toElement.id).removeEventListener("click", listener);	
			choice(event.toElement.id);
		}
		
	}

	function removeAllListener()
	{
		for(var i=1; i<10; i++)
		{
			document.getElementById(i).removeEventListener("click", listener);		
		}
	}

	function changePlayer() 
	{
		if(currentPlayer == "x")
		{
			currentPlayer = "o";
			changeInstruction(currentPlayer);
			return ["blue","x"];
		}
		else if(currentPlayer == "o")
		{
			currentPlayer = "x";
			changeInstruction(currentPlayer);
			return ["red","o"];
		}
		console.log(currentPlayer);
	}	

	function addListenerToBoxes()
	{
		for(var i=1; i<10; i++)
		{
			document.getElementById(i).addEventListener("click", listener);		
		}
	}
	
};

window.addEventListener("load",init,false);