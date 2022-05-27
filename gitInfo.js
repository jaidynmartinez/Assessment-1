/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = ('Git is a source to use and track any size project when devloping code')
    console.log(gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = ('Github is a website that allows people to openly collaborate on public or private projects using git')
    console.log(gitHubDefinition)

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

const init = {
    Description: 'This initializes a git repository in Git:',
    Code: 'git init',
};
console.log(init.Description, init.Code)


//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

const clone = {
    Description: 'This is used to make a copy of your repository in a new directory or folder:',
    Code: 'git clone <repoURL>',
}
console.log(clone.Description, clone.Code)

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

const status = {
    Description: 'This allows you to view your respository and see what can be added:',
    Code: 'git status',
}
console.log(status.Description, status.Code)
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

const add = {
    Description: 'This is used when you want to add a new or updated file into your repository:',
    Code: 'git add',
}
console.log(add.Description, add.Code)

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

const commit ={
    Description: 'This is used to essentially "screenshot" the progress you have made in your file:',
    Code: 'got commit -m "<message"',
}
console.log(commit.Description, commit.Code)

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

const push = {
    Description: 'This allows you to push your repository into Github or the Cloud:',
    Code: 'git push -M origin',
}
console.log(push.Description, push.Code)