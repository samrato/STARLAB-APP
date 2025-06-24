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

  "JavaScript": {
  title: "JavaScript Cheatsheet",
  content: `
## 📌 Basics

\`\`\`js
let x = 10;
const y = "Hello";
var z = true;

console.log(x, y, z);
\`\`\`

---

## 📌 Data Types

\`\`\`js
// Primitive
string, number, boolean, null, undefined, symbol, bigint

// Non-Primitive
object, array, function

typeof "hi"; // "string"
\`\`\`

---

## 📌 Strings

\`\`\`js
let str = "JavaScript";
str.length;
str.toUpperCase();
str.includes("Script");
str.slice(0, 4);
\`\`\`

---

## 📌 Numbers & Math

\`\`\`js
let n = 10;
n.toString();
parseInt("123");
Math.floor(2.9);
Math.random(); // 0-1
\`\`\`

---

## 📌 Arrays

\`\`\`js
let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.includes(2);
arr.map(x => x * 2);
arr.filter(x => x > 1);
\`\`\`

---

## 📌 Objects

\`\`\`js
let user = {
  name: "Alice",
  age: 25,
  greet() {
    return "Hi " + this.name;
  }
};

user.name;
user["age"];
user.greet();
\`\`\`

---

## 📌 Functions

\`\`\`js
function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;
\`\`\`

---

## 📌 Conditionals

\`\`\`js
if (x > 5) {
  console.log("Big");
} else {
  console.log("Small");
}

let result = x > 10 ? "Yes" : "No";
\`\`\`

---

## 📌 Loops

\`\`\`js
for (let i = 0; i < 5; i++) {}

while (x > 0) {
  x--;
}

arr.forEach(item => console.log(item));
\`\`\`

---

## 📌 DOM Manipulation

\`\`\`js
document.getElementById("id");
document.querySelector(".class").textContent = "Changed";
document.createElement("div");
element.appendChild(newElement);
\`\`\`

---

## 📌 Events

\`\`\`js
document.querySelector("button").addEventListener("click", () => {
  alert("Clicked");
});
\`\`\`

---

## 📌 Classes

\`\`\`js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello " + this.name;
  }
}

let p = new Person("Bob");
p.greet();
\`\`\`

---

## 📌 Promises & Async/Await

\`\`\`js
fetch("https://api.com")
  .then(res => res.json())
  .then(data => console.log(data));

async function getData() {
  const res = await fetch("https://api.com");
  const data = await res.json();
  console.log(data);
}
\`\`\`

---

## 📌 Try/Catch

\`\`\`js
try {
  let x = a + 1;
} catch (error) {
  console.error(error.message);
}
\`\`\`

---

## 📌 JSON

\`\`\`js
let obj = { name: "Alice" };
let str = JSON.stringify(obj);
let parsed = JSON.parse(str);
\`\`\`

---

## 📌 Storage

\`\`\`js
localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");

sessionStorage.setItem("x", 1);
\`\`\`

---

## 📌 Set & Map

\`\`\`js
let s = new Set([1, 2, 2, 3]); // unique
let m = new Map();
m.set("name", "Alice");
m.get("name");
\`\`\`

---

## 📌 Useful Methods

\`\`\`js
Object.keys(obj);
Object.values(obj);
Object.entries(obj);
Array.isArray([]);
\`\`\`

---

## 📌 ES6 Features

\`\`\`js
// Destructuring
let { name } = user;

// Spread & Rest
let arr2 = [...arr];
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

// Template Literals
let msg = \`Hello \${name}\`;

// Default Params
function greet(name = "Guest") {
  return "Hi " + name;
}
\`\`\`

---
`,
},


  C: {
    title: "C Language Cheatsheet",
    content: `
  ---
  
  ## 📌 Getting Started
  
  \`\`\`c
  #include <stdio.h>
  
  int main(void) {
    printf("Hello World!\\n");
    return 0;
  }
  \`\`\`
  
  **Compile & Run:**
  
  \`\`\`bash
  gcc hello.c -o hello
  ./hello
  \`\`\`
  
  ---
  
  ## 📌 Variables
  
  \`\`\`c
  int myNum = 15;
  float myFloat = 5.99;
  char myLetter = 'D';
  int x = 5, y = 6, sum = x + y;
  \`\`\`
  
  ---
  
  ## 📌 Constants
  
  \`\`\`c
  const int BIRTHYEAR = 1980;
  const float PI = 3.14;
  \`\`\`
  
  ---
  
  ## 📌 Printf Formatting
  
  \`\`\`c
  printf("Integer: %d", myNum);
  printf("Float: %f", myFloat);
  printf("Char: %c", myLetter);
  \`\`\`
  
  ---
  
  ## 📌 Conditionals
  
  \`\`\`c
  if (x > y) {
    printf("x is greater");
  } else {
    printf("y is greater");
  }
  \`\`\`
  
  Ternary:
  
  \`\`\`c
  int age = 20;
  (age > 18) ? printf("Adult") : printf("Teenager");
  \`\`\`
  
  Switch:
  
  \`\`\`c
  int day = 4;
  switch(day) {
    case 4: printf("Thursday"); break;
    default: printf("Weekend!");
  }
  \`\`\`
  
  ---
  
  ## 📌 Loops
  
  **While:**
  
  \`\`\`c
  int i = 0;
  while (i < 5) {
    printf("%d\\n", i);
    i++;
  }
  \`\`\`
  
  **Do-While:**
  
  \`\`\`c
  int i = 0;
  do {
    printf("%d\\n", i);
    i++;
  } while (i < 5);
  \`\`\`
  
  **For:**
  
  \`\`\`c
  for (int i = 0; i < 5; i++) {
    printf("%d\\n", i);
  }
  \`\`\`
  
  ---
  
  ## 📌 Arrays
  
  \`\`\`c
  int nums[] = {25, 50, 75, 100};
  printf("%d", nums[0]);
  
  nums[0] = 33;
  
  for (int i = 0; i < 4; i++) {
    printf("%d\\n", nums[i]);
  }
  \`\`\`
  
  ---
  
  ## 📌 Strings
  
  \`\`\`c
  char greeting[] = "Hello World!";
  greeting[0] = 'J';
  printf("%s", greeting); // "Jello World!"
  \`\`\`
  
  ---
  
  ## 📌 User Input
  
  \`\`\`c
  int myNum;
  printf("Enter a number: ");
  scanf("%d", &myNum);
  printf("You entered: %d", myNum);
  \`\`\`
  
  String input:
  
  \`\`\`c
  char name[30];
  scanf("%s", name);
  printf("Hello %s", name);
  \`\`\`
  
  ---
  
  ## 📌 Pointers
  
  \`\`\`c
  int age = 43;
  int *ptr = &age;
  printf("%p\\n", ptr); // Address
  printf("%d\\n", *ptr); // Value
  \`\`\`
  
  ---
  
  ## 📌 Operators
  
  \`\`\`c
  +  -  *  /  %
  == != > < >= <=
  && || !
  & | ^ ~ << >>
  \`\`\`
  
  ---
  
  ## 📌 Data Types
  
  \`\`\`c
  int, float, double, char
  short, long, unsigned int
  \`\`\`
  
  **Format specifiers:**
  
  \`\`\`c
  %d %f %lf %c %s %x %X %o
  \`\`\`
  
  ---
  
  ## 📌 Functions
  
  \`\`\`c
  void myFunction() {
    printf("Hello from function");
  }
  
  int add(int x, int y) {
    return x + y;
  }
  \`\`\`
  
  Call function:
  
  \`\`\`c
  myFunction();
  printf("%d", add(5, 3));
  \`\`\`
  
  ---
  
  ## 📌 Recursion
  
  \`\`\`c
  int sum(int k) {
    if (k > 0) return k + sum(k - 1);
    else return 0;
  }
  \`\`\`
  
  ---
  
  ## 📌 Structs
  
  \`\`\`c
  struct Person {
    int age;
    char name[20];
  };
  
  struct Person p1 = {21, "John"};
  \`\`\`
  
  Access:
  
  \`\`\`c
  printf("%d", p1.age);
  strcpy(p1.name, "Jane");
  \`\`\`
  
  ---
  
  ## 📌 Enums
  
  \`\`\`c
  enum week { Mon = 1, Tues, Wed };
  enum week today = Mon;
  \`\`\`
  
  ---
  
  ## 📌 File Handling
  
  \`\`\`c
  FILE *fp;
  fp = fopen("file.txt", "w");
  fprintf(fp, "Hello file!");
  fclose(fp);
  \`\`\`
  
  Read file:
  
  \`\`\`c
  char buffer[255];
  fp = fopen("file.txt", "r");
  while (fscanf(fp, "%s", buffer) != EOF) {
    printf("%s ", buffer);
  }
  \`\`\`
  
  ---
  
  ## 📌 Preprocessor
  
  \`\`\`c
  #define PI 3.14
  #include <stdio.h>
  #ifdef PI
    printf("PI is defined");
  #endif
  \`\`\`
  
  ---
  
  ## 📌 Math Library
  
  \`\`\`c
  #include <math.h>
  sqrt(16); pow(2, 3); ceil(2.1); floor(2.9);
  \`\`\`
  
  ---
  
  ## 📌 File Size Example
  
  \`\`\`c
  fseek(fp, 0, SEEK_END);
  int size = ftell(fp);
  \`\`\`
  
  ---
  
  ## 📌 Macro Tricks
  
  \`\`\`c
  #define square(x) ((x)*(x))
  #define MAX(x,y) ((x) > (y) ? (x) : (y))
  \`\`\`
  
  ---
    `
  },
  

  "C++": {
  title: "C++ Cheatsheet",
  content: `
## 📌 Getting Started

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}
\`\`\`

---

## 📌 Variables & Data Types

\`\`\`cpp
int x = 10;
double y = 5.5;
char letter = 'A';
bool isTrue = true;
string name = "John"; // include <string>
\`\`\`

---

## 📌 Input / Output

\`\`\`cpp
cin >> x;
cout << "Value: " << x << endl;
\`\`\`

---

## 📌 Conditionals

\`\`\`cpp
if (x > 10) {
    // do something
} else if (x == 10) {
    // do something else
} else {
    // fallback
}

// Ternary
(x > 5) ? cout << "Yes" : cout << "No";
\`\`\`

---

## 📌 Loops

\`\`\`cpp
// For loop
for (int i = 0; i < 5; i++) {
    cout << i << endl;
}

// While loop
int i = 0;
while (i < 5) {
    cout << i << endl;
    i++;
}

// Do-while loop
int j = 0;
do {
    cout << j << endl;
    j++;
} while (j < 5);
\`\`\`

---

## 📌 Functions

\`\`\`cpp
int add(int a, int b) {
    return a + b;
}
\`\`\`

---

## 📌 Arrays

\`\`\`cpp
int arr[3] = {1, 2, 3};
for (int i = 0; i < 3; i++) {
    cout << arr[i] << endl;
}
\`\`\`

---

## 📌 Pointers

\`\`\`cpp
int a = 10;
int *ptr = &a;

cout << *ptr << endl; // dereference
\`\`\`

---

## 📌 References

\`\`\`cpp
int a = 5;
int &ref = a;
ref = 10;  // a becomes 10
\`\`\`

---

## 📌 Classes & Objects

\`\`\`cpp
class Car {
  public:
    string brand;
    void honk() {
      cout << "Beep!";
    }
};

Car c;
c.brand = "Toyota";
c.honk();
\`\`\`

---

## 📌 Constructors & Destructors

\`\`\`cpp
class MyClass {
  public:
    MyClass() {
      cout << "Constructor\n";
    }
    ~MyClass() {
      cout << "Destructor\n";
    }
};
\`\`\`

---

## 📌 Inheritance

\`\`\`cpp
class Animal {
  public:
    void sound() {
      cout << "Animal sound";
    }
};

class Dog : public Animal {
  public:
    void bark() {
      cout << "Woof!";
    }
};
\`\`\`

---

## 📌 Polymorphism

\`\`\`cpp
class Base {
  public:
    virtual void show() {
      cout << "Base\n";
    }
};

class Derived : public Base {
  public:
    void show() override {
      cout << "Derived\n";
    }
};

Base *b = new Derived();
b->show(); // Derived
\`\`\`

---

## 📌 STL Containers

\`\`\`cpp
#include <vector>
#include <map>
#include <set>
#include <utility>

vector<int> v = {1, 2, 3};
v.push_back(4);

map<string, int> m = {{"a", 1}};
set<int> s = {1, 2, 3};

pair<int, string> p = {1, "One"};
\`\`\`

---

## 📌 File Handling

\`\`\`cpp
#include <fstream>

ofstream fout("file.txt");
fout << "Hello!";
fout.close();

ifstream fin("file.txt");
string line;
getline(fin, line);
fin.close();
\`\`\`

---

## 📌 Lambda Functions

\`\`\`cpp
auto add = [](int a, int b) {
  return a + b;
};

cout << add(2, 3);
\`\`\`

---

## 📌 Exception Handling

\`\`\`cpp
try {
  throw runtime_error("Something went wrong");
} catch (const exception &e) {
  cout << e.what();
}
\`\`\`

---

## 📌 Math Functions

\`\`\`cpp
#include <cmath>

pow(2, 3);   // 8
sqrt(16);    // 4
floor(1.7);  // 1
ceil(1.2);   // 2
\`\`\`
  `,
},


  Java: {
  title: "Java Cheatsheet",
  content: `
## 📌 Getting Started

\`\`\`java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}
\`\`\`

---

## 📌 Variables & Data Types

\`\`\`java
int x = 5;
double y = 4.5;
char letter = 'A';
boolean isJavaFun = true;
String name = "Java";
\`\`\`

---

## 📌 Operators

\`\`\`java
// Arithmetic: + - * / %
int sum = 5 + 3;

// Comparison: == != > < >= <=
// Logical: && || !
\`\`\`

---

## 📌 Input / Output

\`\`\`java
import java.util.Scanner;

Scanner sc = new Scanner(System.in);
int x = sc.nextInt();
String name = sc.nextLine();

System.out.println("Name: " + name);
\`\`\`

---

## 📌 Conditionals

\`\`\`java
if (x > 10) {
  // do something
} else if (x == 10) {
  // something else
} else {
  // fallback
}

// Ternary
String result = (x > 5) ? "Yes" : "No";
\`\`\`

---

## 📌 Loops

\`\`\`java
// For loop
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}

// While loop
int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}

// Do-while loop
int j = 0;
do {
  System.out.println(j);
  j++;
} while (j < 5);
\`\`\`

---

## 📌 Arrays

\`\`\`java
int[] nums = {1, 2, 3, 4};
for (int n : nums) {
  System.out.println(n);
}
\`\`\`

---

## 📌 Strings

\`\`\`java
String s = "Hello";
System.out.println(s.length());
System.out.println(s.toUpperCase());
System.out.println(s.charAt(0));
\`\`\`

---

## 📌 Methods

\`\`\`java
public static int add(int a, int b) {
  return a + b;
}
\`\`\`

---

## 📌 Classes & Objects

\`\`\`java
class Car {
  String brand = "Toyota";
  void honk() {
    System.out.println("Beep!");
  }
}

Car myCar = new Car();
myCar.honk();
\`\`\`

---

## 📌 Constructors

\`\`\`java
class Person {
  String name;
  Person(String newName) {
    name = newName;
  }
}

Person p = new Person("Alice");
\`\`\`

---

## 📌 Inheritance

\`\`\`java
class Animal {
  void sound() {
    System.out.println("Animal sound");
  }
}

class Dog extends Animal {
  void bark() {
    System.out.println("Woof!");
  }
}
\`\`\`

---

## 📌 Polymorphism

\`\`\`java
class Animal {
  void sound() {
    System.out.println("Generic sound");
  }
}

class Cat extends Animal {
  void sound() {
    System.out.println("Meow");
  }
}

Animal a = new Cat();
a.sound(); // Meow
\`\`\`

---

## 📌 Abstraction

\`\`\`java
abstract class Animal {
  abstract void sound();
}

class Dog extends Animal {
  void sound() {
    System.out.println("Woof!");
  }
}
\`\`\`

---

## 📌 Interfaces

\`\`\`java
interface Animal {
  void makeSound();
}

class Cat implements Animal {
  public void makeSound() {
    System.out.println("Meow");
  }
}
\`\`\`

---

## 📌 Exception Handling

\`\`\`java
try {
  int x = 5 / 0;
} catch (ArithmeticException e) {
  System.out.println("Cannot divide by zero");
} finally {
  System.out.println("Done");
}
\`\`\`

---

## 📌 File Handling

\`\`\`java
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

File file = new File("data.txt");

// Write
FileWriter writer = new FileWriter(file);
writer.write("Hello, file!");
writer.close();

// Read
Scanner reader = new Scanner(file);
while (reader.hasNextLine()) {
  System.out.println(reader.nextLine());
}
reader.close();
\`\`\`

---

## 📌 Collections

\`\`\`java
import java.util.*;

ArrayList<String> list = new ArrayList<>();
list.add("Java");
list.add("Python");

HashMap<String, Integer> map = new HashMap<>();
map.put("a", 1);
map.get("a");

HashSet<Integer> set = new HashSet<>();
set.add(1);
set.add(2);
\`\`\`

---

## 📌 Lambda Expressions (Java 8+)

\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4);
numbers.forEach(n -> System.out.println(n));
\`\`\`

---

## 📌 Threads

\`\`\`java
class MyThread extends Thread {
  public void run() {
    System.out.println("Thread running...");
  }
}

MyThread t = new MyThread();
t.start();
\`\`\`

---

## 📌 Packages

\`\`\`java
package mypackage;

public class MyClass {
  public static void sayHi() {
    System.out.println("Hello");
  }
}
\`\`\`

---

## 📌 Java Math

\`\`\`java
Math.max(5, 10);
Math.min(3, 7);
Math.sqrt(16);
Math.random(); // 0.0 to 1.0
\`\`\`
`,
},

 Go: {
  title: "Go Cheatsheet",
  content: `
## 📌 Getting Started

\`\`\`go
package main
import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}
\`\`\`

---

## 📌 Variables & Data Types

\`\`\`go
var x int = 10
y := 20          // short declaration
var name string = "Go"
var isTrue bool = true
var f float64 = 3.14
\`\`\`

---

## 📌 Constants

\`\`\`go
const PI = 3.14
const NAME string = "Gopher"
\`\`\`

---

## 📌 Print & Input

\`\`\`go
import "fmt"

fmt.Print("Enter your name: ")
var name string
fmt.Scanln(&name)
fmt.Println("Hello", name)
\`\`\`

---

## 📌 Conditionals

\`\`\`go
if x > 10 {
    fmt.Println("Greater")
} else if x == 10 {
    fmt.Println("Equal")
} else {
    fmt.Println("Smaller")
}

// Ternary style (not directly supported)
result := "Yes"
if x <= 5 {
    result = "No"
}
\`\`\`

---

## 📌 Loops

\`\`\`go
// For loop
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

// While-like loop
i := 0
for i < 5 {
    fmt.Println(i)
    i++
}

// Infinite loop
for {
    break
}
\`\`\`

---

## 📌 Functions

\`\`\`go
func add(a int, b int) int {
    return a + b
}

// Multiple returns
func getValues() (int, string) {
    return 5, "Go"
}
\`\`\`

---

## 📌 Arrays & Slices

\`\`\`go
var arr = [3]int{1, 2, 3}
slice := []int{4, 5, 6}
slice = append(slice, 7)
fmt.Println(len(slice), cap(slice))
\`\`\`

---

## 📌 Maps (Dictionaries)

\`\`\`go
m := make(map[string]int)
m["a"] = 1
fmt.Println(m["a"])
\`\`\`

---

## 📌 Structs

\`\`\`go
type Person struct {
    name string
    age  int
}

p := Person{name: "Alice", age: 25}
fmt.Println(p.name)
\`\`\`

---

## 📌 Pointers

\`\`\`go
x := 10
p := &x
fmt.Println(*p) // dereference
\`\`\`

---

## 📌 Interfaces

\`\`\`go
type Speaker interface {
    Speak() string
}

type Dog struct{}
func (d Dog) Speak() string {
    return "Woof"
}

var s Speaker = Dog{}
fmt.Println(s.Speak())
\`\`\`

---

## 📌 Goroutines & Channels

\`\`\`go
go func() {
    fmt.Println("Running in a goroutine")
}()

ch := make(chan string)
go func() {
    ch <- "Hello from channel"
}()
msg := <-ch
fmt.Println(msg)
\`\`\`

---

## 📌 Error Handling

\`\`\`go
import "errors"

func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}
\`\`\`

---

## 📌 File Handling

\`\`\`go
import (
    "os"
    "fmt"
)

file, err := os.Create("file.txt")
if err != nil {
    fmt.Println(err)
}
defer file.Close()

file.WriteString("Hello File!")
\`\`\`

---

## 📌 Packages

\`\`\`go
// Create a file mypkg/mymath.go
package mypkg

func Add(x, y int) int {
    return x + y
}

// In main.go
import "mypkg"
fmt.Println(mypkg.Add(3, 4))
\`\`\`

---

## 📌 Defer, Panic, Recover

\`\`\`go
func main() {
    defer fmt.Println("This runs last")

    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered:", r)
        }
    }()

    panic("Something went wrong")
}
\`\`\`

---

## 📌 JSON Marshalling

\`\`\`go
import (
    "encoding/json"
    "fmt"
)

type Person struct {
    Name string \`json:"name"\`
    Age  int    \`json:"age"\`
}

p := Person{Name: "Bob", Age: 30}
jsonData, _ := json.Marshal(p)
fmt.Println(string(jsonData))
\`\`\`

---
`,
},


 Express: {
  title: "Express.js Cheatsheet",
  content: `
## 📌 Setup & Installation

\`\`\`bash
npm init -y
npm install express
\`\`\`

\`\`\`js
const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(\`Server running on \${PORT}\`));
\`\`\`

---

## 📌 Basic Routing

\`\`\`js
app.get("/", (req, res) => res.send("Home"));
app.post("/submit", (req, res) => res.send("Posted"));
app.put("/update", (req, res) => res.send("Updated"));
app.delete("/delete", (req, res) => res.send("Deleted"));
\`\`\`

---

## 📌 Route Parameters & Query

\`\`\`js
app.get("/user/:id", (req, res) => {
  res.send("User ID: " + req.params.id);
});

app.get("/search", (req, res) => {
  res.send("Query: " + req.query.q);
});
\`\`\`

---

## 📌 Middleware

\`\`\`js
app.use(express.json());               // for JSON body
app.use(express.urlencoded({ extended: true })); // for form data

// Custom Middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});
\`\`\`

---

## 📌 Serving Static Files

\`\`\`js
app.use(express.static("public")); // e.g. public/index.html
\`\`\`

---

## 📌 Modular Routing

\`\`\`js
// routes/user.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("User list"));
router.get("/:id", (req, res) => res.send("User " + req.params.id));

module.exports = router;

// main file
const userRoutes = require("./routes/user");
app.use("/users", userRoutes);
\`\`\`

---

## 📌 Error Handling

\`\`\`js
// Catch-all error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
\`\`\`

---

## 📌 404 Handler

\`\`\`js
app.use((req, res) => {
  res.status(404).send("Not Found");
});
\`\`\`

---

## 📌 Request Object

\`\`\`js
req.body       // POST body
req.params     // URL params
req.query      // ?query=string
req.headers    // request headers
\`\`\`

---

## 📌 Response Object

\`\`\`js
res.send("Text");
res.json({ name: "Alice" });
res.status(404).send("Not Found");
res.redirect("/login");
res.download("file.pdf");
\`\`\`

---

## 📌 Environment Variables

\`\`\`js
require("dotenv").config();
const PORT = process.env.PORT || 3000;
\`\`\`

---

## 📌 CORS

\`\`\`bash
npm install cors
\`\`\`

\`\`\`js
const cors = require("cors");
app.use(cors());
\`\`\`

---

## 📌 File Uploads (with multer)

\`\`\`bash
npm install multer
\`\`\`

\`\`\`js
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded!");
});
\`\`\`

---

## 📌 JWT Auth (basic usage)

\`\`\`bash
npm install jsonwebtoken
\`\`\`

\`\`\`js
const jwt = require("jsonwebtoken");
const token = jwt.sign({ id: 123 }, "secret", { expiresIn: "1h" });

const decoded = jwt.verify(token, "secret");
\`\`\`

---

## 📌 Connecting to MongoDB

\`\`\`bash
npm install mongoose
\`\`\`

\`\`\`js
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));
\`\`\`

---

## 📌 Sample CRUD with MongoDB (Mongoose)

\`\`\`js
const User = mongoose.model("User", { name: String });

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
\`\`\`

---

## 📌 Useful Dev Tools

- \`nodemon\`: auto-restarts server on changes
- \`dotenv\`: environment variables
- \`cors\`: cross-origin resource sharing
- \`morgan\`: logging HTTP requests

---
`,
},


 Kotlin: {
  title: "Kotlin Cheatsheet",
  content: `
## 📌 Getting Started

\`\`\`kotlin
fun main() {
    println("Hello, Kotlin!")
}
\`\`\`

---

## 📌 Variables & Constants

\`\`\`kotlin
val name = "Alice"  // Immutable
var age = 25        // Mutable
\`\`\`

---

## 📌 Data Types

\`\`\`kotlin
val str: String = "Hello"
val num: Int = 10
val pi: Double = 3.14
val flag: Boolean = true
val char: Char = 'A'
\`\`\`

---

## 📌 String Templates

\`\`\`kotlin
val name = "Bob"
println("Hello, \$name")         // Hello, Bob
println("Length: \${name.length}")
\`\`\`

---

## 📌 Conditionals

\`\`\`kotlin
val age = 20
if (age >= 18) {
    println("Adult")
} else {
    println("Minor")
}

val result = if (age > 18) "Yes" else "No"
\`\`\`

---

## 📌 When Expression (Switch)

\`\`\`kotlin
val day = 3
val name = when (day) {
    1 -> "Monday"
    2 -> "Tuesday"
    else -> "Other"
}
\`\`\`

---

## 📌 Loops

\`\`\`kotlin
for (i in 1..5) println(i)
for (item in listOf("A", "B", "C")) println(item)

var i = 0
while (i < 5) {
    println(i)
    i++
}
\`\`\`

---

## 📌 Functions

\`\`\`kotlin
fun greet(name: String): String {
    return "Hello, \$name"
}

fun add(a: Int, b: Int) = a + b
\`\`\`

---

## 📌 Classes

\`\`\`kotlin
class Car(val brand: String) {
    fun honk() = println("Beep from \$brand")
}

val car = Car("Toyota")
car.honk()
\`\`\`

---

## 📌 Data Classes

\`\`\`kotlin
data class User(val name: String, val age: Int)

val user = User("Alice", 25)
println(user.name)
\`\`\`

---

## 📌 Null Safety

\`\`\`kotlin
var name: String? = null
println(name?.length)
println(name ?: "Unknown")  // Elvis operator
\`\`\`

---

## 📌 Collections

\`\`\`kotlin
val nums = listOf(1, 2, 3)
val items = mutableListOf("A", "B")
items.add("C")

val map = mapOf("a" to 1, "b" to 2)
\`\`\`

---

## 📌 Lambda Expressions

\`\`\`kotlin
val square = { x: Int -> x * x }
println(square(5))  // 25

val numbers = listOf(1, 2, 3)
numbers.forEach { println(it) }
\`\`\`

---

## 📌 Extension Functions

\`\`\`kotlin
fun String.reverse(): String {
    return this.reversed()
}

println("kotlin".reverse())
\`\`\`

---

## 📌 Sealed Classes

\`\`\`kotlin
sealed class Result
data class Success(val data: String): Result()
object Error: Result()

fun handle(result: Result) {
    when (result) {
        is Success -> println(result.data)
        is Error -> println("Failed")
    }
}
\`\`\`

---

## 📌 Companion Objects

\`\`\`kotlin
class MyClass {
    companion object {
        const val VERSION = 1
        fun sayHello() = "Hello!"
    }
}

println(MyClass.VERSION)
println(MyClass.sayHello())
\`\`\`

---

## 📌 Coroutines (Basics)

\`\`\`kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
    launch {
        delay(1000L)
        println("World!")
    }
    println("Hello,")
}
\`\`\`

---
`,
},


 CSS: {
  title: "CSS Cheatsheet",
  content: `
## 📌 Syntax & Selectors

\`\`\`css
selector {
  property: value;
}

/* Common Selectors */
*         /* Universal */
p         /* Type selector */
#id       /* ID selector */
.class    /* Class selector */
div > p   /* Direct child */
a:hover   /* Pseudo-class */
\`\`\`

---

## 📌 Colors

\`\`\`css
color: red;
color: #ff0000;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);
background-color: black;
\`\`\`

---

## 📌 Text Styling

\`\`\`css
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
font-style: italic;
text-align: center;
text-decoration: underline;
text-transform: uppercase;
letter-spacing: 2px;
line-height: 1.5;
\`\`\`

---

## 📌 Box Model

\`\`\`css
width: 100px;
height: 100px;
padding: 10px;
margin: 20px;
border: 1px solid black;
box-sizing: border-box;
\`\`\`

---

## 📌 Display & Visibility

\`\`\`css
display: block | inline | inline-block | none | flex | grid;
visibility: visible | hidden;
overflow: hidden | scroll | auto;
\`\`\`

---

## 📌 Positioning

\`\`\`css
position: static | relative | absolute | fixed | sticky;
top: 10px;
left: 20px;
z-index: 100;
\`\`\`

---

## 📌 Flexbox

\`\`\`css
display: flex;
flex-direction: row | column;
justify-content: center | space-between | space-around;
align-items: center | flex-start | stretch;
gap: 1rem;
\`\`\`

---

## 📌 Grid

\`\`\`css
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
grid-row: 1 / 3;
grid-column: 2 / 4;
\`\`\`

---

## 📌 Backgrounds

\`\`\`css
background-color: lightblue;
background-image: url("image.jpg");
background-size: cover;
background-repeat: no-repeat;
background-position: center;
\`\`\`

---

## 📌 Borders & Outline

\`\`\`css
border: 2px solid red;
border-radius: 10px;
outline: 2px dashed green;
\`\`\`

---

## 📌 Shadows

\`\`\`css
box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
text-shadow: 1px 1px 2px black;
\`\`\`

---

## 📌 Pseudo-Classes

\`\`\`css
a:hover {
  color: red;
}

input:focus {
  border-color: blue;
}
\`\`\`

---

## 📌 Pseudo-Elements

\`\`\`css
p::first-letter {
  font-size: 2rem;
}

p::before {
  content: "★ ";
}
\`\`\`

---

## 📌 Transitions

\`\`\`css
transition: all 0.3s ease-in-out;
transition-property: background-color;
transition-duration: 0.5s;
\`\`\`

---

## 📌 Animations

\`\`\`css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.box {
  animation: fadeIn 2s ease-in;
}
\`\`\`

---

## 📌 Media Queries

\`\`\`css
@media (max-width: 768px) {
  body {
    background: lightgray;
  }
}
\`\`\`

---

## 📌 Units

\`\`\`css
px  - absolute pixels
em  - relative to parent font-size
rem - relative to root font-size
%   - percentage of parent
vh/vw - viewport height/width
\`\`\`

---

## 📌 Custom Properties (CSS Variables)

\`\`\`css
:root {
  --main-color: #3498db;
}

h1 {
  color: var(--main-color);
}
\`\`\`

---

## 📌 Cursor & User Interaction

\`\`\`css
cursor: pointer;
pointer-events: none;
user-select: none;
\`\`\`

---

## 📌 Z-Index & Layering

\`\`\`css
position: absolute;
z-index: 10;
\`\`\`

---
`,
},


  HTML: {
  title: "HTML Cheatsheet",
  content: `
## 📌 Basic Structure

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
\`\`\`

---

## 📌 Headings & Paragraphs

\`\`\`html
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<p>This is a paragraph.</p>
\`\`\`

---

## 📌 Text Formatting

\`\`\`html
<b>Bold</b>
<strong>Strong</strong>
<i>Italic</i>
<em>Emphasis</em>
<mark>Highlighted</mark>
<small>Small</small>
<del>Deleted</del>
<ins>Inserted</ins>
<sub>Subscript</sub>
<sup>Superscript</sup>
\`\`\`

---

## 📌 Links

\`\`\`html
<a href="https://example.com">Visit Site</a>
<a href="mailto:test@example.com">Send Email</a>
<a href="#section">Jump to Section</a>
\`\`\`

---

## 📌 Images

\`\`\`html
<img src="image.jpg" alt="Description" width="300" height="200" />
\`\`\`

---

## 📌 Lists

\`\`\`html
<!-- Unordered -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Ordered -->
<ol>
  <li>First</li>
  <li>Second</li>
</ol>

<!-- Definition -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
</dl>
\`\`\`

---

## 📌 Tables

\`\`\`html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
  </tr>
</table>
\`\`\`

---

## 📌 Forms

\`\`\`html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  
  <input type="submit" value="Submit" />
</form>
\`\`\`

---

## 📌 Input Types

\`\`\`html
<input type="text" />
<input type="password" />
<input type="email" />
<input type="number" />
<input type="checkbox" />
<input type="radio" />
<input type="file" />
<input type="submit" />
<input type="reset" />
\`\`\`

---

## 📌 Semantic Elements

\`\`\`html
<header>Header section</header>
<nav>Navigation links</nav>
<main>Main content</main>
<article>Article block</article>
<section>Page section</section>
<aside>Sidebar content</aside>
<footer>Footer info</footer>
\`\`\`

---

## 📌 Media Tags

\`\`\`html
<!-- Video -->
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<!-- Audio -->
<audio controls>
  <source src="sound.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
\`\`\`

---

## 📌 Meta Tags

\`\`\`html
<meta charset="UTF-8" />
<meta name="description" content="Cheatsheet" />
<meta name="keywords" content="HTML, CSS, JavaScript" />
<meta name="author" content="John Doe" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
\`\`\`

---

## 📌 Iframes

\`\`\`html
<iframe src="https://example.com" width="600" height="400"></iframe>
\`\`\`

---

## 📌 Special Characters

\`\`\`html
&lt;  <!-- < -->
&gt;  <!-- > -->
&amp; <!-- & -->
&quot; <!-- " -->
&apos; <!-- ' -->
&copy; <!-- © -->
&reg; <!-- ® -->
\`\`\`

---

## 📌 HTML5 APIs (Basic Use)

\`\`\`html
<!-- Geolocation -->
<script>
navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
});
</script>

<!-- Local Storage -->
<script>
localStorage.setItem("name", "Alice");
alert(localStorage.getItem("name"));
</script>
\`\`\`
`,
},


  Laravel: {
  title: "Laravel Cheatsheet",
  content: `
## 📌 Laravel Installation

\`\`\`bash
composer create-project laravel/laravel app-name
php artisan serve
\`\`\`

---

## 📌 Project Structure

- \`routes/web.php\`: Web routes
- \`routes/api.php\`: API routes
- \`app/Models\`: Eloquent models
- \`app/Http/Controllers\`: Controllers
- \`resources/views\`: Blade templates
- \`.env\`: Environment config

---

## 📌 Routing

\`\`\`php
// web.php
Route::get('/', function () {
    return view('welcome');
});

Route::get('/user/{id}', [UserController::class, 'show']);
Route::post('/submit', [FormController::class, 'store']);
Route::resource('posts', PostController::class);
\`\`\`

---

## 📌 Controllers

\`\`\`bash
php artisan make:controller UserController
\`\`\`

\`\`\`php
// app/Http/Controllers/UserController.php
class UserController extends Controller {
    public function show($id) {
        return User::find($id);
    }
}
\`\`\`

---

## 📌 Views (Blade)

\`\`\`blade
<!-- resources/views/welcome.blade.php -->
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, {{ \$name }}</h1>
  </body>
</html>
\`\`\`

---

## 📌 Blade Syntax

\`\`\`blade
{{-- Variables --}}
{{ \$user->name }}

{{-- Conditionals --}}
@if(\$user)
  Hello, {{ \$user->name }}
@else
  Guest
@endif

{{-- Loops --}}
@foreach(\$posts as \$post)
  <p>{{ \$post->title }}</p>
@endforeach

{{-- Include --}}
@include('partials.nav')
\`\`\`

---

## 📌 Redirects & Responses

\`\`\`php
return redirect('/home');
return back();
return response()->json(['status' => 'ok']);
\`\`\`

---

## 📌 Forms & CSRF

\`\`\`blade
<form method="POST" action="/submit">
  @csrf
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>
\`\`\`

---

## 📌 Validation

\`\`\`php
$request->validate([
  'email' => 'required|email',
  'password' => 'required|min:6'
]);
\`\`\`

---

## 📌 Artisan Commands

\`\`\`bash
php artisan list
php artisan make:model Post -m
php artisan make:controller PostController --resource
php artisan migrate
php artisan db:seed
php artisan tinker
\`\`\`

---

## 📌 Models & Eloquent

\`\`\`php
// Create
Post::create(['title' => 'My Post']);

// Read
Post::all();
Post::find(1);

// Update
\$post = Post::find(1);
\$post->title = 'Updated';
\$post->save();

// Delete
Post::destroy(1);
\`\`\`

---

## 📌 Eloquent Relationships

\`\`\`php
// One to Many
class User {
  public function posts() {
    return \$this->hasMany(Post::class);
  }
}

// Belongs to
class Post {
  public function user() {
    return \$this->belongsTo(User::class);
  }
}
\`\`\`

---

## 📌 Migrations

\`\`\`bash
php artisan make:migration create_posts_table
php artisan migrate
\`\`\`

\`\`\`php
Schema::create('posts', function (Blueprint \$table) {
  \$table->id();
  \$table->string('title');
  \$table->timestamps();
});
\`\`\`

---

## 📌 Seeders & Factories

\`\`\`bash
php artisan make:seeder UserSeeder
php artisan db:seed

User::factory()->count(10)->create();
\`\`\`

---

## 📌 Middleware

\`\`\`bash
php artisan make:middleware CheckRole
\`\`\`

\`\`\`php
// Handle
if (auth()->user()->role !== 'admin') {
  return redirect('/');
}
\`\`\`

---

## 📌 Authentication (Breeze)

\`\`\`bash
composer require laravel/breeze --dev
php artisan breeze:install
npm install && npm run dev
php artisan migrate
\`\`\`

---

## 📌 Storage & Files

\`\`\`php
Storage::put('file.txt', 'Contents');
$content = Storage::get('file.txt');
Storage::delete('file.txt');
\`\`\`

---

## 📌 Queues

\`\`\`bash
php artisan queue:table
php artisan queue:work
\`\`\`

---

## 📌 Events & Listeners

\`\`\`bash
php artisan make:event UserRegistered
php artisan make:listener SendWelcomeEmail
\`\`\`

---

## 📌 API Resources

\`\`\`php
php artisan make:resource UserResource

return new UserResource(User::find(1));
\`\`\`

---

## 📌 Testing

\`\`\`bash
php artisan test
\`\`\`

\`\`\`php
public function test_example() {
    \$response = \$this->get('/');
    \$response->assertStatus(200);
}
\`\`\`

---
`,
},


 PHP: {
  title: "PHP Cheatsheet",
  content: `
## 📌 Getting Started

\`\`\`php
<?php
echo "Hello, World!";
?>
\`\`\`

---

## 📌 Variables & Data Types

\`\`\`php
\$name = "Alice";         // string
\$age = 25;               // integer
\$price = 19.99;          // float
\$isAdmin = true;         // boolean
\$colors = ["red", "blue"]; // array
\`\`\`

---

## 📌 Constants

\`\`\`php
define("SITE_NAME", "MySite");
const VERSION = "1.0";
\`\`\`

---

## 📌 Strings

\`\`\`php
\$greeting = "Hello " . \$name;
echo strlen(\$greeting);
echo strtoupper(\$greeting);
\`\`\`

---

## 📌 Arrays

\`\`\`php
\$arr = [1, 2, 3];
\$assoc = ["name" => "John", "age" => 30];

echo \$arr[0];
echo \$assoc["name"];
\`\`\`

---

## 📌 Control Structures

\`\`\`php
if (\$age > 18) {
  echo "Adult";
} elseif (\$age == 18) {
  echo "Just 18!";
} else {
  echo "Minor";
}

\$result = \$age > 18 ? "Adult" : "Minor";
\`\`\`

---

## 📌 Loops

\`\`\`php
for (\$i = 0; \$i < 5; \$i++) {
  echo \$i;
}

\$i = 0;
while (\$i < 5) {
  echo \$i++;
}

foreach (\$assoc as \$key => \$value) {
  echo "\$key = \$value";
}
\`\`\`

---

## 📌 Functions

\`\`\`php
function greet(\$name) {
  return "Hello " . \$name;
}

echo greet("Alice");
\`\`\`

---

## 📌 Superglobals

\`\`\`php
\$_GET, \$_POST, \$_REQUEST, \$_SERVER, \$_SESSION, \$_COOKIE
\`\`\`

---

## 📌 Forms & Input

\`\`\`html
<form method="POST">
  <input type="text" name="username" />
  <input type="submit" />
</form>
\`\`\`

\`\`\`php
\$user = \$_POST['username'];
\`\`\`

---

## 📌 Sessions

\`\`\`php
session_start();
\$_SESSION["user"] = "Alice";
echo \$_SESSION["user"];
\`\`\`

---

## 📌 Cookies

\`\`\`php
setcookie("theme", "dark", time() + 3600);
echo \$_COOKIE["theme"];
\`\`\`

---

## 📌 File Handling

\`\`\`php
file_put_contents("file.txt", "Hello World");
\$content = file_get_contents("file.txt");

\$handle = fopen("file.txt", "r");
\$line = fgets(\$handle);
fclose(\$handle);
\`\`\`

---

## 📌 Error Handling

\`\`\`php
try {
  throw new Exception("Oops!");
} catch (Exception \$e) {
  echo \$e->getMessage();
}
\`\`\`

---

## 📌 Object-Oriented PHP

\`\`\`php
class Car {
  public \$brand;
  function __construct(\$brand) {
    \$this->brand = \$brand;
  }
  function honk() {
    return "Beep from " . \$this->brand;
  }
}

\$c = new Car("Toyota");
echo \$c->honk();
\`\`\`

---

## 📌 Namespaces

\`\`\`php
namespace App\Controllers;

class HomeController {}
\`\`\`

---

## 📌 Include / Require

\`\`\`php
include "header.php";
require "config.php";
\`\`\`

---

## 📌 MySQLi (Database)

\`\`\`php
\$conn = new mysqli("localhost", "root", "", "test");

\$sql = "SELECT * FROM users";
\$result = \$conn->query(\$sql);

while (\$row = \$result->fetch_assoc()) {
  echo \$row["name"];
}

\$conn->close();
\`\`\`

---

## 📌 PDO (Database)

\`\`\`php
\$pdo = new PDO("mysql:host=localhost;dbname=test", "root", "");

\$stmt = \$pdo->prepare("SELECT * FROM users");
\$stmt->execute();
\$users = \$stmt->fetchAll();

foreach (\$users as \$user) {
  echo \$user["name"];
}
\`\`\`

---

## 📌 JSON Handling

\`\`\`php
\$data = ["name" => "John", "age" => 30];
\$json = json_encode(\$data);
\$decoded = json_decode(\$json, true);
\`\`\`

---

## 📌 Composer

\`\`\`bash
composer init
composer require monolog/monolog
\`\`\`

---

## 📌 Useful Built-in Functions

\`\`\`php
isset(), empty(), explode(), implode(), array_merge(), in_array(), is_array()
date("Y-m-d"), time(), strtotime()
\`\`\`

---

## 📌 Security Tips

- Use \`htmlspecialchars()\` to avoid XSS.
- Use \`password_hash()\` and \`password_verify()\` for passwords.
- Validate & sanitize user input (\`filter_var()\`).
\`\`\`php
\$safe = htmlspecialchars(\$_POST['input']);
\`\`\`

---
`,
},


  Rust: {
  title: "Rust Cheatsheet",
  content: `
## 📌 Getting Started

\`\`\`rust
fn main() {
    println!("Hello, Rust!");
}
\`\`\`

---

## 📌 Variables & Data Types

\`\`\`rust
let x = 5;             // Immutable
let mut y = 10;        // Mutable
let z: f64 = 3.14;     // Explicit type
let is_rusty = true;
let name = "Rust";
\`\`\`

---

## 📌 Constants & Shadowing

\`\`\`rust
const PI: f64 = 3.1415;
let x = 5;
let x = x + 1; // shadowing (new binding)
\`\`\`

---

## 📌 Data Types

\`\`\`rust
// Scalar
i32, u32, f64, bool, char

// Compound
let tup = (1, 2.0, "three");
let (a, b, c) = tup;

let arr = [1, 2, 3, 4];
\`\`\`

---

## 📌 Control Flow

\`\`\`rust
if x > 10 {
    println!("Big!");
} else if x == 10 {
    println!("Equal!");
} else {
    println!("Small!");
}

// Ternary-like
let result = if x > 5 { "Yes" } else { "No" };
\`\`\`

---

## 📌 Loops

\`\`\`rust
// Infinite loop
loop {
    break;
}

// While loop
let mut i = 0;
while i < 5 {
    println!("{}", i);
    i += 1;
}

// For loop
for i in 0..5 {
    println!("{}", i);
}
\`\`\`

---

## 📌 Functions

\`\`\`rust
fn add(x: i32, y: i32) -> i32 {
    x + y
}

fn greet(name: &str) {
    println!("Hello, {}", name);
}
\`\`\`

---

## 📌 Ownership & Borrowing

\`\`\`rust
fn main() {
    let s1 = String::from("Hello");
    let s2 = s1; // s1 is moved
    // println!("{}", s1); // error

    let s3 = String::from("Hi");
    let s4 = &s3; // borrow
    println!("{}", s4);
}
\`\`\`

---

## 📌 Mutable References

\`\`\`rust
fn change(s: &mut String) {
    s.push_str(" World");
}

let mut s = String::from("Hello");
change(&mut s);
\`\`\`

---

## 📌 Strings

\`\`\`rust
let s = String::from("Rust");
let s2 = &s[0..2]; // slicing
let len = s.len();
let mut s3 = String::new();
s3.push('H');
s3.push_str("ello");
\`\`\`

---

## 📌 Vectors

\`\`\`rust
let mut v = vec![1, 2, 3];
v.push(4);
for i in &v {
    println!("{}", i);
}
\`\`\`

---

## 📌 Structs

\`\`\`rust
struct Person {
    name: String,
    age: u8,
}

let p = Person {
    name: String::from("Alice"),
    age: 30,
};
\`\`\`

---

## 📌 Enums & Match

\`\`\`rust
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

let dir = Direction::Up;

match dir {
    Direction::Up => println!("Up!"),
    Direction::Down => println!("Down!"),
    _ => println!("Other"),
}
\`\`\`

---

## 📌 Option & Result

\`\`\`rust
fn divide(a: f64, b: f64) -> Option<f64> {
    if b == 0.0 { None } else { Some(a / b) }
}

fn might_fail(x: i32) -> Result<i32, String> {
    if x < 0 { Err("Negative!".to_string()) } else { Ok(x) }
}
\`\`\`

---

## 📌 Traits & Impl

\`\`\`rust
trait Greet {
    fn hello(&self);
}

struct Human;
impl Greet for Human {
    fn hello(&self) {
        println!("Hi!");
    }
}

let h = Human {};
h.hello();
\`\`\`

---

## 📌 Pattern Matching

\`\`\`rust
let x = Some(5);

match x {
    Some(val) => println!("Value: {}", val),
    None => println!("No value"),
}
\`\`\`

---

## 📌 Modules

\`\`\`rust
// main.rs
mod greetings;
fn main() {
    greetings::say_hi();
}

// greetings.rs
pub fn say_hi() {
    println!("Hi from module!");
}
\`\`\`

---

## 📌 File I/O

\`\`\`rust
use std::fs::File;
use std::io::{self, Read, Write};

let mut file = File::create("hello.txt")?;
file.write_all(b"Hello, file!")?;

let mut file = File::open("hello.txt")?;
let mut content = String::new();
file.read_to_string(&mut content)?;
\`\`\`

---

## 📌 Error Handling

\`\`\`rust
use std::fs::File;

fn main() {
    let file = File::open("notfound.txt");
    
    match file {
        Ok(f) => println!("Opened file!"),
        Err(e) => println!("Error: {}", e),
    }
}
\`\`\`

---

## 📌 Cargo Basics

\`\`\`bash
cargo new project_name
cargo build
cargo run
cargo check
cargo test
\`\`\`

---

## 📌 Macros

\`\`\`rust
println!("Hello, {}", "world");

macro_rules! say_hello {
    () => {
        println!("Hello macro!");
    };
}

say_hello!();
\`\`\`
`,
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

 "Git": {
  title: "Git Cheatsheet",
  content: `
## 📌 Git Setup

\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global core.editor "code --wait"
\`\`\`

---

## 📌 Initialize & Clone

\`\`\`bash
git init                      # Initialize repo
git clone <url>              # Clone repo
git clone <url> <folder>     # Clone into folder
\`\`\`

---

## 📌 Staging & Commit

\`\`\`bash
git add .                    # Stage all changes
git add <file>              # Stage specific file
git commit -m "Message"     # Commit with message
git commit -am "Msg"        # Add & commit tracked files
\`\`\`

---

## 📌 Status & Diff

\`\`\`bash
git status                  # Show changes
git diff                    # Show unstaged changes
git diff --staged           # Show staged diffs
\`\`\`

---

## 📌 Branching

\`\`\`bash
git branch                  # List branches
git branch <name>           # Create branch
git checkout <name>         # Switch branch
git checkout -b <name>      # Create & switch
git branch -d <name>        # Delete branch
\`\`\`

---

## 📌 Merging & Rebase

\`\`\`bash
git merge <branch>          # Merge into current branch
git rebase <branch>         # Reapply commits onto branch
\`\`\`

---

## 📌 Log & History

\`\`\`bash
git log                     # Commit history
git log --oneline           # One line per commit
git log --graph --all       # Visual history
\`\`\`

---

## 📌 Remote Repos

\`\`\`bash
git remote -v               # Show remotes
git remote add origin <url> # Add remote
git push -u origin main     # Push first time
git push                    # Push changes
git pull                    # Pull changes
\`\`\`

---

## 📌 Stash (Save Work)

\`\`\`bash
git stash                   # Save changes
git stash list              # List stashes
git stash apply             # Reapply last stash
git stash drop              # Remove stash
\`\`\`

---

## 📌 Undoing Changes

\`\`\`bash
git restore <file>          # Discard changes (v2.23+)
git checkout -- <file>      # Older method
git reset HEAD <file>       # Unstage file
git revert <commit>         # Create inverse commit
git reset --hard <commit>   # Dangerous: full reset
\`\`\`

---

## 📌 Tags

\`\`\`bash
git tag                     # List tags
git tag <v1.0.0>            # Create tag
git tag -a <v1.0.0> -m "..."# Annotated tag
git push origin <tag>       # Push tag
\`\`\`

---

## 📌 Ignoring Files

\`\`\`
Create a .gitignore file:

node_modules/
.env
*.log
dist/
\`\`\`

---

## 📌 Helpful Aliases

\`\`\`bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm 'commit -m'
git config --global alias.st status
\`\`\`

---

## 📌 GitHub Basics

\`\`\`
gh auth login                 # Login to GitHub
gh repo create                # Create repo from CLI
gh issue list                 # List issues
gh pr create                  # Create pull request
\`\`\`

---

## 📌 Git Shortcuts Summary

\`\`\`
git init        → Start a repo  
git clone       → Download a repo  
git status      → View changes  
git add .       → Stage changes  
git commit -m   → Save snapshot  
git push        → Upload changes  
git pull        → Sync changes  
\`\`\`

---
`,
},


 "Docker": {
  title: "Docker Cheatsheet",
  content: `
## 📌 Docker Basics

\`\`\`bash
docker --version           # Show version
docker info                # Docker system info
docker help                # List Docker commands
\`\`\`

---

## 📌 Images

\`\`\`bash
docker build -t name .     # Build image from Dockerfile
docker images              # List images
docker rmi <image>         # Remove image
docker pull <image>        # Download image from Docker Hub
\`\`\`

---

## 📌 Containers

\`\`\`bash
docker run -it ubuntu      # Run Ubuntu interactively
docker run -d <image>      # Run in background
docker ps                  # List running containers
docker ps -a               # List all containers
docker start <id>          # Start stopped container
docker stop <id>           # Stop running container
docker rm <id>             # Remove container
docker exec -it <id> bash  # Exec into running container
\`\`\`

---

## 📌 Build & Tag

\`\`\`bash
docker build -t myapp:1.0 .      # Build image with tag
docker tag myapp:1.0 user/myapp  # Tag for Docker Hub
\`\`\`

---

## 📌 Dockerfile Sample

\`\`\`Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "index.js"]
EXPOSE 3000
\`\`\`

---

## 📌 Volumes

\`\`\`bash
docker volume create myvol           # Create volume
docker volume ls                     # List volumes
docker run -v myvol:/app/data alpine # Mount volume
\`\`\`

---

## 📌 Port Mapping

\`\`\`bash
docker run -p 8080:80 nginx          # Map container port 80 to host 8080
\`\`\`

---

## 📌 Environment Variables

\`\`\`bash
docker run -e NODE_ENV=production myapp
\`\`\`

---

## 📌 Docker Compose

\`\`\`bash
docker-compose up -d          # Start in background
docker-compose down           # Stop and remove
docker-compose build          # Rebuild services
docker-compose logs           # View logs
docker-compose ps             # List services
\`\`\`

---

## 📌 docker-compose.yml Example

\`\`\`yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    environment:
      - NODE_ENV=development
  db:
    image: mongo
    ports:
      - "27017:27017"
\`\`\`

---

## 📌 Networks

\`\`\`bash
docker network create mynet
docker run --network=mynet alpine
\`\`\`

---

## 📌 Clean Up

\`\`\`bash
docker rm \$(docker ps -aq)      # Remove all containers
docker rmi \$(docker images -q)  # Remove all images
docker volume prune              # Remove unused volumes
docker system prune              # Remove all unused data
\`\`\`

---

## 📌 Useful Flags

\`\`\`
--name mycontainer        → Name the container
--rm                      → Auto remove after stop
--env-file .env           → Load environment variables
-v $(pwd):/app            → Bind mount
\`\`\`

---

## 📌 Docker Hub

\`\`\`bash
docker login                   # Authenticate
docker push user/myapp         # Push image
docker pull user/myapp         # Pull image
\`\`\`

---
`,
},


  "VS Code": {
  title: "VS Code Cheatsheet",
  content: `
## 📌 Basic Shortcuts

\`\`\`
Ctrl + P            → Quick file open  
Ctrl + Shift + P    → Command palette  
Ctrl + \\\`           → Toggle terminal  
Ctrl + B            → Toggle sidebar  
Ctrl + J            → Toggle panel (bottom)  
Ctrl + Shift + N    → New window  
Ctrl + ,            → Open settings  
\`\`\`

---

## 📌 File Navigation

\`\`\`
Ctrl + Tab           → Cycle through open files  
Ctrl + Shift + Tab   → Cycle backward  
Ctrl + 1 / 2 / 3     → Focus editor groups  
Ctrl + K Ctrl + W    → Close all files  
\`\`\`

---

## 📌 Editing

\`\`\`
Ctrl + /             → Toggle line comment  
Shift + Alt + A      → Toggle block comment  
Alt + ↑ / ↓          → Move line up/down  
Shift + Alt + ↓      → Copy line down  
Ctrl + D             → Select next match  
Ctrl + L             → Select line  
Ctrl + Shift + K     → Delete line  
Ctrl + Space         → Trigger IntelliSense  
\`\`\`

---

## 📌 Multiple Cursors

\`\`\`
Alt + Click          → Add new cursor  
Ctrl + Alt + ↓       → Add cursor below  
Ctrl + Alt + ↑       → Add cursor above  
Ctrl + F2            → Select all occurrences  
\`\`\`

---

## 📌 Search & Replace

\`\`\`
Ctrl + F             → Find  
Ctrl + H             → Replace  
F3 / Shift + F3      → Find next / previous  
Alt + Enter          → Select all results  
\`\`\`

---

## 📌 Integrated Terminal

\`\`\`
Ctrl + \\\`           → Toggle terminal  
Ctrl + Shift + \\\`   → New terminal  
Ctrl + C             → Stop running command  
Ctrl + ↑ / ↓         → Scroll terminal  
\`\`\`

---

## 📌 File Management

\`\`\`
Ctrl + N             → New file  
Ctrl + S             → Save  
Ctrl + Shift + S     → Save as  
Ctrl + O             → Open file  
Ctrl + K S           → Save all  
Ctrl + F4 / W        → Close file  
\`\`\`

---

## 📌 Code Formatting

\`\`\`
Shift + Alt + F      → Format document  
Ctrl + K Ctrl + F    → Format selection  
\`\`\`

---

## 📌 Source Control (Git)

\`\`\`
Ctrl + Shift + G     → Open Source Control tab  
Ctrl + Enter         → Commit changes  
F7 / Shift + F7      → Next / Previous error  
\`\`\`

---

## 📌 Sidebar Navigation

\`\`\`
Ctrl + Shift + E     → Explorer  
Ctrl + Shift + F     → Search  
Ctrl + Shift + G     → Source Control  
Ctrl + Shift + D     → Run & Debug  
Ctrl + Shift + X     → Extensions  
\`\`\`

---

## 📌 Zen & Split View

\`\`\`
Ctrl + K Z           → Toggle Zen Mode  
Ctrl + \\\\            → Split editor  
Ctrl + 1 / 2         → Focus editor group  
Ctrl + K + ← / →     → Move file to group  
\`\`\`

---

## 📌 JSON Settings Shortcut

\`\`\`
Ctrl + Shift + P → Preferences: Open Settings (JSON)  
\`\`\`

---

## 📌 Snippets Example

\`\`\`json
"Print to console": {
  "prefix": "log",
  "body": ["console.log('$1');"],
  "description": "Log output to console"
}
\`\`\`

---

## 📌 Extensions to Install

\`\`\`
- Prettier  
- ESLint  
- GitLens  
- Live Server  
- Bracket Pair Colorizer  
- IntelliCode  
\`\`\`

---
`,
}
,

 "Windows": {
  title: "Windows Cheatsheet",
  content: `
## 📌 Basic Shortcuts

\`\`\`
Ctrl + C        → Copy
Ctrl + X        → Cut
Ctrl + V        → Paste
Ctrl + Z        → Undo
Ctrl + Y        → Redo
Ctrl + A        → Select all
Alt + Tab       → Switch between apps
Alt + F4        → Close current window
Ctrl + Shift + Esc → Open Task Manager
\`\`\`

---

## 📌 Windows Key Shortcuts

\`\`\`
Win             → Open Start Menu
Win + E         → Open File Explorer
Win + D         → Show desktop
Win + I         → Open Settings
Win + L         → Lock computer
Win + R         → Run dialog
Win + A         → Action Center
Win + S         → Search
Win + V         → Clipboard history
Win + Shift + S → Snip & sketch (screenshot tool)
Win + P         → Display projection options
\`\`\`

---

## 📌 Virtual Desktops

\`\`\`
Win + Ctrl + D     → New virtual desktop
Win + Ctrl + ←/→   → Switch desktops
Win + Ctrl + F4    → Close current desktop
\`\`\`

---

## 📌 Window Management

\`\`\`
Win + ↑            → Maximize
Win + ↓            → Minimize/Restore
Win + ← / →        → Snap left/right
Win + Shift + ↑    → Stretch window vertically
Win + Home         → Minimize all except active
\`\`\`

---

## 📌 File Explorer Shortcuts

\`\`\`
Alt + Up Arrow     → Go up one folder
Alt + Left/Right   → Navigate back/forward
Ctrl + N           → New window
Ctrl + W           → Close window
Ctrl + Shift + N   → New folder
F2                 → Rename
F5                 → Refresh
\`\`\`

---

## 📌 Command Line (CMD/PowerShell)

\`\`\`
Ctrl + C           → Cancel command
Tab                → Auto-complete
Arrow keys         → Command history
Ctrl + A           → Select all
Alt + Enter        → Fullscreen terminal
\`\`\`

---

## 📌 Accessibility

\`\`\`
Win + U            → Ease of Access settings
Win + + (plus)     → Zoom in (Magnifier)
Win + Esc          → Exit Magnifier
\`\`\`

---

## 📌 Screenshot & Snipping Tools

\`\`\`
PrtScn             → Fullscreen screenshot
Alt + PrtScn       → Active window screenshot
Win + Shift + S    → Open snip tool (copy to clipboard)
\`\`\`

---

## 📌 Emoji & Clipboard

\`\`\`
Win + . or ;       → Emoji picker 😊
Win + V            → Clipboard history
\`\`\`

---

## 📌 Miscellaneous

\`\`\`
Win + T            → Focus taskbar apps
Win + Number (1–9) → Open pinned app
Ctrl + Shift + Esc → Task Manager
Ctrl + Alt + Del   → Lock/Logout options
\`\`\`

---
`,
},


  "Mac": {
  title: "macOS Cheatsheet",
  content: `
## 📌 Basic Shortcuts

\`\`\`
Cmd + C             → Copy  
Cmd + X             → Cut  
Cmd + V             → Paste  
Cmd + Z             → Undo  
Cmd + Shift + Z     → Redo  
Cmd + A             → Select All  
Cmd + S             → Save  
Cmd + Q             → Quit App  
Cmd + W             → Close Window/Tab  
Cmd + Option + Esc  → Force Quit App  
\`\`\`

---

## 📌 Window & App Management

\`\`\`
Cmd + Tab             → Switch apps  
Cmd + \\\` (backtick)   → Cycle through app windows  
Cmd + H               → Hide current app  
Cmd + M               → Minimize window  
Cmd + Option + M      → Minimize all  
Control + ↑           → Mission Control  
Control + ↓           → App Exposé  
Control + ← / →       → Switch desktops  
\`\`\`

---

## 📌 Finder Shortcuts

\`\`\`
Cmd + N               → New Finder window  
Cmd + T               → New Finder tab  
Cmd + ↑               → Go to parent folder  
Cmd + ↓               → Open selected item  
Cmd + Delete          → Move to trash  
Cmd + Shift + Delete  → Empty trash  
Cmd + Shift + G       → Go to folder  
Cmd + I               → Get info  
\`\`\`

---

## 📌 Screenshots & Screen Recording

\`\`\`
Cmd + Shift + 3       → Fullscreen screenshot  
Cmd + Shift + 4       → Area selection screenshot  
Cmd + Shift + 4, then Space → Window screenshot  
Cmd + Shift + 5       → Screenshot/recording toolbar  
Cmd + Shift + 6       → Screenshot Touch Bar (if present)  
\`\`\`

---

## 📌 Spotlight & Siri

\`\`\`
Cmd + Space           → Spotlight Search  
Cmd + Option + Space  → Spotlight in Finder  
Fn + Space            → Siri  
F4 (or Fn + F4)       → Launchpad  
\`\`\`

---

## 📌 Navigation & Editing

\`\`\`
Option + ← / →         → Move by word  
Cmd + ← / →            → Line start/end  
Option + Delete        → Delete previous word  
Cmd + Delete           → Delete to start of line  
Fn + ↑ / ↓             → Page Up / Down  
Cmd + Up / Down        → Top / Bottom of page  
\`\`\`

---

## 📌 System Controls

\`\`\`
Cmd + ,                → App Preferences  
Cmd + Option + D       → Toggle Dock  
Cmd + Control + Q      → Lock screen  
Cmd + Shift + Q        → Log out  
Control + Cmd + Power  → Force restart  
\`\`\`

---

## 📌 Text Formatting (in editors)

\`\`\`
Cmd + B                → Bold  
Cmd + I                → Italic  
Cmd + U                → Underline  
\`\`\`

---

## 📌 Accessibility

\`\`\`
Cmd + Option + 8       → Toggle Zoom  
Cmd + Option + =       → Zoom in  
Cmd + Option + -       → Zoom out  
Cmd + Option + F5      → Accessibility Options  
\`\`\`

---

## 📌 Finder Navigation Tips

\`\`\`
Spacebar               → Quick Look preview  
Cmd + D                → Duplicate file  
Cmd + O                → Open file  
Cmd + K                → Connect to server  
\`\`\`

---
`,
}

};
