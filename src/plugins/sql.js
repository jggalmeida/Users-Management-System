"use strict";

const dataClient = require( "../data" );

module.exports = {
	name: "sql",
	version: "1.0.0",
	register: async server => {
		const config = server.app.config.sql;
		const client = await dataClient( server, config );
		//when Hapi inicialize, its creates a instance to provide a way to access the plugins
		server.expose( "client", client );

	}
};

