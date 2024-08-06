/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from '@atproto/lexicon'
import { lexicons } from '../../../lexicons'
import { isObj, hasProp } from '../../../util'
import { CID } from 'multiformats/cid'

export interface Record {
  status: string
  updatedAt: string
  [k: string]: unknown
}

export function isRecord(v: unknown): v is Record {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    (v.$type === 'example.lexicon.status#main' ||
      v.$type === 'example.lexicon.status')
  )
}

export function validateRecord(v: unknown): ValidationResult {
  return lexicons.validate('example.lexicon.status#main', v)
}