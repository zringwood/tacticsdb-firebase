# tacticsdb-firebase
This is a RESTful API that queries a NoSQL database hosted on Cloud Firestore. 

Routes:
GET: /middlegames/:difficulty/:id
   
   Returns a middlegame puzzle with the given difficulty (easy, medium, hard, grandmaster, engine) and the given id. Each puzzle has a unique id relative to the difficulty. 

GET: /endgames/:difficulty/:id 
   
   Returns an endgame puzzle with the given difficulty (easy, medium, hard, grandmaster, engine) and the given id. Each puzzle has a unique id relative to the difficulty. 

GET: /introduction/easy/:id 
   
   There are two introductory puzzles that are hardcoded into the API. This route does not query Cloud Firestore. The only valid IDs are 1 and 2. 

To get API working on a local machine you'll need a .env file with the permissions. I'd be happy to provide a file if you reach out to me either on github or at zringwood@gmail.com. 

This api can be queried at https://tacticsdb-firebase-wqrtz47qla-uc.a.run.app/. The CORS policy on the API is set to only work with zacharyringwood.com, so that must be changed to run it on localhost. 
