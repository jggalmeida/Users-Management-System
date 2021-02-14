"use strict";

module.exports.register = async server => {
	server.route( {
		method: "GET",
		path: "/api/users",
		handler: async request => {
			try {
				const db = request.server.plugins.sql.client;

				const UserId = "admin";
				const res = await db.users.getUsers( UserId );

				return res.recordset;
			} catch ( err ){
				console.log( err );
			}
		}
	} );
};
