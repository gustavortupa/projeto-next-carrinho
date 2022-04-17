import {GetStaticProps} from 'next'
interface Post { // representa 1 post
    id: string;
    title: string;
}
  
interface Posts { // representa vetor de posts
    posts: Post[]
}

export default function Posts({posts}: Posts){
    return (
        <div>
            <h1> Posts </h1>
                <ul>
                {posts.map( post => (
                    <li key={post.id}> {post.title} </li>
                ))}
            </ul>
    </div>
    )
}

export const getStaticProps: GetStaticProps<Posts> = async() => {
  const response = await fetch('http://localhost:3333/posts')
  const posts = await response.json()
  return {
    props: {
      posts // posts vai para o componente
    },
    revalidate: 5000
  }
}