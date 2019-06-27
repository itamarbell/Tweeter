const Tweeter = function () {
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];

    let postIdCounter = 2;
    let commentIdCounter = 6;

    const returnPostId = function (postID) {
        for (let index in _posts) {
            if (postID === _posts[index].id) {
                return (index);
            }
        }
    }

  
    const getPosts = function () {
        return _posts;
    }


    const addPost = function (text) {
        postIdCounter++;
        _posts.push({
            text: text,
            id: "p" + postIdCounter,
            comments: []
        })
    }

    const removePost = function (postID) {
        const index = returnPostId(postID);
        _posts.splice(index, 1);
    }

  
    const addComment = function (text, postID) {
        const index = returnPostId(postID);
        commentIdCounter++;
        _posts[index].comments.push({
            id: "c" + commentIdCounter,
            text: text
        })
    }

 
    const removeComment = function (postID, commentID) {
        const index = returnPostId(postID);
        for (let j in _posts[index].comments) {
            if (_posts[index].comments[j].id === commentID) {
                _posts[index].comments.splice(j, 1);
            }
        }
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}


