# triviata_app_backend
Backend repo for Triviata app

# Triviata
Triviata is a quiz and flashcard platform that allows users to create and utilize quizzes and flashcards made by others.

## The team

## Describe the app

## ERD
![Screenshot of ERD](assets/Triviata_ERD.png)

## Models

<details>
    <summary>Users</summary>

### Users
The Users model will store all data realting to a user's profile. Users create and update their profile information. User fields are: 
- user_id - PK
- name - string
- email - string
- password - string

</details>

<details>
    <summary>Quizzes</summary>

### Quizzes
The Quizzes model will store data relating to a quiz. Users can create, update, and delete quizzes. Users can also bookmark and like quizes created by other users. Quiz fields are: 
- quiz_id  - PK
- title - string
- category - string
- likes - integer
- user_id - FK

</details>

<details>
    <summary>Flashcards</summary>

### Flashcards
The Flashcards model will store data relating to a flashcard set. Users can create, update, and delete flashcards. Users can also bookmark and like flashcard sets created by other users. Flashcard fields are: 
- flashcard_id  - PK
- term - string
- answer - string
- likes - integer
- user_id - FK

</details>

<details>
    <summary>Questions</summary>

### Questions
The Questions model will store data relating to questions. Users can create, update, & delete questions. Questions are kept in separate table from Quizes in order to allow for future features, such as generating quizzes from a question bank. Question fields are: 
- question_id - PK
- question - string
- options - array
- answer - string
- category - string
- difficulty - string
- quiz_id - FK
- user_id - FK

</details>

<details>
    <summary>Bookmarks</summary>

### Bookmarks
The bookmarks model is used to connect users to quizzes, flashcards, and questions that they save and can view later. Bookmark fields are:
- bookmark_id - PK
- user_id - FK
- quiz_id - FK
- flashcard_id - FK
- question_id - FK

</details>

<details>
    <summary>Comments</summary>

### Comments
The comments model is used to store comment data. Users can make comments on quizzes and flashcard sets. Comment fields are: 
- comment_id - PK
- content - string
- quiz_id - FK
- flashcard_id - FK
- user_id - FK

</details>
