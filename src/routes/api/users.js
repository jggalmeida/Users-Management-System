"use strict";

module.exports.register = async server => {

	server.route( {
		method: "GET",
		path: "/api/users",
		handler: async request => {
			try {
				const db = request.server.plugins.sql.client;

				const res = await db.users.getUsers();

				return res.recordset;
			} catch ( err ){
				console.log( err );
			}
		}
	} );

	server.route( {
		method: "GET",
		path: "/api/users/{Id}",
		handler: async request => {
			try {
				const db = request.server.plugins.sql.client;
				const Id = request.params.Id;

				const res = await db.users.getUser( { Id } );

				return res.recordset;
			} catch ( err ){
				console.log( err );
			}
		}
	} );

	server.route( {
		method: "POST",
		path: "/api/users",
		handler: async request => {
			try {
				const db = request.server.plugins.sql.client;

				const { UserId, Password, Email, Name, Department, EnteredOn, LastUpdate } = request.payload;
				const res = await db.users.addUser( { UserId, Password, Email, Name, Department, EnteredOn, LastUpdate } );
				return res.recordset[0];
			} catch ( err ){
				console.log( err );
			}
		}
	} );

	server.route( {
		method: "DELETE",
		path: "/api/users/{Id}",
		handler: async ( request, h ) => {
			try{
				const Id = request.params.Id;
				const db = request.server.plugins.sql.client;
				const res = await db.users.deleteUser( { Id } );
				return res.rowsAffected[0] === 1 ? h.response().code( 204 ) : h.response().code( 404 );
			}catch ( err ){
				console.log( err );
			}
		}
	} );

	server.route( {
		method: "PUT",
		path: "/api/users/{Id}",
		handler: async request => {
			try {
				const Id = request.params.Id;
				const db = request.server.plugins.sql.client;

				const { Password, Email, Name, Department, LastUpdate } = request.payload;
				const res = await db.users.updateUser( { Id, Password, Email, Name, Department, LastUpdate } );
				return res.recordset[0];
			} catch ( err ){
				console.log( err );
			}
		}
	} );

	server.route( {
		method: "POST",
		path: "/api/users/auth",
		handler: async ( request, h ) => {
			try {
				const db = request.server.plugins.sql.client;

				const UserId = request.payload.UserId;
				const Password = request.payload.Password;
				const res = await db.users.authUser( { UserId, Password } );
				return res.rowsAffected[0] === 1 ? res.recordset : h.response().code( 404 );
			} catch ( err ){
				console.log( err );
			}
		}
	} );

};
