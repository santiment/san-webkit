import type { History } from './index'
import { newHistory } from './index'

describe('History', () => {
  let undoCalls = 0
  let redoCalls = 0
  const undo = () => undoCalls++
  const redo = () => redoCalls++

  let History: History
  const lastCursor = () => History.get().length - 1
  beforeEach(() => {
    History = newHistory()
    undoCalls = 0
    redoCalls = 0
  })

  test('Adding commands', () => {
    History.add('First', undo, redo)
    History.add('Second', undo, redo)
    History.add('Third', undo, redo)

    expect(History.get().length).toEqual(3)
  })

  describe('Undoing', () => {
    test('when with empty history', () => {
      expect(() => History.undo()).not.toThrowError()
    })

    test('1 change', () => {
      History.add('First', undo, redo)
      History.add('Second', undo, redo)
      History.add('Third', undo, redo)

      History.undo()
      expect(History.getCursor()).toEqual(lastCursor() - 1)
      expect(undoCalls).toEqual(1)
    })

    test('2 change', () => {
      History.add('First', undo, redo)
      History.add('Second', undo, redo)
      History.add('Third', undo, redo)

      let i
      for (i = 0; i < 2; i++) History.undo()

      expect(History.getCursor()).toEqual(lastCursor() - 2)
      expect(undoCalls).toEqual(i)
    })

    test('all changes', () => {
      History.add('First', undo, redo)
      History.add('Second', undo, redo)
      History.add('Third', undo, redo)

      for (let i = 0; i < 3; i++) History.undo()

      expect(History.getCursor()).toEqual(-1)
      expect(undoCalls).toEqual(History.get().length)
    })

    test('more changes than recorded', () => {
      History.add('First', undo, redo)
      History.add('Second', undo, redo)
      History.add('Third', undo, redo)

      for (let i = 0; i < 10; i++) History.undo()

      expect(History.getCursor()).toEqual(-1)
      expect(undoCalls).toEqual(History.get().length)
    })
  })

  describe('Redoing', () => {
    test('when with empty history', () => {
      expect(() => History.redo()).not.toThrowError()
    })

    test('when up-to-date', () => {
      History.add('First', undo, redo)
      History.add('Second', undo, redo)
      History.add('Third', undo, redo)

      for (let i = 0; i < 10; i++) History.redo()

      expect(History.getCursor()).toEqual(lastCursor())
      expect(redoCalls).toEqual(0)
    })

    test('1 change', () => {
      History.add('First', undo, redo)
      History.add('Second', undo, redo)
      History.add('Third', undo, redo)

      History.undo()
      History.redo()

      expect(History.getCursor()).toEqual(lastCursor())
      expect(redoCalls).toEqual(1)
    })

    test('2 changes', () => {
      History.add('First', undo, redo)
      History.add('Second', undo, redo)
      History.add('Third', undo, redo)

      const max = 2
      let i
      for (i = 0; i < max; i++) History.undo()
      for (i = 0; i < max; i++) History.redo()

      expect(History.getCursor()).toEqual(lastCursor())
      expect(redoCalls).toEqual(i)
    })

    test('all changes', () => {
      History.add('First', undo, redo)
      History.add('Second', undo, redo)
      History.add('Third', undo, redo)

      const max = 3
      let i
      for (i = 0; i < max; i++) History.undo()
      for (i = 0; i < max; i++) History.redo()

      expect(History.getCursor()).toEqual(lastCursor())
      expect(redoCalls).toEqual(i)
    })
  })
})
