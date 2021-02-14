"use strict";

const utils = require( "../utils" );

const register = async ( { sql, getConnection } ) => {
	const sqlQueries = await utils.loadSqlQueries( "users" );

	const getUser = async UserId => {
		const cnx = await getConnection();
		const request = await cnx.request();
		request.input( "UserId", sql.VarChar( 50 ), UserId );
		return await request.query( sqlQueries.getUser );
	};

	const getUsers = async UserId => {
		const cnx = await getConnection();
		const request = await cnx.request();
		request.input( "UserId", sql.VarChar( 50 ), UserId );
		return await request.query( sqlQueries.getUsers );
	};

	const addUser = async ( { UserId, Password, Email, Name, Department, EnteredOn, LastUpdate } ) => {
		const cnx = await getConnection();
		const request = await cnx.request();
		request.input( "UserId", sql.VarChar( 50 ), UserId );
		request.input( "Password", sql.VarChar( 50 ), Password );
		request.input( "Email", sql.VarChar( 50 ), Email );
		request.input( "Name", sql.VarChar( 200 ), Name );
		request.input( "Department", sql.VarChar( 100 ), Department );
		request.input( "EnteredOn", sql.Date, EnteredOn  );
		request.input( "LastUpdate", sql.Date, LastUpdate );
		request.input( "SecurityLevel", sql.VarChar( 50 ), "User" );
		return await request.query( sqlQueries.addUser );
	};

	const updateUser = async ( { Id, Password, Email, Name, Department, LastUpdate } ) => {
		const cnx = await getConnection();
		const request = await cnx.request();
		request.input( "Id", sql.Int, Id );
		request.input( "Password", sql.VarChar( 50 ), Password );
		request.input( "Email", sql.VarChar( 50 ), Email );
		request.input( "Name", sql.VarChar( 200 ), Name );
		request.input( "Department", sql.VarChar( 100 ), Department );
		request.input( "LastUpdate", sql.Date, LastUpdate );
		return request.query( sqlQueries.updateUser );
	};

	const deleteUser = async ( { Id } )	=> {
		const cnx = await getConnection();
		const request = await cnx.request();
		request.input( "Id", sql.Int, Id );
		return request.query( sqlQueries.deleteUser );
	};

	return {
		addUser,
		updateUser,
		deleteUser,
		getUser,
		getUsers
	};
};

module.exports = { register };
