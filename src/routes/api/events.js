"use strict";

module.exports.register = async server => {
	server.route( {
		method: "GET",
		path: "/api/events",
		handler: async request => {
			try {
				const db = request.server.plugins.sql.client;

				const UserId = "admin";
				const res = await db.events.getEvents( UserId );

				return res.recordset;
			} catch ( err ){
				console.log( err );
			}
		}
	} );
};
