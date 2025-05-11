import React,{useCallback,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import appwriteService from "../../appwrite/config"    //export deafaukt kiya hai toh naam change kar sakte hai
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {
    const {register, handleSubmit , watch , setValue, control ,getValues} = useForm({   //kisi field ko continously monitor karna hai set karna hai  control karna hai aur values cahiyea toh useForm ka use karnege
        defaultValues:{
            title: post?.title || '',   //agar post hai toh uska title usekar lo nahi toh empty rakh do
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    }) 

    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)  //userData useSelector ki madat se state se le liya
    //agar post hai oth update karo nahi toh ek nayi entry create karo
    const submit = async(data) => {
        if(post){
            const file = data.image[0] ? await appwriteService.UploadFile(data.image[0]) : null  //pheli imeage le li
            
            if(file){
                appwriteService.deleteFile(post.featuredImage)
            }
            const dbPost = await appwriteService.updatePost(post.$id,{
                ...data,
                featuredImage: file ? file.$id : undefined,})
                
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
            
        
        }
        else
        {
            //user naya form create karna chata hai 
            const file =  await appwriteService.UploadFile(data.image[0])

            if(file){
                const fileId = file.$id 
                data.featuredImage = fileId
                const dbPost = await appwriteService.createPost({...data, 
                    userId : userData.$id,
                })
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }
    const slugTransform = useCallback((value) =>{    //input field hai title aur slug title ko watch karna hai aur slug ke andar value generate karni hai space ko dash me convert karna hai
        if(value && typeof value === 'string')
        {
            // const slug = value.toLowerCase().replace(/ /g,'-')  /// / — A regular expression that matches a single space character.
            // setValue('slug', slug)
            // return slug
            return value
                        .trim()
                        .toLowerCase()
                        .replace(/^[a-zA-Z\d\s]+/g,'-')    //replace me regex ka use kar liya this is a global match and combination jo ki square bracket ke andar hai usko negate ka diya mtlb jo square bracket me hai usko  match karna d= digit and s=space inko chod ke sab ko dash se replace kar diya
                        .replace(/\s/g,'-')            //globaly saaare spaces ko dekha aur - se replace kar diya
        }
        return ''   //return kar diya empty string ko

    },[])   

    useEffect(()=>{
        const subscription =  watch((value,{name})=>{  //subscription banya watch method se watch reacthook form se mila hai 
            if(name === 'title'){
                setValue('slug', slugTransform(value.title,{shouldValidate: true}))  //value is object here
            }
        })
            return() =>{
            subscription.unsubscribe()         //return ke andar useEffect me callback milta hai aue is se hum optimization kiya hai
        }
    },[watch,slugTransform,setValue])  

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                  label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default PostForm
