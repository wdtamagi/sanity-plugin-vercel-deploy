import React from 'react'

export type StatusType =
  | 'LOADING'
  | 'ERROR'
  | 'INITIATED'
  | 'CANCELED'
  | 'READY'
  | 'BUILDING'
  | 'QUEUED'

export interface VercelTeam {
  [key: string]: unknown
  name: string
  id: string
}

export interface SanityDeploySchema {
  _id: string
  name: string
  url: string
  vercelProject: string
  vercelTeam: VercelTeam
  vercelToken: string
}

export interface Deployments {
  [key: string]: unknown
  uid: string
  created: string
  state: string
  url: string
  creator: {
    [key: string]: unknown
    username?: string
  }
  meta: {
    [key: string]: unknown
    githubCommitMessage: string
    githubCommitRef: string
  }
}

/**
 * @public
 */
export interface VercelDeployConfig {
  name?: string
  icon?: React.ReactNode
  title?: string
}
