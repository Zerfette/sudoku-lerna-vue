import { elem } from 'fp-ts/Array'
import { range } from 'fp-ts/NonEmptyArray'
import { Eq as nEq } from 'fp-ts/number'
import { Predicate } from 'fp-ts/Predicate'

export const isValue: Predicate<string> = x => elem(nEq)(+x)(range(0, 9))
