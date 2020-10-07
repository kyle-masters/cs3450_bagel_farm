#Classes

1. Accounts [Customer, Chef, Cashier, Manager]
    - Fields
        1.1. Type
        1.2. Email
        1.3. First Name
        1.4. Last Name
        1.5. Password
        1.6. Phone #
        1.7. Id

2. Products
    - Fields
        2.1. Name
        2.2. Promotion ID
        2.3. Price
        2.4. Stock #
        2.5. Item id

3. Orders
    - Fields
        3.1. Items[]
        3.2. Total price
        3.3. Status
        3.4. Account ID (of who ordered)
        3.5. Order time
        3.6. Pickup time

4. Promotions
    - Fields
        4.1. Title
        4.2. Description
        4.3. Limitations (only use x amount)
        4.4. End-time
        4.5. # honored (first 100 for example)
        4.6. Promotion ID
        4.7. Start-time
        4.8. List of item IDs that promotion applies to

5. Settings

6. Previous orders/Favorites
    - Fields
        6.1. Order ID
        6.2. User ID
