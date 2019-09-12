export const login = () => {
  return {
    access_token: '@string(124)',
    token_type: 'Bearer',
    expires_in: 604800,
    refresh_token: null
  }
}
