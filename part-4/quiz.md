Q: When you run a command in the terminal, where does BASH look for that command?
A: It looks in your PATH, and keeps moving along the PATH until it finds it or displays an error.

Q: On a UNIX computer, how do you stop a running process?
A: control-c

Q: What packages do you have installed via homebrew?
A: hub,	node,	postgresql,	trash, icu4c,	openssl, readline, tree

Q: On a UNIX computer, how do you find the process id of a running process?
A: ps aux | grep "the process name but not in quotes."

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
A: command-K, then release, then arrow key in the direction you want to split.

Q: How do you create an alias in your shell?
A: For just one session, you type alias name="command" (substituting the terms you want), and then export it to your bash session.
For permanent use, you define the alias the same way in your .bashrc.

Q: When a terminal command completes, how can you tell if it was successful or not?
A: If you get your prompt back and there is no error, it was successful.

Q: What does your ~/.gitconfig have in it? (paste the whole file here)
A:
[user]
        name = James
        email = fake-so-its-not-on-github@gmail.com

        [alias]
          co = checkout
          ci = commit
          st = status --short --branch
          l  = log --oneline --decorate --graph --relative-date --show-signature
          ls-untracked-files = !git-ls-files -o --exclude-standard
          ls-ignored-files = !git-ls-files --others -i --exclude-standard
          ls-modified-files = !git-ls-files -m
        [color]
          status = auto
          diff = auto
          branch = auto
          interactive = auto
          ui = auto
          pager = true
        [color "status"]
          added = green
          changed = yellow
          untracked = red
        [user]

Q: What is the difference between a relative and absolute path?
A: An absolute path includes every directory back to the home directory. A relative path only includes the path from your current working directory to a file or directory. for example:
absolute: ~/Desktop/phase-2-challenge/part-4/quiz.md
relative: ./path-4/quiz.md

Q: Lets say you have the following file structure
~
└── Projects
    ├── pinterest-for-dogs
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to copy the README.md file to the pinterest-for-dogs folder?
A: cp README.md ../pinterest-for-dogs

Q: What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
A: cmd-number. So if you have three tabs open and want to switch to the third, you type cmd-3.

Q: What files or folders do you want all git repositories to ignore?
A: Copied and pasted from my global .gitignore:
# Numerous always-ignore extensions
*.diff
*.err
*.log
*.orig
*.rej
*.swo
*.swp
*.vi
*.zip
*~

# OS or Editor files
._*
.cache
.DS_Store
.idea
.project
.settings
.tmproj
.esproj
.sublime-project
.sublime-workspace
.irb-save-history

Q: What is the main difference between Array.map and Array.forEach in JavaScript?
A: Array.map iterates through an array and returns an a new array based on its callback, while Array.forEach returns undefined. Array.forEach's main role is to create side effects on the array it is iterating through.
