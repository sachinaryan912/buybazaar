Last login: Thu Nov 30 23:13:51 on ttys012
sachin@SACHINs-MacBook-Pro ~ % cd desktop/youtubevideos
sachin@SACHINs-MacBook-Pro youtubevideos % git clone https://github.com/sachinaryan912/buybazaar
Cloning into 'buybazaar'...
remote: Enumerating objects: 26, done.
remote: Counting objects: 100% (26/26), done.
remote: Compressing objects: 100% (20/20), done.
remote: Total 26 (delta 4), reused 9 (delta 0), pack-reused 0
Receiving objects: 100% (26/26), 17.46 KiB | 270.00 KiB/s, done.
Resolving deltas: 100% (4/4), done.
sachin@SACHINs-MacBook-Pro youtubevideos % git status
fatal: not a git repository (or any of the parent directories): .git
sachin@SACHINs-MacBook-Pro youtubevideos % git add .
fatal: not a git repository (or any of the parent directories): .git
sachin@SACHINs-MacBook-Pro youtubevideos % git initi
git: 'initi' is not a git command. See 'git --help'.

The most similar command is
	init
sachin@SACHINs-MacBook-Pro youtubevideos % git init 
Initialized empty Git repository in /Users/sachin/Desktop/youtubevideos/.git/
sachin@SACHINs-MacBook-Pro youtubevideos % cd buybazaar
sachin@SACHINs-MacBook-Pro buybazaar % git init    
Reinitialized existing Git repository in /Users/sachin/Desktop/youtubevideos/buybazaar/.git/
sachin@SACHINs-MacBook-Pro buybazaar % git add .   
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	Text-to-speech.py

nothing added to commit but untracked files present (use "git add" to track)
sachin@SACHINs-MacBook-Pro buybazaar % git add .
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   Text-to-speech.py

sachin@SACHINs-MacBook-Pro buybazaar % git commit -m "added py file"
[main 47671e8] added py file
 Committer: SACHIN <sachin@SACHINs-MacBook-Pro.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 9 insertions(+)
 create mode 100644 Text-to-speech.py
sachin@SACHINs-MacBook-Pro buybazaar % git push
Username for 'https://github.com': sachinaryan912
Password for 'https://sachinaryan912@github.com': 
remote: Support for password authentication was removed on August 13, 2021.
remote: Please see https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.
fatal: Authentication failed for 'https://github.com/sachinaryan912/buybazaar/'
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
sachin@SACHINs-MacBook-Pro buybazaar % git config --global --edit
sachin@SACHINs-MacBook-Pro buybazaar % git config --global user.name "sachinaryan912"
sachin@SACHINs-MacBook-Pro buybazaar % git config --global user.email "sachinsachu1998.ss@gmail.com"
sachin@SACHINs-MacBook-Pro buybazaar % git init
Reinitialized existing Git repository in /Users/sachin/Desktop/youtubevideos/buybazaar/.git/
sachin@SACHINs-MacBook-Pro buybazaar % git pull
remote: Enumerating objects: 29, done.
remote: Counting objects: 100% (29/29), done.
remote: Compressing objects: 100% (27/27), done.
remote: Total 28 (delta 1), reused 27 (delta 1), pack-reused 0
Unpacking objects: 100% (28/28), 190.89 KiB | 318.00 KiB/s, done.
From https://github.com/sachinaryan912/buybazaar
   31f2024..1c8a194  main       -> origin/main
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint: 
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint: 
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
fatal: Need to specify how to reconcile divergent branches.
sachin@SACHINs-MacBook-Pro buybazaar % git pull --rebase
Successfully rebased and updated refs/heads/main.
sachin@SACHINs-MacBook-Pro buybazaar % git stash
No local changes to save
sachin@SACHINs-MacBook-Pro buybazaar % git pull
Already up to date.
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
sachin@SACHINs-MacBook-Pro buybazaar % git pull
Already up to date.
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
sachin@SACHINs-MacBook-Pro buybazaar % git push
Username for 'https://github.com': sachinaryan912
Password for 'https://sachinaryan912@github.com': 
remote: Support for password authentication was removed on August 13, 2021.
remote: Please see https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.
fatal: Authentication failed for 'https://github.com/sachinaryan912/buybazaar/'
sachin@SACHINs-MacBook-Pro buybazaar % git push  
Username for 'https://github.com': sachinaryan912
Password for 'https://sachinaryan912@github.com': 
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 496 bytes | 496.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/sachinaryan912/buybazaar
   1c8a194..500b389  main -> main
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
sachin@SACHINs-MacBook-Pro buybazaar % git pull
Already up to date.
sachin@SACHINs-MacBook-Pro buybazaar % git add .
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   .DS_Store
	new file:   buybazaar-spring/.gitignore
	new file:   buybazaar-spring/.mvn/wrapper/maven-wrapper.jar
	new file:   buybazaar-spring/.mvn/wrapper/maven-wrapper.properties
	new file:   buybazaar-spring/mvnw
	new file:   buybazaar-spring/mvnw.cmd
	new file:   buybazaar-spring/pom.xml
	new file:   buybazaar-spring/src/main/java/com/company/buybazaar/BuybazaarApplication.java
	new file:   buybazaar-spring/src/main/resources/application.properties
	new file:   buybazaar-spring/src/test/java/com/company/buybazaar/BuybazaarApplicationTests.java

