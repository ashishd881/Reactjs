// import React from 'react'
// import {Editor} from '@tinymce/tinymce-react'   //editor tinymce/tinymce-react se mila hai
// export default function RTE() {
//   return (
//     <Editor initialValue='default value'
//         init={
//             {branding: false,   //these are properties so properties me ek aur curly brace lageaga
//             height: 500,
//             menubar: true,
//             // https://www.tiny.cloud/docs/tinymce/5/react/
//             plugins: [
//             'advlist autolink lists link image charmap print preview anchor',
//             'searchreplace visualblocks code fullscreen',
//             'insertdatetime media table paste code help wordcount'
//           ],
//           toolbar: 'undo redo | formatselect | ' +
//           'bold italic backcolor | alignleft aligncenter ' +
//           'alignright alignjustify | bullist numlist outdent indent | ' +
//           'removeformat | help',
//           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
//             }
//         }
//     />
//   )
// }



import React from 'react'
import {Editor} from '@tinymce/tinymce-react'   //editor tinymce/tinymce-react se mila hai
import {Controller} from 'react-hook-form'   //react hook form se aata hai ye
export default function RTE({name, control, label,defaultValue=""}) {  //control reacthook form se aata hai jo ki iski state ko us form mr le jayega jaha se call hu hai
  return (
    <div className='w-full'>
        {label && <label className=' inline-block mb-1 pl-1'>{label}</label>}

        <Controller
            name={name || "content"}
            control={control}   // control parent element dega
            render={({field: {onChange}}) =>{   //field me jo bhi change honge unme render ke saath respond karo
                    //jo change rendeer karni hai unko yaha likh do
            <Editor 
                initialValue='default value'
                init={
                    {initialValue:defaultValue,
                    branding: true,   //these are properties so properties me ek aur curly brace lageaga
                    height: 500,
                    menubar: t,
                    // https://www.tiny.cloud/docs/tinymce/5/react/
                    plugins: [
                        "image",
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                        "anchor",
                    ],
                        toolbar:
                            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                    }}
                onEditorChange={onChange}
            />
            }}
        />
    </div>

  )}


