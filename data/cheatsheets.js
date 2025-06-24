export const CHEATSHEETS = {
  Python: {
    title: "Python Cheatsheet",
    content: `
  ## 📌 Python Built-in Data Types
  
  \`\`\`python
  x = 1      # int
  y = 2.8    # float
  z = 1j     # complex
  
  print(type(x))  # <class 'int'>
  \`\`\`
  
  ---
  
  ## 📌 Strings
  
  \`\`\`python
  hello = "Hello World"
  hello = 'Hello World'
  
  multi_string = """Multiline Strings
  my name is python,
  i am a programming language"""
  \`\`\`
  
  ---
  
  ## 📌 Python F-Strings
  
  \`\`\`python
  name = "willington"
  age = 20
  print(f"My name is {name} and I am {age} years old.")
  \`\`\`
  
  ---
  
  ## 📌 Python Lists
  
  \`\`\`python
  list1 = ["apple", "banana", "cherry"]
  list2 = [True, False, False]
  list3 = [1, 5, 7, 9, 3]
  list4 = list((1, 5, 7, 9, 3))
  \`\`\`
  
  ---
  
  ## 📌 Python Tuples
  
  \`\`\`python
  y_tuple = (1, 2, 3)
  my_tuple = tuple((1, 2, 3))
  \`\`\`
  
  ---
  
  ## 📌 Python Sets
  
  \`\`\`python
  set1 = {"a", "b", "c"}
  set2 = set(("a", "b", "c"))
  \`\`\`
  
  ---
  
  ## 📌 Python Dictionaries
  
  \`\`\`python
  a = {"one": 1, "two": 2, "three": 3}
  print(a["one"])       # 1
  print(a.keys())       # dict_keys(['one', 'two', 'three'])
  print(a.values())     # dict_values([1, 2, 3])
  a.update({"four": 4})
  print(a['four'])      # 4
  \`\`\`
  
  ---
  
  ## 📌 Python Flow Control
  
  \`\`\`python
  num = 200
  if num > 0:
      print("num is greater than 0")
  else:
      print("num is not greater than 0")
  \`\`\`
  
  ---
  
  ## 📌 Python Loops
  
  \`\`\`python
  for item in range(6):
      if item == 3: break
      print(item)
  else:
      print("Finally finished!")
  \`\`\`
  
  ---
  
  ## 📌 Python Functions
  
  \`\`\`python
  def greet(name):
      return f"Hello, {name}"
  
  def my_function():
      print("Hello from a function")
  
  my_function()
  \`\`\`
  
  ---
  
  ## 📌 Python Modules
  
  \`\`\`python
  import math
  print(math.sqrt(16))
  \`\`\`
  
  ---
  
  ## 📌 Python File Handling
  
  \`\`\`python
  with open("myfile.txt", "r", encoding='utf8') as file:
      for line in file:
          print(line)
  \`\`\`
  
  ---
  
  ## 📌 Python Classes & Inheritance
  
  \`\`\`python
  class Animal:
      def __init__(self, voice):
          self.voice = voice
  
  cat = Animal('Meow')
  print(cat.voice)
  
  dog = Animal('Woof')
  print(dog.voice)
  \`\`\`
  
  ---
  
  ## 📌 Miscellaneous
  
  ### ➤ Try/Except
  
  \`\`\`python
  try:
      raise IndexError("This is an index error")
  except IndexError as e:
      pass
  except (TypeError, NameError):
      pass
  else:
      print("All good!")
  finally:
      print("We can clean up resources here")
  \`\`\`
  
  ### ➤ Boolean Values
  
  \`\`\`python
  my_bool = True
  print(bool(0))  # False
  print(bool(1))  # True
  \`\`\`
  
  ### ➤ Operators
  
  \`\`\`python
  result = 10 + 30  # => 40
  result = 40 - 10  # => 30
  result = 50 * 5   # => 250
  result = 16 / 4   # => 4.0 (Float Division)
  result = 16 // 4  # => 4 (Integer Division)
  result = 25 % 2   # => 1
  result = 5 ** 3   # => 125
  \`\`\`
  
  ### ➤ Augmented Assignment
  
  \`\`\`python
  counter = 0
  counter += 10  # => 10
  
  counter = 0
  counter = counter + 10  # => 10
  \`\`\`
  
      `,
  },

  JavaScript: {
    title: "JavaScript Basics",
    content: `
  🔹 Variables:
  \`\`\`js
  let x = 5;
  const name = "StarLab";
  \`\`\`
  
  🔹 Functions:
  \`\`\`js
  function greet(name) {
    return "Hello " + name;
  }
  \`\`\`
      `,
  },

  C: {
    title: "C Language Cheatsheet",
    content: `Coming soon...`,
  },

  "C++": {
    title: "C++ Cheatsheet",
    content: `Coming soon...`,
  },

  Java: {
    title: "Java Cheatsheet",
    content: `Coming soon...`,
  },

  Go: {
    title: "Go (Golang) Cheatsheet",
    content: `Coming soon...`,
  },

  Express: {
    title: "Express.js Cheatsheet",
    content: `Coming soon...`,
  },

  Kotlin: {
    title: "Kotlin Cheatsheet",
    content: `Coming soon...`,
  },

  CS33: {
    title: "CS33 Cheatsheet",
    content: `Coming soon...`,
  },

  HTML: {
    title: "HTML Cheatsheet",
    content: `Coming soon...`,
  },

  Laravel: {
    title: "Laravel Cheatsheet",
    content: `Coming soon...`,
  },

  PHP: {
    title: "PHP Cheatsheet",
    content: `Coming soon...`,
  },

  Rust: {
    title: "Rust Cheatsheet",
    content: `Coming soon...`,
  },

  MongoDB: {
    title: "MongoDB Basics",
    content: `
  🔹 CLI Connections:
  \`\`\`bash
  mongo
  mongo --host <host> --port <port> -u <user> -p <pwd>
  mongo "mongodb://192.168.1.1:27017"
  mongo "mongodb+srv://cluster.mongodb.net/<dbname>" --username <username>
  \`\`\`

  🔹 Databases & Collections:
  \`\`\`bash
  show dbs
  db
  use <database_name>
  show collections
  db.createCollection("contacts")
  db.coll.drop()
  db.dropDatabase()
  \`\`\`

  🔹 Create:
  \`\`\`js
  db.coll.insertOne({ name: "Max" })
  db.coll.insert([{ name: "Max" }, { name: "Alex" }])
  db.coll.insert({ date: ISODate() })
  \`\`\`

  🔹 Read:
  \`\`\`js
  db.coll.find()
  db.coll.findOne()
  db.coll.find({ name: "Max", age: 32 }).pretty()
  db.coll.find().sort({ year: 1 }).skip(5).limit(10)
  \`\`\`

  🔹 Update:
  \`\`\`js
  db.coll.update({ _id: 1 }, { $set: { year: 2024 } })
  db.coll.updateMany({ year: 1999 }, { $set: { decade: "90s" } })
  db.coll.replaceOne({ name: "Max" }, { firstname: "Maxime" })
  db.coll.updateOne({ grades: 80 }, { $set: { "grades.$": 82 } })
  \`\`\`

  🔹 Delete:
  \`\`\`js
  db.coll.remove({ name: "Max" })
  db.coll.findOneAndDelete({ name: "Max" })
  \`\`\`

  🔹 Arrays:
  \`\`\`js
  db.coll.update({ _id: 1 }, { $push: { array: 1 } })
  db.coll.update({ _id: 1 }, { $pull: { array: 1 } })
  db.coll.update({ _id: 1 }, { $addToSet: { array: 2 } })
  db.coll.update({ _id: 1 }, { $pop: { array: 1 } })
  db.coll.update({ _id: 1 }, { $pop: { array: -1 } })
  \`\`\`

  🔹 Query Operators:
  \`\`\`js
  db.coll.find({ year: { $gt: 1970 } })
  db.coll.find({ year: { $in: [2000, 2010] } })
  db.coll.find({ $or: [{ year: 1999 }, { year: 2000 }] })
  db.coll.find({ name: { $not: { $eq: "Max" } } })
  db.coll.find({ name: { $exists: true } })
  db.coll.find({ zipCode: { $type: "string" } })
  \`\`\`

  🔹 Aggregation:
  \`\`\`js
  db.coll.aggregate([
    { $match: { status: "A" } },
    { $group: { _id: "$cust_id", total: { $sum: "$amount" } } },
    { $sort: { total: -1 } }
  ])
  \`\`\`

  🔹 Text & Regex:
  \`\`\`js
  db.coll.find({ $text: { $search: "cake" } })
  db.coll.find({ name: /^Max/ })
  \`\`\`

  🔹 Projections:
  \`\`\`js
  db.coll.find({}, { actors: 1 })
  db.coll.find({}, { actors: 0 })
  \`\`\`

  🔹 Indexes:
  \`\`\`js
  db.coll.getIndexes()
  db.coll.dropIndex("name_1")
  db.coll.createIndex({ name: 1 })
  db.coll.createIndex({ name: 1, age: -1 })
  db.coll.createIndex({ "loc": "2dsphere" })
  db.coll.createIndex({ name: 1 }, { unique: true })
  \`\`\`

  🔹 Stats:
  \`\`\`js
  db.coll.stats()
  db.coll.storageSize()
  db.stats()
  \`\`\`

  🔹 Users & Roles:
  \`\`\`js
  use admin
  db.createUser({ user: "root", pwd: passwordPrompt(), roles: ["root"] })
  db.auth("root", passwordPrompt())
  \`\`\`

  🔹 Replica Set:
  \`\`\`js
  rs.initiate({
    _id: "rs0",
    members: [
      { _id: 0, host: "127.0.0.1:27017" },
      { _id: 1, host: "127.0.0.1:27018" }
    ]
  })
  rs.status()
  \`\`\`

  🔹 Sharding:
  \`\`\`js
  sh.status()
  sh.addShard("rs1/host:27017")
  sh.shardCollection("mydb.coll", { zipcode: 1 })
  \`\`\`
    `,
  },

  Neo4j: {
    title: "Neo4j Cheatsheet",
    content: `
  
  ## 🧠 Concepts
  - Nodes: Entities (e.g. Person, Movie)
  - Relationships: Connections between nodes (e.g. ACTED_IN)
  - Labels: Tags for node types (e.g. :Person)
  - Properties: Key-value pairs on nodes/relationships
  
  ---
  
  ## 🔹 Create Data
  
  ### ➤ Create a Node
  \`\`\`cypher
  CREATE (n:Person {name: "Alice", age: 30})
  \`\`\`
  
  ### ➤ Create a Relationship
  \`\`\`cypher
  MATCH (a:Person {name: "Alice"}), (b:Movie {title: "Matrix"})
  CREATE (a)-[:ACTED_IN]->(b)
  \`\`\`
  
  ---
  
  ## 🔍 Read Data
  
  ### ➤ Match Nodes
  \`\`\`cypher
  MATCH (n:Person) RETURN n
  MATCH (n:Person {name: "Alice"}) RETURN n
  \`\`\`
  
  ### ➤ Match with Relationships
  \`\`\`cypher
  MATCH (a:Person)-[:ACTED_IN]->(m:Movie)
  RETURN a.name, m.title
  \`\`\`
  
  ---
  
  ## ✏️ Update Data
  
  ### ➤ Set Properties
  \`\`\`cypher
  MATCH (n:Person {name: "Alice"})
  SET n.age = 31
  \`\`\`
  
  ### ➤ Add Label
  \`\`\`cypher
  MATCH (n {name: "Alice"})
  SET n:Employee
  \`\`\`
  
  ---
  
  ## ❌ Delete Data
  
  ### ➤ Delete Nodes and Relationships
  \`\`\`cypher
  MATCH (n:Person {name: "Alice"}) DELETE n
  \`\`\`
  
  > Use \`DETACH DELETE\` to remove node with its relationships:
  \`\`\`cypher
  MATCH (n:Person {name: "Alice"}) DETACH DELETE n
  \`\`\`
  
  ---
  
  ## 🔎 Filtering & WHERE Clause
  
  \`\`\`cypher
  MATCH (p:Person)
  WHERE p.age > 30 AND p.name STARTS WITH "A"
  RETURN p
  \`\`\`
  
  ---
  
  ## 🔁 Patterns & Paths
  
  ### ➤ Variable Length Paths
  \`\`\`cypher
  MATCH path=(p:Person)-[*1..3]->(m:Movie)
  RETURN path
  \`\`\`
  
  ### ➤ All Paths Between Nodes
  \`\`\`cypher
  MATCH path=allShortestPaths((a:Person)-[*]-(b:Person))
  RETURN path
  \`\`\`
  
  ---
  
  ## 📊 Aggregations
  
  \`\`\`cypher
  MATCH (p:Person)
  RETURN COUNT(p), AVG(p.age), MAX(p.age)
  \`\`\`
  
  ---
  
  ## 📌 Return Clauses
  
  \`\`\`cypher
  MATCH (n:Person)
  RETURN DISTINCT n.name
  ORDER BY n.age DESC
  LIMIT 5
  \`\`\`
  
  ---
  
  ## 🔁 Merge
  
  > Ensures the node/relationship exists, creates if not.
  
  \`\`\`cypher
  MERGE (p:Person {name: "Alice"})
  ON CREATE SET p.age = 25
  ON MATCH SET p.age = p.age + 1
  \`\`\`
  
  ---
  
  ## 🏷️ Indexes & Constraints
  
  ### ➤ Create Index
  \`\`\`cypher
  CREATE INDEX FOR (p:Person) ON (p.name)
  \`\`\`
  
  ### ➤ Unique Constraint
  \`\`\`cypher
  CREATE CONSTRAINT ON (p:Person) ASSERT p.email IS UNIQUE
  \`\`\`
  
  ---
  
  ## 🧪 Useful Functions
  
  ### ➤ String
  \`\`\`cypher
  toLower(), toUpper(), substring(), replace()
  \`\`\`
  
  ### ➤ List
  \`\`\`cypher
  size(), collect(), UNWIND
  \`\`\`
  
  ### ➤ Time
  \`\`\`cypher
  date(), datetime(), timestamp()
  \`\`\`
  
  ---
  
  ## 📦 Import CSV
  
  > Assuming file is in \`import/\` directory
  
  \`\`\`cypher
  LOAD CSV WITH HEADERS FROM 'file:///people.csv' AS row
  CREATE (:Person {name: row.name, age: toInteger(row.age)})
  \`\`\`
  
  ---
  
  ## 💾 Backup (Neo4j CLI)
  
  \`\`\`bash
  neo4j-admin dump --database=neo4j --to=backup.dump
  neo4j-admin load --from=backup.dump --database=neo4j --force
  \`\`\`
  
  ---
  `
  
  },

  MySQL: {
    title: "MySQL Cheatsheet",
    content: `
  
  ## 🔌 Connect to MySQL
  
  \`\`\`bash
  mysql -u root -p
  mysql -u root -p mydb
  \`\`\`
  
  ---
  
  ## 🗃️ Databases
  
  ### Create / Drop / Use
  \`\`\`sql
  CREATE DATABASE school;
  DROP DATABASE school;
  USE school;
  \`\`\`
  
  ### Show Databases & Tables
  \`\`\`sql
  SHOW DATABASES;
  SHOW TABLES;
  \`\`\`
  
  ---
  
  ## 📋 Tables
  
  ### Create Table
  \`\`\`sql
  CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT
  );
  \`\`\`
  
  ### Describe / Drop / Rename
  \`\`\`sql
  DESCRIBE students;
  DROP TABLE students;
  RENAME TABLE students TO learners;
  \`\`\`
  
  ---
  
  ## 📄 CRUD Operations
  
  ### Insert
  \`\`\`sql
  INSERT INTO students (name, age)
  VALUES ("Alice", 22);
  \`\`\`
  
  ### Read
  \`\`\`sql
  SELECT * FROM students;
  SELECT name FROM students WHERE age > 20;
  \`\`\`
  
  ### Update
  \`\`\`sql
  UPDATE students SET age = 23 WHERE name = "Alice";
  \`\`\`
  
  ### Delete
  \`\`\`sql
  DELETE FROM students WHERE age < 18;
  \`\`\`
  
  ---
  
  ## 🧩 Constraints
  
  \`\`\`sql
  NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, DEFAULT, CHECK
  \`\`\`
  
  ### Foreign Key Example
  \`\`\`sql
  CREATE TABLE classes (
    id INT PRIMARY KEY,
    name VARCHAR(50)
  );
  
  CREATE TABLE enrollments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    class_id INT,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (class_id) REFERENCES classes(id)
  );
  \`\`\`
  
  ---
  
  ## 🔗 Joins
  
  \`\`\`sql
  -- INNER JOIN
  SELECT students.name, classes.name
  FROM students
  INNER JOIN enrollments ON students.id = enrollments.student_id
  INNER JOIN classes ON enrollments.class_id = classes.id;
  
  -- LEFT JOIN
  SELECT * FROM students LEFT JOIN enrollments ON students.id = enrollments.student_id;
  \`\`\`
  
  ---
  
  ## 🧮 Aggregate Functions
  
  \`\`\`sql
  SELECT COUNT(*) FROM students;
  SELECT AVG(age) FROM students;
  SELECT MAX(age), MIN(age) FROM students;
  SELECT age, COUNT(*) FROM students GROUP BY age;
  \`\`\`
  
  ---
  
  ## 🗂️ Indexes
  
  \`\`\`sql
  CREATE INDEX idx_name ON students(name);
  DROP INDEX idx_name ON students;
  \`\`\`
  
  ---
  
  ## 🔐 Users & Privileges
  
  \`\`\`sql
  CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
  GRANT ALL PRIVILEGES ON *.* TO 'newuser'@'localhost';
  FLUSH PRIVILEGES;
  \`\`\`
  
  ---
  
  ## 💾 Backup & Restore
  
  \`\`\`bash
  mysqldump -u root -p school > backup.sql
  mysql -u root -p school < backup.sql
  \`\`\`
  
  ---
  `
  },

  Redis: {
    title: "Redis Cheatsheet",
    content: `
  ## 📌 Redis Strings
  
  ### ➤ APPEND
  \`\`\`bash
  APPEND key value
  # Example
  APPEND mykey "Hello"
  APPEND mykey " World"
  GET mykey  # "Hello World"
  \`\`\`
  
  ### ➤ BITCOUNT
  \`\`\`bash
  BITCOUNT key [start end]
  # Example
  SET mykey "foobar"
  BITCOUNT mykey
  BITCOUNT mykey 0 0
  \`\`\`
  
  ### ➤ BITFIELD
  \`\`\`bash
  BITFIELD key [GET type offset] [SET type offset value] [INCRBY type offset increment] [OVERFLOW WRAP|SAT|FAIL]
  \`\`\`
  
  ---
  
  ## 📌 Redis Hashes
  
  ### ➤ HSET / HDEL / HEXISTS
  \`\`\`bash
  HSET key field value
  HDEL key field [field ...]
  HEXISTS key field
  # Example
  HSET myhash field1 "foo"
  HDEL myhash field1
  HEXISTS myhash field1
  \`\`\`
  
  ### ➤ HGET / HGETALL
  \`\`\`bash
  HGET key field
  HGETALL key
  \`\`\`
  
  ### ➤ HINCRBY / HLEN / HKEYS / HVALS
  \`\`\`bash
  HINCRBY key field increment
  HLEN key
  HKEYS key
  HVALS key
  \`\`\`
  
  ---
  
  ## 📌 Redis Lists
  
  ### ➤ RPUSH / LPUSH / LPOP / RPOP
  \`\`\`bash
  RPUSH key value [value ...]
  LPUSH key value [value ...]
  LPOP key
  RPOP key
  \`\`\`
  
  ### ➤ BLPOP / BRPOP (Blocking)
  \`\`\`bash
  BLPOP key [key ...] timeout
  BRPOP key [key ...] timeout
  # Example
  RPUSH list1 a b c
  BLPOP list1 0
  \`\`\`
  
  ### ➤ BRPOPLPUSH / BLMOVE
  \`\`\`bash
  BRPOPLPUSH source destination timeout
  BLMOVE source destination LEFT|RIGHT LEFT|RIGHT timeout
  \`\`\`
  
  ### ➤ LRANGE / LINDEX / LREM
  \`\`\`bash
  LRANGE key start stop
  LINDEX key index
  LREM key count value
  \`\`\`
  
  ---
  
  ## 📌 Redis Sets
  
  ### ➤ SADD / SREM / SMEMBERS / SISMEMBER
  \`\`\`bash
  SADD key member [member ...]
  SREM key member [member ...]
  SMEMBERS key
  SISMEMBER key member
  \`\`\`
  
  ### ➤ SUNION / SINTER / SDIFF
  \`\`\`bash
  SUNION key [key ...]
  SINTER key [key ...]
  SDIFF key [key ...]
  \`\`\`
  
  ---
  
  ## 📌 Redis Sorted Sets
  
  ### ➤ ZADD / ZREM / ZRANGE / ZREVRANGE
  \`\`\`bash
  ZADD key score member [score member ...]
  ZREM key member [member ...]
  ZRANGE key start stop [WITHSCORES]
  ZREVRANGE key start stop [WITHSCORES]
  \`\`\`
  
  ### ➤ BZPOPMIN / BZPOPMAX
  \`\`\`bash
  BZPOPMIN key [key ...] timeout
  BZPOPMAX key [key ...] timeout
  \`\`\`
  
  ---
  
  ## 📌 Redis GEO
  
  ### ➤ GEOADD / GEORADIUS / GEODIST
  \`\`\`bash
  GEOADD key longitude latitude member
  GEORADIUS key longitude latitude radius m|km|ft|mi
  GEODIST key member1 member2 [unit]
  \`\`\`
  
  ---
  
  ## 📌 Redis Keys
  
  ### ➤ DEL / EXISTS / EXPIRE / TTL
  \`\`\`bash
  DEL key [key ...]
  EXISTS key
  EXPIRE key seconds
  TTL key
  \`\`\`
  
  ### ➤ RENAME / TYPE / KEYS
  \`\`\`bash
  RENAME key newkey
  TYPE key
  KEYS pattern
  \`\`\`
  
  ---
  
  ## 📌 Redis Pub/Sub
  
  ### ➤ PUBLISH / SUBSCRIBE / UNSUBSCRIBE
  \`\`\`bash
  PUBLISH channel message
  SUBSCRIBE channel [channel ...]
  UNSUBSCRIBE channel [channel ...]
  \`\`\`
  
  ---
  
  ## 📌 Redis Transactions
  
  ### ➤ MULTI / EXEC / DISCARD / WATCH
  \`\`\`bash
  MULTI
  <commands>
  EXEC
  DISCARD
  WATCH key
  \`\`\`
  
  ---
  
  ## 📌 Redis Persistence
  
  ### ➤ SAVE / BGSAVE / LASTSAVE
  \`\`\`bash
  SAVE          # Save DB synchronously
  BGSAVE        # Save DB asynchronously
  LASTSAVE      # Get UNIX timestamp of last save
  \`\`\`
  
  ---
  
  ## 📌 Redis Server
  
  ### ➤ INFO / MONITOR / CONFIG
  \`\`\`bash
  INFO                  # Show server information
  MONITOR               # See real-time commands
  CONFIG GET *          # Get all config
  CONFIG SET key value  # Set config
  \`\`\`
    `,
  },

  PostgreSQL: {
    title: "PostgreSQL Basics",
    content: `
  🔹 Getting Started:
  \`\`\`bash
  $ sudo -u postgres psql     # Switch to postgres user
  \q                          # Quit psql
  \c postgres                 # Connect to postgres DB
  \l                          # List all databases
  \dt                         # List all tables
  \du                         # List all users
  \?                          # Help (psql commands)
  \h                          # Help on SQL syntax
  \! ls                       # Run shell command
  \conninfo                   # Show connection info
  \encoding                   # Show encoding
  \password                   # Change password
  \dt *.*                     # List all tables in all schemas
  \dn                         # List schemas
  \df                         # List functions
  \di                         # List indexes
  \dx                         # List extensions
  \ds                         # List sequences
  \dv                         # List views
  \dt *.*                     # Global tables
  \dt schema.*                # Schema tables
  \dp                         # Table privileges
  \lo_list                    # List large objects
  \copy ...                   # CSV Import/Export
  \i file.sql                 # Run SQL file
  \o file.txt                 # Output to file
  \set var value              # Set psql variable
  \! ls -l                    # List from shell
  \cd /path                   # Change dir
  \H                          # Toggle HTML output
  \timing                     # Toggle timing
  \q                          # Quit
  \`\`\`
  
  🔹 Connect via CLI:
  \`\`\`bash
  psql -U user -d dbname
  psql -h host -p port -U user -d dbname
  psql -c "SELECT now();" mydb
  \`\`\`
  
  🔹 Users & Roles:
  \`\`\`sql
  SELECT rolname FROM pg_roles;
  CREATE USER john WITH PASSWORD '12345';
  ALTER ROLE john WITH PASSWORD '54321';
  DROP USER john;
  \`\`\`
  
  🔹 Databases:
  \`\`\`sql
  CREATE DATABASE mydb WITH OWNER john;
  DROP DATABASE IF EXISTS mydb;
  ALTER DATABASE oldname RENAME TO newname;
  \`\`\`
  
  🔹 Tables:
  \`\`\`sql
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    age INT
  );
  DROP TABLE IF EXISTS users CASCADE;
  ALTER TABLE users ADD email TEXT;
  ALTER TABLE users DROP COLUMN age;
  \`\`\`
  
  🔹 Insert & Select:
  \`\`\`sql
  INSERT INTO users (name, email) VALUES ('Max', 'max@mail.com');
  SELECT * FROM users;
  SELECT * FROM users LIMIT 1;
  SELECT * FROM users WHERE name = 'Max';
  \`\`\`
  
  🔹 Update & Delete:
  \`\`\`sql
  UPDATE users SET email = 'new@mail.com' WHERE name = 'Max';
  DELETE FROM users WHERE name = 'Max';
  DELETE FROM users; -- delete all
  \`\`\`
  
  🔹 Permissions:
  \`\`\`sql
  GRANT ALL PRIVILEGES ON DATABASE mydb TO john;
  GRANT CONNECT ON DATABASE mydb TO john;
  GRANT USAGE ON SCHEMA public TO john;
  GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO john;
  \`\`\`
  
  🔹 Date & Time:
  \`\`\`sql
  SELECT current_date;
  SELECT current_time;
  SELECT make_date(2024, 6, 24);
  SELECT age('2020-01-01'::timestamp, now());
  \`\`\`
  
  🔹 Backup & Restore:
  \`\`\`bash
  pg_dump -d mydb -f backup.sql
  pg_dump -s -d mydb -f schema.sql   # schema only
  pg_dump -a -d mydb -f data.sql     # data only
  pg_restore -d mydb backup.sql
  psql -U user -d mydb < backup.sql
  \`\`\`
  
  🔹 Remote Access Setup:
  \`\`\`bash
  # Edit config
  $ sudo nano /etc/postgresql/*/main/postgresql.conf
  listen_addresses = '*'
  
  # Edit HBA
  $ sudo nano /etc/postgresql/*/main/pg_hba.conf
  host all all 0.0.0.0/0 md5
  host all all ::/0 md5
  
  # Restart
  $ sudo systemctl restart postgresql
  \`\`\`
  
  🔹 CSV Import/Export:
  \`\`\`sql
  -- Export
  \\copy users TO '/path/users.csv' CSV
  -- Import
  \\copy users FROM '/path/users.csv' CSV
  \`\`\`
    `,
  },

  Bash: {
    title: "Bash Cheatsheet",
    content: `Coming soon...`,
  },

  SSH: {
    title: "SSH Cheatsheet",
    content: `Coming soon...`,
  },

  Chmod: {
    title: "chmod Cheatsheet",
    content: `Coming soon...`,
  },

  Curl: {
    title: "curl Cheatsheet",
    content: `Coming soon...`,
  },

  Tmux: {
    title: "tmux Cheatsheet",
    content: `Coming soon...`,
  },

  Git: {
    title: "Git Cheatsheet",
    content: `Coming soon...`,
  },

  Docker: {
    title: "Docker Cheatsheet",
    content: `Coming soon...`,
  },

  "VS Code": {
    title: "VS Code Shortcuts",
    content: `Coming soon...`,
  },

  Windows: {
    title: "Windows Shortcuts",
    content: `Coming soon...`,
  },

  Mac: {
    title: "Mac Shortcuts",
    content: `Coming soon...`,
  },
};