sachin@SACHINs-MacBook-Pro buybazaar % git commit -m "added spring boot for backend part"
[main b288e28] added spring boot for backend part
 10 files changed, 620 insertions(+)
 create mode 100644 buybazaar-spring/.gitignore
 create mode 100644 buybazaar-spring/.mvn/wrapper/maven-wrapper.jar
 create mode 100644 buybazaar-spring/.mvn/wrapper/maven-wrapper.properties
 create mode 100755 buybazaar-spring/mvnw
 create mode 100644 buybazaar-spring/mvnw.cmd
 create mode 100644 buybazaar-spring/pom.xml
 create mode 100644 buybazaar-spring/src/main/java/com/company/buybazaar/BuybazaarApplication.java
 create mode 100644 buybazaar-spring/src/main/resources/application.properties
 create mode 100644 buybazaar-spring/src/test/java/com/company/buybazaar/BuybazaarApplicationTests.java
sachin@SACHINs-MacBook-Pro buybazaar % git push
Enumerating objects: 29, done.
Counting objects: 100% (29/29), done.
Delta compression using up to 8 threads
Compressing objects: 100% (18/18), done.
Writing objects: 100% (27/27), 63.41 KiB | 15.85 MiB/s, done.
Total 27 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/sachinaryan912/buybazaar
   500b389..b288e28  main -> main
sachin@SACHINs-MacBook-Pro buybazaar % git pull
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 2 (delta 1), reused 2 (delta 1), pack-reused 0
Unpacking objects: 100% (2/2), 216 bytes | 108.00 KiB/s, done.
From https://github.com/sachinaryan912/buybazaar
   b288e28..8ee75a0  main       -> origin/main
Updating b288e28..8ee75a0
Fast-forward
 hello.cpp | 7 -------
 test.rtf  | 8 --------
 2 files changed, 15 deletions(-)
 delete mode 100644 hello.cpp
 delete mode 100644 test.rtf
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   Text-to-speech.py

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	output.mp3

no changes added to commit (use "git add" and/or "git commit -a")
sachin@SACHINs-MacBook-Pro buybazaar % git commit -m "text-to-speech updated with output.mp3"
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   Text-to-speech.py

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	output.mp3

no changes added to commit (use "git add" and/or "git commit -a")
sachin@SACHINs-MacBook-Pro buybazaar % git add .
sachin@SACHINs-MacBook-Pro buybazaar % git commit -m "text-to-speech updated with output.mp3"
[main c2a493b] text-to-speech updated with output.mp3
 2 files changed, 1 insertion(+), 1 deletion(-)
 create mode 100644 output.mp3
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
sachin@SACHINs-MacBook-Pro buybazaar % git push
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 6.86 KiB | 6.86 MiB/s, done.
Total 4 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/sachinaryan912/buybazaar
   8ee75a0..c2a493b  main -> main
