# Phase 3 Project
Flatiron School's Phase 3 was all about Ruby! This was the first backend-focused phase, and the first full-stack phase end project. This project has two models in the backend: dogs and breeds. The frontend shows the data from both of these models; dogs on the dogs page, and breeds on the breeds page. Each detailed dog page shows information about that dog's breed, and each breed card has up to 10 dogs with their likes displayed to showcase the relationships and state management.     
To satisfy project requirements, full CRUD capability was needed for at least one of the models. The dogs model has full CRUD, while the breeds model is missing the DELETE part. There is an "add dog" form which also has an "add breed" form that shows only when "add breed" is selected from the dropdown. There is also an "adopt dog" feature that removes the dog from the dog model. This is to satisfy the DELETE requirement. To provide the UPDATE, a "like" button was added to each dog.

### Project Requirements
- Use Active Record to interact with a database.
- Have at least two models with a one-to-many relationship.
- At a minimum, set up the following API routes in Sinatra:
  - create and read actions for both models
  - full CRUD capability for one of the models
- Build a separate React frontend application that interacts with the API to
  perform CRUD actions.
- Implement proper front end state management. 
    - do NOT rely on GET to update state after a POST, PATCH, or DELETE request
- Use good OO design patterns. You should have separate classes for each of your
  models, and create instance and class methods as necessary. 
- Routes in your application (both client side and back end) should follow RESTful
  conventions.
- Use your back end optimally. Pass JSON for related associations to the front 
  end from the back end.

[Frontend Repository](https://github.com/costabileisa/phase-3-frontend/commits/main)    
[Backend Repository](https://github.com/costabileisa/phase-3-sinatra-react-project)    
[YouTube Link](https://youtu.be/sHPcEWTQ-sk)    
[Phase 3 Blogpost](https://costabileisa.medium.com/if-else-vs-ternary-vs-switch-e0a32c58f833)