var Game = {

	state: {},
	me: 0,

	debug_opts: {
		show_redraw: false
	},

	start: function(params) {
		this.makeRequest("start");
	},

	rollDice: function() {
		this.sendCommand('roll_dice');
	},

	buyProperty: function() {
		this.sendCommand('buy_property');
	},

	useGOOJFCard: function() {
		this.sendCommand('use_goojf');
	},

	endTurn: function() {
		this.sendCommand('end_turn');
	},

	newGame: function() {
		// DEBUG only command
		this.sendCommand('new_game');
	},

	handleGameState: function(data) {
		this.state = data;
		Game.toPrettyState();
	},

	sendCommand: function(cmd) {
		this.makeRequest("user-command", {cmd: cmd});
	},

	makeRequest: function(url, params) {
		$.ajax({
			url : "/ajax/" + url,
			dataType : "JSON",
			data: params,
			success : function (data) {
				//Game.handleGameState(data);
				//Game.play();
				$("#debug").html(data);
			},
			error: function(a,b,c) {
				$("#debug").html(c);
			}
		});
	}



};