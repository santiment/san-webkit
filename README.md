# san-webkit

## Requirements

Following tools should be pre-installed:

- [Node.js](https://nodejs.org/en/) >= v20.10.0 – JavaScript runtime environment
- [pnpm](https://pnpm.io/) = v8.x – package manager

## Installation

[pnpm](https://pnpm.io/) is used as a package manager, since it's a more efficient alternative to [npm](https://pnpm.io/motivation).

Install project's dependencies using a following command:

```bash
pnpm i
```

## Publishing a new version of the library

1. Switch to the `next` branch and run `git pull`
2. Run `npm run lib:release`

## Developing

```bash
npm run dev # for HTTP
npm run dev:https # for HTTPS
```

Chromium-based browsers may require additional steps to access the local HTTPS server:

- If `Accept and Continue` button is absent: click anywhere on the page and type `thisisunsafe`
- Reset `HSTS` for the local domain in the `chrome://net-internals/#hsts` settings

## Environment variables

- `process.env.BACKEND_URL` - Main backend endpoint
- `process.env.GQL_SERVER_URL` - Graphql endpoint that is platform agnostic
- `process.env.NODE_GQL_SERVER_URL` - Graphql endpoint that is used only on the server side

### Shared Signals coding convention

Signals can be stored in a container to allow them to be passed across function or file boundaries.

There are two types of shared signals:

- **Fixed Shared Signal**: `{ $: T }`
- **Deeply Shared Signal**: `{ $$: T }`

#### Fixed Shared Signal

This type of signal uses the `$state.raw` state declaration, meaning it is not deeply reactive. Reactivity is achieved only by _reassigning_ the container's `$` property:

```js
customer.$.name = 'Joe' // This will not trigger updates
customer.$ = customer.$ // Only this will trigger updates
customer.$ = null // This will trigger updates as well
```

The most common use case for this type of signal is when data has many fields that should be mutated at once, but those fields do not change often.

#### Deeply Shared Signal

This type of signal uses the `$state` state declaration, meaning it is deeply reactive. Updates are triggered whenever any of the internal fields change:

```js
currentUser.$$.name = 'Joe' // Triggers update
currentUser.$$.name = 'Mike' // Triggers update
currentUser.$$.email = 'test@gmail.com' // Triggers update
```

The most common use case for this type of signal is when data has fields that are updated frequently and independently of each other.

### Generics inside Svelte files

The new syntax for defining generics inside `generics` attribute of the `script` tag results in the eslint errors.

```svelte
<script lang="ts" generics="T">
</script>
```

Therefore to declare a generic type use old meta type `$$Generic`.

```svelte
<script lang="ts">
  type T = $$Generic // $$Generic<{ name: string }>
</script>
```

### The order of definitions in Svelte components

```svelte
<script lang="ts">
  // Define prop types with a separate type definition
  type TProps = { someProp: '' }
  let props: TProps = $props()

  // Initialize and set the external contexts
  const appCtx = useSomeAppCtx.get()
  const someOtherCtx = useSomeOtherCtx.set(props.someProp)

  // Initialize the dialog, which will capture all the contexts defined above
  const showSomeDialog = showSomeDialog$()

  // Define a state signal first
  let state = $state('')
  // Define a derived signal second
  const derived = $derived(state + props.someProp)

  // Create a one-liner using a function expression
  const oneLineFn = () => {}

  onMount(() => {
    // Browser-only code that will run once when the component mounts
    return () => {
      // Cleanup if necessary
    }
  })

  $effect(() => {
    // Browser-only code that re-runs when any tracked signals change
    return () => {
      // Cleanup if necessary
    }
  })

  // Define a function that could be used in the code above
  function someFn() {
    // Function body
  }
</script>
```
