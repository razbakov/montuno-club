import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    name: string
    email: string
    phone: string
    language?: string
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    utm_term?: string
    utm_content?: string
    referrer?: string
    promo_code?: string
  }>(event)
  const { name, email, phone } = body

  if (!email || !email.includes('@')) {
    throw createError({ statusCode: 400, statusMessage: 'Valid email required' })
  }

  if (!name) {
    throw createError({ statusCode: 400, statusMessage: 'Name required' })
  }

  const portalId = '49436475'
  const formGuid = '9796ad2b-d220-4463-8495-4e7fe1efbe9e'

  const fields = [
    { name: 'email', value: email },
    { name: 'firstname', value: name },
  ]

  if (phone) {
    fields.push({ name: 'phone', value: phone })
  }

  // HubSpot context for tracking
  const context: Record<string, unknown> = {}
  if (body.utm_source || body.utm_medium || body.utm_campaign) {
    context.hutk = undefined
    context.pageUri = 'https://montuno.club'
    context.pageName = 'Montuno Club'
  }

  const hsBody: Record<string, unknown> = {
    fields,
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: 'I agree to receive marketing communications from Montuno Club.',
      },
    },
  }
  // UTM parameters via HubSpot context
  if (body.utm_source) {
    hsBody.context = {
      ...context,
      hutk: undefined,
      pageUri: `https://montuno.club?utm_source=${body.utm_source}&utm_medium=${body.utm_medium || ''}&utm_campaign=${body.utm_campaign || ''}&utm_term=${body.utm_term || ''}&utm_content=${body.utm_content || ''}`,
    }
  }

  // Add language and referrer as hidden fields
  if (body.language) {
    fields.push({ name: 'hs_language', value: body.language })
  }

  if (body.promo_code) {
    fields.push({ name: 'promo_code', value: body.promo_code })
  }

  if (body.referrer) {
    fields.push({ name: 'referrer', value: body.referrer })
  }

  // Submit to HubSpot
  await $fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: hsBody,
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
            <li>Every Sunday at 6:00 PM</li>
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

    // Notify admin
    await resend.emails.send({
      from: 'Montuno Club <montuno@wedance.vip>',
      to: 'razbakov.aleksey@gmail.com',
      subject: `New signup: ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>New Montuno Club Signup</h2>
          <table style="border-collapse: collapse;">
            <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Name</td><td>${name}</td></tr>
            <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Phone</td><td><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Language</td><td>${body.language || '-'}</td></tr>
            <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Source</td><td>${body.utm_source || '-'}</td></tr>
            <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Medium</td><td>${body.utm_medium || '-'}</td></tr>
            <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Campaign</td><td>${body.utm_campaign || '-'}</td></tr>
            <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Referrer</td><td>${body.referrer || '-'}</td></tr>
            <tr><td style="padding: 4px 12px 4px 0; font-weight: bold;">Promo Code</td><td>${body.promo_code || '-'}</td></tr>
          </table>
        </div>
      `,
    }).catch(() => {})
  }

  return { ok: true }
})
