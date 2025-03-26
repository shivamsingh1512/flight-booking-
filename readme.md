### read me file
### Flight Booking 
- user sign in 
- user login

### models  

-  user = {name , lname , email,gender, contact , password , age , avatar}.
-  flight = { ref , from , to , date, departure_time , price ,total_seats , seats_Availabe , status}.
-  

### routes 
  ### user routes
-  post/api/signup
-  post/api/login
-  get/api/getProfile
-  post/api/ticketBooking
-  post/api/ticketCancellation
-  get/api/ticketStatus
-  get/api/tickethistory

  ### ticket Routes
-  get/set_Availability
-  post/createTicket
-  get/allTicket
-  post/deleteTicket
-  get/ticketStatus

### requirements 
-  npm init 
-  npm i express