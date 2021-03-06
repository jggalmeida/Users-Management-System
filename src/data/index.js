"use strict";

const users = require( "./users" );
const sql = require( "mssql" );

const client = async ( server, config ) => {
	let pool = null;

	const closePool = async () => {
		try {
			await pool.close();
			pool = null;
		} catch ( err ){
			pool = null;
			console.log( err );
		}
	};

	const getConnection = async () => {
		try{
			if ( pool ) {
				return pool;
			}
			pool = await sql.connect( config );
			pool.on( "error", async err => {
				console.log( err );
				await closePool();
			} );
			return pool;
		} catch( err ){
			console.log( err );
			pool = null;
		}
	};

	return {
		users: await users.register( { sql, getConnection } )
	};
};

module.exports = client;
