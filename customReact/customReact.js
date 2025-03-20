function customRender(reactElement, mainContainer)
{
    // const domElement = document.createElement(reactElement.type) //ye hum dom element bana rahe hai createElement ke andar p likh dete toh paragraph create ho jata par we will create a modular function
    // //reactElement.type se a tag create hui hai but it is empty now
    // domElement.innerHTML =reactElement.children     //reactElement ka children dal diya
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // mainContainer.appendChild(domElement)


    // another method to make above code modular

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;     //agar props ke andar children hai toh ye chalega abhi nahi chalega
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)

}

const reactElement = {
    type:'a',             //a mtlb a tag ki bath ho rahi hai
    props: {              //props object hota hai:
            href: 'https://www.google.com/',
            target:'_blank'
    },
    children :'click me to visit google'                 
}

const mainContainer = document.querySelector('#root')
//ab reactElement ko render karna mtlb reactElement ko add kar de root ke andar


customRender(reactElement,mainContainer)         // ek function jiski argument are kis element inject karna hai aur kaha inject karna hai



//#########react hamara asie hi kaam karta hi