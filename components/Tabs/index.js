// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
 const attachTabs = document.querySelector('div.topics')


function tabMaker(entry){

    const mountTab = document.querySelector('span.title')
    entry.forEach(item => {
        let newTab =  document.createElement('div')
        newTab.textContent = item
        mountTab.appendChild(newTab)
})

return mountTab
}


//console.log(tabMaker)
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(result => {
        //console.log(result.data.topics)
        const newTab = tabMaker(result.data.topics)
        attachTabs.appendChild(newTab)
        //console.log(newTab)
    })
        
    .catch(error => {
        //console.log('fail')
    })