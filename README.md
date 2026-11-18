# A.D.E.T.E. NGO Website Demo — v2

Static, mobile-first demo site for Association A.D.E.T.E. (Togo).

## Preview locally

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Notes
- Header/footer use a transparent-background logo derived from the supplied high-resolution A.D.E.T.E. logo.
- The public Facebook link is kept in the contact/footer only, not the utility bar.
- The source screenshot does not expose a reliably legible full phone number, so the demo shows the verified Togo country code `+228` and routes users to the contact section rather than inventing digits.
- WhatsApp uses the official WhatsApp icon and a generic prefilled message. Insert the verified A.D.E.T.E. number in the `wa.me` URL when available.
- Development-sector imagery is loaded from reputable public web sources and listed in `CREDITS.md`.
