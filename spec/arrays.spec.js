const f = require('../src/arrays')

describe("Arrays", () => {
  
  it("findFirstNumberGreaterThan10", () => {
    expect(f.findFirstNumberGreaterThan10()).toEqual(76)
  })

  it("findFirstNumberLessThan10", () => {
    expect(f.findFirstNumberLessThan10()).toEqual(5)
  })
  
  it("findFirstItemWithQuantityOne", () => {
    expect(f.findFirstItemWithQuantityOne()).toEqual({ item: 'banana', quantity: 1 })
  })

  it("findIndexTom", () => {
    expect(f.findIndexTom()).toEqual(2)
  })

  it("findIndexLemon", () => {
    expect(f.findIndexLemon()).toEqual(3)
  })

  it("allOver100", () => {
    expect(f.allOver100()).toEqual([101, 2001, 198])
  })

  it("startsWithM", () => {
    expect(f.startsWithM()).toEqual(['Matt','Marie','Mike'])
  })

  it("horrorFilms", () => {
    expect(f.horrorFilms()).toEqual([
      { 
        name: 'The Manor',
        genre: 'Horror'
      },
      { 
        name: 'In Ehe Earth',
        genre: 'Horror'
      },
    ])
  })

  it("doubleEachNumber", () => {
    expect(f.doubleEachNumber()).toEqual([2,20,200,2000])
  })

  it("sumNumbers", () => {
    expect(f.sumNumbers()).toEqual(1111)
  })

  fit("findLargest", () => {
    expect(f.findLargest()).toEqual(9121)
  })
})
