import React ,{useState,useEffect}from 'react'
import appwriteService from "../appwrite/config"
import { useNavigate } from 'react-router-dom'
import { Container,PostCard } from '../components'
function AllPost() {
    const [posts,setPosts] = useState([])
    useEffect(() => {},[])
    appwriteService.getposts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
      <Container>
       <div className='flex flex-wrap'>
            {posts.map((post) =>{
                <div key={post.$id} className='p-2 w-1/3'>
                    <PostCard post={post}/>
                </div> 
            })}
        </div>
      </Container>
    </div>
  )
}

export default AllPost
