module.exports = {
		"webport": process.argv[2] || "3333",
		"contactPoints": process.argv[3] || ["192.168.179.101"],
		"localDataCenter" : process.argv[4] || "datacenter1",
		"username": process.argv[5] || "monitoring",
		"password": process.argv[6] || "P@ssw0rd!",
		"keyspace": process.argv[7] || "test",
		"dbport": process.argv[8] || "9042",
		"redisHost": process.argv[9] || "192.168.179.101",
		"redisPort": process.argv[10] || "6379",
		"redisPass": process.argv[11] || "P@ssw0rd!",
		"fileStorage" : process.argv[12] || "/tmp/"
}
