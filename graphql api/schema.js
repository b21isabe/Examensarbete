const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
const db = require("./db");

const CityType = new GraphQLObjectType({
    name: "City",
    fields: () => ({
        station_id: { type: GraphQLString },
        city_name: { type: GraphQLString },
        station_name: { type: GraphQLString },
        latitude: { type: GraphQLString },
        longitude: { type: GraphQLString },
        elevation: { type: GraphQLString },
    })
});

const WeatherType = new GraphQLObjectType({
    name: "Weather",
    fields: () => ({
        station_id: { type: GraphQLString },
        observation_time: { type: GraphQLString },
        wind_direction: { type: GraphQLInt },
        wind_speed: { type: GraphQLString },
        visibility: { type: GraphQLInt },
        temperature: { type: GraphQLString },
        dew_point: { type: GraphQLString },
        atmospheric_pressure: { type: GraphQLString },
        ceiling: { type: GraphQLInt },

        city: {
            type: CityType,
            resolve: async (parent) => {
                try {
                    const connection = await db.getConnection();
                    const [rows] = await connection.query(
                        "SELECT * FROM cities WHERE station_id = ?",
                        [parent.station_id]
                    );
                    connection.release();
                    return rows[0];
                } catch (err) {
                    throw new Error("Database error: " + err.message);
                }
            }
        }
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        cities: {
            type: new GraphQLList(CityType),
            resolve: async () => {
                try {
                    const connection = await db.getConnection();
                    const [rows] = await connection.query("SELECT * FROM cities");
                    connection.release();
                    return rows;
                } catch (err) {
                    throw new Error("Database error: " + err.message);
                }
            }
        },
        weather: {
            type: new GraphQLList(WeatherType),
            args: { 
                station_id: { type: GraphQLString },
                start_date: { type: GraphQLString },
                days: { type: GraphQLInt }
            },
            resolve: async (_, { station_id, start_date, days }) => {
                try {
                    const connection = await db.getConnection();
                    const query = `
                        SELECT station_id, 
                               DATE_FORMAT(observation_time, '%Y-%m-%d %H:%i:%s') AS observation_time, 
                               wind_direction, wind_speed, visibility, temperature, dew_point, atmospheric_pressure, ceiling
                        FROM weather_data 
                        WHERE station_id = ? 
                        AND observation_time >= ? 
                        AND observation_time < DATE_ADD(?, INTERVAL ? DAY)
                    `;
                    const [rows] = await connection.query(query, [station_id, start_date, start_date, days]);
                    connection.release();
                    return rows;
                } catch (err) {
                    throw new Error("Database error: " + err.message);
                }
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery
});

module.exports = schema;
