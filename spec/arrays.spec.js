const f = require('../src/arrays')

describe("Arrays", () => {

    it("findFirstNumberGreaterThan10", () => {
        expect(f.findFirstNumberGreaterThan10()).toEqual(76)
    })

    fit("findFirstNumberLessThan10", () => {
        expect(f.findFirstNumberLessThan10()).toEqual(5)
    })

    fit("findFirstItemWithQuantityOne", () => {
        expect(f.findFirstItemWithQuantityOne()).toEqual({ item: 'banana', quantity: 1 })
    })

    fit("findIndexTom", () => {
        expect(f.findIndexTom()).toEqual(2)
    })

    fit("findIndexLemon", () => {
        expect(f.findIndexLemon()).toEqual(3)
    })

    fit("allOver100", () => {
        expect(f.allOver100()).toEqual([101, 2001, 198])
    })

    fit("startsWithM", () => {
        expect(f.startsWithM()).toEqual(['Matt', 'Marie', 'Mike'])
    })

    fit("horrorFilms", () => {
        expect(f.horrorFilms()).toEqual([{
                name: 'The Manor',
                genre: 'Horror'
            },
            {
                name: 'In Ehe Earth',
                genre: 'Horror'
            },
        ])
    })

    fit("doubleEachNumber", () => {
        expect(f.doubleEachNumber()).toEqual([2, 20, 200, 2000])
    })

    it("sumNumbers", () => {
        expect(f.sumNumbers()).toEqual(1111)
    })

    fit("findLargest", () => {
        expect(f.findLargest()).toEqual(9121)
    })
})