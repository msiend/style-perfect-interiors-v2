function displayCtn(e) {
    document.querySelector('.ClientCtn').classList.add('hide');
    document.querySelector('.ClientCtn').classList.remove('block');
    document.querySelector('.VendorCtn').classList.add('hide');
    document.querySelector('.VendorCtn').classList.remove('block');
    document.querySelector(e).classList.add('block');
    document.querySelector('#cumon').innerText=(e=='.VendorCtn'?'Vendors':'Clients')
    document.querySelector('#cv-head').innerText=(e=='.VendorCtn'?'Vendors':'Clients')
 
}
function openAddClientsVendors(params) {
    document.getElementsByClassName('main')[0].classList.add('flow');
    document.querySelector('.addclient').classList.add('block');
}
function closeDropdown(e) {
    console.log(e)
    document.querySelector(e).classList.remove(`block`);
    document.getElementsByClassName('main')[0].classList.remove('flow');
}
function openUpdateClientsVendors(e) {
    let mainCtn = e.parentElement.parentElement.parentElement;
    let inputCtn = document.querySelector('.updateclient')
    inputCtn.children[0].dataset.id = mainCtn.querySelector('.ref').children[0].innerText
    inputCtn.querySelector('#category').value = mainCtn.dataset.type;
    inputCtn.querySelector('#name').value = (mainCtn.querySelector('.name').children[0].innerText).trim();
    inputCtn.querySelector('#contact').value = (mainCtn.querySelector('.contact').children[0].innerText).trim();
    // inputCtn.querySelector('#alt_contact').value = (mainCtn.querySelector('.alt_contact').innerText).trim();
    inputCtn.querySelector('#location').value = (mainCtn.querySelector('.location').children[0].innerText).trim();
    inputCtn.querySelector('#details').value = (mainCtn.querySelector('.details').children[0].innerText).trim();
    inputCtn.querySelector('#email').value = (mainCtn.querySelector('.email').innerText).trim();
    document.getElementsByClassName('main')[0].classList.add('flow');
    document.querySelector('.updateclient').classList.add('block');
}


async function AddClientsVendors(e) {
    let inputCtn = e.parentElement.parentElement;
    let cat = inputCtn.querySelector('#category').value;
    let name = inputCtn.querySelector('#name').value;
    let contact = inputCtn.querySelector('#contact').value;
    let alt_contact = inputCtn.querySelector('#alt_contact').value;
    let location = inputCtn.querySelector('#location').value;
    let details = inputCtn.querySelector('#details').value;
    let email = inputCtn.querySelector('#email').value;
    data = { name: name, contact: contact, alt_contact: alt_contact, location: location, details: details, email: email };
    ReqHandler.POST(window.location.origin + `/admin/user-manager/${cat}s/create`, data)
        .then((res) => { 
            if (res.status) {
            AlertNotify('Success', res.msg, 'success') ;
            name='';contact=''; alt_contact='';location=''; details=''; email='' ;
            }
         })
        .catch(err => {
            AlertNotify('Success', 'Error While adding ', 'error') 
            console.log('Error(fn-AddClientsVendors):' + err);
        })
        
}
function UpdateClientsVendors(e) {
    let inputCtn = e.parentElement.parentElement;
    let id =inputCtn.dataset.id;
    let cat = inputCtn.querySelector('#category').value;
    let name = inputCtn.querySelector('#name').value;
    let contact = inputCtn.querySelector('#contact').value;
    let alt_contact = inputCtn.querySelector('#alt_contact').value;
    let location = inputCtn.querySelector('#location').value;
    let details = inputCtn.querySelector('#details').value;
    let email = inputCtn.querySelector('#email').value;
    data = { name: name, contact: contact, alt_contact: alt_contact, location: location, details: details, email: email };
    ReqHandler.PUT(window.location.origin + `/admin/user-manager/${cat}s/update/`+id, data)
        .then((res) => { 
            if (res.status) {
            AlertNotify('Success', res.msg, 'success') ;
            name='';contact=''; alt_contact='';location=''; details=''; email='' ;
            }
         })
        .catch(err => {
            AlertNotify('Success', 'Error While adding ', 'error') 
            console.log('Error(fn-AddClientsVendors):' + err);
        })
}

function DeleteClientsVendors(e,id) {
    let type =e.parentElement.parentElement.parentElement.dataset.type;
    console.log(type, window.location.origin + `/admin/user-manager/${type}s/delete/`+id);
    ReqHandler.DEL(window.location.origin + `/admin/user-manager/${type}s/delete/`+id)
        .then((res) => { 
            if (res) {
            AlertNotify('Success', res.msg, 'success') ;
            (e.parentElement.parentElement.parentElement).remove();
            }
         })
        .catch(err => {
            AlertNotify('Success', 'Error While adding ', 'error') 
            console.log('Error(fn-AddClientsVendors):' + err);
        })

}


function displayTable(event) {
    document.querySelector('.client-collection-table').classList.add('hide');
    document.querySelector('.client-collection-table').classList.remove('table');
    document.querySelector('.client-expenses-table').classList.add('hide');
    document.querySelector('.client-expenses-table').classList.remove('table');
    document.querySelector(event).classList.add('table');
}

function openCpopup(event){
    document.querySelector(`.c-popup`).classList.remove(`hide`)
}
function closeCpopup(event){
    document.querySelector(`.c-popup`).classList.add(`hide`)
}