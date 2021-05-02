import type { Awaitable } from '@antfu/utils'
import type { Options as ShikiOptions } from 'markdown-it-shiki'
import type * as monaco from 'monaco-editor'
import type { App } from 'vue'
import type { Router } from 'vue-router'

export interface AppContext {
  app: App
  router: Router
}

export type ShikiSetup = () => Awaitable<ShikiOptions | undefined>
export type MonacoSetup = (m: typeof monaco) => Awaitable<void>
export type AppSetup = (context: AppContext) => Awaitable<void>

export function defineShikiSetup(fn: ShikiSetup) {
  return fn
}

export function defineMonacoSetup(fn: MonacoSetup) {
  return fn
}

export function defineAppSetup(fn: AppSetup) {
  return fn
}
