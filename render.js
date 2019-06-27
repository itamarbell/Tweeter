
const Renderer = function () {

    const renderPosts = function (posts) {
        $("#posts").empty()                  //make the posts part empty in the beginning for every call
      

        for (let post of posts) { // post = one post from the posts array - loop !

            let postTEXT = post.text
            let postID = post.id
          
            $("#posts").prepend(`<div class=post data-id=${postID}><p class=post-text>${postTEXT}</p><div><br>`);   // here we put the text post in html
            // * the postID - in the first loop = 1
            // * the postID - in the second loop = 2
            const livePosts = $(".post")   // the object posts that in the dom now = is object beacse i put it in jquery =$("") 

            for (let LP of livePosts) {      // take out the html element from the object (the div )
                            // = <div class=post.... </div>
                const LPID = $(LP).data().id       // return the div data-id
                if (LPID === postID) {    // if:  div data-id === postID (div data-id ) * from THE BEGINING of the loop ^
                    for (let comments of post.comments) {    // take the comment from the comment object
                        let commentText = comments.text
                        // console.log(commentText) 
                        let commentID = comments.id
                        // console.log(commentID) 

                        $(LP).append(`<p class=comment data-id=${commentID}><span class=delete-comment>X </span>${commentText}</p>`)   // we put the p in $(p) to use the ver in jquery- p is variable (in this case is dynamic div)

                    }
                    $(LP).append(`<input type="text" placeholder="Got something to say?" id="comment-input">`)
                    $(LP).append(`<button class=comments type="button">Comment</button>`)
                    $(LP).append(`<div ><button class=delete  type="button">Delete Post</button><div>`)

                }
            }
        }
    }
    return {
        renderPosts

    }

}


// }
// // tweeter Render module 
// // The veiw !
// //rendering module which takes the data from the logic module and renders it.
// //1 The function should first empty the #posts element
// //2 (loop) through (each post in the posts array) and (append some HTML to #posts)
// //   Use jQuery to create and add the elements
// //   Functions are your friends
// //! Notice that( each post has its own text, as well as the text of its comments)
// // You need to (generate the HTML for both)
// //Make sure you're ( adding each post and comment's ID in a data-id attribute)
// //3 Use the CSS below for styling - you should be able to figure out which elements receive which class
// //=====================================================================================================
// const Renderer = function(){
//     const renderPosts = function(posts) {
//         $("#posts").empty()                  //make the posts part empty in the beginning for every call
//         // console.log(posts)

//             for ( let post of posts) {      // post = one post from the posts array - loop !
//                 let postTEXT = post.text     
//                 let postID = post.id
//                 // console.log(postTEXT)
//                 // console.log(post)

//                 $("#posts").append(`<div class=post data-id=${postID}><p class=post-text>${postTEXT}</p><div><br>`);   // here we put the text post in html
//                 // * the postID - in the first loop = 1
//                 // * the postID - in the second loop = 2
//                 const livePost = $(".post")   // the object posts that in the dom now = is object beacse i put it in jquery =$("") 

//                 console.log(livePost)
//                 for ( let p of livePost ){      // take out the html element from the object (the div )
//                 console.log(p)                   // = <div class=post.... </div>
//                 const pID = $(p).data().id       // return the div data-id
//                 console.log($(p).data().id) 
//                      if ( pID === postID ) {    // if:  div data-id === postID (div data-id ) * from THE BEGINING of the loop ^
//                         for ( let comments of post.comments ) {    // take the comment from the comment object
//                             let commentText = comments.text
//                             // console.log(commentText) 
//                             let commentID = comments.id
//                             // console.log(commentID) 

//                              $(p).append(`<p class=comment data-id=${commentID}><span class=delete-comment>X </span>${commentText}</p>` )   // we put the p in $(p) to use the ver in jquery- p is variable (in this case is dynamic div)

//                         }
//                         $(p).append(`<input type="text" placeholder="Got something to say?" id="comment-input">` )
//                         $(p).append(`<button class= comments type="button">Comment</button>`)
//                         $(p).append(`<div ><button class=delete  type="button">Delete Post</button><div>`)

//                      }
//                  }              
//             }
//     }
//         return {
//             renderPosts

//         }

// }

// // for (let post of posts) {
// //     let postText = post.text

// //     let Renderpost = $(`<div class="post" data-id=${post.id}>
// //     <p class="post-text">${postText}</p>
// //     <div class="comments"> </div>
// //     </div>`)
// //     $("#posts").append(Renderpost);


// //     const allposts = $(".post")
// //     for (let p of allposts) {
// //         if ($(p).data().id == post.id) {
// //             let currentPost = $(p)
// //             for (let comment of post.comments) {
// //                 let commentsText = comment.text
// //                 let Rendercomments = $(`<div data-id=${comment.id}><i class="fas fa-trash-alt"></i><span>${commentsText}</span></div>`)

// //                 currentPost.find(".comments").append(Rendercomments);  
// //             }
// //         }
// //     }
// // } 
// // $(".post").append(`<input class="delete" type="button">`) 