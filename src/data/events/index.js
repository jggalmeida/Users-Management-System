"use strict";

const utils = require( "../utils" );

const register = async ( { sql, getConnection } ) => {
	const sqlQueries = await utils.loadSqlQueries( "events" );

	const getEvents = async UserId => {
		const cnx = await getConnection();
		const request = await cnx.request();
		request.input( "UserId", sql.VarChar( 50 ), UserId );
		return request.query( sqlQueries.getEvents );
	};

	return {
		getEvents
	};
};

module.exports = { register };