sachin@SACHINs-MacBook-Pro buybazaar % git pull
remote: Enumerating objects: 11, done.
remote: Counting objects: 100% (11/11), done.
remote: Compressing objects: 100% (9/9), done.
remote: Total 9 (delta 5), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (9/9), 2.60 KiB | 266.00 KiB/s, done.
From https://github.com/sachinaryan912/buybazaar
   c2a493b..797c090  main       -> origin/main
Updating c2a493b..797c090
Fast-forward
 README.md | 25 +++++++++++++++++++++++++
 1 file changed, 25 insertions(+)
sachin@SACHINs-MacBook-Pro buybazaar % git add .
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   .DS_Store
	new file:   "assets/Screenshot 2023-11-30 at 11.48.54\342\200\257PM.png"

sachin@SACHINs-MacBook-Pro buybazaar % git commit -m "updated readmd and added logo file"    
[main 735299d] updated readmd and added logo file
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 "assets/Screenshot 2023-11-30 at 11.48.54\342\200\257PM.png"
sachin@SACHINs-MacBook-Pro buybazaar % git push
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 985.18 KiB | 24.03 MiB/s, done.
Total 5 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/sachinaryan912/buybazaar
   797c090..735299d  main -> main
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   .DS_Store
	modified:   buybazaar-spring/src/main/java/com/company/buybazaar/BuybazaarApplication.java
	modified:   buybazaar-spring/src/main/resources/application.properties

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	buybazaar-spring/src/main/java/com/company/buybazaar/api/
	buybazaar-spring/src/main/java/com/company/buybazaar/service/

no changes added to commit (use "git add" and/or "git commit -a")
sachin@SACHINs-MacBook-Pro buybazaar % git add .
sachin@SACHINs-MacBook-Pro buybazaar % git commit
Aborting commit due to empty commit message.
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   .DS_Store
	modified:   buybazaar-spring/src/main/java/com/company/buybazaar/BuybazaarApplication.java
	new file:   buybazaar-spring/src/main/java/com/company/buybazaar/api/Controller.java
	new file:   buybazaar-spring/src/main/java/com/company/buybazaar/service/BBService.java
	modified:   buybazaar-spring/src/main/resources/application.properties

sachin@SACHINs-MacBook-Pro buybazaar % git commit -m "created a sayhello api endpoint in spring boot"
[main 7eab594] created a sayhello api endpoint in spring boot
 5 files changed, 31 insertions(+)
 create mode 100644 buybazaar-spring/src/main/java/com/company/buybazaar/api/Controller.java
 create mode 100644 buybazaar-spring/src/main/java/com/company/buybazaar/service/BBService.java
sachin@SACHINs-MacBook-Pro buybazaar % git push
To https://github.com/sachinaryan912/buybazaar
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/sachinaryan912/buybazaar'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
sachin@SACHINs-MacBook-Pro buybazaar % git pull --rebase
remote: Enumerating objects: 20, done.
remote: Counting objects: 100% (20/20), done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 13 (delta 8), reused 7 (delta 4), pack-reused 0
Unpacking objects: 100% (13/13), 1.89 KiB | 161.00 KiB/s, done.
From https://github.com/sachinaryan912/buybazaar
   735299d..8fea491  main       -> origin/main
Successfully rebased and updated refs/heads/main.
sachin@SACHINs-MacBook-Pro buybazaar % git push         
Enumerating objects: 29, done.
Counting objects: 100% (29/29), done.
Delta compression using up to 8 threads
Compressing objects: 100% (11/11), done.
Writing objects: 100% (17/17), 1.49 KiB | 1.49 MiB/s, done.
Total 17 (delta 4), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/sachinaryan912/buybazaar
   8fea491..0350f2a  main -> main
sachin@SACHINs-MacBook-Pro buybazaar % git pull
remote: Enumerating objects: 13, done.
remote: Counting objects: 100% (13/13), done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 11 (delta 4), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (11/11), 2.44 KiB | 208.00 KiB/s, done.
From https://github.com/sachinaryan912/buybazaar
   0350f2a..c496d3b  main       -> origin/main
Updating 0350f2a..c496d3b
Fast-forward
 .github/workflows/node.js.yml | 31 +++++++++++++++++++++++++++++++
 README.md                     |  5 +----
 idea.txt                      |  2 ++
 3 files changed, 34 insertions(+), 4 deletions(-)
 create mode 100644 .github/workflows/node.js.yml
 create mode 100644 idea.txt
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   idea.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	assets/buybazzar.drawio

