import { Middleware } from '@nuxt/types'

const authMiddleware: Middleware = ({ redirect, app, route }) => {
  const authenthicated = app.$cookies.get('token')

  if (!authenthicated) {
    if (route.name === 'login') {
      return
    }
    return redirect({ name: 'login' })
  }

  if (authenthicated && route.name === 'login') {
    return redirect({ name: 'index' })
  }
}

export default authMiddleware
