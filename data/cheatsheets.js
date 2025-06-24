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
  
      `
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
      `
    }
   
  };
  