no changes added to commit (use "git add" and/or "git commit -a")
sachin@SACHINs-MacBook-Pro buybazaar % git add .
sachin@SACHINs-MacBook-Pro buybazaar % git commit -m "added HLD for buybazaar in assets"             
[main 45df5a3] added HLD for buybazaar in assets
 2 files changed, 40 insertions(+)
 create mode 100644 assets/buybazzar.drawio
sachin@SACHINs-MacBook-Pro buybazaar % git push                                         
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 1.30 KiB | 1.30 MiB/s, done.
Total 5 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/sachinaryan912/buybazaar
   c496d3b..45df5a3  main -> main
sachin@SACHINs-MacBook-Pro buybazaar % git status 
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	deleted:    assets/buybazzar.drawio

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	assets/buybazzar-v1.drawio
	assets/buybazzar-v2.drawio

no changes added to commit (use "git add" and/or "git commit -a")
sachin@SACHINs-MacBook-Pro buybazaar % git add .
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	renamed:    assets/buybazzar.drawio -> assets/buybazzar-v1.drawio
	new file:   assets/buybazzar-v2.drawio

sachin@SACHINs-MacBook-Pro buybazaar % git commit -m "added version 2.0  HLD for buybazaar in assets"
[main 8f6fa37] added version 2.0  HLD for buybazaar in assets
 2 files changed, 67 insertions(+)
 rename assets/{buybazzar.drawio => buybazzar-v1.drawio} (100%)
 create mode 100644 assets/buybazzar-v2.drawio
sachin@SACHINs-MacBook-Pro buybazaar % git push
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 1.77 KiB | 1.77 MiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/sachinaryan912/buybazaar
   45df5a3..8f6fa37  main -> main
sachin@SACHINs-MacBook-Pro buybazaar % ls
README.md		Text-to-speech.py	assets			buybazaar-spring	buybazaar-ui		idea.txt		output.mp3
sachin@SACHINs-MacBook-Pro buybazaar % git pull
remote: Enumerating objects: 18, done.
remote: Counting objects: 100% (18/18), done.
remote: Compressing objects: 100% (15/15), done.
remote: Total 16 (delta 10), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (16/16), 4.71 KiB | 267.00 KiB/s, done.
From https://github.com/sachinaryan912/buybazaar
   8f6fa37..9fdab1d  main       -> origin/main
Updating 8f6fa37..9fdab1d
Fast-forward
 buybazaar-spring/README.md | 117 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 117 insertions(+)
 create mode 100644 buybazaar-spring/README.md
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   .DS_Store
	deleted:    Text-to-speech.py
	deleted:    assets/buybazzar-v1.drawio
	deleted:    assets/buybazzar-v2.drawio
	deleted:    idea.txt
	deleted:    output.mp3

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	assets/.DS_Store
	assets/output.mp3
	buybazaar-architecture/
	buybazaar-docs/
	tst-env-files/

no changes added to commit (use "git add" and/or "git commit -a")
sachin@SACHINs-MacBook-Pro buybazaar % git add .
sachin@SACHINs-MacBook-Pro buybazaar % git commit -m "updated spring readmd and organised the contents"
[main 84c0e01] updated spring readmd and organised the contents
 7 files changed, 1 insertion(+), 1 deletion(-)
 create mode 100644 assets/.DS_Store
 rename output.mp3 => assets/output.mp3 (100%)
 rename {assets => buybazaar-architecture}/buybazzar-v1.drawio (100%)
 rename {assets => buybazaar-architecture}/buybazzar-v2.drawio (100%)
 rename idea.txt => buybazaar-docs/idea.txt (95%)
 rename Text-to-speech.py => tst-env-files/Text-to-speech.py (100%)
sachin@SACHINs-MacBook-Pro buybazaar % git push
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 8 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (9/9), 1.69 KiB | 1.69 MiB/s, done.
Total 9 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/sachinaryan912/buybazaar
   9fdab1d..84c0e01  main -> main
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   .DS_Store

