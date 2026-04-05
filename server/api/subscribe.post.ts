export default defineEventHandler(async (event) => {
  const { email } = await readBody<{ email: string }>(event)

  if (!email || !email.includes('@')) {
    throw createError({ statusCode: 400, statusMessage: 'Valid email required' })
  }

  const portalId = '49436475'
  const formGuid = '9796ad2b-d220-4463-8495-4e7fe1efbe9e'

  await $fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        fields: [
          { name: 'email', value: email },
        ],
      },
    },
  )

  return { ok: true }
})
