"use strict";

const utils = require( "../utils" );

const register = async ( { sql, getConnection } ) => {
	const sqlQueries = await utils.loadSqlQueries( "users" );

	const getUsers = async UserId => {
		const cnx = await getConnection();
		const request = await cnx.request();
		request.input( "UserId", sql.VarChar( 50 ), UserId );
		return request.query( sqlQueries.getUsers );
	};

	return {
		getUsers
	};
};

module.exports = { register };
