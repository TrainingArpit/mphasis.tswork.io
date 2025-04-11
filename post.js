var Blog = /** @class */ (function () {
    function Blog() {
        this.posts = [];
    }
    Blog.prototype.addPost = function (post) {
        this.posts.push(post);
    };
    Blog.prototype.getPosts = function () {
        return this.posts;
    };
    Blog.prototype.addComment = function (postId, comment) {
        var post = this.posts.ind(function (p) { return p.id ===
            postId; });
        if (post) {
            post.comments.push(comment);
        }
    };
    return Blog;
}());
var newPost = {
    id: 1,
    title: "My First Blog Post",
    content: "This is the content of my 􀏐irst blog post.",
    author: "Jane Doe",
    comments: []
};
var newComment = {
    id: 2,
    content: "Great post!",
    author: "John Doe",
    postId: 1
};
var blog = new Blog();
blog.addPost(newPost);
blog.addComment(1, newComment);
console.log(blog.getPosts());
