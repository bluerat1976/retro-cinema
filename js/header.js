/* logotype starts  */

let logopict = document.createElement('img')
logopict.setAttribute('src', 'pictures/logo/logo-7.jpg')
logopict.setAttribute('id', 'logotype')
let logo = document.getElementById('logobox')
logo.appendChild(logopict)

/* logotype finish*/


/* menu starts */

class Menulinks {
    constructor(id, href, name) {
        this.id = id
        this.href = href
        this.name = name
    }

    render() {
        let upmenu = document.createElement('a')
        upmenu.setAttribute('id', this.id)
        upmenu.setAttribute('href', this.href)
        upmenu.innerText = this.name

        return upmenu
    }
}

let menuHeaderLinks = [
    new Menulinks('home', 'home.html', 'About us'),
    new Menulinks('order', 'order.html', 'Our Menu'),
    new Menulinks('events', 'events.html', 'Events'),
    new Menulinks('contacts', 'contacts.html', 'Contacts'),
]

function renderUpMenu() {
    let wrapper = document.getElementById('menu-header-box')

    menuHeaderLinks.forEach(
        menulist => wrapper.appendChild(menulist.render())
    )
    //wrapper.appendChild(wrapper)
} 

renderUpMenu('#menu-header-box')
/* menu finish */


/* header info starts */
class contact {
    constructor(number) {
        this.number = number
    }

    render() {
        let phonenum = document.createElement('p')
        phonenum.innerText = this.number

        return phonenum
    }
}

let contactlist = [
    new contact('+373 22 5432176') ,
    new contact('str. M. Eminescu 55, mun. Chisinau'),
    new contact('oficce@mail.ru') 
]

function showcontacts() {
    let wrapper = document.getElementById('menu-header-info')

contactlist.forEach(
    contactshow => wrapper.appendChild(contactshow.render())
    )
}

showcontacts('#menu-header-info')

/* header info finish */
