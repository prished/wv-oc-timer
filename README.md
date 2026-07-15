
### How it works, in short
- The coordinator's phone generates a 4-digit code and shares the roster —
  Start and Finish phones type that code in during morning sync instead of
  pairing over Bluetooth (Bluetooth from a web app isn't available on
  iPhone at all, so this is the actual working equivalent).
- All three phones' clocks agree automatically via Firebase's built-in
  server-time sync — no manual handshake needed.
- Every start/finish tap is saved to the phone **first** (instant, no
  network wait), then pushed to the other phones in the background —
  typically under a second.
- If the connection drops mid-session, taps keep recording locally and
  quietly catch up once signal returns. Nothing is ever lost.

---


