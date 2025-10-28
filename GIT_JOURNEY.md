# *My Git Mastery Challenge Journey*


## *Student Information*
- *Name:* Hadassa kunisetty 
- *Student ID:* 23MH1A05M8  
- *Repository:* https://github.com/23MH1A05M8/git-solved-23MH1A05M8
- *Date Started:* 27-10-2025
- *Date Completed:* 28-10-2025  


## *Task Summary*
Cloned instructor's repository with pre-built conflicts and resolved all  
merge conflicts across multiple branches using proper Git workflows.



## *Commands Used*

| *Command* | *Times Used* | *Purpose* |
|--------------|----------------|--------------|
| git clone | 1 | Clone instructor's repository |
| git checkout | 20+ | Switch between branches |
| git branch | 10+ | View and manage branches |
| git merge | 2 | Merge dev and conflict-simulator into main |
| git add | 30+ | Stage resolved conflicts |
| git commit | 15+ | Commit resolved changes |
| git push | 10+ | Push to my repository |
| git fetch | 2 | Fetch updates from instructor |
| git pull | 1 | Pull updates |
| git stash | 2 | Save temporary work |
| git cherry-pick | 1 | Copy specific commit |
| git rebase | 1 | Rebase feature branch |
| git reset | 3 | Undo commits (soft/mixed/hard) |
| git revert | 1 | Safe undo |
| git tag | 2 | Create release tags |
| git status | 50+ | Check repository state |
| git log | 30+ | View history |
| git diff | 20+ | Compare changes |


## *Conflicts Resolved*

### *Merge 1: main + dev (6 files)*

#### *Conflict 1: config/app-config.yaml*
- *Issue:* Production used port 8080, development used 3000  
- *Resolution:* Created unified config with environment-based settings  
- *Strategy:* Keep production as default, add dev as optional  
- *Difficulty:* Medium  
- *Time:* 15 minutes  

#### *Conflict 2: config/database-config.json*
- *Issue:* Different database hosts and SSL modes  
- *Resolution:* Created separate profiles for production and development  
- *Strategy:* Restructured JSON to support both environments  
- *Difficulty:* Medium  
- *Time:* 10 minutes  

#### *Conflict 3: scripts/deploy.sh*
- *Issue:* Different deployment strategies (production vs docker-compose)  
- *Resolution:* Added conditional logic based on DEPLOY_ENV variable  
- *Strategy:* Made script handle both environments dynamically  
- *Difficulty:* Hard  
- *Time:* 20 minutes  

#### *Conflict 4: scripts/monitor.js*
- *Issue:* Different monitoring intervals and log formats  
- *Resolution:* Environment-based configuration object  
- *Strategy:* Used process.env.NODE_ENV to determine behavior  
- *Difficulty:* Medium  
- *Time:* 15 minutes  

#### *Conflict 5: docs/architecture.md*
- *Issue:* Different architectural descriptions  
- *Resolution:* Merged both descriptions into a comprehensive document  
- *Strategy:* Created sections for each environment  
- *Difficulty:* Easy  
- *Time:* 10 minutes  

#### *Conflict 6: README.md*
- *Issue:* Different feature lists and version numbers  
- *Resolution:* Combined all features with clear environment labels  
- *Strategy:* Organized features by category  
- *Difficulty:* Easy  
- *Time:* 10 minutes  


### *Merge 2: main + conflict-simulator (6 files)*

#### *Conflict 1: config/app-config.yaml*
- *Issue:* Staging vs production differences  
- *Resolution:* Introduced staging configuration block  
- *Strategy:* Unified configuration for all environments  
- *Difficulty:* Medium  
- *Time:* 15 minutes  

#### *Conflict 2: config/database-config.json*
- *Issue:* Mismatch in database credentials and drivers  
- *Resolution:* Added environment-based credential system  
- *Strategy:* Configured flexible JSON structure  
- *Difficulty:* Medium  
- *Time:* 10 minutes  

#### *Conflict 3: scripts/deploy.sh*
- *Issue:* Manual deployment vs automated pipeline  
- *Resolution:* Merged into single automated script with both options  
- *Strategy:* Added argument-based deployment mode  
- *Difficulty:* Hard  
- *Time:* 20 minutes  

#### *Conflict 4: scripts/monitor.js*
- *Issue:* One branch used Mocha, other used Jest  
- *Resolution:* Created support for both test frameworks  
- *Strategy:* Conditional logic based on config  
- *Difficulty:* Medium  
- *Time:* 15 minutes  

#### *Conflict 5: docs/architecture.md*
- *Issue:* Extra diagrams and out-of-date sections  
- *Resolution:* Combined latest diagrams and corrected content  
- *Strategy:* Included both visual and text improvements  
- *Difficulty:* Easy  
- *Time:* 10 minutes  

#### *Conflict 6: README.md*
- *Issue:* Missing simulator setup instructions  
- *Resolution:* Added proper setup guide and version info  
- *Strategy:* Finalized unified README  
- *Difficulty:* Easy  
- *Time:* 10 minutes  

## *Testing*

After completing all merge conflict resolutions, the functionality of the application was tested to ensure stability and correctness.

Commands Used to Test

set NODE_ENV=development

npm install

npm run dev

During the testing phase (npm run dev), I faced conflicts due to experimental dependencies and environment setup issues.
Some features required additional configuration to ensure compatibility after merging multiple branches.
Resolving merge conflicts while maintaining the application’s functionality was the most challenging part, as it required careful inspection of every conflicting line before committing the final version.

## *Most Challenging Parts*

1. *Understanding Conflict Markers* — Initially confused by <<<<<<<, =======, >>>>>>>.  
   Learned that HEAD refers to the current branch and the other side is the incoming change.  

2. *Deciding What to Keep* — Choosing between two valid code versions was tricky.  
   I learned to read and understand both before merging.  

3. *Complex Logic Conflicts* — Especially in deploy.sh, where both sides had unique logic.  
   I needed to analyze both workflows before merging them safely.  

4. *Testing After Resolution* — Ensuring the code still ran correctly after resolving conflicts.  


## *Key Learnings*

### *Technical Skills*
- Mastered conflict resolution process  
- Understood merge conflict markers  
- Learned to use git diff effectively  
- Practiced all major Git commands  

### *Best Practices*
- Always read both sides before resolving  
- Test all resolved files before committing  
- Write clear, meaningful commit messages  
- Use git status frequently  
- Keep commits small and focused  

### *Git Workflow Insights*
- Conflicts are normal, not errors  
- Understand both code versions before deciding  
- Document resolution steps clearly  
- Use git reflog to recover safely  
- Stay calm and consistent  


## *Reflection*
This challenge taught me that *merge conflicts are not mistakes*, but opportunities to better understand the code and team workflow.  
I learned how to calmly analyze, merge, and verify changes.  

Through hands-on practice, I mastered essential Git commands — from merge, rebase, and cherry-pick to stash and reset.  
Now, I can confidently manage any Git conflict in real-world development.  

Most importantly, I discovered that **git reflog is a true lifesaver** for recovering lost work! 🚀  
This experience has strengthened my confidence as a future software engineer.

