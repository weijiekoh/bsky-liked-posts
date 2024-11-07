import type { Status } from '#/db'
import { html } from '../lib/view'
import { shell } from './shell'


type Props = {
  liked_posts_uris: string[]
}

export function liked(props: Props) {
  return shell({
    title: 'Liked Posts',
    content: content(props),
  })
}

function content({ liked_posts_uris }: Props) {
  return html`<div id="root">
    <div class="error"></div>
    <div id="header">
      <p>Here are the DIDs of the posts you have liked on bsky.app:</p>
    </div>
    <div class="container">
      ${liked_posts_uris.map((uri, i) => {
        return html`
          <div class=${i === 0 ? 'status-line no-line' : 'status-line'}>
            <div>
              <div class="liked_post">
                <pre>${uri}</pre>
            </div>
          </div>
        `
      })}
    </div>
  </div>`
}

