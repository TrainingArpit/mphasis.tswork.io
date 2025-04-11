function addarticle(article) {
    console.log("Article added:", article);
}
var newArticle = {
    title: "TypeScript in CMS",
    content: "This article explains how to use Typescript in a CMS.",
    author: { name: "John Doe", email: "john@example.com" },
    tags: [{ name: "Typescript" }, { name: "CMS" }]
};
addarticle(newArticle);
