# Development Environment Setup
## Software Install
Download and install the following software for your operating system :
1.  [Node.js version 16 or greater](https://nodejs.org/en/) - Latest LTS version is recommended.
    1.  Older versions can be found in the [distribution archives](https://nodejs.org/dist/).
2.  [MongoDB Community version 5 or greater](https://www.mongodb.com/try/download/community)
3. [VS Code](https://code.visualstudio.com/Download)
4. [Git SCM](https://git-scm.com/download/) - Includes "Git BASH" (MINGW console emulator for Windows)
   1. Alternative install options
      1. Linux - Install from your systems package manager like `sudo apt-get install git`
      2. MAC OS - Install using `brew` if available like `brew install git`
5. [Google Chrome](https://www.google.com/chrome/index.html)
6. Optional
   1. [Robo3T](https://robomongo.org/download) - Lightweight MongoDB Client
   2. [Mongo Compass](https://www.mongodb.com/products/compass) - Official MongoDB client.  It has some really nice functionality but is limited in other ways.
7. <a id="extensions">VS Code Extensions</a> : Ignore for now, listed for reference - will be installed in [VSCode setup](#vs-code)
   1. [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)
   2. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   3. [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
   4. [Editor Config](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
   5. Optional
      1. [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)
      2. [Rainbow Bracket Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) - Color code matches brackets for easy scope identification
8. Optional
   1. [KeePass](https://keepass.info/) (or other password manager).  You might want a password manager to keep track of all your accounts.  Personally I *strongly* discourage using web hosted managers like [LastPass](https://www.dailymail.co.uk/sciencetech/article-7470155/Google-warns-users-password-manager-Lastpass-bug-exposed-credentials-hacked.html) because putting all your eggs in one basket and handing that basket to some random service on the internet is a recipe for disaster.
   2. Git UIs - these are purely optional since you can do everything they offer via the CLI or VS Code
      1. [GitHub Desktop](https://desktop.github.com/) - Windows/Mac OS only
      2. [GitKraken](https://www.gitkraken.com/) - Optional Git GUI.  Note - the free version only supports public repositories and there is no "personal" license.
      3. [SourceTree](https://www.sourcetreeapp.com/) - Alternative Git GUI

## Code Directory
Create a new directory at an easy to find location on your hard drive.  I use `~/Projects` to house all of my projects for any purpose or language on my machine for personal use.  On my work machine, I use `~/source` since I know every project will be related to my job, stored in git, and there's no real need to subdivide them except by project name.  Windows users often choose `C:\source`, `C:\Users\<username>\source` or `C:\Users\<username>\My Documents\source`.  This is a personal preference - choose whatever you want so long as it's easy to remember and easy to access.
*NOTE* : File and directory names are case sensitive in Linux, case insensitive in Windows, and case weird in Mac OS.
## Software Configuration
### VS Code
Start VS Code and install the [VS Code Extensions](#extensions) listed above.  Optional extensions are not required but may be helpful in the future.  You may also choose to delay this step until lesson #3 where we will cover VS Code usage, including how to search for and install extensions.

### MongoDB
After installing MongoDB, create an easily accessible folder named `mongodb-data`.  A common place to create this would be `/home/<user>/mongodb-data` in Linux or `C:\mongodb-data` in Windows.  This path will be referenced in the MongoDB configuration as the place on the filesystem to store the physical data for your database.  Choosing a short, easy to remember, path will reduce the characters required in the configuration parameters.


## Supporting Services
Github

## IDE Configuration
GitIgnore
EditorConfig