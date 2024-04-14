// Create web server

Suggestion 1 
// Create web server for comment 
// Import module 
const express = require( •express • ) ; 
const router = express.Router(); 
const commentControUer = require(' ../controtlers/comment 
// Handle request 
router. 
router. 
router. 
router. 
get( • / ' , commentContr011er. comment_list); 
get( /create• , commentControUer. comment_create_ge 
post(' /create% 
commentControUer. comment_create_p 
get( • /:id/delete•, commentContr01ter. comment_delet 