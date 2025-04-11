interface Author {
    name: string;
    email:string;
}
 interface Tag{
    name:string;
 }
 interface Article{
    title:string;
    content:string;
    author:Author;
    tags:Tag[];
 }
 function addarticle(article:Article):void{
    console.log("Article added:",article);
 }

  const newArticle:Article={
    title:"TypeScript in CMS",
    content:"This article explains how to use Typescript in a CMS.",
    author:{name:"John Doe",email:"john@example.com"},
    tags:[{name:"Typescript"},{name:"CMS"}]
  };
  addarticle(newArticle);
  