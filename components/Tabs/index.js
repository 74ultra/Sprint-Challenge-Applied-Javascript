// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabBar = document.querySelector('.topics');

console.log(tabBar);

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        
        const topicsArray = response.data.topics;
        
        topicsArray.forEach(item => {
            tabBar.appendChild(tabCreator(item))
        })
    })

    .catch(error => {
        console.log('There is an error: ', error)
    })



function tabCreator(arryItem){

    // Create DOM element

    const tab = document.createElement('div')


    // Set class

    tab.classList.add('tab');


    // Set text / content

    tab.textContent = arryItem;

    
    return tab;


}