var elFrom = document.querySelector(`.form`);
var elInputCompanyName = elFrom.querySelector(`#exampleFormControlInput1`);
var elInputJobTitle = elFrom.querySelector(`#exampleFormControlInput2`);
var elInputSalary = elFrom.querySelector(`#exampleFormControlInput3 `);
var elCardsList = document.querySelector(`#cards-list`);

var allJobs = [];

function renderAllJobs() {

    elCardsList.innerHTML = null;

    for(var index = 0; index < allJobs.length; index++){

        var elLi = document.createElement(`li`);
        elLi.innerHTML = `
            <div class="card border-dark mb-3">
              <p class="card-header">ID: <strong>${allJobs[index].id}</strong></p>
              <div class="card-header"><h5>${allJobs[index].title}</h5></div>
              <div class="card-body">
                    <p class="card-title">Company: <strong>${allJobs[index].name}</strong></p>
                    <p class="card-text">Salary: <strong>${allJobs[index].salary}</strong></p>
              </div>
            </div>
      `;

       elCardsList.appendChild(elLi);
    }
}

function onSubmit(evt) {
    evt.preventDefault();
    var newJob = {
        id: allJobs.length,
        name: elInputCompanyName.value.trim(),
        title: elInputJobTitle.value.trim(),
        salary: elInputSalary.value.trim(),
    };

    allJobs.push(newJob);

    elInputCompanyName.value= null;
    elInputJobTitle.value= null;
    elInputSalary.value= null;

    renderAllJobs(allJobs);
}
elFrom.addEventListener(`submit`,  onSubmit );