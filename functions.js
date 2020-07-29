module.exports = {
    age: function(timestemp) {
        const today = new Date()
        const birthDate = new Date(timestemp)

        // 2019 - 1984 = 35
        let age = today.getFullYear() - birthDate.getFullYear()

        const month = today.getMonth() - birthDate.getMonth()

        if( month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age -1
        }

        return age
    },
    date: function(timestemp) {
        const date = new Date(timestemp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2) //a contagem é de zero a 11, por isso a adição de + 1
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            year,
            month,
            day,
            iso:`${year}-${month}-${day}`,
            birthDay: `${day}/${month}` 
        }
    }
}