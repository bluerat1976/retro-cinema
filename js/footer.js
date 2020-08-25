/* menu starts */

class MenulinksFoot {
    constructor(id, href, name) {
        this.id = id
        this.href = href
        this.name = name
    }

    render() {
        let footmenu = document.createElement('a')
        footmenu.setAttribute('id', this.id)
        footmenu.setAttribute('href', this.href)
        footmenu.innerText = this.name

        return footmenu
    }
}

let menuFooterLinks = [
    new MenulinksFoot('home', 'home.html', 'About us'),
    new MenulinksFoot('order', 'order.html', 'Our Menu'),
    new MenulinksFoot('events', 'events.html', 'Events'),
    new MenulinksFoot('contacts', 'contacts.html', 'Contacts'),
]

function renderFooterMenu() {
    let wrapper = document.getElementById('menu-footer-box')

    menuFooterLinks.forEach(
        menulist => wrapper.appendChild(menulist.render())
    )
    //wrapper.appendChild(wrapper)
} 

renderFooterMenu('#menu-footer-box')
/* menu finish */


/* header info starts */
class contactFooter {
    constructor(number) {
        this.number = number
    }

    render() {
        let phonenum = document.createElement('p')
        phonenum.innerText = this.number

        return phonenum
    }
}

let contactlistfooter = [
    new contactFooter('+373 22 5432176') ,
    new contactFooter('str. M. Eminescu 55, mun. Chisinau'),
    new contactFooter('oficce@mail.ru') 
]

function showcontactsfooter() {
    let wrapper = document.getElementById('menu-footer-info')

contactlist.forEach(
    contactshow => wrapper.appendChild(contactshow.render())
    )
}

showcontactsfooter('#menu-footer-info')

/* header info finish */