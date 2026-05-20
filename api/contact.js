import supabase from './_supabase.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'GET') {
      // Public endpoint for health check
      return res.status(200).json({ ok: true });
    }

    if (req.method === 'POST') {
      const { name, email, serviceNeeded, budget, message } = req.body || {};

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
      }

      const payload = {
        name: String(name).trim(),
        email: String(email).trim(),
        service_needed: serviceNeeded ? String(serviceNeeded).trim() : null,
        budget: budget ? String(budget).trim() : null,
        message: String(message).trim(),
        user_agent: req.headers['user-agent'] || null,
        page_url: req.headers['referer'] || null,
      };

      const { data, error } = await supabase
        .from('contact_messages')
        .insert(payload)
        .select('*')
        .single();

      if (error) throw error;

      return res.status(201).json({ ok: true, stored: true, id: data.id });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: err.message });
  }
}

function escapeHtml(input) {
  return String(input)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
