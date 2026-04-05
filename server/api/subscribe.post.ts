export default defineEventHandler(async (event) => {
  const { email } = await readBody<{ email: string }>(event)

  if (!email || !email.includes('@')) {
    throw createError({ statusCode: 400, statusMessage: 'Valid email required' })
  }

  const accessToken = useRuntimeConfig().hubspotAccessToken

  if (!accessToken) {
    throw createError({ statusCode: 500, statusMessage: 'HubSpot not configured' })
  }

  // Create or update contact in HubSpot CRM
  const response = await $fetch(
    'https://api.hubapi.com/crm/v3/objects/contacts',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: {
        properties: {
          email,
          lifecyclestage: 'subscriber',
        },
      },
    },
  ).catch(async (err) => {
    // If contact already exists (409), that's fine — update instead
    if (err?.response?.status === 409) {
      const existingId = err.response._data?.message?.match(/ID: (\d+)/)?.[1]
      if (existingId) {
        return $fetch(
          `https://api.hubapi.com/crm/v3/objects/contacts/${existingId}`,
          {
            method: 'PATCH',
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: {
              properties: {
                lifecyclestage: 'subscriber',
              },
            },
          },
        )
      }
    }
    throw err
  })

  return { ok: true, id: (response as any)?.id }
})
