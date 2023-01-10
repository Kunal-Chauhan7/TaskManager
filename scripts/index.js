const state = {
    tasklist:[],
};

const taskContents = document.querySelector(".task_content");
const taskModal = document.querySelector(".task_modal_body");

//const htmlcreate = ({
//    title,
//    type,
//    url,
//    description
//}) => {
//    return' html code';
//}

const htmltaskContent = ({
    title,
    type,
    url,
    description
}) => `
    <div class="col-md-6 col-md-4 mt-3" id=${id} key=${id}>
        <div class = "card shadow-sm task_card">
            <div class = "card-header d-flex justify-content-end task_end_header">
                <button type = "button" class ="btn btn-outline-info mr-2" name = ${id}>
                    <i class="fas fa-pencil-alt" name = ${id}></i>
                </button>
                <button type = "button" class ="btn btn-outline-danger mr-2" name = ${id}>
                    <i class="fas fa-trash-alt" name = ${id}></i>
                </button>
            </div>
            <div class="card-body">
                ${
                    url && `<img src = ${url} with="100%" alt = "any image of the task" class = "card-image-top md-3 rounded-lg"/>`
                }
                <h4 class="task_card_title">
                    ${title}
                </h4>
                <p class="task_card_description trim-3-lines text-muted data-gram_editor='false'>
                    ${description}
                </p>
                <div class"tags text-white d-flex flex-warp">
                    <span class"badge bg-primary m-1">
                        ${type}
                    </span>
                </div>
            </div>
            <div class="card-footer">
                <button type = " button" class = "btn btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target="Showtask"></button>
            </div>
        </div>
    </div>
`;

const htmlmodalcontent = ({
    id,
    title,
    url,
    description
}) =>{
    const date = new Date(parseInt(id));
    return`
        <div class"${id}">
            ${
                url && `<img src = ${url} width = "100%" alt = "any image of the task" class = "card-image-top md-3 rounded-lg img-fluid place_holder_image"/>`
            }
            <strong class="text-sm text-muted">
            Creaton on ${date.toDateString()}
            </strong> 
            <h2 class = 'my-3'>
            ${title}
            <p class='Lead'>
            ${description}
            </p>
            </h2>
        </div>
    `
};

const updateLocalStorage = () =>{
    localStorage.setItem("tasks",JSON.stringify({
        tasks : state.tasklist,
    }))
};

const getinitaldata = () =>{
    const localStoragecopy = JSON.parse(localStorage.tasks);
    if(localStoragecopy) state.tasklist = localStoragecopy.tasks;
    state.tasklist.map((cardata)=>{
        taskContents.insertAdjacentElement("beforeend",htmltaskContent(cardata));
    });
};

const handelsubmit = (event)=> {
    const id = `${Date.now()}`;
    const input = {
        url : document.getElementById('input-image').value,
        title : document.getElementById('Task-Title').value,
        description : document.getElementById('Task-Description').value,
        type : document.getElementById('Task-Type').value
    };
    taskContents.insertAdjacentElement("beforeend",htmltaskContent({
        ...input,
        id,
    })
    )
    state.tasklist.push({...input,id});
    updateLocalStorage();
};