import {GetServerSideProps} from 'next'
import Posts from './posts'

interface Post { // representa 1 post
  id: string;
  title: string;
}

interface Posts { // representa vetor de posts
  posts: Post[]
}

export default function Home({posts}: Posts) {
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
// função será executada antes do componente ser carregado
// representa o servidor node no frontend
export const getServerSideProps: GetServerSideProps<Posts> = async () => {
  const response = await fetch('http://localhost:3333/posts')
  const posts = await response.json()
  return {
    props: {
      posts // posts vai para o componente
    }
  }
}