var moment = require('moment')

//// Now
console.log('### ', 'Now')

// moment
var now = moment()
console.log(`now (moment) -> ${now}`)

// built-in
now = new Date()
console.log(`now (built-in) -> ${now}`)

//// String
console.log('\n### String')

// moment
var string = moment('2017-12-10')
console.log(`string (moment) -> ${string}`)

// built-in
string = new Date('2017-12-10')
console.log(`string (built-in) -> ${string}`)

//// String format
console.log('\n### StringFormat')

// moment
var stringFormat = moment("12-25-1995", "MM-DD-YYYY")
console.log('moment("12-25-1995", "MM-DD-YYYY")')
console.log(`stringFormat (moment) -> ${stringFormat}`)

stringFormat = moment("29-06-1995", ["MM-DD-YYYY", "DD-MM", "DD-MM-YYYY"])
console.log('\nmoment("29-06-1995", ["MM-DD-YYYY", "DD-MM", "DD-MM-YYYY"])')
console.log(`stringFormat (moment) -> ${stringFormat}`)

console.log('\nSpecial formats')
console.log('moment("2010-01-01T05:06:07", ["YYYY", moment.ISO_8601])')
console.log(`${moment("2010-01-01T05:06:07", ["YYYY", moment.ISO_8601])}`)


// built-in
stringFormat = new Date("12-25-1995", "MM-DD-YYYY")
console.log(`\nstringFormat (built-in) -> ${stringFormat}`)
console.log('\nВбудований функціонал не може форматувати дату.')
console.log('Це можна зробити по іншому, за допомогою')
console.log('stringFormat (built-in) -> ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}')

//// Object
console.log('\n### Time Object')

// moment
var obj = moment(1000000000000)
console.log(`obj (moment) -> ${obj}`)

// built-in
obj = new Date(1000000000000)
console.log(`obj (built-in) -> ${obj}`)

//// Array
console.log('\n### Date object from array')

// moment
var timeArray = moment([2010, 1, 14, 15, 25, 50, 125])
console.log(`timeArray (moment) -> ${timeArray}`)

// built-in
timeArray = new Date(2010, 1, 14, 15, 25, 50, 125)
console.log(`timeArray (built-in) -> ${timeArray}`)

var date = new Date()

console.log('#########################################################')
console.log('\nМи переглянули функціонал який схожий із вбудованим,\nа тепер перейдемо до переваг бібліотеки moment.js')

console.log('\n1. Додавання і віднімання часу з отриманням зручного для розуміння представлення')

console.log('\nДодавання')
console.log('moment().add({days:7,months:1})')
console.log(`${moment().add({ days: 7, months: 1 })}`)

console.log('\nВіднімання')
console.log('moment().subtract({days: 7});')
console.log(`${moment().subtract({ days: 7 })}`)


console.log('\n2. Також дуже легко отримувати дати початку місяця, року або тижня')
console.log(`\nmoment().startOf('year') -> ${moment().startOf('year')}`)
console.log(`moment().startOf('month') -> ${moment().startOf('month')}`)
console.log(`moment().startOf('week') -> ${moment().startOf('week')}`)
console.log(`moment().startOf('day') -> ${moment().startOf('day')}`)
console.log(`moment().startOf('hour') -> ${moment().startOf('hour')}`)
console.log(`moment().startOf('minute') -> ${moment().startOf('minute')}`)
console.log(`moment().startOf('second') -> ${moment().startOf('second')}`)
console.log(`moment().endOf("year") -> ${moment().endOf("year")}`)

console.log('\n2.1 Визначення кварталу')
console.log(`moment().quarter() -> ${moment().quarter()}`)
console.log(`moment().quarters() -> ${moment().quarters()}`)

console.log('\n3. Зручно використовувати цю бібліотеку для отримання кількості часу з будь-якої дати')
console.log(`moment([2012, 0, 29]).fromNow() -> ${moment([2012, 0, 29]).fromNow()}`)
console.log(`moment([2013, 0, 29]).fromNow(true) -> ${moment([2013, 0, 29]).fromNow(true)}`)
console.log(`moment([2013, 0, 29]).fromNow() -> ${moment([2013, 0, 29]).fromNow()}`)

console.log('\n### Аналогічним способом зручно відраховувати час від якогось проміжку часу')
console.log(`moment([2014, 0, 5]).from(moment([2013, 0, 10])) -> ${moment([2014, 0, 5]).from(moment([2013, 0, 10]))}`)

console.log('\n4. Дуже легко і зручно можна отримати кількість днів у місяці')
console.log(`moment("2013-02", "YYYY-MM").daysInMonth() -> ${moment("2013-02", "YYYY-MM").daysInMonth()}`)

console.log('\n5. Мінімум і максимум.')
console.log('Іноді серверні годинники не зовсім синхронізуються з клієнтськими. \nЦе закінчується відображенням гуманізованих рядків, таких як "за кілька секунд", а не "кілька секунд тому". \nВи можете запобігти цьому моментом # max ():')

console.log('var momentFromServer = moment(input)')
console.log('var clampedMoment = momentFromServer.max()')
console.log('a.max(b) === moment.min(a, b) (зауважте, що max перетворюється на min)')

console.log('\n"min" Обмежує момент до мінімуму іншого значення моменту. \nОтже, a.min (b) те саме, що a = moment.max (a, b) (зауважте, що min перетворюється на max).')
console.log('moment().min("2013-04-20T20:00:00+0800")')

console.log('\nГоловною особливістю бібліотеки moment.js є повна зміна локалізації')

console.log(`moment.locale('fr', {
    months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact : true,
    weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Aujourd’hui à] LT',
        nextDay : '[Demain à] LT',
        nextWeek : 'dddd [à] LT',
        lastDay : '[Hier à] LT',
        lastWeek : 'dddd [dernier à] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'dans %s',
        past : 'il y a %s',
        s : 'quelques secondes',
        m : 'une minute',
        mm : '%d minutes',
        h : 'une heure',
        hh : '%d heures',
        d : 'un jour',
        dd : '%d jours',
        M : 'un mois',
        MM : '%d mois',
        y : 'un an',
        yy : '%d ans'
    },
    dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'e');
    },
    meridiemParse : /PD|MD/,
    isPM : function (input) {
        return input.charAt(0) === 'M';
    },
    // In case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example).
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
    // },
    meridiem : function (hours, minutes, isLower) {
        return hours < 12 ? 'PD' : 'MD';
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // Used to determine first week of the year.
    }
})`)
console.log(`
moment.locale('fr') -> ${moment.locale('fr')}
moment() -> ${moment()}
moment.locale('en') -> ${moment.locale('en')}
moment() -> ${moment()}
`)

console.log(`\nНу і на останок, ця бібліотека вміє конвертуватися в JSON файл, 
що зручно для обміну часовими данними сервера і клієнта.`)
console.log(`{postDate: moment().toJSON()} -> {postDate: ${moment().toJSON()}}`)