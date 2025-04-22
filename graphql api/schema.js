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

        city_name: { type: GraphQLString },
        station_name: { type: GraphQLString },
    })
});

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
                        SELECT weather_data.station_id, 
                               DATE_FORMAT(weather_data.observation_time, '%Y-%m-%d %H:%i:%s') AS observation_time, 
                               weather_data.wind_direction, weather_data.wind_speed, weather_data.visibility, weather_data.temperature, 
                               weather_data.dew_point, weather_data.atmospheric_pressure, weather_data.ceiling,
                               cities.city_name, cities.station_name
                        FROM weather_data
                        JOIN cities ON weather_data.station_id = cities.station_id
                        WHERE weather_data.station_id = ? 
                        AND weather_data.observation_time >= ? 
                        AND weather_data.observation_time < DATE_ADD(?, INTERVAL ? DAY)
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
