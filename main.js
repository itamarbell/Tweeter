// When the user clicks on the Twit button, you should grab the value from the big 
// input and create a new post
// Notice that you already have an addPost function in your Tweetermodule - invoke it!
const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())


$("#post").on("click", function () {
    tweeter.addPost($("#input").val())
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".delete", function () {
    tweeter.removePost($(this).closest($(".post")).data("id"))
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".comments", function () {
    tweeter.addComment( $(this).closest(".post").find("#comment-input").val() , $(this).closest($(".post")).data("id") )
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".delete-comment", function () {
    tweeter.removeComment( $(this).closest($(".post")).data("id") , $(this).closest(".comment").data("id") )
    renderer.renderPosts(tweeter.getPosts())
})
// When the Comment button is pressed, again use DOM Traversal to get the ID of the post,
//  then grab the text to be added, and invoke your addCommentfunction.
// The DOM Traversal for this one might be a little tricky,
//  but you've seen something similar before - you can do it!
// comments