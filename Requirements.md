# Requirements

### Introduction & Context:
We are developing DBSOBMS (5.1). This web application will manage all the business processes of Dan's Bagels Shop, such as order processing, inventory management, and promotions. The application will run on a browser and can be customized by the shop manager.

Users on the site will be distinguished by their account type. The account types are customer, chef, cashier, and manager. The customers will be able to create an account, place orders, and manage their account preferences. The application is built to make the customers experience streamlined and intuitive. The customers will also be able to send the shop manager feedback.

The chef will have the role of processing and fulfilling orders. The chef's use of the program will be to view active orderis and update inventory. The chef will also be responsible for the movement of order statuses from 'Ordered' to 'Available  for pickup'.

The cashier will finish the order lifecycle when a customer collects their order by updating the order status to 'Complete'. If the customer does not collect their order, the cashier is responsible for donating the order to a charity.

The manager will have the role of updating and managing inventory. They will also be able to manage user accounts by updating account permissions. Promotions and notification rules will be another role of the manager. Also, the manager can act as any other staff member.

### 1.  Users and their goals:
- **1.1** Customer
    - **1.1.1** Streamlined ordering process
    - **1.1.2:** Manage account preferences
- **1.2:** Chef
    - **1.2.1:** Process and fill orders
    - **1.2.2:** Update inventory
- **1.3:** Cashier
    - **1.3.1:** Complete orders
    - **1.3.2:** Donate orders that are not picked up
- **1.4:** Manager
    - **1.4.1:** Update and manage inventory
    - **1.4.2:** Assign account permissions
    - **1.4.3:** Manage point system
    - **1.4.4:** Manage employee roles

### 2. Functional Requirements:
- **2.1:** Order placement & cancelation functionality
- **2.2:** Automatic notifications
    - **2.2.1:** Email preference
- **2.3:** Inventory management
    - **2.3.1:** Updates
    - **2.3.2:** Suggest refills
        - **2.3.2.1:** Base suggestions off of most popular items
    - **2.3.3:** Create new inventory items
    - **2.3.4:** There should be approximately 100 of each item in inventory at a given time
- **2.4:** Favorites
    - **2.4.1:** Modifications
        - **2.4.1.1:** Removals/Additions
- **2.5:** Past orders
    - **2.5.1:** Archive all orders
- **2.6:** Rewards
    - **2.6.1:** Point system
- **2.7:** Multi-user ordering
- **2.8:** Order tracking
    - **2.8.1:** Statuses:
        - **2.8.1.1:** Ordered
        - **2.8.1.2:** In Preperation
        - **2.8.1.3:** Ready
        - **2.8.1.4:** Complete
            - **2.8.1.4.1:** Donate
- **2.9:** Unique order-IDs
- **2.10:** User feedback
- **2.11:** Account management
    - **2.11.1:** Users can edit their personal information
    - **2.11.2:** Users can add funds to their accounts
    - **2.11.3:** Users can switch their account permission type
        - **2.11.3.1:** Customers are unable to do this
        - **2.11.3.2:** Chefs and Cashiers can switch between their staff position and Customer
        - **2.11.3.3:** Managers can switch to any role
    - **2.11.4:** Users automatically get $100.00 when they create an account

### 3. Non-functional Requirements:
 - **3.1:** Weekly developer meetings
 - **3.2:** Milestone deadlines
 - **3.3:** Toolset
     - **3.3.1:** Django
     - **3.3.2:** React.js
     - **3.3.3:** Python
     - **3.3.4:** SQLite3
     - **3.3.5:** GitHub
     - **3.3.6:** Creately

### 4. Future Features:
- **4.1:** Mobile application
- **4.2:** Order modifications
- **4.3:** Text message notifications
- **4.4:** Automate the cashier

### 5. Glossary:
- **5.1:** DBSOBMS: Dan's Bagel Shop Online Business Management System
- **5.2:** Donate: Donating food to a charity of Dan's choice
- **5.3:** Point System: 'Bagel Bucks'
- **5.4:** Notifications: User will be notified when their order changes status or when there is a current promotion
