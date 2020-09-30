# Dairy Farm

## Contributors
@Septimis (Connor Meads) <br>
@brent-buffenbarger (Brent Buffenbarger) <br>
@dallinlarsen (Dallin Larsen) <br>
@nebulohu (Kyle Masters)

## Organization
### Backend Team
 - Connor Meads 
 - Kyle Masters
  
### Frontend team
- Brent Buffenbarger
- Dallin Larsen

### Spokesperson
- Brent Buffenbarger
    - Role is to turn in all team assignments
    
### Designated Meeting Scheduler
- Connor Meads

### Scrum Master
- Dallin Larsen

## Version Control Procedures
We are  using GitHub to manage our version control. @brent-buffenbarger has a master repository that the other members of Bagel Farm have forked and work in. When a member of the group has work that is ready to be integrated into the project, a pull requeste is submitted to the master repository and each member of the group will do a code review and approve or deny the pull request.

## Tool stack description & setup procedure
All of the following items in our toolstack are fairly light-weight, so each developer will install each tool on their local machine and work from there. Developers will be sure to install the latest versions of the tools so we are all working in similar environments. If we want to make sure everybody is working in identical environments, we can use Docker to setup development environments. However, for this project using Docker would be overkill.


- **Python**: This will be used as the main back end programming language
- **Django**: Web server framework we will be using
- **React**: Front end framework we will be using
- **SQLite**: Database package we will be using
- **Git**: Version control software
- **Creately**: Diagram software

## Build instructions
- To build the React portion of the project, you can run `npm run build` in the working directory of the React project.
- After building the React files, you can place the compiled files into the Django project.
- To finish the build process, you can `cd` into the Django project directory and run `python manage.py runserver` and the build process is complete.

## Unit Testing Instructions
- We are going to use the built in unit testing framework the Python provides to write unit tests
- The majority of our tests will involve the test sending fake requests to the database and checking to see if the query returns the expected results
- To run the unit tests, we will compile all the tests into a single executable which we can run to make sure the tests are passing

## System Testing Instructions
- For every requirement we have, all the developers will go through and manually test the functionality and look for bugs
    - If we can find outside users to help test, we will use them to get more viewpoints on each requirement
