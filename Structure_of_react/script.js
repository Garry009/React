const mainContainer=document.querySelector('#root')

const reactElement=
{
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    }
    ,
    context:"Click Me"
};

function customRender(reactElement,mainContainer)
{
    const DomElement=document.createElement(reactElement.type)
    // DomElement.setAttribute('href', reactElement.props.href)
    // DomElement.setAttribute('target', reactElement.props.target)
    // DomElement.innerHTML= reactElement.context
    // mainContainer.appendChild(DomElement)

    for(const prop in reactElement.props)
    {
        DomElement.setAttribute(prop,reactElement.props[prop])        
    }
     DomElement.innerHTML= reactElement.context
     mainContainer.appendChild(DomElement)
     
}

customRender(reactElement,mainContainer)