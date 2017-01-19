// Callbacks
// responce from server etc


// In making a request to a server - dont write this way
request = prepare_the_request( );
response = send_request_synchronously(request);
display(response);


// Better, this is because the request gets faster response
// synchronously vs asynchronously 
request = prepare_the_request( );
send_request_asynchronously(request, function (response) {
display(response);
});