no changes added to commit (use "git add" and/or "git commit -a")
sachin@SACHINs-MacBook-Pro buybazaar % git add .
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   .DS_Store

sachin@SACHINs-MacBook-Pro buybazaar % ls
README.md		assets			buybazaar-architecture	buybazaar-docs		buybazaar-spring	buybazaar-ui		database-scripts	tst-env-files
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   .DS_Store

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   .DS_Store

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	database-scripts/

sachin@SACHINs-MacBook-Pro buybazaar % git add .
sachin@SACHINs-MacBook-Pro buybazaar % git commit -m "updated database scripts"                        
[main b101397] updated database scripts
 2 files changed, 18 insertions(+)
 create mode 100644 database-scripts/user_db.sql
sachin@SACHINs-MacBook-Pro buybazaar % git push
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 829 bytes | 829.00 KiB/s, done.
Total 5 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/sachinaryan912/buybazaar
   84c0e01..b101397  main -> main
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   .DS_Store

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	assets/logo_v2.0.png

no changes added to commit (use "git add" and/or "git commit -a")
sachin@SACHINs-MacBook-Pro buybazaar % git add .
sachin@SACHINs-MacBook-Pro buybazaar % git commit -m "added logo v2.0 successfully!"
dquote> 
dquote> "
[main e9f5e79] added logo v2.0 successfully
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 assets/logo_v2.0.png
sachin@SACHINs-MacBook-Pro buybazaar % git push                                   
To https://github.com/sachinaryan912/buybazaar
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/sachinaryan912/buybazaar'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
sachin@SACHINs-MacBook-Pro buybazaar % git pull
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 4 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), 1.19 KiB | 203.00 KiB/s, done.
From https://github.com/sachinaryan912/buybazaar
   b101397..052ab91  main       -> origin/main
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint: 
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint: 
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
fatal: Need to specify how to reconcile divergent branches.
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch and 'origin/main' have diverged,
and have 1 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

nothing to commit, working tree clean
sachin@SACHINs-MacBook-Pro buybazaar % git pull
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint: 
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint: 
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
fatal: Need to specify how to reconcile divergent branches.
sachin@SACHINs-MacBook-Pro buybazaar % git pull --rebase
Successfully rebased and updated refs/heads/main.
sachin@SACHINs-MacBook-Pro buybazaar % git status       
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
sachin@SACHINs-MacBook-Pro buybazaar % git add .
sachin@SACHINs-MacBook-Pro buybazaar % git push
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 102.10 KiB | 34.03 MiB/s, done.
Total 5 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/sachinaryan912/buybazaar
   052ab91..c311967  main -> main
sachin@SACHINs-MacBook-Pro buybazaar % git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   .DS_Store

no changes added to commit (use "git add" and/or "git commit -a")
sachin@SACHINs-MacBook-Pro buybazaar % git add .
sachin@SACHINs-MacBook-Pro buybazaar % git push
To https://github.com/sachinaryan912/buybazaar
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/sachinaryan912/buybazaar'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
sachin@SACHINs-MacBook-Pro buybazaar % git commit -m ""
Aborting commit due to empty commit message.
sachin@SACHINs-MacBook-Pro buybazaar % git commit -m "project updated"
[main 0ac2e7e] project updated
 1 file changed, 0 insertions(+), 0 deletions(-)
sachin@SACHINs-MacBook-Pro buybazaar % git push
To https://github.com/sachinaryan912/buybazaar
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/sachinaryan912/buybazaar'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
sachin@SACHINs-MacBook-Pro buybazaar % git pull --rebase
remote: Enumerating objects: 17, done.
remote: Counting objects: 100% (17/17), done.
remote: Compressing objects: 100% (15/15), done.
remote: Total 15 (delta 10), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (15/15), 3.60 KiB | 368.00 KiB/s, done.
From https://github.com/sachinaryan912/buybazaar
   c311967..bed97fa  main       -> origin/main
Successfully rebased and updated refs/heads/main.
sachin@SACHINs-MacBook-Pro buybazaar % git push         
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 482 bytes | 482.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/sachinaryan912/buybazaar
   bed97fa..d0c258d  main -> main
sachin@SACHINs-MacBook-Pro buybazaar % 
