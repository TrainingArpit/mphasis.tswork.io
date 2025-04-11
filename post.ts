interface Comment {
    id: number;
    content: string;
    author: string;
    postId: number;
    }
    interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    comments: Comment[];
    }
    class Blog {
    private posts: Post[] = [];
    addPost(post: Post): void {
    this.posts.push(post);
    }
    getPosts(): Post[] {
    return this.posts;
    }
    addComment(postId: number, comment:
    Comment): void {
    const post = this.posts.ind(p => p.id ===
    postId);
    if (post) {
    post.comments.push(comment);
    }
    }
    }
    const newPost: Post = {
    id: 1,
    title: "My First Blog Post",
    content: "This is the content of my 􀏐irst blog post.",
    author: "Jane Doe",
    comments: []
    };
    const newComment: Comment = {
    id: 2,
    content: "Great post!",
    author: "John Doe",
    postId: 1
    };
    const blog = new Blog();
    blog.addPost(newPost);
    blog.addComment(1, newComment);
    console.log(blog.getPosts());
