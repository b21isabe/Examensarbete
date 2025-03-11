DROP DATABASE weatherDB;
CREATE DATABASE weatherDB;
USE weatherDB;

CREATE TABLE cities (
    city_name VARCHAR(30),
	latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    station_name VARCHAR (100),
    station_id BIGINT,
    elevation DECIMAL(6,2),
    PRIMARY KEY (station_id)
)engine=innodb;

CREATE TABLE weather_data (
    station_id BIGINT,
    observation_time DATETIME,
    wind_direction INT,
    wind_speed DECIMAL(5,2),
    visibility INT,
    temperature DECIMAL(5,2),
    dew_point DECIMAL(5,2),
    atmospheric_pressure DECIMAL(6,2),
    ceiling INT,
    PRIMARY KEY (station_id, observation_time),
    FOREIGN KEY (station_id) REFERENCES cities(station_id)
)engine=innodb;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/city_info.csv'
INTO TABLE cities
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(city_name,	latitude, longitude, station_name, station_id, elevation);

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/krakow.csv'
INTO TABLE weather_data
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(observation_time, @wind_direction, @wind_speed, @visibility, @temperature, @dew_point, @atmospheric_pressure, @ceiling)
SET 
    wind_direction = NULLIF(@wind_direction, ''),
    wind_speed = NULLIF(@wind_speed, ''),
    visibility = NULLIF(@visibility, ''),
    temperature = NULLIF(@temperature, ''),
    dew_point = NULLIF(@dew_point, ''),
    atmospheric_pressure = NULLIF(@atmospheric_pressure, ''),
    ceiling = NULLIF(TRIM(@ceiling), ''),
    station_id = 12566099999;


LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/berlin.csv'
INTO TABLE weather_data
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(observation_time, @wind_direction, @wind_speed, @visibility, @temperature, @dew_point, @atmospheric_pressure, @ceiling)
SET 
    wind_direction = NULLIF(@wind_direction, ''),
    wind_speed = NULLIF(@wind_speed, ''),
    visibility = NULLIF(@visibility, ''),
    temperature = NULLIF(@temperature, ''),
    dew_point = NULLIF(@dew_point, ''),
    atmospheric_pressure = NULLIF(@atmospheric_pressure, ''),
    ceiling = NULLIF(@ceiling, ''),
    station_id = 10385099999;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/sydney.csv'
INTO TABLE weather_data
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(observation_time, @wind_direction, @wind_speed, @visibility, @temperature, @dew_point, @atmospheric_pressure, @ceiling)
SET 
    wind_direction = NULLIF(@wind_direction, ''),
    wind_speed = NULLIF(@wind_speed, ''),
    visibility = NULLIF(@visibility, ''),
    temperature = NULLIF(@temperature, ''),
    dew_point = NULLIF(@dew_point, ''),
    atmospheric_pressure = NULLIF(@atmospheric_pressure, ''),
    ceiling = NULLIF(@ceiling, ''),
    station_id = 94767099999;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/pittsburgh.csv'
INTO TABLE weather_data
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(observation_time, @wind_direction, @wind_speed, @visibility, @temperature, @dew_point, @atmospheric_pressure, @ceiling)
SET 
    wind_direction = NULLIF(@wind_direction, ''),
    wind_speed = NULLIF(@wind_speed, ''),
    visibility = NULLIF(@visibility, ''),
    temperature = NULLIF(@temperature, ''),
    dew_point = NULLIF(@dew_point, ''),
    atmospheric_pressure = NULLIF(@atmospheric_pressure, ''),
    ceiling = NULLIF(@ceiling, ''),
    station_id = 72520094823;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/san-francisco.csv'
INTO TABLE weather_data
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(observation_time, @wind_direction, @wind_speed, @visibility, @temperature, @dew_point, @atmospheric_pressure, @ceiling)
SET 
    wind_direction = NULLIF(@wind_direction, ''),
    wind_speed = NULLIF(@wind_speed, ''),
    visibility = NULLIF(@visibility, ''),
    temperature = NULLIF(@temperature, ''),
    dew_point = NULLIF(@dew_point, ''),
    atmospheric_pressure = NULLIF(@atmospheric_pressure, ''),
    ceiling = NULLIF(@ceiling, ''),
    station_id = 72494023234;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/buffalo.csv'
