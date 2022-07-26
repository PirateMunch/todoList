# todoList
Todo List Project - The Odin Project




Github live preview : https://piratemunch.github.io/todoList/

Github Repos link : https://github.com/PirateMunch/todoList.git

--- Git livepreview not finding your index.HTML when using webpack or React ---
Leant to fix webpack build uploading to Github and deploying live preview page. Took awhile trying 7-8 options from stack overflow. the final solution was half of @Kurt Peek's solution.

solution : ''(I also re-installed gh-pages as a normal dependency, not a development one (i.e. npm install gh-pages --save instead of npm install gh-pages --save-dev), though I'm not sure whether this was important). - Kurt Peek''. 
-- Clearly it  was important for my use case, thanks Kurt!
Interestingly the main answer was the obvious: use index.html 
1. use index.html (I did from the start).
2. use index.html in root folder. (i tried every location available to put the index.html)
3. Select gh-pages branch from the build options selector. (I did not have this option only main branch, thus the GH-Pages related searching and reading.)