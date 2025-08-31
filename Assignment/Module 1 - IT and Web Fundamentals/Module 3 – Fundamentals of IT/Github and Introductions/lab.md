1. Create a GitHub Student Account

Go to GitHub
.

Click Sign Up and create a new account (use your email).

Set a username (e.g., yourname-student).

Verify your email to activate the account.

2. Create a New Repository

After login, click New Repository.

Name it something like Student-Project.

Choose Public (so your classmate can access it).

Check “Initialize this repository with a README”.

Click Create Repository.

3. Add Your Classmate as a Collaborator

Open the repository (Student-Project).

Go to Settings → Collaborators → Add People.

Enter your classmate’s GitHub username or email.

Click Add Collaborator.

Your classmate will receive an invitation to join the project.

4. Clone the Repository (Both Students)

On your computer, open terminal/command prompt and run:
git clone https://github.com/yourname-student/Student-Project.git

5. Create a Small Project

Example: create a file hello.c

#include <stdio.h>
int main() {
    printf("Hello from Student Project!\n");
    return 0;
}

Save it inside the Student-Project folder.

6. Push Your Code to GitHub

cd Student-Project
git add hello.c
git commit -m "Added hello.c program"
git push origin main

7. Collaborate with Classmate

Your classmate will pull changes:
git pull origin main

They can add another file (e.g., hello.java), commit, and push it back.

8. Result

Now both you and your classmate are collaborating on the same GitHub project.
Each can contribute, push, and pull code to maintain teamwork.

