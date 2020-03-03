import { colourCode, COLOURS } from './resistor-color'

describe('ResistorColor', () => {
  describe('Colour codes', () => {
    test("Black", () => {
      expect(colourCode("Black")).toEqual(0)
    })

    test("White", () => {
      expect(colourCode("White")).toEqual(9)
    })

    test("Orange", () => {
      expect(colourCode("Orange")).toEqual(3)
    })
  })

  test('Colours', () => {
    expect(COLOURS).toEqual(["Black","Brown","Red","Orange","Yellow","Green","Blue","Violet","Grey","White"])
  })
})
