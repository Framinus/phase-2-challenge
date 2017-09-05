Q: When you run a command in the terminal, where does BASH look for that command?
A: It looks in your PATH, and keeps moving along the PATH until it finds it or displays an error.

Q: On a UNIX computer, how do you stop a running process?
A: control-c

Q: What packages do you have installed via homebrew?
A: hub,	node,	postgresql,	trash, icu4c,	openssl, readline,	tree

Q: On a UNIX computer, how do you find the process id of a running process?
A: ps aux | grep <your process name search>

Q: In a terminal, what does control-c do?
A: It stops a running process.

Q: What would be the result of typing the following commands?
$ cd /Users/steve
$ mkdir foo
$ touch bar
$ cd foo
$ touch bar
$ pwd
A: Move into the directory Users/steve, make a directory called foo, touch a file called 'bar' that resides inside of Users/steve, then change directory into foo, make a file called bar inside of foo, and print working directory - which is Users/steve/foo.

Q: How do you set an environment variable in your shell?
A: create it: var myVar = "awesome". Then type export myVar to use it in your session. If you want to use it permanently, export it in your .bashrc file.

Q: What keyboard shortcut do you use to split the screen in your editor?
A: 

How do you create an alias in your shell?

When a terminal command completes, how can you tell if it was successful or not?

What does your ~/.gitconfig have in it? (paste the whole file here)

What is the difference between a relative and absolute path?

Lets say you have the following file structure

~
└── Projects
    ├── pinterest-for-dogs
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to copy the README.md file to the pinterest-for-dogs folder?

What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?

What files or folders do you want all git repositories to ignore?

What is the main difference between Array.map and Array.forEach in JavaScript?
