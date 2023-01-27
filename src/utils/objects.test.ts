import { checkIsSameObject } from './objects'

describe('checkIsSameObject', () => {
  describe('Same reference', () => {
    it('null and null', () => {
      expect(checkIsSameObject(null, null)).toEqual(true)
    })

    it('{} and {}', () => {
      const ref = {}
      expect(checkIsSameObject(ref, ref)).toEqual(true)
    })
  })

  describe('Different reference', () => {
    it('{} and {}', () => {
      expect(checkIsSameObject({}, {})).toEqual(true)
    })

    it('{} and null', () => {
      expect(checkIsSameObject({}, null)).toEqual(false)
    })
    it('null and {}', () => {
      expect(checkIsSameObject(null, {})).toEqual(false)
    })
  })

  describe('Different keys amount', () => {
    it('{} and {a: 5}', () => {
      expect(checkIsSameObject({}, { a: 5 })).toEqual(false)
    })

    it('{a: 5} and {}', () => {
      expect(checkIsSameObject({ a: 5 }, {})).toEqual(false)
    })
  })

  describe('Same amount of keys', () => {
    describe('Same key names with different values', () => {
      it('{a: 5} and {a: 6}', () => {
        expect(checkIsSameObject({ a: 5 }, { a: 6 })).toEqual(false)
      })

      it('{a: 6} and {a: 5}', () => {
        expect(checkIsSameObject({ a: 6 }, { a: 5 })).toEqual(false)
      })
    })

    describe('Different key names with same values', () => {
      it('{a: 5} and {b: 5}', () => {
        expect(checkIsSameObject({ a: 5 }, { b: 5 })).toEqual(false)
      })

      it('{b: 5} and {a: 5}', () => {
        expect(checkIsSameObject({ b: 5 }, { a: 5 })).toEqual(false)
      })

      it('{b: 5, a: [1, 2, 3, 4]} and {a: [1, 2], b: 5}', () => {
        expect(checkIsSameObject({ b: 5, a: [1, 2, 3, 4] }, { a: [1, 2], b: 5 })).toEqual(false)
      })
    })

    describe('Different order of keys with same values', () => {
      it('{a: 5, b: 6} and {b: 6, a: 5}', () => {
        expect(checkIsSameObject({ a: 5, b: 6 }, { b: 6, a: 5 })).toEqual(true)
      })

      it('{b: 5, a: 6} and {a: 6, b: 5}', () => {
        expect(checkIsSameObject({ b: 5, a: 6 }, { a: 6, b: 5 })).toEqual(true)
      })

      it('{b: 5, a: [1, 2, 3]} and {a: [1, 2, 3], b: 5}', () => {
        expect(checkIsSameObject({ b: 5, a: [1, 2, 3] }, { a: [1, 2, 3], b: 5 })).toEqual(true)
      })
    })

    describe('Different nested objects', () => {
      it('{a: {b: [{a: "test"}, {a: "test"}] }} and {a: {b: [{a: "test"}, {b: "test"}] }}', () => {
        expect(
          checkIsSameObject(
            {
              a: { b: [{ a: 'test' }, { a: 'test' }] },
            },
            {
              a: { b: [{ a: 'test' }, { b: 'test' }] },
            },
          ),
        ).toEqual(false)
      })
    })

    describe('Same nested objects', () => {
      it('{a: {b: "test" }} and {a: {b: "test" }}', () => {
        expect(checkIsSameObject({ a: { b: 'test' } }, { a: { b: 'test' } })).toEqual(true)
      })

      it('{a: {b: [1,2,3] }} and {a: {b: [1,2,3] }}', () => {
        expect(checkIsSameObject({ a: { b: [1, 2, 3] } }, { a: { b: [1, 2, 3] } })).toEqual(true)
      })

      it('{a: {b: [{a: "test"}, {b: "test"}] }} and {a: {b: [{a: "test"}, {b: "test"}] }}', () => {
        expect(
          checkIsSameObject(
            {
              a: { b: [{ a: 'test' }, { b: 'test' }] },
            },
            {
              a: { b: [{ a: 'test' }, { b: 'test' }] },
            },
          ),
        ).toEqual(true)
      })

      it('{a: {b: [{b:3, a: "test"}] }} and {a: {b: [{a: "test", b: 3}] }}', () => {
        expect(
          checkIsSameObject(
            {
              a: {
                b: [{ b: 3, a: 'test' }],
              },
            },
            {
              a: { b: [{ a: 'test', b: 3 }] },
            },
          ),
        ).toEqual(true)
      })

      it('{a: [[1,2,3], [4,5]] } and {a: [1,2,3], [4,5]] }', () => {
        expect(
          checkIsSameObject(
            {
              a: [
                [1, 2, 3],
                [4, 5],
              ],
            },
            {
              a: [
                [1, 2, 3],
                [4, 5],
              ],
            },
          ),
        ).toEqual(true)
      })
    })
  })
})