INTO TABLE weather_data
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(observation_time, @wind_direction, @wind_speed, @visibility, @temperature, @dew_point, @atmospheric_pressure, @ceiling)
SET 
    wind_direction = NULLIF(@wind_direction, ''),
    wind_speed = NULLIF(@wind_speed, ''),
    visibility = NULLIF(@visibility, ''),
    temperature = NULLIF(@temperature, ''),
    dew_point = NULLIF(@dew_point, ''),
    atmospheric_pressure = NULLIF(@atmospheric_pressure, ''),
    ceiling = NULLIF(@ceiling, ''),
    station_id = 72528014733;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/toronto.csv'
INTO TABLE weather_data
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(observation_time, @wind_direction, @wind_speed, @visibility, @temperature, @dew_point, @atmospheric_pressure, @ceiling)
SET 
    wind_direction = NULLIF(@wind_direction, ''),
    wind_speed = NULLIF(@wind_speed, ''),
    visibility = NULLIF(@visibility, ''),
    temperature = NULLIF(@temperature, ''),
    dew_point = NULLIF(@dew_point, ''),
    atmospheric_pressure = NULLIF(@atmospheric_pressure, ''),
    ceiling = NULLIF(@ceiling, ''),
    station_id = 71624099999;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/beijing.csv'
INTO TABLE weather_data
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(observation_time, @wind_direction, @wind_speed, @visibility, @temperature, @dew_point, @atmospheric_pressure, @ceiling)
SET 
    wind_direction = NULLIF(@wind_direction, ''),
    wind_speed = NULLIF(@wind_speed, ''),
    visibility = NULLIF(@visibility, ''),
    temperature = NULLIF(@temperature, ''),
    dew_point = NULLIF(@dew_point, ''),
    atmospheric_pressure = NULLIF(@atmospheric_pressure, ''),
    ceiling = NULLIF(@ceiling, ''),
    station_id = 54511099999;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/cairo.csv'
INTO TABLE weather_data
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(observation_time, @wind_direction, @wind_speed, @visibility, @temperature, @dew_point, @atmospheric_pressure, @ceiling)
SET 
    wind_direction = NULLIF(@wind_direction, ''),
    wind_speed = NULLIF(@wind_speed, ''),
    visibility = NULLIF(@visibility, ''),
    temperature = NULLIF(@temperature, ''),
    dew_point = NULLIF(@dew_point, ''),
    atmospheric_pressure = NULLIF(@atmospheric_pressure, ''),
    ceiling = NULLIF(@ceiling, ''),
    station_id = 62366099999;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/madrid.csv'
INTO TABLE weather_data
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(observation_time, @wind_direction, @wind_speed, @visibility, @temperature, @dew_point, @atmospheric_pressure, @ceiling)
SET 
    wind_direction = NULLIF(@wind_direction, ''),
    wind_speed = NULLIF(@wind_speed, ''),
    visibility = NULLIF(@visibility, ''),
    temperature = NULLIF(@temperature, ''),
    dew_point = NULLIF(@dew_point, ''),
    atmospheric_pressure = NULLIF(@atmospheric_pressure, ''),
    ceiling = NULLIF(@ceiling, ''),
    station_id = 8221099999;

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/paris.csv'
INTO TABLE weather_data
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(observation_time, @wind_direction, @wind_speed, @visibility, @temperature, @dew_point, @atmospheric_pressure, @ceiling)
SET 
    wind_direction = NULLIF(@wind_direction, ''),
    wind_speed = NULLIF(@wind_speed, ''),
    visibility = NULLIF(@visibility, ''),
    temperature = NULLIF(@temperature, ''),
    dew_point = NULLIF(@dew_point, ''),
    atmospheric_pressure = NULLIF(@atmospheric_pressure, ''),
    ceiling = NULLIF(@ceiling, ''),
    station_id = 7156099999;
    
LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/london.csv'
INTO TABLE weather_data
FIELDS TERMINATED BY ','  
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(observation_time, @wind_direction, @wind_speed, @visibility, @temperature, @dew_point, @atmospheric_pressure, @ceiling)
SET 
    wind_direction = NULLIF(@wind_direction, ''),
    wind_speed = NULLIF(@wind_speed, ''),
    visibility = NULLIF(@visibility, ''),
    temperature = NULLIF(@temperature, ''),
    dew_point = NULLIF(@dew_point, ''),
    atmospheric_pressure = NULLIF(@atmospheric_pressure, ''),
    ceiling = NULLIF(@ceiling, ''),
    station_id = 3768399999;
