
# Unit 09 Node.js and ES6+ Homework: Good README Generator

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

### What is this project supposed to do?
      
This project was intended to create a dynamic README generator based upon user input. This user input would be collected via inquirer and axios, arranged into a prefabricated template using template literals, and then written into a README file using fs and util's writeFile and promisify functions, respectively. 

### Why am I doing this?
      
The user story that came with this project paints the picture of a coder wishing to optimize their work schedule by automating the creation and structure of their README files. This project, then, was ultimately intended to serve as a time-saver for the busy coder that can't be bothered to use the copy and paste functions. 

### Why does this matter? 
      
As stated, this program can serve as a reasonable replacement for any generic README template that the user may otherwise have lying around. Never again will you completely forget to include a test function or similar. 

### Here's what I've learned: 
      
Personally, I found that async functions, while still somewhat alien at this point in time, are practically invaluable when pulling data from multiple streams simultaneously - their await function is really, really nice. Similarly, this is the first time that I've really had to think about the uses for both inquirer and template literals. While the former is somewhat disappointing in how limited its scope is, the latter has proven to be surprisingly adaptable, if finicky at times (Prettier messed it up something fierce). 

### So, how is this project special? 

While copying and pasting an old README is certainly viable, and in some ways better overall, this project does have the added benefit of dynamically creating its own output - technically, you wouldn't even have to open up the program itself outside of the terminal. Honestly, though, this is far more "interesting" than practical. 

## Table of Contents
      
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [FAQs](#faqs)
      
## Installation
      
Everything that the end user needs should already be included in the files available on Github. 
      
## Usage
     
Specifically, you'll want to open up your terminal or command line, make your way to the Good-Readme-Generator folder (or equivalent), and run "node index.js". From there, follow the on-screen prompts. Your final README.md should generate in the assets folder that's in the same folder as index.js. 
      
## Credits
      
Tucker Hembree, https://github.com/fanofstuff

## Contributing
      
To contribute to this project (Unit 09 Node.js and ES6+ Homework: Good README Generator): 
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.
      
## Test
      
The following should contain a test to display the functionality of the code. Please run the following before attempting to merge any code.

    node index.js 

## FAQs

1. Where can I report a bug or error that I find?
      
   Honestly, just contact me through Github or LinkedIn - I can't imagine that anyone would do this, but, hey, I'm open to surprises. 
      
2. What additional features or improvements do you currently have planned?
      
   Absolutely none (unless this is revisited as a further homework assignment). 
      
3. Why did you hardcode in three questions for the FAQ section? 
      
   Look, Inquirer is surprisingly inflexible, okay. Maybe I just missed something. Besides, if you have more than 3 FAQs you should probably avoid relying upon something that I slogged through in <10 hours, ya know? 
      
## License
      
This project (Unit 09 Node.js and ES6+ Homework: Good README Generator) uses the following license(s): [MIT](https://choosealicense.com/licenses/mit/)
      
---
      
Copyright © 2020, fanofstuff
    
![user's Github avatar image](https://avatars0.githubusercontent.com/u/57719131?v=4)

![GIF of README creation](https://github.com/fanofstuff/Good-README-Generator/blob/master/README%20Generator.gif)

