const btnAdd = document.querySelector('.btn-add')

const taskList = document.querySelector('.list-check-sec')

const arrText = [
    'Create initial layout for Homepage',
    'Discussions regarding workflow improvement',
    'Fixing icons with transparant background'
]

let labelTxt = arrText[Math.floor(Math.random() * arrText.length)]

btnAdd.addEventListener('click', addClick)

function addClick() {
    console.log('terklik')
    // alert('Tes')
    const li = document.createElement('div')
    li.className = 'checklist'
    
    const lbl = document.createElement('label')
    lbl.className = 'container-check'
    const txtLbl = document.createTextNode(labelTxt);
    lbl.innerHTML = `
    <input type="checkbox" checked="checked">
    <span class="checkmark"></span>
    `
    lbl.appendChild(txtLbl)

    const stts = document.createElement('div')
    stts.className = 'status waiting'
    const txtStts = document.createTextNode("Waiting");
    stts.appendChild(txtStts)


    li.appendChild(lbl)
    li.appendChild(stts)

    taskList.appendChild(li)
}