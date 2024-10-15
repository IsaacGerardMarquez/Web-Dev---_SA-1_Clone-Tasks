// This selects all of the quiz question containers with the class named "QuizQuestion"
const QuizQuestion = document.querySelectorAll('.QuizQuestion');

// This selects the submit button by its # ID named "SubmitButton"
const SubmitButton = document.getElementById('SubmitButton');

// This selects the play again button by its # ID named "PlayAgainButton"
const PlayAgainButton = document.getElementById('PlayAgainButton');

// This sets the variable named "playerScore" to track the player's score
let playerScore = 0;


// This is the event listener for the answer buttons
// This loops through all of each question container to add event listeners to the answer buttons
QuizQuestion.forEach(q => {

  // This selects all of the buttons that are within each question container
  q.querySelectorAll('button').forEach(btn => {

    // This is to add a click event listener to each of the button
    btn.addEventListener('click', () => {

      // This removes the class named "selected" from all buttons in this question when a button is clicked
      q.querySelectorAll('button').forEach(b => b.classList.remove('selected'));

      // This adds the class named "selected" to the clicked button to indicate that it is the selected answer
      btn.classList.add('selected');
    });
  });
});

// This is for submitting the player's answers
// I created an event listener for submitting the player's answers when they click the submit button
SubmitButton.addEventListener('click', () => {

  // This resets the score to 0 before evaluating answers
  playerScore = 0;

  // This loops through each question to evaluate the user's selected answer
  QuizQuestion.forEach(q => {

    // This finds the button that has the user's selected answer or the class named "selected"
    const selected = q.querySelector('button.selected');

    // This checks or determines if there is a selected answer
    if (selected) {

      // This increases the score by 1 if the player's selected answer has a "correct" data attribute set to "true"
      playerScore += selected.dataset.correct === 'true' ? 1 : 0;

      // This either adds the class named "correct" if the player's selected answer is right. If not, it is "incorrect"
      selected.classList.add(selected.dataset.correct === 'true' ? 'correct' : 'incorrect');
    }

    // After evaluating the answer, disable all buttons for this question so they can't be clicked again
    q.querySelectorAll('button').forEach(b => {

      // This disables all of the button to prevent the player to select more
      b.disabled = true;

       // This emphasizes the correct answer by adding the class named "correct" to the button with the correct answer
      if (b.dataset.correct === 'true') b.classList.add('correct');
    });
  });

  // This reveals the player's score with the use of an alert dialog box
  alert(`You scored ${playerScore} out of ${QuizQuestion.length}!`);

  // This shows the "Play Again" button to allow the user to replay the quiz
  PlayAgainButton.style.display = 'block';
});

// This is to reset or replay the quiz
// I created another event listener that allows the player to replay the game and reset the quiz when they click the "Play Again"
PlayAgainButton.addEventListener('click', () => {

  // This restarts the player's score back to 0
  playerScore = 0;

  // This loops through each question to reset the buttons and remove all of the player's previous selections 
  QuizQuestion.forEach(q => {

    // This restarts all of the buttons within the question by removing their classes and enabling them
    q.querySelectorAll('button').forEach(b => {

      // This removes all the classes named "selected", "correct", and "incorrect" classes to reset the state of the all the buttons
      b.classList.remove('selected', 'correct', 'incorrect');

      // This allows the user to select the buttons again to make a new selection
      b.disabled = false;
    });
  });

  // This hides the "Play Again" button upon resetting the quiz
  PlayAgainButton.style.display = 'none';
});
