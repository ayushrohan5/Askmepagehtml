const submenu = document.getElementById("submenus");
// console.log(submenu)
submenu.addEventListener(
    "mouseover",
    () => {
       var submenu_toggle = document.getElementById("dropdown_ul"); 
        // console.log(submenu_toggle);
        submenu_toggle.classList.add('show');
})
const submenu2 = document.getElementById("dropdown_ul");
submenu2.addEventListener(
    "mouseleave",
    () => {
        var submenu_toggle = document.getElementById("dropdown_ul"); 
        // console.log(submenu_toggle);
        submenu_toggle.classList.remove('show');
})


const hire_developers = document.getElementById("hire_developers");
// console.log(hire_developers)
hire_developers.addEventListener(
    "mouseover",
    () => {
       var submenu_toggle = document.getElementById("hire_dev"); 
        // console.log(submenu_toggle);
       submenu_toggle.classList.add('show');
})
const hire_developers2 = document.getElementById("hire_dev");
hire_developers2.addEventListener(
    "mouseleave",
   () => {
      var submenu_toggle = document.getElementById("hire_dev"); 
        // console.log(submenu_toggle);
        submenu_toggle.classList.remove('show');
})

const industries = document.getElementById("industries");
// console.log(submenu)
industries.addEventListener(
    "mouseover",
    () => {
        var submenu_toggle = document.getElementById("industries_ul"); 
        // console.log(submenu_toggle);
        submenu_toggle.classList.add('show');
})
const industries2 = document.getElementById("industries_ul");
industries2.addEventListener(
    "mouseleave",
    () => {
        var submenu_toggle = document.getElementById("industries_ul"); 
        // console.log(submenu_toggle);
        submenu_toggle.classList.remove('show');
})

const company = document.getElementById("company");
// console.log(company)
company.addEventListener(
    "mouseover",
    () => {
        var submenu_toggle = document.getElementById("company_ul"); 
        submenu_toggle.classList.add('show');
})
const company2 = document.getElementById("company_ul");
company2.addEventListener(
    "mouseleave",
    () => {
        var submenu_toggle = document.getElementById("company_ul"); 
        submenu_toggle.classList.remove('show');
})


// Get json data 

/* const group_companies = document.getElementById("group_companies");
group_companies.addEventListener("click",async ()=>{
    async function fetchData(){
        const jsonfilepath = 'task.json';
        const res = await fetch(jsonfilepath);
        const data = await res.json();
        // console.log(data);
        return data
    }
    const jsonData = await fetchData();
    console.log(jsonData)
    const companies_info = document.getElementById("companies_info");
    // console.log(companies_info);
    console.log(jsonData.user.id)
    companies_info.innerHTML = `<h3>${jsonData.user.username} </h3>`;
}) */
/* const technology_partners = document.getElementById("technology_partners");
technology_partners.addEventListener("click",async ()=>{
    async function fetchData(){
        const jsonfilepath = 'task.json';
        const res = await fetch(jsonfilepath);
        const data = await res.json();
        // console.log(data);
        return data
    }
    const jsonData = await fetchData();
    console.log(jsonData)
    const companies_info = document.getElementById("companies_info");
    // console.log(companies_info);
    console.log(jsonData.user.id)
    companies_info.innerHTML = `<h3>${jsonData.user.fullName} </h3>`;
})

const meet_our_team = document.getElementById("meet_our_team");
meet_our_team.addEventListener("click",async ()=>{
    async function fetchData(){
        const jsonfilepath = 'task.json';
        const res = await fetch(jsonfilepath);
        const data = await res.json();
        // console.log(data);
        return data
    }
    const jsonData = await fetchData();
    console.log(jsonData)
    const companies_info = document.getElementById("companies_info");
    // console.log(companies_info);
    console.log(jsonData.user.id)
    companies_info.innerHTML = `<h3>${jsonData.user.email} </h3>`;
})
const explore_oppurtunities = document.getElementById("explore_oppurtunities");
explore_oppurtunities.addEventListener("click",async ()=>{
    async function fetchData(){
        const jsonfilepath = 'task.json';
        const res = await fetch(jsonfilepath);
        const data = await res.json();
        // console.log(data);
        return data
    }
    const jsonData = await fetchData();
    console.log(jsonData)
    const companies_info = document.getElementById("companies_info");
    // console.log(companies_info);
    console.log(jsonData.user.id)
    companies_info.innerHTML = `<h3>${jsonData.user.username} </h3>`;
})


*/
 
const tabs = document.querySelectorAll(".paraTab");
tabs.forEach(tab => {
    tab.addEventListener("click", async (event) => {
       //console.log("event---", event.target.getAttribute("data-index") );
       const dataIndex = event.target.getAttribute('data-index');
      
      const task1= await fetch('task.json')
      const task= await task1.json();
      const item = task[dataIndex];
      document.getElementById("companies_info").innerHTML= `<h3> ${item.Title}</h3>${item.Description}`;
     
    })
})




