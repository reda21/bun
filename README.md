# buntest

To install dependencies:

```bash
bun install
```

To run:

```bash
bun dev

#or

bun start #--watch
```

This project was created using `bun init` in bun v1.1.9. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Learning Git Commands

This project is also a resource for learning various Git commands. Below are some common commands that you might find useful:

### Basic Git Commands

- `git init`: Initialize a local Git repository
- `git add <file>`: Add a file or files to the staging area
- `git commit -m "commit message"`: Commit changes with a message
- `git status`: Check the status of your files in the working directory and staging area

### Branching and Merging

- `git branch`: List branches
- `git branch <branch_name>`: Create a new branch
- `git checkout <branch_name>`: Switch to a branch
- `git merge <branch_name>`: Merge a branch into the active branch
- `git checkout -b <new_branch>`: Create and switch to a new branch
- `git merge <source_branch>`: Merge changes from the source branch into the current branch

### Advanced Branching and Merging

- `git rebase <base_branch>`: Reapply commits on top of another base tip
- `git merge --no-ff <branch>`: Perform a non-fast-forward merge
- `git cherry-pick <commit>`: Apply the changes introduced by some existing commits

### Remote Repositories

- `git remote add <name> <url>`: Add a remote repository
- `git push <remote> <branch>`: Push a branch to your remote repository
- `git pull`: Update your local repository to the newest commit from the remote repository

Feel free to explore these commands to enhance your Git skills as you work on this project