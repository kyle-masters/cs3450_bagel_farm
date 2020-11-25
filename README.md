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
**Front end build instructions**
- In order to run this project you need to have node.js installed on your machine with `npm` avalible from the command line.
- Once node.js is installed run this series of commands in the /dev/frontEnd/bagelfarm directory:
    - `npm install react`
    - `npm install react-router`
    - `npm install axios`
    - `npm start`
- The react server should start up and your default browser will pull up the website. Some features of our webiste don't work on browsers other than Chrome, so chrome is the best browser to use in order for all features to work well.

**Back end build instructions**
- If not already installed install python3 and have it accessible from the commmand line. Then run the following commands while in the /dev/backEnd/BagelFarm directory:
    - `pip install django`
    - `python3 manage.py migrate`
    - `python3 manage.py runserver 127.0.0.1:8080`

**Final instructions**

The website should now be fully operational. To register an account go to the registar tab on the website and fill in your information. You will be then be directed to the home screen. Your default account is a customer. A customer has limited permissions on the website so they won't be able to perform tasks like update orders, update inventory or manage accounts. In order to be able to do these tasks these are some example accounts for the respective roles:

    - A Manager Account has these credentials: 
        email: dan@theman.com
        password: Password
    - A Chef Account has these credentials:
        email: brad@therad.com
        password: Password
    - A Cashier Account has these credentials:
        email: matt@themoney.net
        password: Password

## Testing
- Overall our testing has largely been made up of acceptance testing. As we finish a feature that was outlined in the requirements we test it to ensure the requirement is being met.
- We have also done regression testing so as to ensure that working features aren't broken by the addition of new ones or bug fixes as we add new features.
- Part of our testing has been enlisting the help of non project members to use the software and give feedback on what is working and what isn't. 
- Our testing procedures have come largely from the requirement description. In order to test a requirement we perform the action that would result in the requirment passing and if it is passing then we move on. 
- Another form of testing that we have done is following our use case diagrams and trying each possible use case to determine if it is being fulfilled.

## Path To Sprint Documents:
- `docs/Sprints`
