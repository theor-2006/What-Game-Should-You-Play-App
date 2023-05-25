# Unit 6 Project: What Should I Watch? App! (STARTER CODE)


Let's use our knowledge of conditionals, arrays, loops, and array methods to make an app that gives people suggestion based on user input!

## Resources
[Example solution](https://replit.com/@clairefro/unit-6-project-solution-code)

[Project scoring rubric](https://docs.google.com/document/d/1QhdggqmhG3sZYa9MiQj4m838GbYVvReOhNJ6R7a6NkY/edit#)

## How the website is supposed to work
- When a user types in an input (ex: TV show genre) and presses "Submit!" they will see pictures of suggested items (ex: tv shows) appended to the page.
- The user can also  suggest items to be added to the app by providing image link and pressing the "Suggest!" button.

## Daily progress
Mark an `x` inside each checkbox when you complete it (like `[x]`)

### Lesson 6.1
- [x ] Complete project plan section: “Let’s Brainstorm!” in this README below

- [ ] If there’s time, start on the HTML and CSS tasks in the "Tasks" section below

### Lesson 6.2
- [ ] Complete project plan sections: “Let’s Brainstorm!” if you haven’t already

- [ ] Complete the HTML and CSS tasks in "Tasks" section below

- [ ] If there’s time, begin JavaScript tasks / ask any questions you have about them  

### Lesson 6.6 pt.1
- [x] Complete any missing tasks from 6.2

- [x] Create at least two arrays that contain links to images of shows you recommend

- [x] Save your buttons to variables 

- [x] Save your div to a variable

### Lesson 6.6 pt.2
- [x] Complete any missing tasks from 6.6

- [x] Inside of the click handler, save the user’s input to a variable using .value

- [x] Write a conditional statement that checks if the user has typed in the first of the genres you’ve chosen

- [x] Write a for…of loop that appends each image link in the first array as an img tag to the div

- [x] Repeat these steps for the other arrays you’ve created

### Lesson 6.7
- [x] Complete any missing tasks from 6.6 

- [ ] In the second click handler, add the user suggestion to both of the arrays

- [ ] Choose at least one next level feature from "Next Level Features" section


## Let's Brainstorm!

### 1. Title
*This app is going to reccomend video games*

Title: What should I play

## 2. Arrays and Elements

**Think of an array as a list. We’ll learn more about arrays throughout the unit!**

*Action [Call of Duty, Elden Ring, Resident Evil  ]*
*Sports [Madden, NBA2K, Fifa]*
*Story [Red Dead Redemtion, The Last of Us, God of War]*

*What will the user type in to get these recommendations? Can the user type in more than one 
(Your array title may be different than what the user types in, but try to at least keep them similar!)*

1. **Array 1**

User Input: Action
- Recommendation 1: Call of Duty
- Recommendation 2: Elden Ring
- Recommendation 3: Resident Evil 

2. Array 2
   
User Input: Sports
- Recommendation 1: Madden (football)
- Recommendation 2: NBA2K (basketball)
- Recommendation 3: Fifa (soccer)

5. Array 3

User Input: Story
- Recommendation 1: RDR2
- Recommendation 2: The Last of Us
- Recommendation 3: God of War




## Tasks
### Task One (HTML):
1. Before we can make things happen on the page using JavaScript, we need to give JavaScript something to select. But because we have multiple inputs and buttons, let's give classes to some of our elements! Let's start with the inputs. There are 2. Try to give them classes based on what the placeholders say.
2. Now let's give classes to the buttons. Use the text between the tags as ideas. 
3. We want our show suggestions to appear in a div. There's one div on the page. Give it a class! 
4. Change the h1 to call the app whatever you want! 

### (OPTIONAL) Task Two (CSS): 
1.  Make your app stand out! Change the background, text size, text color, border, whatever you want! 

### Task Three (Arrays):
1. The user needs recommendations! 
Before both click handlers, create **at least two arrays**  that contain the links to images of 2 items (ex: shows) you recommend in each user input category (ex: TV show genre). The name of the arrays should be the name of the categories you chose. 

### Task Four (Variables)
1. Now we need to save our newly-named HTML elements to variables! Let's start with our buttons. They already have classes. Remember to keep the names simple, but also don't forget that there are multiple buttons! 
2. We want our suggestions to appear in the a div. Save that to a variable too! 

### Task Five (Conditionals and Loops):
1. When the user types in a genre, the images of the recommendations should be appended to the page. Inside the first click handler (already declared for you!), we'll need to save the user's input to a variable. To do that, you'll need to use the `.value` method.`
2. Write a conditional  statement that will check if the user has typed in the first of the genres you chose. Use the `genreInput` variable to write this conditional.
2. Now within that first conditional, write a for of loop that will append each image link in the first array as an `<img>` tag to the div with the class "shows". NOTE: want to use the `.insertAdjacentHTML` method.
3. Do the same thing now for any other arrays you created! First make a conditional statement using the `genreInput` variable. Then write a for of loop that will append append each image link in the second array as an `<img>` tag to a div. NOTE: remember to use `else-if`! 

### Task Six (.push):
1. Finally, we need to allow the user to make suggestions. In the second click handler, use `.push` to add the user suggestion to both of the arrays.

Then add some text to let the user know that their suggestions have been added. NOTE: You'll want to use the `.append` method.  

Use `console.log` on both of the arrays to test it out to see if it works!

### Next Level Features:
1. **Add a counter:** Use an operator to perform a calculation that counts and displays the number of times the user has added suggestions
2. **Video Suggestions:** Allow the user to suggest YouTube links (as well as images) and use the <video> tag to display them in an array.  
3. **Add Suggestions to Arrays** When you suggest a show using an image URL, add it to an array so that it appears when you type in a genre for suggestions.
4. **Make Your Links Clickable (SPICY!)** Make it so that when your images appear, the user can click on them and be taken to an external link (the trailer, a clip, the IMDB page)

## Next Level Features
Choose **at least one** for your project! Mark it with an `[x]`


- [ ] **Add a counter**. Use an operator to perform a calculation that counts and displays the number of times the user has added suggestions ([Example](https://kehanse.github.io/8P-Which-Breakfast-are-You/))

- [ ] **Video suggestions**. Allow the user to suggest YouTube links (as well as images) and use the <video> tag to display them in an array. ([Example](https://kehanse.github.io/8P-Which-Breakfast-are-You/))

- [ ] **Add suggestions to arrays**. When you suggest a show using an image URL, add it to an array so that it appears when you type in a genre for suggestions. 

🔥 SPICY 🔥

- [ ] **Additional inputs/
different types of inputs**. What if the user doesn’t type in exactly what you write in your conditional? How can you make it easier for them to get recommendations? What about a dropdown list? 

- [ ] **Make the images clickable!** Make it so that when your images appear, the user can click on them and be taken to an external link (the trailer, a clip, the IMDB page) 





