# how to contribute?

## preparing presentation

*   npm run dev: to launch the presentation
*   Add information in the presentation folder
*   With every new change in the presentation folder the slides.md file is built
*   To separate vertical slides use '--'
*   To separate horizontal slides use '---'
*   The sliders separator can be defined in reveal-md.json

## Add challenges

To analyze the results of the challenges with module.exports.

*   Add the problem in the exercises folder
*   Add the solution in the solution folder for every exercise

problem folder structure:

```bash
problems
++your_problem
++--solution
++++--solution.js
++--exercise
++--problem.es.md
++--template.js (this file will be copied to the working directory of the user of the cli
)
```
