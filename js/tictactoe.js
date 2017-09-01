function tictactoe(){
	// tictactoe.turn=-1;

	this.table=new table();
	this.checkWinning=checkWinning;
	this.reportWinnig=reportWinnig;

	function table(){


		this.generate=generate;
		this.changeImage=changeImage;
		table.reset=reset;

		function generate(){

				for (var i=0;i<3;i++){
					document.write('<div>')
					for (var j=0;j<3;j++){
						document.write('<span id="'+i+j+'" class="markPlace" onclick="tictactoe.table.changeImage(this.id);tictactoe.checkWinning();"><img src=""></span>');
					}
					document.write('</div>');
				}

				table.reset();
		}

		function changeImage(id){
			span=document.getElementById(id);
			image=span.children[0];

			//console.log(image.src.indexOf("blank.png"));
			if (image.src.indexOf('blank.png')==-1) return;
			table.filled++;
			switch (tictactoe.turn){
				case -1:
					image.src="img/x.png";
					tictactoe.turn=1;

					table.representation[Math.floor(id/10)][id%10]=1;
					break;
				case 1:
					image.src="img/o.png";
					tictactoe.turn=-1;
					table.representation[Math.floor(id/10)][id%10]=-1;
					break;
			}


		}

		function reset(){
			for (var i=0;i<3;i++){
				for (var j=0;j<3;j++){
					// console.log(i.toString()+j.toString());
					current=document.getElementById(i.toString()+j.toString());
					current.children[0].src="img/blank.png";
				}
			}

			table.representation=[[0,0,0],[0,0,0],[0,0,0]];
			table.filled=0;
			tictactoe.turn=-1;
		}



	}


	function checkWinning(){

		var columnSum=[];
		var rowSum=[];
		var diagSum=[0,0];

		var R=table.representation;

		for (var i=0;i<3;i++){
			columnSum[i]=R[0][i]+R[1][i]+R[2][i];
			if (columnSum[i]==3 || columnSum[i]==-3) {
				reportWinnig(columnSum[i]);
				return;
			}
			rowSum[i]=R[i][0]+R[i][1]+R[i][2];
			if (rowSum[i]==3 || rowSum[i]==-3) {
				reportWinnig(rowSum[i]);
				return;
			}

		}

		for (var i=0;i<3;i++){
			diagSum[0]+=R[i][i];
			diagSum[1]+=R[i][2-i];
		}
		if (diagSum[0]==3 || diagSum[0]==-3){
			reportWinnig(diagSum[0]);
			return;
		} else if (diagSum[1]==3 || diagSum[1]==-3){
			reportWinnig(diagSum[1]);
			return;
		}

		if (table.filled==9) {
			window.alert("You guys suck!");
			table.reset();
		}

	}

	function reportWinnig(player){
		player=player/3;

		switch(player){
			case 1:
				window.alert('X Won the game!');
				break;
			case -1:
				window.alert('O Won the game');
				break;

		}
		table.reset();
	}

}
