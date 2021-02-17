"use strict";

const jwt = require( "jsonwebtoken" );
//const tk = require( "../../config" );

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

				const { UserId, Password, Email, Name, Department } = request.payload;
				const res = await db.users.addUser( { UserId, Password, Email, Name, Department } );
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

				const { Password, Email, Name, Department } = request.payload;
				const res = await db.users.updateUser( { Id, Password, Email, Name, Department } );
				return res.recordset[0];
			} catch ( err ){
				console.log( err );
			}
		}
	} );

	server.route( {
		method: "POST",
		path: "/login",
		handler: async ( request, h ) => {
			try {
				const db = request.server.plugins.sql.client;
				request.responseType = "json";

				const UserId = request.payload.UserId;
				const Password = request.payload.Password;
				const res = await db.users.authUser( { UserId, Password } );

				if ( res.rowsAffected[0] === 1 )
				{
					const token = jwt.sign( { UserId }, process.env.TOKEN_SECRET );

					const { Id, User, Email, Name, Department, EnteredOn, LastUpdate, SecurityLevel } = res.recordset[0];
					const logged = {
						Id,
						User,
						Email,
						Name,
						Department,
						EnteredOn,
						LastUpdate,
						SecurityLevel,
						token
					};
					return logged;
				}
				else
				{
					return h.response().code( 404 );
				}

				//return res.rowsAffected[0] === 1 ? h.response().header( "auth-token", token ) : h.response().code( 404 );
				//return res.rowsAffected[0] === 1 ? logged : h.response().code( 404 );
			} catch ( err ){
				console.log( err );
			}
		}
	} );

};
