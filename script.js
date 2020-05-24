const calculate = ()=>
{

    const fName = document.querySelector('#firstName').value;
    const sName = document.querySelector('#secondName').value;

    document.querySelector('.fname').innerHTML = fName;
    document.querySelector('.love').innerHTML = "Loves";
    document.querySelector('.sname').innerHTML = sName;

    let chars = `${fName}loves${sName}`.toUpperCase().split("");

    let result = "";
    while(chars.length > 0)
    {
        let char = chars[0];
        let occur = 1;
        for(let i = 1; i < chars.length; i++)
        {
            if(char == chars[i])
            {
                chars.splice(i, 1);
                occur++;
            }
        }
        chars.splice(0, 1);
        console.log(`char: ${char} occur ${occur} times`);
        result += occur;
    }
    const calculations = document.querySelector('.calculations');
    calculations.innerHTML = `<p class="text-center">${result}</p>`;

    while(true)
    {
        let pTags = calculations.querySelectorAll('p');
        let lastP = pTags[pTags.length - 1].innerText.split("");

        if(lastP.length < 3)
        {
            break;
        }

        let newP = ""; 
        while(lastP.length > 0)
        {
            if(lastP.length == 1)
            {
                newP += lastP[0];
                lastP.splice(0, 1);
            }
            else
            {
                newP += parseInt(lastP[0]) + parseInt(lastP[lastP.length - 1]);
                lastP.splice(0, 1);
                lastP.splice(lastP.length - 1, 1);
            }
        }
        calculations.innerHTML += `<p class="text-center">${newP}</p>`;
    }
    let pTags = calculations.querySelectorAll('p');
    let lastP = pTags[pTags.length - 1];
    lastP.innerText += "%";
    lastP.classList.add('percentage');

    return false;
}