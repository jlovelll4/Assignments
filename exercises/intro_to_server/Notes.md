* Resource
    - An individual piece of data = {} (An object)

* Collection
    - An array of objects (more than one object) - AKA, a collection of similar resources. 
    
* Base (root) URL
    - www.google.com
    
* API Endpoint 
    - www.google.com/images
    
* RESTful API endpoint examples
    - Representational State Transfer
    - www.google.com/images
    
    - www.campingisgood.com
        - tents
        -equipment
        -sleepingbags
        -cookware
        -sleepware
        
    www.campingisgood.com/api/v1/equipment/tents
    www.campingisgood.com/api/v1/equipment/sleepingbags
    
* Client
    - Front end - device

* Server
     1. Listens
     2. Sends responses 

* Request Method
    1. GET (Get all - Collection)
    2. POST
    3. PUT
    4. DELETE
    5. GET ONE (Get one specific - Resource)

* Middleware
    - express.json - we receive user object on POST & PUT requests
    - morgan       - debugging

* req.body
    - The object a user sends in a POST or PUT request

* req.params
    - Typically used to send an ID in a GET ONE request 
    - Also used for PUT and DELETE requests
    // frontend
    axios.get("campingisgood.com/tents/238979792)
    // backend
    app.get("campingisgood.com/tents/:id)

* req.query 
    - Filtering out items from a collection
    ?color=blue&age=10