import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const { name, email, phone } = await readBody<{ name: string; email: string; phone: string }>(event)

  if (!email || !email.includes('@')) {
    throw createError({ statusCode: 400, statusMessage: 'Valid email required' })
  }

  if (!name) {
    throw createError({ statusCode: 400, statusMessage: 'Name required' })
  }

  const portalId = '49436475'
  const formGuid = '9796ad2b-d220-4463-8495-4e7fe1efbe9e'

  if (!phone) {
    throw createError({ statusCode: 400, statusMessage: 'Phone required' })
  }

  const fields = [
    { name: 'email', value: email },
    { name: 'firstname', value: name },
    { name: 'phone', value: phone },
  ]

  // Submit to HubSpot
  await $fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { fields },
    },
  )

  // Send welcome email
  const firstName = name.split(' ')[0]
  const resendApiKey = useRuntimeConfig().resendApiKey
  if (resendApiKey) {
    const resend = new Resend(resendApiKey)
    await resend.emails.send({
      from: 'Montuno Club <montuno@wedance.vip>',
      to: email,
      subject: `Welcome to Montuno Club, ${firstName}!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h1 style="color: #722F37;">Welcome to Montuno Club, ${firstName}!</h1>
          <p>Thanks for joining our community. We're excited to have you!</p>
          <p><strong>Here's what you need to know:</strong></p>
          <ul style="line-height: 1.8;">
            <li>Every Sunday at 7:00 PM</li>
            <li>Buena Vista Bar, Am Einla\u00DF 2A, 80469 Munich</li>
            <li>Free (donations welcome)</li>
            <li>No partner needed, no experience required</li>
          </ul>
          <p>Each week we teach one Salsa Cubana move from scratch. We rotate partners so everyone dances with everyone. Just show up and have fun!</p>
          <p>
            <a href="https://chat.whatsapp.com/K5Iy5CkTonv5ady2v91b8t" style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 24px; font-weight: bold;">
              Join our WhatsApp Group
            </a>
          </p>
          <p style="color: #999; font-size: 12px; margin-top: 32px;">
            Montuno Club &mdash; Free Salsa Cubana for beginners in Munich<br/>
            <a href="https://montuno.club" style="color: #722F37;">montuno.club</a>
          </p>
        </div>
      `,
    }).catch(() => {
      // Don't fail the subscription if email fails
    })
  }

  return { ok: true }
})
