import axios from "axios";

axios.defaults.baseURL = 'https://630fca12498924524a95b62d.mockapi.io'

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    console.log('fetchContacts', data)
    return data;
}

export async function addContact(contact) {
    const { data } = await axios.post('/contacts', contact);
    console.log('addContact', data)
     return data;
}

export async function deleteContact(id) {
    const { data } = await axios.delete(`/contacts/${id}`)
    console.log('deleteContact', data)
    return id;
}